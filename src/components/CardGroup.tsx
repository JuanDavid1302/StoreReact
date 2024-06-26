interface CardGroupProps {
  img1: string;
  alt1: string;
  content1: string;
  img2: string;
  alt2: string;
  content2: string;
  img3: string;
  alt3: string;
  content3: string;
}

const CardGroup: React.FC<CardGroupProps> = ({
  img1,
  alt1,
  content1,
  img2,
  alt2,
  content2,
  img3,
  alt3,
  content3,
}) => {
  return (
    <div className="card-group">
      <div className="card">
        <img src={img1} className="card-img-top" alt={alt1} />
        <div className="card-footer">
          <small className="text-body-secondary">{content1}</small>
        </div>
      </div>
      <div className="card">
        <img src={img2} className="card-img-top" alt={alt2} />
        <div className="card-footer">
          <small className="text-body-secondary">{content2}</small>
        </div>
      </div>
      <div className="card">
        <img src={img3} className="card-img-top" alt={alt3} />
        <div className="card-footer">
          <small className="text-body-secondary">{content3}</small>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
