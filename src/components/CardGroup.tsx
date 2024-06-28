interface CardProps {
  imgSrc: string;
  imgAlt: string;
  content: string;
}

interface CardGroupProps {
  cards: CardProps[];
}

const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <div className="card-group">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <a href="#">
            <img src={card.imgSrc} className="card-img-top" alt={card.imgAlt} />
            <div className="card-body">
              <p className="card-text">{card.content}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
