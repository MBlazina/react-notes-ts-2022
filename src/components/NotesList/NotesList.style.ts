import styled from "styled-components";
import { colors } from "@mixins";
export const NoteListStyled = styled.ul`
  min-height: 50vh;
  margin-bottom: 50px;
`;

export const NotesListHeader = styled.div`
  border-bottom: 1px solid ${colors.greyLight};

  h2 {
    color: ${colors.blue};
  }

  .search {
    position: relative;

    input {
      padding-left: 10px;
      padding-right: 25px;
      height: 35px;
      &:focus {
        outline: none;
      }
    }

    img {
      position: absolute;
      right: 5px;
      pointer-events: none;
      opacity: 0.3;
    }
  }
`;
