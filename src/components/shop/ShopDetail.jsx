import ShopProducts from "./ShopProducts";
import ShopSort from "./ShopSort";

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
