import "./FooterSocialMediaItem.css";

export const FooterSocialMediaItem = (props) => {
  return (
    <a href={props.link}>
      <img src={props.src} alt="social media icon" className="social_media__icon" />
    </a>
  );
};
