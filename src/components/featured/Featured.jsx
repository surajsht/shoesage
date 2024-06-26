import { Link } from "react-router-dom";
import FeaturedList from "./FeaturedList";
import "./featured.css";

const Featured = () => {
  return (
    <section className="featured-section section-spacing">
      <div className="wrapper">
        <div className="featured-header">
          <h2 className="featured-title"> Featured Products </h2>
          <Link to="/shop" className="secondary-btn">
            Shop Now
          </Link>
        </div>

        <FeaturedList />
      </div>
    </section>
  );
};

export default Featured;
