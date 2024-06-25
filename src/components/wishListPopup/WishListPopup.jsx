import { Link } from "react-router-dom";
import { useCon } from "../../context/Context";

const WishList = () => {
  let { openWishList, setOpenWishList, wishList } = useCon();

  return (
    <div
      className={`cart-wishlist-popup-container ${
        openWishList ? "active" : ""
      }`}
    >
      {wishList.length > 0 ? (
        <>
          <div className="cart-wishlist-popup-content custom-scrollbar">
            {wishList.map((item) => {
              let { id, img, title, price } = item;

              return (
                <div key={id} className="cart-wishlist-item">
                  <img src={img} alt="product-image" />

                  <div className="cart-wishlist-detail">
                    <h2 className="cart-wishlist-item-title">{title}</h2>

                    <span>Rs.{price}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/wishlist"
            className="secondary-btn"
            onClick={() => setOpenWishList(false)}
          >
            Goto wishlist page
          </Link>
        </>
      ) : (
        <span className="cart-wishlist-no-product"> No product added </span>
      )}
    </div>
  );
};

export default WishList;
