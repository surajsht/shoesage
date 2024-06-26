import CartPricing from "./CartPricing";
import CartProduct from "./CartProduct";
import "./cartDetail.css";
import Recommended from "../recommemded/Recommended";

const CartDetail = () => {
  return (
    <div>
      <div className="wrapper wrapper-small">
        <div className="cart-header">
          <h2 className="cart-title"> Your Cart </h2>
        </div>

        <div className="cart-body">
          <div className="cart-body-left">
            <CartProduct />
          </div>
          <CartPricing />
        </div>
      </div>

      <div className="wrapper">
        <Recommended />
      </div>
    </div>
  );
};

export default CartDetail;
