type Programmer = {
    name: string,
    role: string,
    technologies: string[]
}
type Company = {
    name: string,
    programmer: Programmer
}
const Quera: Company = {
    name: "Quera",
    programmer: {
        name: "moeein",
        role: "developer",
        technologies: ["html", "css", "js"]
    }
}
export { Quera }
