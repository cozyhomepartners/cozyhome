
import React from 'react';
import CountyLandingPage from '../components/CountyLandingPage';

const WyandotteCountyKS = () => {
  const cities = [
    "Kansas City", "Bonner Springs", "Edwardsville", "Lake Quivira",
    "Basehor", "Fairway", "Roeland Park", "Westwood"
  ];

  return (
    <CountyLandingPage
      countyName="Wyandotte County"
      state="KS"
      mapImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&h=600"
      cities={cities}
    />
  );
};

export default WyandotteCountyKS;
