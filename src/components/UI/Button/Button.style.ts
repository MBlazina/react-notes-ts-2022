import styled from "styled-components";
import {colors} from '@mixins'
import { ButtonProps } from "./Button.types";

export const ButtonStyled = styled.button<ButtonProps>`
color: ${props => props.primary ? "white" : colors.greyDark};
background: ${props => props.primary ? colors.buttonPrimary : "white"};

&:hover {
  background: ${props => props.primary ? "green" : "white"};
}
`;