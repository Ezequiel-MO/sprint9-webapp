import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "#1d1d1d" : "#f5f5f5")};
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
`;

export const SocialIcons = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 0.5rem 0rem;
  }
  & > button:hover {
    background-color: #c7baae;
  }
`;
export const AboutThePage = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > h6 {
    font-size: 0.8rem;
    letter-spacing: 0.5rem;
  }
  & > p {
    margin: 0;
    font-size: 1.3rem;
  }
`;
