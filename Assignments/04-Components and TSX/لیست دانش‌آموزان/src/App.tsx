import StudentsList from "./components/StudentsList";
import {Student} from "./types/Student";

function App() {
    const students: Student[] = [
        {
            id: 111,
            name: "Reza",
            age: 13,
            gpa: 19.5
        },
        {
            id: 112,
            name: "Pouria",
            age: 14,
            gpa: 18.5
        },
        {
            id: 113,
            name: "Farshad",
            age: 13,
            gpa: 20
        },
        {
            id: 114,
            name: "Mohsen",
            age: 14,
            gpa: 17.5
        }
    ];

    return (
        <>
            <h1>Students List</h1>
            <StudentsList students={students}></StudentsList>
        </>
    );
}

export default App;
