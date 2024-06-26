import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container section-spacing">
      <img src="/hero.webp" alt="hero-image" />

      <div className="hero-content-container">
        <div className="wrapper">
          <div className="column-row">
            <div className="column column-9 column-md-12">
              <div className="hero-content">
                <h6 className="hero-sub-title">Discover Your Perfect Fit</h6>
                <h2 className="hero-title">
                  Explore Our Range of Stylish and Sustainable Fashion
                  Essentials
                </h2>
                <Link to={"/shop"} className="primary-btn">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
