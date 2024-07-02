interface CardProductProps {
  title: string;
  img: string;
  price: string;
}

const CardProduct: React.FC<CardProductProps> = ({ title, img, price }) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{price}</p>
      </div>
    </div>
  );
};

export default CardProduct;
