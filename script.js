let intentos = 6;
// Define la cantidad de intentos que el jugador tiene.

let diccionario = ['ADIOS', 'PADRE', 'MADRE', 'HIJOS'];
// Lista de palabras posibles para el juego.

let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
// Selecciona una palabra aleatoria del diccionario para que sea la palabra que el jugador debe adivinar.

window.addEventListener('load', init);
// Cuando la página web se carga, se ejecuta la función 'init'.

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
    // Muestra un mensaje en la consola cuando la página se carga.
}

const button = document.getElementById("guess-button");
// Obtiene el botón de intentar por su id.

button.addEventListener("click", intentar);
// Agrega un evento al botón para que cuando se haga clic, se ejecute la función 'intentar'.

function intentar(){
    const INTENTO = leerIntento();
    // Lee el intento del jugador.

    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>");
        // Si el intento es igual a la palabra, muestra un mensaje de victoria y termina el juego.
        return;
    }

    const GRID = document.getElementById("grid");
    // Obtiene el contenedor de la cuadrícula por su id.

    const ROW = document.createElement('div');
    ROW.className = 'row';
    // Crea un nuevo div para representar una fila de letras.

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        // Crea un nuevo span para cada letra en la palabra.

        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851'; // Verde
            // Si la letra está en la posición correcta, la colorea de verde.
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'; // Amarillo
            // Si la letra está en la palabra pero en la posición incorrecta, la colorea de amarillo.
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4'; // Gris
            // Si la letra no está en la palabra, la colorea de gris.
        }
        ROW.appendChild(SPAN);
        // Añade el span a la fila.
    }

    GRID.appendChild(ROW);
    // Añade la fila al contenedor de la cuadrícula.

    const guessesContainer = document.getElementById("guesses");
    const p = document.createElement('p');
    p.textContent = INTENTO;
    guessesContainer.appendChild(p);
    // Crea un nuevo párrafo para cada intento y lo agrega al contenedor de intentos.

    intentos--;
    // Reduce el número de intentos restantes.

    if (intentos === 0){
        terminar("<h1>PERDISTE!😖</h1>");
        // Si no hay más intentos, muestra un mensaje de derrota y termina el juego.
    }

    document.getElementById("guess-input").value = "";
    // Limpia el campo de entrada después de cada intento.
}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    // Lee el valor del campo de entrada, lo convierte a mayúsculas y lo devuelve.
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    // Desactiva el campo de entrada.

    const BOTON = document.getElementById("guess-button");
    BOTON.disabled = true;
    // Desactiva el botón de intentar.

    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    // Muestra el mensaje de finalización (ganaste o perdiste) en el contenedor de mensajes.
}
