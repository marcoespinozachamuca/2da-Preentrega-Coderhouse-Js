// Simulador Interactivo: Trivia de Gustavo Cerati

// Inicialización de LocalStorage
function inicializarLocalStorage() {
    if (!localStorage.getItem("triviaCompletada")) localStorage.setItem("triviaCompletada", "false");
    if (!localStorage.getItem("puntuacion")) localStorage.setItem("puntuacion", "0");
}

// Reiniciar progreso
function reiniciarProgreso() {
    localStorage.setItem("triviaCompletada", "false");
    localStorage.setItem("puntuacion", "0");
    alert("El progreso de la trivia ha sido reiniciado.");
}

// Preguntas de la trivia
const preguntas = [
    {
        pregunta: "¿En qué año nació Gustavo Cerati?",
        opciones: ["1959", "1963", "1975", "2000"],
        respuestaCorrecta: "1959"
    },
    {
        pregunta: "¿Cuál es el nombre de la banda que lideró Gustavo Cerati?",
        opciones: ["Soda Stereo", "Los Redondos", "Los Fabulosos Cadillacs", "The doors"],
        respuestaCorrecta: "Soda Stereo"
    },
    {
        pregunta: "¿Cuál fue el último álbum de estudio de Gustavo Cerati?",
        opciones: ["Bocanada", "Fuerza Natural", "Siempre es Hoy"],
        respuestaCorrecta: "Fuerza Natural"
    },
    {
        pregunta: "¿Cómo se llama la canción que incluye la frase 'Mereces lo que sueñas'?",
        opciones: ["Puente", "Crimen", "Adiós"],
        respuestaCorrecta: "Puente"
    },
    {
        pregunta: "¿En qué año se realizó el último concierto de Soda Stereo?",
        opciones: ["1997", "2007", "2010", "1998"],
        respuestaCorrecta: "1997"
    },
    {
        pregunta: "¿Cuál fue el álbum debut de Gustavo Cerati como solista?",
        opciones: ["Amor Amarillo", "Bocanada", "Siempre es Hoy"],
        respuestaCorrecta: "Amor Amarillo"
    },
    {
        pregunta: "¿Cómo se llama la gira de reencuentro de Soda Stereo en 2007?",
        opciones: ["Gracias Totales", "Me Verás Volver", "Signos"],
        respuestaCorrecta: "Me Verás Volver"
    },
    {
        pregunta: "¿Qué instrumento tocaba principalmente Gustavo Cerati?",
        opciones: ["Batería", "Guitarra", "Teclado"],
        respuestaCorrecta: "Guitarra"
    },
    {
        pregunta: "¿Qué canción de Cerati tiene la frase 'Ahí vamos'?",
        opciones: ["La Excepción", "Adiós", "Crimen"],
        respuestaCorrecta: "La Excepción"
    },
    {
        pregunta: "¿Cuál es el título de la canción que ganó un Grammy Latino como Mejor Canción de Rock en 2007?",
        opciones: ["Crimen", "Puente"],
        respuestaCorrecta: "Crimen"
    },
    {
        pregunta: "¿Cómo se llama el álbum que incluye la canción 'Cactus'?",
        opciones: ["Bocanada", "Fuerza Natural", "Ahí Vamos"],
        respuestaCorrecta: "Fuerza Natural"
    },
    {
        pregunta: "¿Qué disco de Soda Stereo incluye la canción 'Persiana Americana'?",
        opciones: ["Nada Personal", "Signos", "Canción Animal"],
        respuestaCorrecta: "Signos"
    },
    {
        pregunta: "¿Qué frase icónica de Cerati dijo en el último concierto de Soda Stereo?",
        opciones: ["Gracias Totales", "Mereces lo que sueñas"],
        respuestaCorrecta: "Gracias Totales"
    }
];

// Función principal de trivia
function iniciarTrivia() {
    const usuario = prompt("Por favor, introduce tu nombre:");
    if (!usuario || usuario.trim() === "") {
        alert("Debes ingresar un nombre para continuar.");
        return;
    }

    alert(`Bienvenido/a a la trivia de Gustavo Cerati, ${usuario}.`);
    let puntuacion = 0;

    preguntas.forEach((p, i) => {
        let opciones = p.opciones.map((opcion, idx) => `${idx + 1}. ${opcion}`).join("\n");
        let respuesta;
        do {
            respuesta = prompt(`${i + 1}. ${p.pregunta}\n${opciones}\n(Ingrese el número de su respuesta):`);
            if (respuesta === null) {
                alert("Trivia cancelada.");
                return;
            }
        } while (isNaN(respuesta) || respuesta < 1 || respuesta > p.opciones.length);

        if (p.opciones[parseInt(respuesta) - 1] === p.respuestaCorrecta) {
            alert("¡Correcto!");
            puntuacion++;
        } else {
            alert(`Incorrecto. La respuesta correcta es: ${p.respuestaCorrecta}`);
        }
    });

    localStorage.setItem("puntuacion", puntuacion);
    localStorage.setItem("triviaCompletada", "true");
    alert(`Trivia finalizada, ${usuario}. Puntuación: ${puntuacion}/${preguntas.length}`);
}

// Generar resumen
function generarResumen() {
    return preguntas.map((p, i) => `${i + 1}. ${p.pregunta} - Respuesta: ${p.respuestaCorrecta}`).join("\n");
}

// Funciones para manejar búsqueda y filtro
function buscarYMostrarPreguntas() {
    const keyword = prompt("Ingresa una palabra clave para buscar preguntas:");
    if (!keyword) {
        alert("Búsqueda cancelada.");
        return;
    }

    const resultado = preguntas.filter(p => p.pregunta.toLowerCase().includes(keyword.toLowerCase()));
    alert(resultado.length ? resultado.map(p => p.pregunta).join("\n") : "No se encontraron preguntas con esa palabra clave.");
}

function filtrarYMostrarPreguntas() {
    const num = parseInt(prompt("Ingresa el número de opciones para filtrar preguntas:"));
    if (isNaN(num)) {
        alert("Entrada inválida. Debe ingresar un número.");
        return;
    }

    const resultado = preguntas.filter(p => p.opciones.length === num);
    alert(resultado.length ? resultado.map(p => p.pregunta).join("\n") : `No hay preguntas con ${num} opciones.`);
}

// Inicialización
inicializarLocalStorage();
