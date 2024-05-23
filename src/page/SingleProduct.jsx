import SingleProductDetail from "../components/singleProduct/SingleProductDetail";
import Recommended from "../components/recommemded/Recommended";
import Navbar from "../components/navbar/Navbar";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="wrapper">
          <SingleProductDetail />
          <Recommended />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
