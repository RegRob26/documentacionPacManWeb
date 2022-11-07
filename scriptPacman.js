/**
 * Componente canvas que nos permite dibujar en la página
 * @type {HTMLElement}
 */
let canvas = document.getElementById("pacmanCanvas");

let ctx = canvas.getContext('2d');

/**
 * Contiene el tile de los escenarios principales
 * @type {HTMLImageElement}
 */
let imgTile = new Image();
imgTile.src = "imagenes/newResource2.png"


/**
 * Carga de imagenes de pacman
  * @type {HTMLImageElement}
 */

let derechaPacman = new Image();
derechaPacman.src = "imagenes/pacman_right.png"
let derechaX = 0
let derechaY = 0

let izquierdaPacman = new Image();
izquierdaPacman.src = "imagenes/pacman_left.png"
let izquierdaX = 0

let arribaPacman = new Image();
arribaPacman.src = "imagenes/pacman_up.png"
let arribaX = 0

let abajoPacman = new Image();
abajoPacman.src = "imagenes/pacman_down.png"
let abajoX = 0

let muertePacman = new Image();
muertePacman.src = "imagenes/pacman_death.png"

//Fin carga pacman

//Carga de recursos varios
/**
 * Carga de recursos varios
 * @type {HTMLImageElement}
 */
let punto = new Image();
punto.src = "imagenes/powerPellet.png"

let ready = new Image();
ready.src = "imagenes/ready.png"


let vidaExtra = new Image();
vidaExtra.src = "imagenes/extra_life.png";

let gameOverImg = new Image();
gameOverImg.src = "imagenes/game_over.png";


let inicioJuego = new Audio("audio/game_start.mp3");
let muerteSonido = new Audio("audio/death.mp3")

let waka1 = new Audio("audio/dot_1.mp3")
let waka2 = new Audio("audio/dot_2.mp3")

//Fin carga recursos varios

//Zona de declaraciones fantasmas
/**
 * Carga de fantasmas
  * @type {HTMLImageElement}
 */

let blinkyArriba = new Image();
let blinkyAbajo = new Image();
let blinkyDerecha = new Image();
let blinkyIzquierda = new Image();

blinkyArriba.src = "imagenes/blinky_up_angry.png";
blinkyDerecha.src = "imagenes/blinky_right_angry.png";
blinkyAbajo.src = "imagenes/blinky_down_angry.png";
blinkyIzquierda.src = "imagenes/blinky_left_angry.png";

let blinkyTam = 20;
let blinkyMov = 3.25;
let blinkyInc = 20;

let xActBlinky = 150;
let yActBlinky = 125;

let barreraFantasma = false;
let prediccion = 2;
let prediccionBackup = 2;

//Carga de fantasma Pinky
let pinkyArriba = new Image();
let pinkyAbajo = new Image();
let pinkyDerecha = new Image();
let pinkyIzquierda = new Image();

pinkyArriba.src = "imagenes/pinky_up.png";
pinkyDerecha.src = "imagenes/pinky_right.png";
pinkyAbajo.src = "imagenes/pinky_down.png";
pinkyIzquierda.src = "imagenes/pinky_left.png";


let pinkyInc = 20;

let xActPinky = 380;
let yActPinky = 125;

let barreraFantasmaPinky = false;
let prediccionPinky = 1;
let prediccionPinkyBackup = 1;
//Fin de carga fantasmas

//Zona variables pacman


let choqueFantasma = false;
let vidas = 2;
let incNivel = 250;

let decisionAudio = true;
let x = canvas.width;
let key = 0;
let xActual = 245;
let yActual = 120;

let marcador = 0;
let indice = 0;
let inc = 0;
const cantInc = 20;
const y = canvas.height;


let barreraBool = false;

const pacmanTam = 20;

/**
 * Indica la cantidad de desplazamiento de Pac-Man
 * @type {number}
 */
const pacmanCantiMov = 3.75;

const barrera = canvas.width;
let keyBackup = 1;
let c, r;
let nivel = 0;
let aumentoTam = 10;

let pacmanTamIrrX = pacmanTam;
let pacmanTamIrrY = 12;

let cargaPantalla = false;
let vistazo = false;
let cambio = 0;
let finJuego = false;
let subirNivelBool = false;

let totalPuntos = 0;


/**
 * Es una matriz cuyas posiciones permiten dibujar los escenarios del juego.
 * Si se quisiera agregar un nuevo escenario, basta con agregar una nueva posición a la matriz con las mismas características
 * que las otras posiciones por default.
 * Si se quiere cambiar un elemento dentro del escenario, el atributo tipo indica el numero de elemento a dibujar, los cuales
 * se espicican dentro de la imagen newResourcesnumeros.
 * @example
 *  {tipo: 10} Es una barra horizontal.
 * @name barrerasMatriz
 *
 */
let barrerasMatriz =
    [
        [
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}],
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}],
            [{tipo: 1}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 8}, {tipo: 9}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 0,},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 23,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 25}, {tipo: -2,}, {tipo: -2}, {tipo: 24}, {tipo: -1}, {tipo: 25,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 24,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 25}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: 24}, {tipo: -1}, {tipo: 25}, {tipo: -2,}, {tipo: -2}, {tipo: 24}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -2}, {tipo: -2}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 38}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 14,}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 38}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 20}, {tipo: 20}, {tipo: 20,}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 5}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 4,},],
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}]
        ],
        [
            //   0               1           2           3           4           5           6           7           8               9       10              11          12          13          14      15          16           17            18          19           20          21          22          23          24          25          26          27
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}],
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}],
            [{tipo: 1}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 8}, {tipo: 9}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 0,},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 23,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 25}, {tipo: -2,}, {tipo: -2}, {tipo: 24}, {tipo: -1}, {tipo: 25,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 24,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 25}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: 24}, {tipo: -1}, {tipo: 25}, {tipo: -2,}, {tipo: -2}, {tipo: 24}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -2}, {tipo: -2}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 38}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 14,}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 38}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 20}, {tipo: 20}, {tipo: 20,}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 0}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 23}, {tipo: 14}, {tipo: 14}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 1}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: 20}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27}, {tipo: 26}, {tipo: -1,}, {tipo: 27}, {tipo: 20}, {tipo: 20}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 38,}, {tipo: -1}, {tipo: -2}, {tipo: -2}, {tipo: -1,}, {tipo: 23}, {tipo: 38}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 2}, {tipo: 3,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 2}, {tipo: 3}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: 14}, {tipo: 14}, {tipo: 14,}, {tipo: 14}, {tipo: 4}, {tipo: -1}, {tipo: 27,}, {tipo: 26}, {tipo: -1}, {tipo: 27}, {tipo: 26,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 27}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 26}, {tipo: -1}, {tipo: 5}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 5}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 6}, {tipo: 7}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 4,},],
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}]
        ],
        [
            //   0               1           2           3           4           5           6           7           8               9       10              11          12          13          14      15          16           17            18          19           20          21          22          23          24          25          26          27
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}],
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}],
            [{tipo: 1}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 8}, {tipo: 9}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 0,},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 23,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 25}, {tipo: -2,}, {tipo: -2}, {tipo: 24}, {tipo: -1}, {tipo: 25,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 24,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 25}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: 24}, {tipo: -1}, {tipo: 25}, {tipo: -2,}, {tipo: -2}, {tipo: 24}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -2}, {tipo: -2}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 38}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 14}, {tipo: 14,}, {tipo: 38}, {tipo: -1}, {tipo: 23,}, {tipo: 38}, {tipo: -1}, {tipo: 23}, {tipo: 14,}, {tipo: 14}, {tipo: 38}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 27}, {tipo: 20,}, {tipo: 20}, {tipo: 20}, {tipo: 20}, {tipo: 20,}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 27,}, {tipo: 20}, {tipo: 20}, {tipo: 26,}, {tipo: -1}, {tipo: 2},],
            [{tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,},],
            [{tipo: 3}, {tipo: 10}, {tipo: 10}, {tipo: 10,}, {tipo: 10}, {tipo: 0}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: 14}, {tipo: 14}, {tipo: 38,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 23}, {tipo: 14}, {tipo: 14}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 1}, {tipo: 10,}, {tipo: 10}, {tipo: 10}, {tipo: 10}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: 20}, {tipo: 20}, {tipo: 26}, {tipo: -1}, {tipo: 27}, {tipo: 26}, {tipo: -1,}, {tipo: 27}, {tipo: 20}, {tipo: 20}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 23}, {tipo: 38,}, {tipo: -1}, {tipo: -2}, {tipo: -2}, {tipo: -1,}, {tipo: 23}, {tipo: 38}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2,}, {tipo: -2}, {tipo: 2}, {tipo: -1},{tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 2}, {tipo: 3,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 2}, {tipo: 3}, {tipo: -1}, {tipo: 2,}, {tipo: 3}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2}, {tipo: -1}, {tipo: 27,}, {tipo: 26}, {tipo: -1}, {tipo: 27}, {tipo: 26,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: 27}, {tipo: 26}, {tipo: -1}, {tipo: 27,}, {tipo: 26}, {tipo: -1}, {tipo: 3}, {tipo: -2,}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: 2}, {tipo: 3}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: -1}, {tipo: -1,}, {tipo: -1}, {tipo: -1}, {tipo: 3}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: -2}, {tipo: 2,},],
            [{tipo: 5}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 6}, {tipo: 7}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 12,}, {tipo: 12}, {tipo: 12}, {tipo: 12}, {tipo: 4,},],
            [{tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}, {tipo: 100}]
        ]
    ]


document.addEventListener('keydown', manejarTecladoAbajo, false);

setInterval(dibujar, 40, key)




/**
 *
* Reproduce el sonido inicial del juego, ademas de colocar en pantalla la imagen de READY!
 * @function pantallaCarga

* */
function pantallaCarga() {
    if (indice < 200) {
        /** Permite difuminar la imagen que se está dibujando.
         * @name ctx.globalAlpha
         * @param cantidad - 0-1
         * @global*/
        ctx.globalAlpha = 1 - indice / 200;
        ctx.drawImage(ready, 0, 0, 48, 16, canvas.width / 2 - 100, canvas.height / 2 - 30, 216, 52);
        ctx.globalAlpha = 1;
        indice += 2;
        inicioJuego.play()
    }
}


/**
 *  Rescata de los eventos del teclado el movimiento de las flechas (izquierda, derecha, arriba, abajo), los almacena en
 *  una variable.
 * 37 izquierda, 39 derecha, 38 arriba, 40 abajo
 * @param key - Valor de la tecla pulsada
 * @param e - Contiene los eventos ocurridos en el teclado
 */
function manejarTecladoAbajo(e) {
    if (e.keyCode === 39) {
        key = 39;
    }
    if (e.keyCode === 37) {
        key = 37;
    }
    if (e.keyCode === 38) {
        key = 38;
    }
    if (e.keyCode === 40) {
        key = 40;
    }
}

//Vamos a definir los valores de las direcciones para cambiar la imagen del pacman
//2 arriba, 1 izquierda, 0 abajo, 3 derecha


//! Movimientos de PACMAN


/**
 * Estructura principal de movimiento de Pac-Man
 * Contiene una condicion principal cuya dependecia proviene de no colisionar Pac-man con un fantasma (pinky, blinky)
 * @function movimientoPacman
 *
 */
function movimientoPacman() {
    /**
     * Almacenan temporalmente las posiciones x, y actuales de Pac-man, como respaldo en caso de modificaciones.
     * @name xTempPacman
     * @inner
     * @type {number}
     */
    let xTempPacman = xActual;
    /**
     * Almacenan temporalmente las posiciones x, y actuales de Pac-man, como respaldo en caso de modificaciones.
     * @name YTempPacman
     * @inner
     * @type {number}
     */
    let yTempPacman = yActual;

    if (!choqueFantasma) {
        /**
         * De manera general, segun el valor de key dado se incrementa la posicion actual de Pac-man para verificar si en
         * el siguiente paso colisionará con una barrera. Posteriormente se recupera el estado anterior de la posicion
         */
        if (key === 39) {
            xActual += pacmanCantiMov;
            vistazoBarrera();
            xActual = xTempPacman;
        }
        if (key === 37) {
            xActual -= pacmanCantiMov;
            vistazoBarrera();
            xActual = xTempPacman;
        }
        if (key === 40) {
            yActual += pacmanCantiMov;
            vistazoBarrera();
            yActual = yTempPacman;
        }
        if (key === 38) {
            yActual -= pacmanCantiMov;
            vistazoBarrera();
            yActual = yTempPacman;
        }
        if (key !== keyBackup && barreraBool) {
            barreraBool = !barreraBool
        }

        //37 izquierda, 39 derecha, 38 arriba, 40 abajo

        /**
         * Se realiza la llamada a la funcion que efectua el movimiento según la tecla presionada
         */
        if (key === 39) {
            derecha();
        }

        if (key === 37) {
            izquierda();
        }

        if (key === 40) {
            abajo();
        }

        if (key === 38) {
            arriba();
        }
        keyBackup = key;
        barreraBool = false;
    }
}

/**
 * Realiza una estimación de sí el movimiento que se quiere realizar o se está realizando provoca una colisión con una
 * barrera.
 * En caso de encontrarse con una barrera entonces encenderá una bandera y tomará el valor anterior de la tecla
 * pulsada para que sea el valor actual.
 * @example
 * Siendo keyBackup = 39 y key = 40, además de  barreraBool = true, entonces key tomará el valor de keybackup
 * @function vistazoBarrera
 *
 */
function vistazoBarrera() {
    detectarBarrera();
    if (barreraBool) {
        key = keyBackup;
    }
}

/**
 * En general, para las siguientes funciones siguen la misma secuencia de implementación.
 * Dibujar el sprite segun la dirección dada respecto al tamaño del objeto y su posicion actual, una vez que se dibujo
 * y se hizo la comparación que no existe una barrerra o que no se ha llegado al límite del canvas, entonces se incrementa
 * un contador que permite avanzar en la siguiente posicion el sprite de movimiento.
 *
 * {@link derecha}
 * {@link arriba}
 * {@link abajo}
 * {@link izquierdaFantasma}
 * {@link derechaFantasma}
 * {@link arribaFantasma}
 * {@link abajoFantasma}
 *
 * @function izquierda
 * */

function izquierda() {
    ctx.drawImage(izquierdaPacman, izquierdaX + inc, 0, 16, 16, xActual, yActual, pacmanTam + aumentoTam, pacmanTam + aumentoTam);
    if ((xActual > 0) && !barreraBool) {
        xActual -= pacmanCantiMov;
        inc += cantInc - 4;
    } else inc = cantInc - 4;
    if (inc > 60) inc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda}
 */
function derecha() {
    ctx.drawImage(derechaPacman, derechaX + inc, derechaY, 16, 16, xActual, yActual, pacmanTam + aumentoTam, pacmanTam + aumentoTam);
    if ((xActual < x - (pacmanTam + pacmanCantiMov)) && !barreraBool) {
        xActual += pacmanCantiMov;
        inc += cantInc - 4;
    } else inc = 16;
    if (inc > 60) inc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda}
 */
function arriba() {
    ctx.drawImage(arribaPacman, arribaX + inc, 0, 16, 16, xActual, yActual, pacmanTam + aumentoTam, pacmanTam + aumentoTam);
    if ((yActual > 0 && yActual < barrera) && !barreraBool) {
        yActual -= pacmanCantiMov;
        inc += cantInc - 4;
    } else inc = cantInc - 4;
    if (inc > 60) inc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda}
 */
function abajo() {
    ctx.drawImage(abajoPacman, abajoX + inc, 0, 16, 16, xActual, yActual, pacmanTam + aumentoTam, pacmanTam + aumentoTam);
    if ((yActual < y - (pacmanTam + pacmanCantiMov)) && !barreraBool) {
        yActual += pacmanCantiMov;
        inc += cantInc - 4;
    } else inc = cantInc - 4;
    if (inc > 60) inc = 0;
}

/**
 * Primeramente hay algo que remarcar dentro de esta función, esta puede convertirse en un método de un objeto fantasma
 * puesto que al existir varios fantasmas, podemos realizar herencia. Sin embargo, por cuestiones de falta de conocimiento
 * de implementación e POO en Js, se omitió por el momento el uso de objetos. No se descarta su uso en el futuro.
 *
 *
 *  Esta función comprueba en la ejecución del programa si Pac-man ha colisionado con un fantasma (blinky) y envía la
 *  llamada a otra función.
 * @function colisionConFantasma
 */
function colisionConFantasma() {
    if (xActBlinky < xActual + 12 && xActBlinky + 12 > xActual && yActBlinky < yActual + blinkyTam && blinkyTam + yActBlinky > yActual) {
        choqueFantasma = true;
        dibujarMuertePacman();
    }
}
/**
 * Realiza la misma tarea que {@link colisionConFantasma} con la diferencia que el fantasma es Pinky.
*  @function colisionConFantasmaPinky
*/
function colisionConFantasmaPinky() {
    if (xActPinky < xActual + 12 && xActPinky + 12 > xActual && yActPinky < yActual + blinkyTam && blinkyTam + yActPinky > yActual) {
        choqueFantasma = true;
        dibujarMuertePacman();
    }
}

/**
 * De manera simple se encarga de colocar en pantalla la imagen de Game Over en una posicion por default  y reprodicor
 * el audio para dicha acción mientras las condiciones se cumplan.
 *
 * @function dibujarMuertePacman
 */
function dibujarMuertePacman() {
    if (cambio <= 12) {
        muerteSonido.play();
        ctx.drawImage(muertePacman, cambio * 16, 0, 16, 16, xActual, yActual, pacmanTam + aumentoTam, pacmanTam + aumentoTam);
        cambio += 1;
    } else {
        /**
         * Si ya se ha terminado de mostrar la imagen anterior, entonces se le resta una vida al jugador y se reinician
         * las variables para continuar con el juego.
         */
        if (cambio === 13) {
            cambio = 0;
            choqueFantasma = false;
            vidas--;
            reinicio();
        }
    }
}

/**
 * Muestra en pantalla la cantidad de vidas que tiene el jugador siempre y cuando este valor no sea inferior a 0
 * Si las vidas se han terminado (menores a 0) entonces llama a la función que finaliza el juego
 * @function dibujaVidas
 */
function dibujaVidas() {
    if (vidas >= 0) {
        let contador = 0;
        while (contador <= vidas) {
            ctx.drawImage(vidaExtra, 0, 0, 16, 16, contador * 16,incNivel, 16, 16);
            contador++;
        }
    } else {
        gameOver();
    }
}


/**
 * Muestra en pantalla la imagen de gameOver en una posicion predefinida y activa una bandera que controla el flujo principal
 * del juego
 * @function gameOver
 */
function gameOver() {
    ctx.drawImage(gameOverImg, 0, 0, 80, 16, (canvas.width / 2) - 75, 120, 160, 32);
    finJuego = true;
}


/**
 * Se encarga de colocar las variables en su valor por default cuando se sube de nivel o cuando muere Pac-Man
 * por lo que algunas variables se reinicializan de distinta forma.
 * @example
 *      Si se ha subido de nivel (subirNivelBool == true) entonces a la variable nivel se le incrementa en uno su
 *      valor actual.
 * @function reinicio
 */
function reinicio() {
    if (!subirNivelBool){
        xActBlinky = 150;
        yActBlinky = 125;
        barreraFantasma = false;
        prediccion = 1;
        prediccionBackup = 2;
        choqueFantasma = false;
        decisionAudio = true;
        x = canvas.width;
        key = 0;
        xActual = 245;
        yActual = 120;
        indice = 0;
        inc = 0;
        barreraBool = false;
        keyBackup = 1;
        nivel += 0;
        cargaPantalla = false;
        vistazo = false;
        cambio = 0;

    }
    else{
        xActBlinky = 150;
        yActBlinky = 125;
        barreraFantasma = false;
        prediccion = 1;
        prediccionBackup = 2;
        choqueFantasma = false;
        decisionAudio = true;
        x = canvas.width;
        key = 0;
        xActual = 245;
        yActual = 120;
        indice = 0;
        inc = 0;
        barreraBool = false;
        keyBackup = 1;
        nivel ++;
        cargaPantalla = false;
        vistazo = false;
        cambio = 0;
        subirNivelBool = false;
    }

}


/**
 *
 * Muestra en pantalla el texto de LEVEL UP cuando el jugador ha consumido todos los puntos posibles dentro del escenario
 * Además de reiniciar el escenario y hacer más rápido el movimiento de los fantasmas.
 *
 * @function
 */
function subirNivel() {
    if (totalPuntos === 0){
           ctx.font = "30px pacman";
           ctx.fillStyle = "white";
           ctx.fillText("LEVEL UP", 200, 100);
           subirNivelBool = true;
           blinkyMov += 0.6;
           incNivel = 350;
           reinicio();
    }

}


// Fin de movimientos pacman

//Movimientos fantasma blinky

/**
 * El movimiento que los fantasmas siguen es similar al que Pac-Man sigue, con la única diferencia que a Pac-Man lo controla
 * el usuario y los fantasmas no.
 * Por lo que si se compara {@link movimientoPacman} con movimientoFantasma nos daremos cuenta que la única sección que
 * sufre alteraciones es la de añadir un ciclo while a la función.
 * Dentro de este ciclo while se calcula un número de manera aleatoria que sea diferente al movimiento inmediato anterior.
 * Siempre y cuando el fantasma se encuentre delante de una barrera y predicción tenga un valor diferente de predicciónBackup
 *
 * @function movimientoFantasma
 */
function movimientoFantasma() {
    let xTempFantasma = xActBlinky;
    let yTempFantasma = yActBlinky;

    if (!choqueFantasma) {
        if (barreraFantasma && prediccionBackup === prediccion) {
            while (prediccionBackup === prediccion) {
                prediccion = Math.floor(Math.random() * 4) + 1
            }
        }

        if (prediccion === 1) {
            xActBlinky += blinkyMov;
            vistazoBarreraFantasma();
            xActBlinky = xTempFantasma;
        }

        if (prediccion === 2) {
            xActBlinky -= blinkyMov;
            vistazoBarreraFantasma();
            xActBlinky = xTempFantasma;
        }

        if (prediccion === 3) {
            yActBlinky += blinkyMov;
            vistazoBarreraFantasma();
            yActBlinky = yTempFantasma;
        }

        if (prediccion === 4) {
            yActBlinky -= blinkyMov;
            vistazoBarreraFantasma();
            yActBlinky = yTempFantasma;
        }

        if (prediccion !== prediccionBackup && barreraFantasma) {
            barreraFantasma = !barreraFantasma;
        }

        if (prediccion === 1) {
            derechaFantasma();
        }
        if (prediccion === 2) {
            izquierdaFantasma();
        }
        if (prediccion === 3) {
            abajoFantasma();
        }
        if (prediccion === 4) {
            arribaFantasma();
        }
        prediccionBackup = prediccion;
        barreraBool = false;
    }
}

/**
 * Mismo funcionamiento que {@link vistazoBarrera}, solo cambia el valor de barrera que se evalúa.
 * @function vistazoBarreraFantasma
 */
function vistazoBarreraFantasma() {
    detectarBarreraFantasma();
    if (barreraFantasma) {
        prediccion = prediccionBackup;
    }
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function izquierdaFantasma() {
    ctx.drawImage(blinkyIzquierda, blinkyInc, 0, 16, 16, xActBlinky, yActBlinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((xActBlinky > 0) && !barreraFantasma) {
        xActBlinky -= blinkyMov;
        blinkyInc += 16;
    } else blinkyInc = 0;
    if (blinkyInc > 16) blinkyInc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function derechaFantasma() {
    ctx.drawImage(blinkyDerecha, blinkyInc, derechaY, 16, 16, xActBlinky, yActBlinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((xActBlinky < x - (blinkyTam + blinkyMov)) && !barreraFantasma) {
        xActBlinky += blinkyMov;
        blinkyInc += 16;
    } else blinkyInc = 16;
    if (blinkyInc > 16) blinkyInc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function arribaFantasma() {
    ctx.drawImage(blinkyArriba, blinkyInc, 0, 16, 16, xActBlinky, yActBlinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((yActBlinky > 0 && yActBlinky < barrera) && !barreraFantasma) {
        yActBlinky -= blinkyMov;
        blinkyInc += 16;
    } else blinkyInc = 16;
    if (blinkyInc > 16) blinkyInc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function abajoFantasma() {
    ctx.drawImage(blinkyAbajo, blinkyInc, 0, 16, 16, xActBlinky, yActBlinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((yActBlinky < y - (blinkyTam + blinkyMov)) && !barreraFantasma) {
        yActBlinky += blinkyMov;
        blinkyInc += 16;
    } else blinkyInc = 16;
    if (blinkyInc > 16) blinkyInc = 0;
}


//Fin de movimientos blinky

//Movimientos fantasma pinky

/**
 * Misma funcionalidad que {@link movimientoFantasma} con la diferencia que cambia el fantasma en el que se evalúan las
 * funciones.
 */
function movimientoFantasmaPinky() {
    let xTempFantasma = xActPinky;
    let yTempFantasma = yActPinky;


    if (!choqueFantasma) {
        if (barreraFantasmaPinky && prediccionPinkyBackup === prediccionPinky) {
            while (prediccionPinkyBackup === prediccionPinky) {
                prediccionPinky = Math.floor(Math.random() * 4) + 1
            }
        }

        if (prediccionPinky === 1) {
            xActPinky += blinkyMov;
            vistazoBarreraFantasmaPinky();
            xActPinky = xTempFantasma;
        }

        if (prediccionPinky === 2) {
            xActPinky -= blinkyMov;
            vistazoBarreraFantasmaPinky();
            xActPinky = xTempFantasma;
        }

        if (prediccionPinky === 3) {
            yActPinky += blinkyMov;
            vistazoBarreraFantasmaPinky();
            yActPinky = yTempFantasma;
        }

        if (prediccionPinky === 4) {
            yActPinky -= blinkyMov;
            vistazoBarreraFantasmaPinky();
            yActPinky = yTempFantasma;
        }

        if (prediccionPinky !== prediccionPinkyBackup && barreraFantasmaPinky) {
            barreraFantasmaPinky = !barreraFantasmaPinky;
        }

        if (prediccionPinky === 1) {
            derechaFantasmaPinky();
        }
        if (prediccionPinky === 2) {
            izquierdaFantasmaPinky();
        }
        if (prediccionPinky === 3) {
            abajoFantasmaPinky();
        }
        if (prediccionPinky === 4) {
            arribaFantasmaPinky();
        }
        prediccionPinkyBackup = prediccionPinky;
        barreraBool = false;
    }
}

function vistazoBarreraFantasmaPinky() {
    detectarBarreraFantasmaPinky();
    if (barreraFantasmaPinky) {
        prediccionPinky = prediccionPinkyBackup;
    }
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function izquierdaFantasmaPinky() {
    ctx.drawImage(pinkyIzquierda, pinkyInc, 0, 16, 16, xActPinky, yActPinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((xActPinky > 0) && !barreraFantasmaPinky) {
        xActPinky -= blinkyMov;
        pinkyInc += 16;
    } else pinkyInc = 0;
    if (pinkyInc > 16) pinkyInc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function derechaFantasmaPinky() {
    ctx.drawImage(pinkyDerecha, pinkyInc, derechaY, 16, 16, xActPinky, yActPinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((xActPinky < x - (blinkyTam + blinkyMov)) && !barreraFantasmaPinky) {
        xActPinky += blinkyMov;
        pinkyInc += 16;
    } else pinkyInc = 16;
    if (pinkyInc > 16) pinkyInc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function arribaFantasmaPinky() {
    ctx.drawImage(pinkyArriba, pinkyInc, 0, 16, 16, xActPinky, yActPinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((yActPinky > 0 && yActPinky < barrera) && !barreraFantasmaPinky) {
        yActPinky -= blinkyMov;
        pinkyInc += 16;
    } else pinkyInc = 16;
    if (pinkyInc > 16) pinkyInc = 0;
}

/**
 * funcion de movimiento, sigue el patrón de {@link izquierda} para fantasma.
 */
function abajoFantasmaPinky() {
    ctx.drawImage(pinkyAbajo, pinkyInc, 0, 16, 16, xActPinky, yActPinky, blinkyTam + aumentoTam, blinkyTam + aumentoTam);
    if ((yActPinky < y - (blinkyTam + blinkyMov)) && !barreraFantasmaPinky) {
        yActPinky += blinkyMov;
        pinkyInc += 16;
    } else pinkyInc = 16;
    if (pinkyInc > 16) pinkyInc = 0;
}

//Fin de movimientos pinky

/**
 * Función principal del juego. Dicha funcion se encarga de administrar la ejecucion de las funciones más importantes para
 * el funcionamiento del juego.
 * Si el juego ocurre con normalidad segun la variable finJuego, entonces seguira ejecutando las funciones principales,
 * de lo contrario desplegará la animación de game over.
 * Pero además si el nivel máximo fue alcanzado entonces mostrará Fin del juego pero en favor del usuario.
 *
 * @function dibujar
 */
function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!finJuego) {
        pantallaCarga();
        dibujaBarrera();
        dibujarMarcador();
        movimientoFantasma();
        movimientoFantasmaPinky();
        colisionConFantasma();
        colisionConFantasmaPinky();
        movimientoPacman();
        dibujaVidas();
        subirNivel();
    }
    else {
        dibujaBarrera();
        gameOver();
    }
    if (nivel > 2){
        ctx.font = "30px pacman";
        ctx.fillStyle = "white";
        ctx.fillText("Fin del Juego", canvas.width / 2 - 170, 350);
    }
}


let coord = [
    [225, 0], [234, 0], [243, 0], [252, 0], [261, 0], [270, 0], [279, 0], [288, 0], [297, 0], [306, 0], [315, 0], [324, 0], [333, 0], [342, 0], [351, 0], [360, 0],
    [225, 9], [234, 9], [243, 9], [252, 9], [261, 9], [270, 9], [279, 9], [288, 9], [297, 9], [306, 9], [315, 9], [324, 9], [333, 9], [342, 9], [351, 9], [360, 9],
    [225, 18], [234, 18], [243, 18], [252, 18], [261, 18], [270, 18], [279, 18], [288, 18], [297, 18], [306, 18], [315, 18], [324, 18], [333, 18], [342, 18], [351, 18], [360, 18],

];

/**
 * Principal funcion que se encarga de dibujar el escenario, es decir, las barreras. Pero también dibuja en el escenario
 * los puntos que Pac-Man se puede comer. Guarda en cada posicion de la matriz los atributos x, y que posteriormente nos
 * permitirán conocer la posición actual de una barrera o de un punto.
 * @function dibujaBarrera
 */
function dibujaBarrera() {
    let recuentoPuntos = 0;
    for (c = 0; c < barrerasMatriz[nivel].length; c++) {
        for (r = 0; r < barrerasMatriz[nivel][c].length; r++) {
            if (barrerasMatriz[nivel][c][r].tipo >= 0 && barrerasMatriz[nivel][c][r].tipo <= 99) {
                let accesoBloque = barrerasMatriz[nivel][c][r];
                let xBarrera = (r * 18);
                let yBarrera = (c * 18);
                accesoBloque.x = xBarrera;
                accesoBloque.y = yBarrera;
                ctx.drawImage(imgTile, coord[accesoBloque.tipo][0], coord[accesoBloque.tipo][1], 7, 7, xBarrera, yBarrera, 18, 18)
            } else {
                if (barrerasMatriz[nivel][c][r].tipo === -1) {
                    let accesoBloque = barrerasMatriz[nivel][c][r];
                    let xBarrera = (r * 18) + 2;
                    let yBarrera = (c * 18) + 2;
                    accesoBloque.x = xBarrera;
                    accesoBloque.y = yBarrera;
                    recuentoPuntos++;
                    ctx.drawImage(punto, 0, 0, 8, 8, xBarrera, yBarrera, 6, 6)
                }
            }
        }
    }
    totalPuntos = recuentoPuntos;
}


/**
 * Compara las posiciones de las barreras o los puntos con la posición actual de Pac-Man y determina si existe una colisión
 * Sigue la siguiente estructura para hacer la comparación
 *                                 rect1.x < rect2.x + rect2.w &&
 *                                 rect1.x + rect1.w > rect2.x &&
 *                                 rect1.y < rect2.y + rect2.h &&
 *                                 rect1.h + rect1.y > rect2.y
 * En caso de darse una colisión con una barrera, entonces encenderá una bander para indicar al programa principal la existencia
 * de la colisión.
 * Si la colisión se da con un punto, entonces incrementará el marcador y reproducirá el sonido para este caso.
 * @returns {boolean}
 */
function detectarBarrera() {
    for (c = 0; c < barrerasMatriz[nivel].length; c++) {
        for (r = 0; r < barrerasMatriz[nivel][c].length; r++) {
            let accesoBloque = barrerasMatriz[nivel][c][r];
            if (accesoBloque.tipo >= 0) {
                /*                rect1.x < rect2.x + rect2.w &&
                                rect1.x + rect1.w > rect2.x &&
                                rect1.y < rect2.y + rect2.h &&
                                rect1.h + rect1.y > rect2.y*/
                if (accesoBloque.x < xActual + pacmanTamIrrY && accesoBloque.x + pacmanTamIrrY > xActual && accesoBloque.y < yActual + pacmanTamIrrX && pacmanTamIrrY + accesoBloque.y > yActual) {
                    return barreraBool = true;
                }
                barreraBool = false;
            } else {
                if (accesoBloque.tipo === -1) {
                    if (accesoBloque.x < xActual + pacmanTam  && accesoBloque.x + pacmanTam> xActual && accesoBloque.y < yActual + pacmanTam && pacmanTam + accesoBloque.y > yActual) {
                        marcador += 1;
                        accesoBloque.tipo = -2;
                        if (decisionAudio) {
                            waka1.play();
                            decisionAudio = false;
                        } else {
                            waka2.play()
                            decisionAudio = true;
                        }
                    }
                    barreraBool = false;
                }
            }

        }
    }
}

/**
 * Realiza una función parecida que {@link detectarBarrera} con la diferencia que en esta función se compara la posición
 * actual del fantassma en lugar de Pac-Man, además de solo hacer la comparasión con las barreras.
 * @returns {boolean}
 */
function detectarBarreraFantasma() {
    for (c = 0; c < barrerasMatriz[nivel].length; c++) {
        for (r = 0; r < barrerasMatriz[nivel][c].length; r++) {
            let accesoBloque = barrerasMatriz[nivel][c][r];
            if (accesoBloque.tipo >= 0) {
                if (accesoBloque.x < xActBlinky + 12 && accesoBloque.x + 12 > xActBlinky && accesoBloque.y < yActBlinky + 12 && 12 + accesoBloque.y > yActBlinky) {
                    return barreraFantasma = true;
                }
                barreraFantasma = false;
            }
        }
    }
}


/**
 * Misma utilidad que {@link detectarBarreraFantasma} con la diferencia que las posiciones con las que se evalúa son las
 * del fantasma Pinky.
 * @returns {boolean}
 */
function detectarBarreraFantasmaPinky() {
    for (c = 0; c < barrerasMatriz[nivel].length; c++) {
        for (r = 0; r < barrerasMatriz[nivel][c].length; r++) {
            let accesoBloque = barrerasMatriz[nivel][c][r];
            if (accesoBloque.tipo >= 0) {
                if (accesoBloque.x < xActPinky + 12 && accesoBloque.x + 12 > xActPinky && accesoBloque.y < yActPinky + 12 && 12 + accesoBloque.y > yActPinky) {
                    return barreraFantasmaPinky = true;
                }
                barreraFantasmaPinky = false;
            }
        }
    }
}

function dibujarMarcador() {
    ctx.font = "10px pacman";
    ctx.fillStyle = "white";
    ctx.fillText(nivel + "up", 15, 15);

    ctx.font = "10px pacman";
    ctx.fillStyle = "white";
    ctx.fillText(marcador, 25, 30);

    ctx.font = "12px pacman";
    ctx.fillStyle = "white";
    ctx.fillText("HIGH SCORE", canvas.width / 2 - 53, 20);

    ctx.font = "12px pacman";
    ctx.fillStyle = "white";
    ctx.fillText(marcador, canvas.width / 2 - 5, 30);

}