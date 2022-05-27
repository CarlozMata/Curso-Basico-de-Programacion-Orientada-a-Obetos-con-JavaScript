function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlSecreta);   
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos desde la url" + urlSecreta);   
}
 class PlatziClass {
    constructor({ 
        name, 
        videoID, 
    }) {
        this.name - name;
        this.videoID - videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}
class course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
     }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso malito de programacion basica") {
        console.error("Web... no");
    } else {
        this._name = nuevoNombrecito;
    }
}
}

const cursoProBasica = new course({ 
    name: "curso gratis de programacion basica",
    isFree: true,
});

cursoProBasica.name;

const cursoDefinitivoHTML = new course({ 
    name: "curso definitivo de html y css",
    lang: "english"
});

const cursoPracticoHTML = new course({ 
    name: "curso practico de html y css",
});
class learningPaths {
    constructor({ 
        name, 
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;        
    }
}

const escuelaWeb = new learningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        "Programacion basica",
        "Curso definitivo de html y css",
        "cursi practico de html"
    ]
});
const escuelaData = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        "Programacion basica",
        "Curso de Data Science",
        "curso de dataViz",
    ],
});
const escuelaVgs = new learningPaths({
    name: "Escuela de video juegos",
    courses: [
        "Curso de unity",
        "curso de unreal"
    ],
});


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
})  {

    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class FreeStudent extends Student {
    constructor(props) {
    super(props);
    }

    approvedCourses(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    } 
}

class BasicStudent extends Student {
    constructor(props) {
    super(props);
    }

    approvedCourses(newCourse) {
        if (newCourse.lang  !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles.");
        }
    } 
}
class ExpertStudent extends Student {
    constructor(props) {
    super(props);
    }

    approvedCourses(newCourse) {
            this.approvedCourses.push(newCourse);
    } 
}


const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    correo: "juanito@hotmail.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});
const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "Miguelitofeliz",
    correo: "mike@hotmail.com",
    twitter: "migay",
    facebook: "mikegay",
    learningPaths: [
        escuelaData,
        escuelaVgs, 
        escuelaWeb,
    ],
});
