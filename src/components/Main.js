import logo from "../assets/img/logo.png";
import styled from "styled-components";
import Footer from "./Footer";
import CardList from "./CardList";
import { useState } from "react";

export default function Main(props) {
  const mock = props.mock;
  const [cardList, setCardList] = useState([...mock]);
  const respondidosArr = cardList.filter((e) => e.color !== "#333333");
  return (
    <>
      <LogoContainer>
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
      </LogoContainer>
      <CardList cardList={cardList} setCardList={setCardList} />
      <Footer>
        <span data-identifier="flashcard-counter">
          {respondidosArr.length}/{cardList.length} Concluídos
        </span>
      </Footer>
    </>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
