import SingleProductDetail from "../components/singleProduct/SingleProductDetail";
import Recommended from "../components/recommemded/Recommended";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import ServiceInfo from "../components/serviceInfo/ServiceInfo";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import { useCon } from "../context/Context";
import { useEffect } from "react";

const SingleProduct = () => {
  let { getCurrentPath } = useCon();

  let location = useLocation();

  useEffect(() => {
    getCurrentPath(location);
  }, [location]);

  return (
    <>
      <Navbar />
      <Breadcrumb />
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
