//Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
//Уноси се колико пице поједете на месечном нивоу, и колико година имате 
//(Рачуна се да је довољно достављати до стоте године)
function lifeSupply(numPerMonth,age){
    let numPerYear = numPerMonth * 12
    let lifeSupply = numPerYear * (100 - age)
    return lifeSupply
}

lifeSupply(10,26) // Враћа 8880
console.log(lifeSupply(10,26)) // Исписује 8880