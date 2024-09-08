import Card from "./components/Card";
import CardContent from "./components/CardContent";
import CardFooter from "./components/CardFooter";
import CardImage from "./components/CardImage";

function App() {
    return (
        <>
            <Card>
                <CardImage imageURL={"https://quera.org/qbox/download/Fz1qiQ2Uoh/React%20image.png"}
                           width={300}
                           height={160}
                />

                <CardContent
                    description={"The library for web and native user interfaces. React lets you build user interfaces out of individual pieces called components."}
                    title="React"
                />

                <CardFooter buttonText={"Like"}/>
            </Card>
        </>
    );
}

export default App;
