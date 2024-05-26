import { Link } from "react-router-dom";
import "./cart.css";
import { useCon } from "../../context/Context";

const Cart = () => {
  let { openCart, setOpenCart, cart } = useCon();

  return (
    <div className={`cart-container ${openCart ? "active" : ""}`}>
      {cart.map((item) => {
        let { id, img, title, price } = item;

        return (
          <div key={id} className="cart-item">
            <img src={img} alt="product-image" />

            <div className="cart-detail">
              <h2 className="cart-item-title">{title}</h2>
              <span> Rs.{price} </span>
            </div>
          </div>
        );
      })}

      <Link className="secondary-btn" onClick={() => setOpenCart(false)}>
        Goto cart page
      </Link>
    </div>
  );
};

export default Cart;
