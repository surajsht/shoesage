import { useCon } from "../../context/Context";
import "./shopProducts.css";

const ShopProducts = () => {
  let { apiData, gridOption } = useCon();

  return (
    <div className={`shop-product-container ${gridOption}`}>
      {apiData.map((item) => {
        let { id, category, description, img, price, title } = item;

        return (
          <div key={id} className="shop-product-item">
            <img src={img} alt="product-item" />

            <div className="product-detail">
              <h2 className="shop-product-title"> {title} </h2>
              <span> {category} </span>
              <p> {description} </p>
              <span className="shop-product-price"> Rs.{price} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopProducts;
