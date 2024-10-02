function soma(a, b){
    return a+b

}

function subtracao(a, b){
    return a-b

}

function multiplicacao(a, b){
    return a*b

}

function divisao(a, b){
    return a/b


}   

function calcular(a, b, op){
    return op(a, b);
}
 let result = calcular (5, 2,  function (a, b) {
    return a % b;
 })


console.log(calcular(5, 5, result));
