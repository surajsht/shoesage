import Featured from "../components/featured/Featured";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import FeaturedCategories from "../featuredCategories/FeaturedCategories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <Featured />
    </>
  );
};

export default Home;
