
import React from 'react';
import CountyLandingPage from '../components/CountyLandingPage';

const ClayCountyMO = () => {
  const cities = [
    "Kansas City", "Liberty", "Gladstone", "Excelsior Springs",
    "Kearney", "Smithville", "Mosby", "Lawson"
  ];

  return (
    <CountyLandingPage
      countyName="Clay County"
      state="MO"
      mapImage="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600"
      cities={cities}
    />
  );
};

export default ClayCountyMO;
