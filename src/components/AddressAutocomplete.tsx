
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
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  onAddressSelect,
  placeholder = "Enter property address",
  className = "",
  required = false
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [hasSelectedFromDropdown, setHasSelectedFromDropdown] = useState(false);

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
            setHasSelectedFromDropdown(true);
            
            // Parse address components
            const addressData = parseAddressComponents(place.address_components, place.formatted_address);
            onChange(addressData.fullAddress);
            
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
    
    // If user is typing and hasn't selected from dropdown, allow changes
    if (!hasSelectedFromDropdown || newValue === '') {
      onChange(newValue);
      if (newValue === '') {
        setHasSelectedFromDropdown(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent manual typing if an address has been selected from dropdown
    if (hasSelectedFromDropdown && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      required={required}
      className={className}
    />
  );
};

export default AddressAutocomplete;
