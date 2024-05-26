import SingleProductDetail from "../components/singleProduct/SingleProductDetail";
import Recommended from "../components/recommemded/Recommended";
import Navbar from "../components/navbar/Navbar";
import Cart from "../components/cart/Cart";

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
