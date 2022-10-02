import styled from "styled-components";
import startCardButton from "../assets/img/seta_play.png";
import turnCardButton from "../assets/img/seta_virar.png";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

export default function Card({
  ask,
  answer,
  index,
  clicked,
  setCardList,
  cardList,
}) {
  const GREEN = "#2FBE34";
  const ORANGE = "#FF922E";
  const RED = "#FF3030";
  const askNumber = index + 1;

  function turnCard() {
    let newCardList = [...cardList];
    newCardList[index].clicado = true;
    setCardList(newCardList);
  }
  function showAnswer() {
    let newCardList = [...cardList];
    newCardList[index].virado = true;
    setCardList(newCardList);
  }
  function closeCard(color) {
    let newCardList = [...cardList];
    newCardList[index].clicado = false;
    newCardList[index].color = color;
    setCardList(newCardList);
    console.log(newCardList[index].color);
  }

  function changeIcon() {
    switch (cardList[index].color) {
      case "#333333":
        return startCardButton;
      case GREEN:
        return iconeCerto;
      case RED:
        return iconeErro;
      case ORANGE:
        return iconeQuase;
      default:
        return console.log("ALGO DEU MUITO ERRADO :)");
    }
  }

  if (!clicked) {
    return (
      <PerguntaFechada
        color={cardList[index].color}
        data-identifier="flashcard"
      >
        <p>Pergunta {askNumber}</p>
        <img
          data-identifier="flashcard-show-btn"
          src={changeIcon()}
          alt="Start Card Icon"
          onClick={cardList[index].color === "#333333" ? turnCard : null}
        ></img>
      </PerguntaFechada>
    );
  } else {
    if (!cardList[index].virado) {
      return (
        <PerguntaAberta>
          <p data-identifier="flashcard-question">{ask}</p>
          <img
            data-identifier="flashcard-turn-btn flashcard-status"
            src={turnCardButton}
            alt="Start Card Icon"
            onClick={showAnswer}
          ></img>
        </PerguntaAberta>
      );
    } else {
      return (
        <PerguntaAberta>
          <p data-identifier="flashcard-answer">{answer}</p>
          <ContainerButtons>
            <Button data-identifier="forgot-btn" color={RED} onClick={() => closeCard(RED)}>
              Não lembrei
            </Button>
            <Button data-identifier="almost-forgot-btn" color={ORANGE} onClick={() => closeCard(ORANGE)}>
              Quase não lembrei
            </Button>
            <Button data-identifier="zap-btn" color={GREEN} onClick={() => closeCard(GREEN)}>
              Zap!
            </Button>
          </ContainerButtons>
        </PerguntaAberta>
      );
    }
  }
}
const Button = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.color};
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  padding: 5px;
  &:hover {
    filter: brightness(80%);
  }
`;


const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    text-decoration: ${(props) => props.color !== "#333333" && "line-through"};
  }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  padding-bottom: 8px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
