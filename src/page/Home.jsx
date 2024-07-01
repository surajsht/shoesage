import { useEffect } from "react";
import Featured from "../components/featured/Featured";
import FollowUs from "../components/followUs/FollowUs";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import SpecialOffer from "../components/specialOffer/SpecialOffer";
import FeaturedCategories from "../featuredCategories/FeaturedCategories";
import { useLocation } from "react-router-dom";
import { useCon } from "../context/Context";

const Home = () => {
  let { getCurrentPath } = useCon();

  let location = useLocation();

  useEffect(() => {
    getCurrentPath(location);
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <SpecialOffer />
      <FeaturedCategories />
      <Featured />
      <Journal />
      <FollowUs />
      <Newsletter />
      <ServiceInfo />
      <Footer />
    </>
  );
};

export default Home;
