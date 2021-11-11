import styled from "styled-components";

export const MainImage = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    border: 2px solid #c2b280;
    width: 30rem;
    object-fit: cover;
    cursor: pointer;
  }
  & > h5 {
    color: #fff;
    background: #c2b280;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  & > h5:hover {
    background: #ea5933;
  }
`;
