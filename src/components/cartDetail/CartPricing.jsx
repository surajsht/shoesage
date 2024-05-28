import { useEffect, useState } from "react";
import { useCon } from "../../context/Context";

const CartPricing = () => {
  let [subTotal, setSubTotal] = useState(0);

  let { cart } = useCon();

  useEffect(() => {
    let findSubTotal = cart.reduce((acc, curr) => {
      let { price, productQuantity } = curr;

      return (acc += price * productQuantity);
    }, 0);

    setSubTotal(findSubTotal);
  }, [cart]);

  return (
    <div className="cart-body-right">
      <div className="cart-pricing-details">
        <h2> Order Summary </h2>

        <div className="cart-price-calculation">
          <div>
            <span> Subtotal </span>
            <span> Rs.{subTotal} </span>
          </div>

          <div>
            <span>Shipping</span>
            <span>Rs.100</span>
          </div>
        </div>

        <div className="cart-pricing-total">
          <span> Total </span>
          <span> Rs.{subTotal + 100} </span>
        </div>
      </div>

      <button className="secondary-btn cart-pricing-checkout">Checkout</button>
    </div>
  );
};

export default CartPricing;
