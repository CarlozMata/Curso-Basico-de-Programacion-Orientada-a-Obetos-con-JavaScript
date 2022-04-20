const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS", "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);       
    }
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student (
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a los videojuegos",
        "Creación de personajes"
    ]
    )

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");