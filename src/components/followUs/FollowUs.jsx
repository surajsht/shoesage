import { FaInstagram } from "react-icons/fa";
import { FollowUsData } from "../../Data";
import "./followUs.css";

const FollowUs = () => {
  return (
    <div className="follow-us-container">
      {FollowUsData.map((item) => {
        let { id, data } = item;

        return (
          <div className="follow-us-item" key={id}>
            {data.map((dataImg) => {
              let { id, img, innerData } = dataImg;

              return (
                <div className="follow-us-inner-item" key={id}>
                  <a href="https://www.instagram.com">
                    <img src={img} alt="social-img" />
                  </a>

                  {innerData && (
                    <div className="inner-item-data">
                      {innerData.map((inner) => {
                        let { id, img } = inner;

                        return (
                          <a href="https://www.instagram.com">
                            <img src={img} alt="social-img" key={id} />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      <div className="follow-us-item">
        <a href="https://www.instagram.com">
          <FaInstagram />
          <h2 className="follow-us-title">#madeinnepal</h2>
          <p className="follow-us-desc">
            FOLLOW US ON INSTAGRAM, <span>@ShopEase_NEPAL</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
