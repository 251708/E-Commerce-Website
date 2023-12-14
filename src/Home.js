import React from "react";
import HeroSection from './Components/HeroSection'

const Home = () => {
  const data = {
    name: "Sakshi Store",
  };

  return <HeroSection myData={data} />;
};

export default Home;