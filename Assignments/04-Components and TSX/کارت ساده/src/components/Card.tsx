interface CardPropsType {
    children: React.ReactNode;
}

export default function Card({children}: CardPropsType) {
    return (
        <div
            style={{
                height: "400px",
                width: "300px",
                padding: "8px",
                border: "1px solid black",
                borderRadius: "4px",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {children}
        </div>
    );
}
