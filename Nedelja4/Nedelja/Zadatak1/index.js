//1.zadatak
let pokemoni = []

let pokemon1 = {
    ime: 'Charmander',
    vrsta: 'Fire',
    sposobnosti: ['Blaze', 'Solar Power'],
    karakteristike: {
        napad: 52,
        odbrana: 43,
        brzina: 65
    },
    imgUrl: 'resources/Charmander.png'
}

let pokemon2 = {
    ime: 'Raichu',
    vrsta: 'Electric',
    sposobnosti: ['Static', 'Lightning Rod'],
    karakteristike: {
        napad: 90,
        odbrana: 55,
        brzina: 110
    },
    imgUrl: 'resources/Raichu.png'
}

let pokemon3 = {
    ime: 'Bulbasaur',
    vrsta: 'Grass',
    sposobnosti: ['Overgrow', 'Chlorophyll'],
    karakteristike: {
        napad: 49,
        odbrana: 49,
        brzina: 45
    },
    imgUrl: 'resources/Bulbasaur.png'
}

let pokemon4 = {
    ime: 'Squirtle',
    vrsta: 'Water',
    sposobnosti: ['Torrent', 'Rain Dish'],
    karakteristike: {
        napad: 48,
        odbrana: 65,
        brzina: 43
    },
    imgUrl: 'resources/Squirtle.png'
}
pokemoni.push(pokemon1, pokemon2, pokemon3, pokemon4)
console.log(pokemoni)

console.log('-----------------')
//2.zadatak
function sposobnostiPokemona(x){
    let nizSposobnosti =[]
    
    for(let i = 0; i < x.length; i++){
        nizSposobnosti = nizSposobnosti.concat(x[i].sposobnosti)
    }
    return nizSposobnosti
}
console.log(sposobnostiPokemona(pokemoni))

console.log('----------------')

//3.zadatak
let sortiranoPoBrzini = pokemoni.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)
console.log(sortiranoPoBrzini)

console.log('---------------')

//4.zadatak

function pobednik(){
    pokemoni.sort((a,b)=> b.karakteristike.napad - a.karakteristike.napad)
    const najjaci = pokemoni[0]
    return najjaci
}

//5.zadatak
const divWrap = document.querySelector('.wrapper')
const buttonPrikaz = document.querySelector('#prikaz')
const buttonPobednik = document.querySelector('#pobednik')
const divPrikaz = document.querySelector('#pokemoni-prikaz')
const divPobednik = document.querySelector('#pobednik-prikaz')

pokemoni.forEach(pok=>{

    const opisP = document.createElement('p')
    opisP.textContent = pok.ime + ', ' + pok.vrsta + ', ' + pok.sposobnosti + ', napad:' + pok.karakteristike.napad + ', odbrana:' + pok.karakteristike.odbrana +', brzina:' + pok.karakteristike.brzina

    const slika = document.createElement('img')
    slika.src = pok.imgUrl
    slika.height = '200'
    slika.width = '200'

    divPrikaz.append(opisP, slika)
    
})

buttonPrikaz.addEventListener('click', ()=>{
    divPrikaz.classList.remove('hide')
    divPobednik.classList.add('hide')
})

buttonPobednik.addEventListener('click', () =>{
    if(pobednik()){
        const opisPobednika = document.createElement('p')
        opisPobednika.textContent = pokemoni[0].ime + ', ' + pokemoni[0].vrsta + ', ' + pokemoni[0].sposobnosti + ', napad:' + pokemoni[0].karakteristike.napad + ', odbrana:' + pokemoni[0].karakteristike.odbrana +', brzina:' + pokemoni[0].karakteristike.brzina

        const slikaPobednika = document.createElement('img')
        slikaPobednika.src = pokemoni[0].imgUrl
        slikaPobednika.height = '200'
        slikaPobednika.width = '200'

        divPobednik.append(opisPobednika, slikaPobednika)

        divPobednik.classList.remove('hide')
        divPrikaz.classList.add('hide')

    }
    return
})