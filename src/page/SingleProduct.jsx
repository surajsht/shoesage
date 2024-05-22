import SingleProductDetail from "../components/singleProduct/SingleProductDetail";
import Recommended from "../components/recommemded/Recommended";

const SingleProduct = () => {
  return (
    <div className="singleProduct-wrapper">
      <div className="wrapper">
        <SingleProductDetail />
        <Recommended />
      </div>
    </div>
  );
};

export default SingleProduct;
