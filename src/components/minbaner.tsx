interface MiniBannerProps {
  content: String;
}

const MiniBanner: React.FC<MiniBannerProps> = ({ content }) => {
  return (
    <div className="mini-banner">
      <h5 className="banner-text-container animated-text">
        <span
          role="img"
          aria-label="Colombian flag"
          style={{ marginRight: "10px" }}
        >
          🇨🇴
        </span>
        {content}
        <span
          role="img"
          aria-label="Colombian flag"
          style={{ marginRight: "10px" }}
        >
          🇨🇴
        </span>
      </h5>
    </div>
  );
};

export default MiniBanner;
