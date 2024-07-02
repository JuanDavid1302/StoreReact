interface CardProductProps {
  title: string;
  img: string;
}

const CardProduct: React.FC<CardProductProps> = ({ title, img }) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Blusa Otoño</p>
        <a href="#" className="btn btn-primary">
          Añadir al Carrito
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
