//1.zadatak
import {pokemoni, sposobnostiPokemona} from "./pokemoni.js"
console.log(pokemoni)

//2.zadatak
console.log(sposobnostiPokemona(pokemoni))

//3.zadatak
import {najbrzi, najjaci} from "./sort.js"

console.log(najbrzi)

//4.zadatak
console.log(najjaci(pokemoni))

//5.zadatak
import {buttonPobednik, buttonPrikaz, prikazi, prikaziNajjaceg} from "./DOM.js"

buttonPrikaz.addEventListener('click', ()=>{
    prikazi(pokemoni)
})

buttonPobednik.addEventListener('click', ()=>{
    if(najjaci(pokemoni)){
        prikaziNajjaceg(pokemoni)
    }
    return
})