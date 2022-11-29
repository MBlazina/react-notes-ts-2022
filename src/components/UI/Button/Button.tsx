import { ButtonStyled } from "./Button.style"
import { ButtonProps } from "./Button.types"


const Button = ({children, primary,click, className}:ButtonProps) => {
  return (
    <ButtonStyled primary={primary} className={`${className} py-2 px-4 rounded-md transition-colors duration-500 hover:shadow-md` } onClick={click}>{children}</ButtonStyled>
  )
}

export default Button