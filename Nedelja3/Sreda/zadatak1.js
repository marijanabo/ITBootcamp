function maxOf3(x, y, z){
    if(x > y){
        maxValue = x
    }
    else{
        maxValue = y
    }
    if(z > maxValue){
        maxValue = z
    }
    return maxValue
}

console.log('Maksimum od 3 broja je: ' + maxOf3(-9, 7, -0.6))