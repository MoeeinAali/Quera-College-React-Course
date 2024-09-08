interface CardContentPropsType {
  title: string;
  description?: string;
}

export default function CardContent({
  title,
  description,
}: CardContentPropsType) {
  return (
    <div id="card-content">
      <h3 id="card-title">{title}</h3>
      <p id="card-description">{description}</p>
    </div>
  );
}
