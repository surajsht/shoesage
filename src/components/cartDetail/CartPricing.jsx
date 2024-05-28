const CartPricing = () => {
  return (
    <div className="cart-body-right">
      <div className="cart-pricing-details">
        <h2> Order Summary </h2>

        <div className="cart-price-calculation">
          <div>
            <span> Subtotal </span>
            <span> Rs.300 </span>
          </div>

          <div>
            <span>Shipping</span>
            <span>Rs.100</span>
          </div>
        </div>

        <div className="cart-pricing-total">
          <span> Total </span>
          <span> Rs.1000 </span>
        </div>
      </div>

      <button className="secondary-btn cart-pricing-checkout">Checkout</button>
    </div>
  );
};

export default CartPricing;
