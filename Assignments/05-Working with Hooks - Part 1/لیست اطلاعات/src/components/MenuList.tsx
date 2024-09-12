import {useContext} from "react";
import {ListContext} from "../contexts/ListContext";

export default function MenuList() {
    const data = useContext(ListContext)
    return (
        <>
            <ul>
                {data.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
        </>
    );
}
