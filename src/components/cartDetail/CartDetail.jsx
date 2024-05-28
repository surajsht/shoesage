import CartPricing from "./CartPricing";
import CartProduct from "./CartProduct";
import "./cartDetail.css";

const CartDetail = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="cart-header">
          <h2 className="cart-title"> Your Cart </h2>
        </div>

        <div className="cart-body">
          <div className="cart-body-container">
            <CartProduct />
          </div>
          <CartPricing />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
