import styled from "styled-components";

export const Container = styled.div`
  grid-area: pagination;
  z-index: 2;
  display: flex;
  gap: 5px;
  position: relative;
  left: 50px;
  width: fit-content;
`;

export const Button = styled.button`
  display: inline-block;
  height: 20px;
  padding: 0 5px;
  background: transparent;
  border: solid 1px black;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: black;
    color: white;
  }

  &:disabled {
    background: transparent;
    border: solid 1px lightgrey;
    color: grey;
    cursor: default;
  }
`;

export const Chevron = styled.span`
  color: black;
  &:hover {
    color: white;
  }
`;

export const CurrentPageButton = styled(Button)`
  background: black;
  color: white;
`;

export const VisibleButton = styled(Button)`
  padding: 0 5px;
  font-size: 0.8em;
`;

// @media screen and (max-width: 450px) {

//   .page--btn--container {
//     margin-bottom: 20px;
//   }

// }
