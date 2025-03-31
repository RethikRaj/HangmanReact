import { getButtonStyling } from "./getButtonStyling";

const Button = ({buttonType="button", text, onClickHandler,styleType}) => {
  return <>
    <button type={buttonType} onClick={onClickHandler} className={getButtonStyling(styleType)}>{text}</button>
  </>;
};

export default Button;
