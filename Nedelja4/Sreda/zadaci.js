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
    }
}

let pokemon2 = {
    ime: 'Raichu',
    vrsta: 'Electric',
    sposobnosti: ['Static', 'Lightning Rod'],
    karakteristike: {
        napad: 90,
        odbrana: 55,
        brzina: 110
    }
}

let pokemon3 = {
    ime: 'Bulbasaur',
    vrsta: 'Grass',
    sposobnosti: ['Overgrow', 'Chlorophyll'],
    karakteristike: {
        napad: 49,
        odbrana: 49,
        brzina: 45
    }
}

let pokemon4 = {
    ime: 'Squirtle',
    vrsta: 'Water',
    sposobnosti: ['Torrent', 'Rain Dish'],
    karakteristike: {
        napad: 48,
        odbrana: 65,
        brzina: 43
    }
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