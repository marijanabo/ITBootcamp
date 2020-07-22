var cenaProizvoda = 19520
var kolicinaNovca = 18720

if(cenaProizvoda > kolicinaNovca){
    console.log('Nemate dovoljno novca. ' + `Trenutno stanje na racunu je ${kolicinaNovca} dinara.`)
}
else {
    console.log('Uspesno ste kupili proizvod. ' + `Trenutno stanje na racunu je ${kolicinaNovca - cenaProizvoda} dinara.`)
}