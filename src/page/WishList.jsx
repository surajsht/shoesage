import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import WishListDetail from "../components/wishlistDetail/WishListDetail";

const WishList = () => {
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
