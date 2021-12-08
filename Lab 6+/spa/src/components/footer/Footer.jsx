import "./Footer.css";
import { Logo } from "../logo/Logo";
import { FooterSocialMediaItem } from "./FooterSocialMediaItem";
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
        <Logo parentName="footer" />
        <div className="social_media">
          <FooterSocialMediaItem src={facebookIcon} link="https://www.facebook.com/" />
          <FooterSocialMediaItem src={twitterIcon} link="https://twitter.com/" />
          <FooterSocialMediaItem src={linkedinIcon} link="https://www.linkedin.com/" />
          <FooterSocialMediaItem src={googleIcon} link="https://myaccount.google.com/" />
        </div>
      </div>
      <hr className="footer__diving_line" />
      <div className="footer__lower_part">
        <p className="lower_part__paragraph">2020 IoT Ⓒ Copyright all rights reserved</p>
      </div>
    </footer>
  );
};
