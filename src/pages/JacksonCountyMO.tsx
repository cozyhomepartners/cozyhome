
import React from 'react';
import CountyLandingPage from '../components/CountyLandingPage';

const JacksonCountyMO = () => {
  const cities = [
    "Kansas City", "Independence", "Lee's Summit", "Blue Springs",
    "Raytown", "Grandview", "Grain Valley", "Sugar Creek"
  ];

  return (
    <CountyLandingPage
      countyName="Jackson County"
      state="MO"
      mapImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=600"
      cities={cities}
    />
  );
};

export default JacksonCountyMO;
