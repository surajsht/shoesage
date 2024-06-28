import SingleProductDetail from "../components/singleProduct/SingleProductDetail";
import Recommended from "../components/recommemded/Recommended";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import Footer from "../components/footer/Footer";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="wrapper wrapper-small">
          <SingleProductDetail />
        </div>

        <div className="wrapper">
          <Recommended />
        </div>

        <Newsletter />
        <ServiceInfo />
        <Footer />
      </div>
    </>
  );
};

export default SingleProduct;
