let jugadas=[" "," "," "," "," "," "," "," "," "];
let jugador1= "";
let jugador2= "";
let turno="";

const inicio =()=>{
    console.log(`
     bienvenido al juego de
           TA TE TI
    deberas conseguir formar
     tres simbolos en linea
          para ganar.
           Suerte!!!`)
}

const vaciarTablero = ()=>{
    let jugadas=[" "," "," "," "," "," "," "," "," "];
    return jugadas
}

const mostrarTablero = ()=>{
    console.log(`
    (1)     |(2)        |(3)      
       ${jugadas[0]}    |     ${jugadas[1]}     |   ${jugadas[2]}
            |           |
    ------------------------------
    (4)     |(5)        |(6)
       ${jugadas[3]}    |     ${jugadas[4]}     |   ${jugadas[5]} 
            |           |
    ------------------------------
    (7)     |(8)        |(9)
       ${jugadas[6]}    |     ${jugadas[7]}     |   ${jugadas[8]} 
            |           |
    `
    );
}

const eligeFicha = () =>{
    let jugador="";
    while(jugador!="x" && jugador!="o"){
        jugador = prompt(`elige la ficha con la cual quieres comenzar: ("x") o ("o")`);
    };
    if(jugador.toLowerCase()==="x"){
        jugador1="X"
        jugador2="O"
    }else{
        jugador1="O"
        jugador2="X"
    };
    return console.log("seleccion realizada con exito.");
}

const mostrarFichas = ()=>console.log(`
Los jugadores han elegido las 
fichas de la siguiente manera:
        Jugador 1 = ${jugador1}
        Jugador 2 = ${jugador2}

`);

const hayGanador= (jugador,jugadas)=>{
    if(jugadas[0]==jugadas[1]&&jugadas[0]==jugadas[2]&&jugadas[0]==jugador ||
       jugadas[3]==jugadas[4]&&jugadas[3]==jugadas[5]&&jugadas[3]==jugador ||
       jugadas[6]==jugadas[7]&&jugadas[6]==jugadas[8]&&jugadas[6]==jugador ||
       jugadas[0]==jugadas[3]&&jugadas[0]==jugadas[6]&&jugadas[0]==jugador ||
       jugadas[1]==jugadas[4]&&jugadas[1]==jugadas[7]&&jugadas[1]==jugador ||
       jugadas[2]==jugadas[5]&&jugadas[2]==jugadas[8]&&jugadas[2]==jugador ||
       jugadas[0]==jugadas[4]&&jugadas[0]==jugadas[8]&&jugadas[0]==jugador ||
       jugadas[2]==jugadas[4]&&jugadas[6]==jugadas[2]&&jugadas[2]==jugador){
        return true
    }else{
        return false
    }
}

const tableroLleno = ()=>{
    if((jugadas.every(el=> el!=" "))){
        return true
    }else{
        return false
    }
} 

const casillaLibre = pos=>(jugadas[pos] === " ")?true:false;

const movimientoJugador = ()=>{
    let posiciones = ["1","2","3","4","5","6","7","8","9"];
    let posicion= undefined;
    while(true){
        if(!posiciones.includes(posicion)){
            posicion= prompt("Elige una casilla del tablero que no este ocupada (1-9): ")
        }else{
            if(casillaLibre(posicion-1)){
                return posicion-1
            }else{
                return false
        }
    }
}
}

export const tateti = ()=>{
    jugadas=vaciarTablero()
    inicio()
    eligeFicha()
    mostrarFichas()
    alert("¿estas listo listo para comenzar?")
    if(jugador1==="X"){
        turno=jugador1;
        //console.log(turno);
    }else{
        turno=jugador2;
        //console.log(turno);
    }
    let partida=true;
    while(partida){
        if(tableroLleno()){
            console.clear()
            mostrarTablero()
            console.log("La partida ha terminado en un empate.");
            partida=false
        }else if(turno==jugador1){
            console.clear()
            mostrarTablero()
            alert(`Es el turno de la ficha: "${jugador1}"`);
            while(true){
                let casilla=movimientoJugador();
                if(!casilla && typeof(casilla)=="boolean"){
                    console.log("la casilla esta ocupada");
                }else{
                    jugadas[casilla]=jugador1;
                    break;
                }
            }
            turno=jugador2;
            console.log(mostrarTablero());
            if(hayGanador(jugador1,jugadas)){
                console.log(`Felicitaciones. El jugador que eligio la ficha "${jugador1}" ha ganado.`);
                partida=false;
            }
        }else{
            console.clear()
            mostrarTablero()
            alert(`Es el turno de la ficha: "${jugador2}"`);
            while(true){
                let casilla=movimientoJugador();
                if(!casilla && typeof(casilla)=="boolean"){
                    console.log("la casilla esta ocupada");
                }else{
                    jugadas[casilla]=jugador2;
                        break;
                    }
                }
                turno=jugador1;
                console.log(mostrarTablero());
                if(hayGanador(jugador2,jugadas)){
                    console.log(`Felicitaciones. El jugador que eligio la ficha "${jugador2}" ha ganado.`);
                    partida=false;
                }
        }
    }        
} 