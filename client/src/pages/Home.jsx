import React from "react";
import Hero from "../components/hero/hero";
import Services from "../components/services/services";
import Wheretobuy from "../components/wheretobuy/wheretobuy";
import Banner from "../components/AppBanner/appBanner";
import Footer from "../components/Footer/footer";
import Test from '../components/testinominal/test'
import Stats from "../components/stasts/stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Test/>
      <Stats/>
      <Footer />
    </div>
  );
};

export default Home;
