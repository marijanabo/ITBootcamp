const buttonOrder = document.querySelectorAll('.order')
const buttonOrderNow = document.querySelectorAll('.order-now')
const divButtons = document.querySelector('#buttons')

const poruka = document.createElement('p')
const brojac = document.createElement('p')
brojac.textContent = 0
divButtons.append(brojac, poruka)

let datumVreme = new Date().getDate() + '/' +
                 new Date().getMonth() + '/' +
                 new Date().getFullYear() + '@' +
                 new Date().getHours() + ':' +
                 new Date().getMinutes() + ':' +
                 new Date().getSeconds()


buttonOrder.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        brojac.textContent++
    })
})

buttonOrderNow.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        if(brojac.textContent === 0){
            poruka.textContent = 'Greska.'
        }
        else{
            poruka.textContent = `Narucili ste ${brojac.textContent} pica(e),[${datumVreme}].`
            brojac.textContent = 0
        }
    })
})