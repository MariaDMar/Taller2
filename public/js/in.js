//inicializacion del arreglo de preguntas
let preguntas = [{
    pregunta: "¿Cuál es la fecha límite para efectuar la facturación electrónica en PYMES?",
    respuestas: [
        "a. 1 de Enero del 2020", "b. 27 de Marzo del 2019", "c. 14 de Febrero del 2020", "d. 14 de Marzo del 2020"
    ]
}, {
    pregunta: "¿Cuál es el termino por la cual fue remplazada la “contabilidad”?",
    respuestas: [
        "a. Información Financiera", "b. NIFF", "c. Facturación electrónica", "d. Contabilidad"
    ]
}, {
    pregunta: "¿Qué es el monotributo?",
    respuestas: [
        "a. Un tributo único", "b. Un monocultivo", "c. Es un régimen tributario integrado y simplificado", "d. Un monocultivo"
    ]
}, {
    pregunta: "¿Qué son los medios magneticos distritales?",
    respuestas: [
        "a. b y c son correctas", "b. son reportes con operaciones por terceros", "c. son reportes con operaciones propias", "d. son reportes con información"
    ]
}];

//variable para ver la pregunta actual
let preguntaCurrent = 0;

//variable donde se guardaran los resultados
let respuestas = [];

//variable para saber cuando el juego termina
let end = false;

/**
 * En este metodo se comprueba si la respuesta correcta
 * es la misma que la respuesta seleccionada.
 * 
 * Para lograrlo respuesta correcta es una funcion de 
 * retorno: respuestasCorrectas
 * 
 * En un momento posterior se pasa de pregunta. Pregunta
 * actual incrementa, se elimina la anterior y se crea otra.
 * 
 * 
 * 
 * @param {number} respuestaCorrect 
 * @param {number} respuestaSelected 
 */
function revisarRespuesta(respuestaCorrect, respuestaSelected) {

    if (preguntaCurrent < preguntas.length - 1) {
        preguntaCurrent++;
        document.querySelector(".preguntaContainer").parentNode.removeChild(document.querySelector(".preguntaContainer"));
        crearPregunta(preguntas[preguntaCurrent])
        console.log("Skip Pregunta", preguntaCurrent);

        if (respuestaCorrect == respuestaSelected) {
            respuestas.push(1);
        } else {
            respuestas.push(0);
        }

    } else {
        // si no hay mas preguntas, el juego esta terminado. Pero no se ha terminado de responder
        end = true;
    }


}

/**
 * Este metodo se modifica para saber cual es la respuesta correcta.
 * retorna un numero, entonces se le debe especificar cual es la pregunta actual.
 * 
 * 
 * 
 * @param {number} preguntaActual 
 */
function respuestasCorrectas(preguntaActual) {
    if (preguntaActual == 0) {
        return 0;
    } else if (preguntaActual == 1) {
        return 0;
    } else if (preguntaActual == 2) {
        return 2;
    } else if (preguntaActual == 3) {
        return 0;
    }
    return 0;
}

/**
 * Creacion de funcion para crear pregunta.
 * 
 * Se crea el contenedor, luego el titulo, luego el contenedor
 * de las respuestas.
 * w
 * Finalmente se añade un listener a cada respuesta, cuando se
 * presionen se comprueba si la respuesta seleccionada es la
 * correcta.
 * 
 * 
 * 
 * @param {object} pregunta 
 */
function crearPregunta(pregunta) {
    //creacion contenedorPregunta
    let preguntaContainer = document.createElement("div");
    preguntaContainer.className = "preguntaContainer";
    document.querySelector("#app").appendChild(preguntaContainer);

    //creacion titulo
    let title = document.createElement("h1");
    title.innerHTML = pregunta.pregunta;
    title.className = "preguntaTitle";
    document.querySelector(".preguntaContainer").appendChild(title);




    //creacion contenedor respuestas
    let respuestasContainer = document.createElement("div");
    respuestasContainer.className = "respuestasContainer";

    //para crear las respuestas
    for (let index = 0; index < pregunta.respuestas.length; index++) {
        let respuesta = document.createElement("p");
        respuesta.innerHTML = pregunta.respuestas[index];
        respuesta.className = "respuesta" + index + " respuesta";

        //listener para comprobar respuesta
        respuesta.addEventListener("click", () => {

            if (preguntaCurrent < preguntas.length) {
                //se llaman las otras funciones.
                revisarRespuesta(respuestasCorrectas(preguntaCurrent), index);

                //se mira la respuesta seleccionada. Y el estado actual de las respondidas.
                console.log("respuestaSelected", index);
                console.log("respuestasRespondidas", respuestas);

                // Si el juego termino,y se responde la ultima pregunta entonces comprueba si gano o perdio
                if (end == true) {
                    console.log();
                    if (majority(respuestas) == 0) document.querySelector(".interaccion__preguntas__but").innerHTML="PERDISTE";
                    if (majority(respuestas) == 1) document.querySelector(".interaccion__preguntas__but").innerHTML="GANASTE " + "</br> " + generateCode;
                    // funcion para redireccionar
                    //window.location.href = "http://www.w3schools.com"
                }
            }
        })

        // se añaden las respuestas al contenedor
        respuestasContainer.appendChild(respuesta);
    }

    //se añade el contenedor al html
    document.querySelector(".preguntaContainer").appendChild(respuestasContainer);

    // se creó la pregunta
    console.log("Created pregunta");
}


//inicializacion de pregunta 0
crearPregunta(preguntas[preguntaCurrent])

function majority(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}

function generateCode() {
    let codigo = randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    return codigo;
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
