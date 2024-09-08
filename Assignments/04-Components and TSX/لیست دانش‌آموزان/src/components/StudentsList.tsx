import { Student } from "../types/Student";


interface StudentsListPropsType {
  students: Student[];
}

export default function StudentsList({ students }: StudentsListPropsType) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {`${student.id}: ${student.name} - ${student.age} years old - GPA: ${student.gpa}`}
        </li>
      ))}
    </ul>
  );
}
