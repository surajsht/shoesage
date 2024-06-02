import CategoryFilter from "../categoryFilter/CategoryFilter";
import ShopProducts from "../shopProducts/ShopProducts";
import ShopSort from "../shopSort/ShopSort";
import "./shop.css";

const ShopDetail = () => {
  return (
    <div className="shop-detail-container">
      <div className="wrapper">
        <div className="shop-content">
          <div className="shop-content-left">
            <CategoryFilter />
          </div>

          <div className="shop-content-right">
            <ShopSort />
            <ShopProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
