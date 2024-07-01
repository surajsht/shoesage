import { useLocation } from "react-router-dom";
import CartDetail from "../components/cartDetail/CartDetail";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import { useCon } from "../context/Context";
import { useEffect } from "react";

const Cart = () => {
  let { getCurrentPath } = useCon();

  let location = useLocation();

  useEffect(() => {
    getCurrentPath(location);
  }, [location]);

  return (
    <div>
      <Navbar />
      <CartDetail />
      <Newsletter />
      <ServiceInfo />
      <Footer />
    </div>
  );
};

export default Cart;
