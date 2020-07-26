let cenaPice = 600
let R = 30
let r, P
r = R / 2
P = r * r * Math.PI

if(cenaPice > 0 && R > 0){
    console.log("Cena pice po cm^ je:", (cenaPice / P))
}
else {
    console.log(' ')
}