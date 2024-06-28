import CartDetail from "../components/cartDetail/CartDetail";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";

const Cart = () => {
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
