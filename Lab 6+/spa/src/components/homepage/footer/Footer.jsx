import "./Footer.css";
import facebookIcon from "./images/facebook_icon.png";
import googleIcon from "./images/google_icon.png";
import linkedinIcon from "./images/linkedin_icon.png";
import twitterIcon from "./images/twitter_icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__upper_part">
        <div className="branding">
          <h3 className="branding__header">Saw shop</h3>
          <p className="branding__paragraph">By the best saws on our site!</p>
        </div>
        <div className="footer__logo">
          <img src="./images/logo.svg" alt="logo" className="footer__logo_img" />
        </div>
        <div className="social_media">
          <a href="">
            <img src={facebookIcon} alt="social media icon" className="social_media__icon" />
          </a>
          <a href="">
            <img src={twitterIcon} alt="social media icon" className="social_media__icon" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="social media icon" className="social_media__icon" />
          </a>
          <a href="">
            <img src={googleIcon} alt="social media icon" className="social_media__icon" />
          </a>
        </div>
      </div>
      <hr className="footer__diving_line" />
      <div className="footer__lower_part">
        <p className="lower_part__paragraph">2020 IoT Ⓒ Copyright all rights reserved</p>
      </div>
    </footer>
  );
};
