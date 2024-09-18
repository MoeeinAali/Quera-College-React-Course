import {
    useState
} from "react";

type Todo = {
    id: string,
    description: string,
    done: boolean
};

function App() {
    const [todos, setTodos] = useState<Todo[]>([])

    const fetchData = async () => {
        const users = await (await fetch("http://localhost:3000/todos")).json()
        setTodos(users)
    }
    fetchData()
    return (
        <>
            <h1>Todos:</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.description}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
