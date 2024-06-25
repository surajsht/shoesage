import Recommended from "../recommemded/Recommended";
import WishListProduct from "./WishListProduct";
import "./wishlistDetail.css";

const WishListDetail = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="wishlist-header">
          <h2 className="wishlist-title"> Your WishList </h2>
        </div>

        <div className="wishlist-body">
          <WishListProduct />
        </div>

        <Recommended />
      </div>
    </div>
  );
};

export default WishListDetail;
