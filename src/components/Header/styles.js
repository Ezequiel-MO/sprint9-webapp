import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 1rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  & img {
    width: 8rem;
    margin: 0 1rem;
  }
  & button {
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const HeaderRight = styled.div``;
