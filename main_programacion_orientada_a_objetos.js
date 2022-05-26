class Courses {
    constructor({ name, teacher, ranking, level }) {
      (this.name = name), (this.teacher = teacher);
      this.ranking = ranking;
      this.level = level;
    }
  }
  
  const basicoJS = new Courses({
    name: "Curso Practico de JavaScript",
    teacher: "Juan David Castro",
    ranking: 4.7,
    level: "medium",
  });
  
  const practicoJS = new Courses({
    name: "Curso Basico de JavaScript",
    teacher: "Diego De Granda",
    ranking: 4.6,
    level: "medium",
  });

class learningPaths {
    constructor({ name, courses
    }) {
        this.name = name;
        this.courses = courses;
    }
}

class Student {
    constructor({ 
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],       
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    correo: "juanito@hotmail.com",
    twitter: "fjuandc",
    learningPaths: [
        "Escuela de desarrollo web",
        "Escuela de Data",
    ],
});
const miguelito = new Student({
    name: "Miguelito",
    username: "Miguelitofeliz",
    correo: "mike@hotmail.com",
    twitter: "migay",
    facebook: "mikegay",
});
