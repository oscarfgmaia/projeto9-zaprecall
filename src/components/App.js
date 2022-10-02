import Main from "./Main";
import styled from "styled-components";
import mock from "../assets/mock";
import GlobalStyle from "../assets/css/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <Main mock={mock} />
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 80px;
`;
