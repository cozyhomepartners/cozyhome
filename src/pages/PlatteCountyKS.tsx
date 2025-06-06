
import React from 'react';
import CountyLandingPage from '../components/CountyLandingPage';

const PlatteCountyKS = () => {
  const cities = [
    "Platte City", "Parkville", "Riverside", "Weatherby Lake",
    "Northmoor", "Lake Waukomis", "Ferrelview", "Houston Lake"
  ];

  return (
    <CountyLandingPage
      countyName="Platte County"
      state="KS"
      mapImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&h=600"
      cities={cities}
    />
  );
};

export default PlatteCountyKS;
