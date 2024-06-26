import { Link } from "react-router-dom";
import { FeaturedCategoriesData } from "../Data";
import "./featuredCategories.css";

const FeaturedCategories = () => {
  return (
    <div className="featured-categories-container section-spacing">
      {FeaturedCategoriesData.map((item) => {
        let { id, title, desc, btnTxt, img, subTitle } = item;

        return (
          <div key={id} className="featured-categories-item">
            <img src={img} alt={title} className="featured-categories-img" />

            <div className="featured-categories-details">
              {subTitle && (
                <span className="featured-categories-sub-title">
                  {subTitle}
                </span>
              )}

              <h2 className="featured-categories-title"> {title} </h2>
              <p className="featured-categories-desc">{desc}</p>
              <Link to="/shop" className="secondary-btn outlined">
                {btnTxt}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedCategories;
