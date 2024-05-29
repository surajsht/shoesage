import { useCon } from "../../context/Context";

const ShopProducts = () => {
  let { apiData } = useCon();

  return (
    <div className="shop-product-container">
      {apiData.map((item) => {
        let { id, category, description, img, price, title } = item;

        return (
          <div key={id}>
            <img src={img} alt="product-item" />

            <div className="product-detail">
              <h2 className="product-title"> {title} </h2>
              <span> {category} </span>
              <p> {description} </p>
              <span> {price} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopProducts;
