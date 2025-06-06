
import React from 'react';
import CountyLandingPage from '../components/CountyLandingPage';

const JohnsonCountyKS = () => {
  const cities = [
    "Overland Park", "Olathe", "Shawnee", "Lenexa",
    "Leawood", "Prairie Village", "Gardner", "Merriam"
  ];

  return (
    <CountyLandingPage
      countyName="Johnson County"
      state="KS"
      mapImage="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&h=600"
      cities={cities}
    />
  );
};

export default JohnsonCountyKS;
