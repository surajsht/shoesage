import { Link } from "react-router-dom";
import { useCon } from "../../context/Context";

const WishListProduct = () => {
  let { wishList, setWishList, addToCart } = useCon();

  let removeWishListProduct = (id) => {
    let filterProduct = wishList.filter((item) => item.id !== id);
    setWishList(filterProduct);
  };

  return (
    <div className="wishlist-product-container">
      {wishList.map((item) => {
        let { id, title, img, price, category, description } = item;

        return (
          <div key={id} className="wishlist-product-item">
            <img src={img} alt={title} className="wishlist-product-img" />

            <div className="wishlist-product-detail">
              <h2 className="wishlist-product-title">
                <Link to={`/product/${id}`}>{title}</Link>
              </h2>

              <span className="wishlist-product-category">
                Category: {category}
              </span>

              <p className="wishlist-product-desc line-clamp line-clamp-3">
                {description}
              </p>

              <span className="product-price">Rs.{price}</span>
            </div>

            <div className="wishlist-btn-group btn-group">
              <button
                className="secondary-btn"
                onClick={() =>
                  addToCart({
                    id,
                    title,
                    img,
                    price,
                    category,
                    description,
                    productQuantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
              <button
                className="secondary-btn outlined"
                onClick={() => removeWishListProduct(id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishListProduct;
