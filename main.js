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
    );

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");

// Prototipos con la sintaxis de clases
class Student2 {
    constructor ({
        name,
        age, 
        email,
        facebook,
        twitter,
        cursosAprobados = [],
    })
    {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
    }

const miguelito = new Student2({
    name: "Miguel",
    email: "Miguel.com",
    age: 28,
});