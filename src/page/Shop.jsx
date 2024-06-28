import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import ShopDetail from "../components/shop/ShopDetail";

const Shop = () => {
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
