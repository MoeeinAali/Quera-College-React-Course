interface CardFooterPropsType {
  buttonText?: string;
}

export default function CardFooter({ buttonText }: CardFooterPropsType) {
  return (
    <div
      id="card-footer"
      style={{
        marginTop: "auto",
        textAlign: "right",
      }}
    >
      <button style={{ width: "64px", padding: "4px 8px" }}>
        {buttonText}
      </button>
    </div>
  );
}
