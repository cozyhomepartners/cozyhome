
import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Type declarations for Google Maps
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    namespace places {
      class Autocomplete {
        constructor(input: HTMLInputElement, options?: any);
        addListener(eventName: string, handler: () => void): void;
        getPlace(): { 
          formatted_address?: string; 
          geometry?: any;
          address_components?: Array<{
            long_name: string;
            short_name: string;
            types: string[];
          }>;
        } | undefined;
      }
    }
  }
}

interface AddressData {
  street: string;
  unit: string;
  city: string;
  state: string;
  zipcode: string;
  fullAddress: string;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onAddressSelect?: (addressData: AddressData) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  onAddressSelect,
  placeholder = "Enter property address",
  className = "",
  required = false,
  error
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [hasSelectedFromDropdown, setHasSelectedFromDropdown] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const initializeAutocomplete = async () => {
      if (!inputRef.current) return;

      try {
        // Get Google Maps API key from Supabase function
        const { data: configData, error: configError } = await supabase.functions.invoke('get-maps-config');
        
        if (configError || !configData?.apiKey) {
          console.log('Google Maps API key not configured, falling back to regular input');
          return;
        }

        // Load Google Maps API
        const { Loader } = await import('@googlemaps/js-api-loader');
        
        const loader = new Loader({
          apiKey: configData.apiKey,
          version: 'weekly',
          libraries: ['places']
        });

        await loader.load();

        // Initialize autocomplete
        autocompleteRef.current = new google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ['address'],
            componentRestrictions: { country: 'us' },
            fields: ['formatted_address', 'address_components', 'geometry']
          }
        );

        // Listen for place selection
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address && place?.address_components) {
            // Parse address components first
            const addressData = parseAddressComponents(place.address_components, place.formatted_address);
            
            // Set state immediately to prevent validation errors
            setHasSelectedFromDropdown(true);
            setShowError(false);
            
            // Call onChange with the full address
            onChange(addressData.fullAddress);
            
            // Call onAddressSelect with detailed data if provided
            if (onAddressSelect) {
              onAddressSelect(addressData);
            }
          }
        });
      } catch (error) {
        console.log('Google Maps API not loaded, falling back to regular input');
      }
    };

    initializeAutocomplete();
  }, [onChange, onAddressSelect]);

  const parseAddressComponents = (components: any[], fullAddress: string): AddressData => {
    let street = '';
    let unit = '';
    let city = '';
    let state = '';
    let zipcode = '';

    components.forEach((component) => {
      const types = component.types;
      
      if (types.includes('street_number')) {
        street = component.long_name + ' ';
      } else if (types.includes('route')) {
        street += component.long_name;
      } else if (types.includes('subpremise')) {
        unit = component.long_name;
      } else if (types.includes('locality')) {
        city = component.long_name;
      } else if (types.includes('administrative_area_level_1')) {
        state = component.short_name;
      } else if (types.includes('postal_code')) {
        zipcode = component.long_name;
      }
    });

    // Remove country from full address
    const addressWithoutCountry = fullAddress.replace(/, USA$/, '');

    return {
      street: street.trim(),
      unit,
      city,
      state,
      zipcode,
      fullAddress: addressWithoutCountry
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // If user clears the input, reset the selection state
    if (newValue === '') {
      setHasSelectedFromDropdown(false);
      setShowError(false);
      onChange(newValue);
      return;
    }

    // If user manually types after selecting from dropdown, reset validation state
    if (hasSelectedFromDropdown && newValue !== value) {
      setHasSelectedFromDropdown(false);
      setShowError(false);
    }

    onChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow backspace and delete to clear the field
    if (hasSelectedFromDropdown && (e.key === 'Backspace' || e.key === 'Delete')) {
      if (value === '') {
        setHasSelectedFromDropdown(false);
        setShowError(false);
      }
    }
  };

  const handleBlur = () => {
    // Only show error if Google Maps is loaded, user typed manually, and didn't select from dropdown
    if (value && !hasSelectedFromDropdown && autocompleteRef.current) {
      // Add a small delay to allow for place selection to complete
      setTimeout(() => {
        if (!hasSelectedFromDropdown) {
          setShowError(true);
        }
      }, 100);
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        className={`${className} ${(error || showError) ? 'border-red-500 focus:ring-red-500' : ''}`}
      />
      {(error || showError) && (
        <p className="mt-1 text-sm text-red-600">
          {error || "Please select an address from the dropdown suggestions"}
        </p>
      )}
    </div>
  );
};

export default AddressAutocomplete;
