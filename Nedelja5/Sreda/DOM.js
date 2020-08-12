// const divWrap = document.querySelector('.wrapper')
const buttonPrikaz = document.querySelector('#prikaz')
const buttonPobednik = document.querySelector('#pobednik')
const divPrikaz = document.querySelector('#pokemoni-prikaz')
const divPobednik = document.querySelector('#pobednik-prikaz')

function prikazi(x){
    x.forEach(el=>{

        const opisP = document.createElement('p')
        opisP.textContent = el.ime + ', ' + el.vrsta + ', ' + el.sposobnosti + ', napad:' + el.karakteristike.napad + ', odbrana:' + el.karakteristike.odbrana +', brzina:' + el.karakteristike.brzina
    
        const slika = document.createElement('img')
        slika.src = el.imgUrl
        slika.height = '200'
        slika.width = '200'
    
        divPrikaz.append(opisP, slika)
        
    })

    divPrikaz.classList.remove('hide')
    divPobednik.classList.add('hide')

    return prikazi
}


function prikaziNajjaceg(x){
    const opisPobednika = document.createElement('p')
    opisPobednika.textContent = x[0].ime + ', ' + x[0].vrsta + ', ' + x[0].sposobnosti + ', napad:' + x[0].karakteristike.napad + ', odbrana:' + x[0].karakteristike.odbrana +', brzina:' + x[0].karakteristike.brzina

    const slikaPobednika = document.createElement('img')
    slikaPobednika.src = x[0].imgUrl
    slikaPobednika.height = '200'
    slikaPobednika.width = '200'

    divPobednik.append(opisPobednika, slikaPobednika)

    divPobednik.classList.remove('hide')
    divPrikaz.classList.add('hide')

    return prikaziNajjaceg
}
    
export {buttonPobednik, buttonPrikaz, divPrikaz, divPobednik, prikazi, prikaziNajjaceg}
