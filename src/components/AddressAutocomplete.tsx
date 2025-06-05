
import React, { useEffect, useRef } from 'react';
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
        getPlace(): { formatted_address?: string; geometry?: any } | undefined;
      }
    }
  }
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  value,
  onChange,
  placeholder = "Enter property address",
  className = "",
  required = false
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

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
            fields: ['formatted_address', 'geometry']
          }
        );

        // Listen for place selection
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace();
          if (place?.formatted_address) {
            onChange(place.formatted_address);
          }
        });
      } catch (error) {
        console.log('Google Maps API not loaded, falling back to regular input');
      }
    };

    initializeAutocomplete();
  }, [onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      required={required}
      className={className}
    />
  );
};

export default AddressAutocomplete;
