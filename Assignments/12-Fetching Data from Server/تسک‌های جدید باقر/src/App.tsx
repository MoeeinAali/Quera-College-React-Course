import React, {ChangeEvent, useEffect, useState} from "react";

type Todo = {
    id: string;
    description: string;
};

const newTodo = async (newDescription: Todo["description"]) => {
    const req = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({description: newDescription}),
    };
    const response = await fetch("http://localhost:3000/todos", req);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
};

const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch("http://localhost:3000/todos");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
};

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        fetchTodos().then((todos) => setTodos(todos));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (description.length === 0) {
            return;
        }
        try {
            await newTodo(description);
            setDescription("");
            const updatedTodos = await fetchTodos();
            setTodos(updatedTodos);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>Todos:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    New Todo:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.description}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
