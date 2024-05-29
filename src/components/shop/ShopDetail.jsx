import ShopProducts from "../shopProducts/ShopProducts";
import ShopSort from "../shopSort/ShopSort";
import "./shop.css";

const ShopDetail = () => {
  return (
    <div className="shop-detail-container">
      <div className="wrapper">
        <div className="shop-content">
          <ShopSort />
          <ShopProducts />
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
