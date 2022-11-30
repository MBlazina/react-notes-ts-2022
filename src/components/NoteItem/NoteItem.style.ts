import styled from "styled-components";

export const NoteItemStyled = styled.li`
  padding-bottom: 15px;
  &:hover {
    .notes-icons {
      right: 0;
    }
  }

  .notes-icons {
    transition: right 0.3s ease-in-out;
    position: absolute;
    top: 0;
    right: -100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
`;
