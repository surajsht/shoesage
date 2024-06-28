import { Link } from "react-router-dom";
import { useCon } from "../../context/Context";
import SingleLayoutLoader from "../loader/singleLayoutLoader/SingleLayoutLoader";
import "./shopProducts.css";

const ShopProducts = () => {
  let { apiData, gridOption, loading } = useCon();

  return (
    <>
      {loading ? (
        <SingleLayoutLoader />
      ) : (
        <div className={`shop-product-container ${gridOption}`}>
          {apiData.map((item) => {
            let { id, category, description, img, price, title } = item;

            return (
              <div key={id} className="shop-product-item">
                <img src={img} alt="product-item" />

                <div className="product-detail">
                  <h2 className="shop-product-title">
                    <Link to={`/product/${id}`}> {title} </Link>
                  </h2>
                  <span className="shop-product-category">
                    Category: {category}
                  </span>
                  <p className="line-clamp line-clamp-5"> {description} </p>
                  <span className="product-price"> Rs.{price} </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShopProducts;
