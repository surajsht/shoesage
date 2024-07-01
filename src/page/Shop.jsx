import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import ShopDetail from "../components/shop/ShopDetail";
import { useLocation } from "react-router-dom";
import { useCon } from "../context/Context";
import { useEffect } from "react";

const Shop = () => {
  let { getCurrentPath } = useCon();

  let location = useLocation();

  useEffect(() => {
    getCurrentPath(location);
  }, [location]);

  return (
    <>
      <Navbar />
      <ShopDetail />
      <Newsletter />
      <ServiceInfo />
      <Footer />
    </>
  );
};

export default Shop;
