let n = 5
let m = 5

for(let i = 1; i <= n; i++){
    let red = ''
    red = ' '.repeat(m - i) + '#'.repeat(i)
    console.log(red)
}