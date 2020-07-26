let n = 5
let m = 5
let redLevo = ''
let redDesno = ''


for(let i = 1; i <= n; i++){
    redLevo = ' '.repeat(m - i) + '#'.repeat(i)
    redDesno += '#'
    console.log(redLevo + ' ' + redDesno)
}