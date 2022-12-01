import styled from "styled-components";
import {colors} from '@mixins'
import { ButtonProps } from "./Button.types";

export const ButtonStyled = styled.button<ButtonProps>`

/* PRIMARY */
color: ${props => props.primary && "white"};
background: ${props => props.primary && colors.buttonPrimary};
&:hover {
  color: ${props => props.primary && colors.greyDark};
  background: ${props => props.primary && colors.greenLight};
}
/* CLOSE */
background: ${props => props.close && colors.buttonClose };
&:hover {
  background: ${props => props.close && colors.red};
}
`;