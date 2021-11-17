import logoImage from "./images/logo.svg";

export const Logo = (props) => {
  return (
    <div className={props.parentName + "__logo"}>
      <img src={logoImage} alt="logo" className={props.parentName + "__logo__img"} />
    </div>
  );
};
