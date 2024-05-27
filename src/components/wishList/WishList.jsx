import { Link } from "react-router-dom";
import "./wishlist.css";
import { useCon } from "../../context/Context";

const WishList = () => {
  let { openWishList, setOpenWishList, wishList } = useCon();

  return (
    <div className={`wishlist-container ${openWishList ? "active" : ""}`}>
      {wishList.map((item) => {
        let { id, img, title, price, productQuantity } = item;

        return (
          <div key={id} className="wishlist-item">
            <img src={img} alt="product-image" />

            <div className="wishlist-detail">
              <h2 className="wishlist-item-title">{title}</h2>

              <span>
                Rs.{price} * {productQuantity}
              </span>
            </div>
          </div>
        );
      })}

      <Link
        to="/wishlist"
        className="secondary-btn"
        onClick={() => setOpenWishList(false)}
      >
        Goto wishlist page
      </Link>
    </div>
  );
};

export default WishList;
