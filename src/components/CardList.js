import Card from "./Card";

export default function CardList({ cardList, setCardList }) {
  return (
    <>
      {cardList.map((card, index) => (
        <Card
          key={index}
          index={index}
          ask={card.pergunta}
          answer={card.resposta}
          clicked={card.clicado}
          setCardList={setCardList}
          cardList={cardList}
          props={card}
        />
      ))}
    </>
  );
}