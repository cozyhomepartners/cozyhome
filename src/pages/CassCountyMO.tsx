
import React from 'react';
import CountyLandingPage from '../components/CountyLandingPage';

const CassCountyMO = () => {
  const cities = [
    "Belton", "Raymore", "Harrisonville", "Peculiar",
    "Pleasant Hill", "Lee's Summit", "Grandview", "Cleveland"
  ];

  return (
    <CountyLandingPage
      countyName="Cass County"
      state="MO"
      mapImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=600"
      cities={cities}
    />
  );
};

export default CassCountyMO;
