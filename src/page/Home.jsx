import Featured from "../components/featured/Featured";
import FollowUs from "../components/followUs/FollowUs";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import SpecialOffer from "../components/specialOffer/SpecialOffer";
import FeaturedCategories from "../featuredCategories/FeaturedCategories";

const Home = () => {
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
    </>
  );
};

export default Home;
