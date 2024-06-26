interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt = "", className = "" }) => {
  return (
    <img
      src={src}
      className={`img-fluid ${className}`}
      alt={alt}
      style={{ width: "100%", height: "auto" }} // Estilos inline para asegurar que la imagen sea responsiva
    />
  );
};

export default Image;
