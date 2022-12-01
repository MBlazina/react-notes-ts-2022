import { ButtonStyled } from "./Button.style";
import { ButtonProps } from "./Button.types";

const Button = ({ children, primary, close, onClick, className }: ButtonProps) => {
  return (
    <ButtonStyled primary={primary} close={close} className={`${className} py-2 px-4 rounded-md transition-colors duration-500 hover:shadow-md`} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
