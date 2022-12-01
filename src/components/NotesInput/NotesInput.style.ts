import { colors } from "@mixins";
import styled from "styled-components";

export const NotesInputStyled = styled.form`
  width: 80vw;
  background: white;

  .input-header {
    border-bottom: 1px solid ${colors.greyLight};
  }

  input {
    font-size: 2rem;
    border: none;

    &:focus {
      border: none;
      outline: none;
    }
  }

  textarea {
    height: 50vh;
    resize: none;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
