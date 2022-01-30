function sumaTodos (arr){
    let inicial = arr[0]
    let final = arr[1]
    let numTerminos = Math.abs(inicial - final) + 1;
    const suma =((inicial+final)*numTerminos)/2;
    console.log(suma)


}
sumaTodos([3,9])