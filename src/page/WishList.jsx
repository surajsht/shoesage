import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import WishListDetail from "../components/wishlistDetail/WishListDetail";
import { useLocation } from "react-router-dom";
import { useCon } from "../context/Context";
import { useEffect } from "react";

const WishList = () => {
  let { getCurrentPath } = useCon();

  let location = useLocation();

  useEffect(() => {
    getCurrentPath(location);
  }, [location]);

  return (
    <>
      <Navbar />
      <WishListDetail />
      <Newsletter />
      <ServiceInfo />
      <Footer />
    </>
  );
};

export default WishList;
