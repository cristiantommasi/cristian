import {ahorcado} from "./ahorcado.js"
import {tateti} from "./tateti.js"
import {piedraPapelTijeras} from "./piedrapapeltijeras.js"

const menu = () =>{
console.log(`:::::: Selecciona el juego que deseas ::::::

        1. Ahorcado.
        2. Piedra, Papel o Tijeras.
        3. Ta Te Ti.
        4. Adivina el numero.
        5. Salir`);
}

let jugar = true;
alert("bienvenido.")
while (jugar){
    console.clear()
    let seguir = true;
    let termina = true
    menu()
    while(termina){
        let election = prompt('Elige el juego al cual deseas ingresar.')

        switch (election) {
        case "1":
            ahorcado()
            termina=false
            continue;
        case "2":
            piedraPapelTijeras()
            termina=false
            continue;
        case "3":
            tateti()
            termina=false
            continue;
        case "4":
            findNumber()
            termina=false
            continue;
        case "5":
            termina=false;
            seguir=false;
            jugar=false;
            continue;
        default:
            console.log("La opcion ingresada es invalida.");
        }
    }

    while(seguir){
        console.log("¿deseas seguir jugando?");
        let choice = prompt("SI, para continuar. NO, para abandonar y salir.");
        if(choice.toUpperCase() === "SI"){
            seguir = false
            continue;
        }else if(choice.toUpperCase()==="NO"){
            jugar=false;
            break;
        }else{
            console.log("No ingresaste una opcion valida.");
        }
    }
}

console.log("gracias por tu visita!!!");