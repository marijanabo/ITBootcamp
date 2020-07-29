function cenaPicePocm(r, cenaPice){
    let P = r * r * Math.PI
    return cenaPice / P
}

console.log('Cena pice po cm^ je: ' + (cenaPicePocm(15, 600)))