document.querySelector('.adicionar').addEventListener('click', adiciona);
document.querySelector('.numeros').addEventListener('click', mostraNumeros);
document.querySelector('.repetidos').addEventListener('click', confereRepetidos);

let posi = 0;
let posiRepetidos = 0;
let vetor = new Array(posi);
let vetorRepetidos = new Array(posiRepetidos)
let tamanho
let i;
let j;
let resp = 0;


function adiciona() {
    document.querySelector(".repetidos").style.display = "unset";
    document.querySelector(".numeros").style.display = "unset";
    let numero = document.querySelector('input').value;
    vetor.push(numero);
    console.log(vetor);
    posi++
    tamanho = posi;

}
function mostraNumeros() {
    alert(Array(vetor))
}
function confereRepetidos() {
    console.log("entrou")
    for (i = 0; i <= tamanho; i++) {
        for (j = i + 1; j < tamanho; j++) {
            if (vetor[j] == vetor[i]) {
                resp = 1;
                vetorRepetidos.push(j);
                posiRepetidos++
            }
        }
    }
    if (resp == 1) {
        alert("Há valores repetidos")
    } else {
        alert("Não há valores repetidos")
    }
}