function divisibleByFive(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 5 === 0){
            console.log(arr[i])
        }
    }
}

divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5