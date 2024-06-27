import { Link } from "react-router-dom";
import { useCon } from "../../context/Context";

const Cart = () => {
  let { openCart, setOpenCart, cart } = useCon();

  return (
    <div
      className={`cart-wishlist-popup-container ${openCart ? "active" : ""}`}
    >
      {cart.length > 0 ? (
        <>
          <div className="cart-wishlist-popup-content custom-scrollbar">
            {cart.map((item) => {
              let { id, img, title, price, productQuantity } = item;

              return (
                <div key={id} className="cart-wishlist-item">
                  <img src={img} alt="product-image" />

                  <div className="cart-wishlist-detail">
                    <h2 className="cart-wishlist-item-title">{title}</h2>

                    <span>
                      Rs.{price} * {productQuantity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            to="/cart"
            className="secondary-btn"
            onClick={() => setOpenCart(false)}
          >
            Goto cart page
          </Link>
        </>
      ) : (
        <span className="cart-wishlist-no-product text-center">
          No product added
        </span>
      )}
    </div>
  );
};

export default Cart;
