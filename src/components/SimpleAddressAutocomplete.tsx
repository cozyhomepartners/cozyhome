
import React, { useState, useRef, useEffect } from 'react';

interface AddressData {
  street: string;
  unit: string;
  city: string;
  state: string;
  zipcode: string;
  fullAddress: string;
}

interface SimpleAddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onAddressSelect?: (addressData: AddressData) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
}

// Sample addresses for demonstration - in a real app, these would come from an API
const sampleAddresses = [
  "123 Main St, Kansas City, MO 64111",
  "456 Oak Ave, Overland Park, KS 66212",
  "789 Elm Dr, Independence, MO 64050",
  "321 Pine St, Lee's Summit, MO 64063",
  "654 Maple Rd, Shawnee, KS 66216",
  "987 Cedar Ln, Blue Springs, MO 64014",
  "147 Walnut St, Lenexa, KS 66215",
  "258 Birch Ave, Leawood, KS 66206",
  "369 Spruce Dr, Prairie Village, KS 66208",
  "741 Hickory Rd, Raytown, MO 64133"
];

const SimpleAddressAutocomplete: React.FC<SimpleAddressAutocompleteProps> = ({
  value,
  onChange,
  onAddressSelect,
  placeholder = "Enter property address",
  className = "",
  required = false,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredAddresses, setFilteredAddresses] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.length > 2) {
      const filtered = sampleAddresses.filter(address =>
        address.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredAddresses(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredAddresses([]);
      setIsOpen(false);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const parseAddress = (fullAddress: string): AddressData => {
    // Simple address parsing - in a real implementation, you'd want more robust parsing
    const parts = fullAddress.split(', ');
    const street = parts[0] || '';
    const city = parts[1] || '';
    const stateZip = parts[2] || '';
    const [state, zipcode] = stateZip.split(' ');

    return {
      street,
      unit: '',
      city,
      state: state || '',
      zipcode: zipcode || '',
      fullAddress
    };
  };

  const handleAddressSelect = (address: string) => {
    onChange(address);
    setIsOpen(false);
    
    if (onAddressSelect) {
      const addressData = parseAddress(address);
      onAddressSelect(addressData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleInputFocus = () => {
    if (value.length > 2 && filteredAddresses.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        required={required}
        className={`${className} ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
      />
      
      {isOpen && filteredAddresses.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredAddresses.map((address, index) => (
            <div
              key={index}
              onClick={() => handleAddressSelect(address)}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <div className="text-gray-900 font-medium">{address}</div>
            </div>
          ))}
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default SimpleAddressAutocomplete;
