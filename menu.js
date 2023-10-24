import {ahorcado} from "./ahorcado.js"
import {tateti} from "./tateti.js"
import {piedraPapelTijeras} from "./piedrapapeltijeras.js"
import {adivinaClave} from "./adivinaClave.js";

const menu = () =>{
console.log(`:::::: Selecciona el juego que deseas ::::::

        1. Ahorcado.
        2. Piedra, Papel o Tijeras.
        3. Ta Te Ti.
        4. Adivina el numero.
        5. Salir`);
}

const main = ()=>{
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
            console.clear()
            ahorcado()
            termina=false
            continue;
        case "2":
            console.clear()
            piedraPapelTijeras()
            termina=false
            continue;
        case "3":
                console.clear()
                tateti()
                termina=false
                continue;
        case "4":

            console.clear()
            adivinaClave()
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

        while(seguir){
            console.log("¿deseas volver al menu principal (si) o abandonar nuestra aplicacion (no)?");
            let choice = prompt("SI, para continuar jugando. NO, para abandonar y salir.");
            if(choice.toUpperCase() === "SI"){
                seguir = false
                continue;
            }else if(choice.toUpperCase()==="NO"){
                jugar=false;
                break;
            }else{
                console.log("No ingresaste una opcion valida.");
                console.log("recuerda ingresar (si) para continuar hacia el menu, o (no) para abandonar la aplicacion.");
            }
        }
    }
}

main()

console.log("gracias por tu visita!!!");