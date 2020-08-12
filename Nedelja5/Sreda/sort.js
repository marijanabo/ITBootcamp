export function najbrzi(x){
    let sortiranoPoBrzini = x.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)
    return sortiranoPoBrzini
}

export function najjaci(x){
    x.sort((a,b)=> b.karakteristike.napad - a.karakteristike.napad)
    const pobednik = x[0]
    return pobednik
}