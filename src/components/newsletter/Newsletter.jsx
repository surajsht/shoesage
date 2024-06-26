import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="wrapper">
        <div className="newsletter-details">
          <div className="newsletter-header">
            <h2 className="newsletter-title">Subscribe Newsletter</h2>

            <p className="newsletter-desc">
              Sign up to our Newsletter and get the discount code.
            </p>
          </div>

          <form className="newsletter-form">
            <input
              type="text"
              placeholder="Your email address..."
              className="newsletter-form-input"
            />
            <button type="submit" className="newsletter-form-submit-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
