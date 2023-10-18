let opciones= ["piedra", "papel", "tijeras"];
let jugador = null;

const eleccionHumano = ()=> prompt();

function juegaPc(){
    //genera la eleccion aleatoria de la PC
    let eleccionPC=opciones[Math.floor(Math.random()*3)];
    return eleccionPC
}

const verificaGanador = (jugador, pc)=>{
    if(jugador==pc){
        return console.log("Empate Ambos eligieron " + jugador);
    }else if((jugador==opciones[0]) && (pc==opciones[2])||
               (jugador==opciones[1]) && (pc==opciones[0])||
               (jugador==opciones[2]) && (pc==opciones[1])){
      return console.log("Ganaste. Elegiste: " + jugador + " y la PC eligio: " + pc);
    }else{
        return console.log("Perdiste. Elegiste " + jugador + " y la PC eligio " + pc + ",");
    }
}

const verificaEleccionUsuario = eleccion =>{
    if ((eleccion==opciones[0])||(eleccion == opciones[1])||(eleccion==opciones[2])){
        return true
    } else {
        return false
    }   
}

export const piedraPapelTijeras = ()=>{
    while(verificaEleccionUsuario(jugador)==false){
        console.log("Por favor, elige entre: piedra, papel o tijeras");
        jugador = eleccionHumano();
    }    
    let pc=juegaPc();
    return verificaGanador(jugador,pc);
}