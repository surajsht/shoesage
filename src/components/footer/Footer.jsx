import { Link } from "react-router-dom";
import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="wrapper">
          <div className="footer-top-details">
            <div className="site-footer-item">
              <h2 className="site-footer-logo">ShopEase</h2>

              <p className="site-footer-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="site-footer-item">
              <h2 className="site-footer-title">About ShopEase</h2>

              <div className="site-footer-details">
                <ul className="footer-link-container">
                  <li className="footer-link">
                    <Link to="#"> About Us </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Core Values </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Careers </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Press Releases </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Blog </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Sitemap </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="site-footer-item">
              <h2 className="site-footer-title">About Company</h2>

              <div className="site-footer-details">
                <ul className="footer-link-container">
                  <li className="footer-link">
                    <Link to="#"> Shopping App </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Be An Affiliate </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Advertise Your Product </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Media Enquires </Link>
                  </li>

                  <li className="footer-link">
                    <Link to="#"> Other Services </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="site-footer-item">
              <h2 className="site-footer-title">Store Details</h2>

              <div className="site-footer-details">
                <div className="footer-contact-info">
                  <div className="contact-info-icon">
                    <FaHeadphonesAlt />
                  </div>
                  <div className="contact-info-details">
                    <span className="info-details-title"> Need Any Help? </span>
                    <span className="info-details-number">
                      (+800) 123 456 789
                    </span>
                  </div>
                </div>

                <div className="footer-address">
                  <span> Address: Do Cha Marga </span>
                </div>

                <div className="footer-address">
                  <span> Kathmadu, Nepal </span>
                </div>

                <div className="footer-address">
                  <span> Email: shopease@domain.com </span>
                </div>
              </div>
            </div>

            <div className="site-footer-item">
              <h2 className="site-footer-title">Follow Us</h2>

              <div className="site-footer-details">
                <div className="footer-social-icons">
                  <Link to="#">
                    <FaFacebookF />
                  </Link>

                  <Link to="#">
                    <FaInstagram />
                  </Link>

                  <Link to="#">
                    <FaXTwitter />
                  </Link>

                  <Link to="#">
                    <FaTiktok />
                  </Link>

                  <Link to="#">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-details">
        <div className="wrapper">
          <div className="payments-method">
            <img src="/payment/payment-1.webp" alt="payment-method" />
            <img src="/payment/payment-2.webp" alt="payment-method" />
            <img src="/payment/payment-3.webp" alt="payment-method" />
            <img src="/payment/payment-4.webp" alt="payment-method" />
            <img src="/payment/payment-5.webp" alt="payment-method" />
            <img src="/payment/payment-6.webp" alt="payment-method" />
            <img src="/payment/payment-7.webp" alt="payment-method" />
            <img src="/payment/payment-8.webp" alt="payment-method" />
          </div>

          <span>Copyright © ShopEase all rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
