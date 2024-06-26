import { Link } from "react-router-dom";
import "./specialOffer.css";

const SpecialOffer = () => {
  return (
    <div className="special-offer-container">
      <div className="wrapper">
        <div className="special-offer-image">
          <Link to="/shop">
            <img src="/special-offer.jpg" alt="special-offer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
