const materias = {
    fisica: [90,7,2,"fisica:"],
    matematica: [80,8,3,"matematica:"],
    calculo: [99,9,2,"calculo:"],
    biologia: [100,9,4,"biologia:"],
    algebra: [90,6,2,"algebra:"],
    literatura: [60,6,4,"literatura:"],
    historia: [90,8,4,"historia:"],
    quimica: [70,5,3,"quimica:"]
}

const asistencia = ()=> {
    for (materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90) {
        console.log("%c    Asistencias Cumplidas","color: green");
    }else {
        console.log("%c    Asistencias Insuficientes","color: red");
    }

    if (promedio >= 7) {
        console.log("%c    Buen Promedio","color: green");
    }else {
        console.log("%c    Promedio Bajo ","color: red");
    }

    if (trabajos >= 3) {
        console.log("%c    Todos los Trabajos Entregados","color: green");
    }else {
        console.log("%c    Falta de Trabajos ","color: red");
    }
    }
}

asistencia();