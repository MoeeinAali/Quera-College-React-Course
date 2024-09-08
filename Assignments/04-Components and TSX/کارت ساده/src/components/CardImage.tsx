interface CardImagePropsType {
  imageURL?: string;
  width: number;
  height: number;
}

export default function CardImage({
  imageURL,
  width,
  height,
}: CardImagePropsType) {
  return <img id="card-image" src={imageURL} width={width} height={height} />;
}
