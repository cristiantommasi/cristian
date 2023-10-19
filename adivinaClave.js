import { numberRamdom } from "./ahorcado";

const numeros = ["0","1","2","3","4","5","6","7","8","9"];
let posicion = 0;
let acierto = 0;
let intento = 0

const bienvenida = ()=> console.log(`
        ADIVINA LA CLAVE
En este juego deberas acertar la clave
     de 4 digitos numericos.
         BUENA SUERTE!!!`);

const crearClave = ()=>{
    let clave=""
    for (let i = 0; i < 4; i++) {
        clave+=numeros[numberRamdom(numeros)]    
    }
    return clave
}

const comprobarClave= (humano,secreta)=>{
    let comprobar=[];
    for (let i = 0; i < secreta.length; i++) {
        if(secreta[i]==humano[i]){
            
        }
        
    }
}

const adivinaClave = ()=>{
    bienvenida();
    let secreta=crearClave();
    let humano=null;
    while(humano!=secreta){
        humano=prompt("trata de descubrir la clave de 4 numeros.")
    }
}

