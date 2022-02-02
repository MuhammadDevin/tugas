function devin(ac) {
    return ac % 2 == 0
}

function arrasyid(ac, callback) {
    let isTrue = callback(ac)
    if(isTrue){
        console.log(`ini ${ac} adalah bilangan genap`)
    } else {
        console.log(`ini ${ac} adalah bilangan ganjil`)
    }
}
arrasyid(2, devin)