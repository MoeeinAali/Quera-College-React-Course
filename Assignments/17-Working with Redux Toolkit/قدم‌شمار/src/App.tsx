import {decrement, increment} from "./store/counter.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";

function App() {
    const count = useSelector((state: RootState) =>
        state.counter.value
    )
    const dispatch = useDispatch();
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>
                {count}
            </h1>
            <div style={{display: "flex", gap: "12px"}}>
                <button
                    onClick={() => {
                        dispatch(decrement())
                    }}
                >
                    کم کن
                </button>
                <button
                    onClick={() => {
                        dispatch(increment())
                    }}
                >
                    اضافه کن
                </button>
            </div>
        </div>
    );
}

export default App;
