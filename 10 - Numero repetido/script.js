document.querySelector('.adicionar').addEventListener('click', adiciona);
document.querySelector('.numeros').addEventListener('click', mostraNumeros);
document.querySelector('.repetidos').addEventListener('click', confereRepetidos);

let posi = 0;
let posiRepetidos = 0;
let vetor = new Array();
let vetorRepetidos = new Array()
let tamanho = 0;
let i;
let j;
let resp = 0;


function adiciona() {
    document.querySelector(".repetidos").style.display = "unset";
    document.querySelector(".numeros").style.display = "unset";
    let numero = document.querySelector('input').value;
    vetor.push(numero);
    console.log(vetor);
    tamanho++;
    //toda vez que digitar um número e clicar em adicionar, colocar um valor em cada posição do array e um contador para saber quantas posições foram adicionadas.
}
function mostraNumeros() {
    alert(Array(vetor))
    //função para mostrar os valores adicionados ao array
}
function confereRepetidos() {

    for (i = 0; i <= tamanho; i++) {
        for (j = i + 1; j < tamanho; j++) {
            if (vetor[j] == vetor[i]) {
                resp = 1;
                vetorRepetidos.push(j);

                //2 for percorrem o vetor, um partindo da posição 0 e outro da posição 1, se os valores forem iguais retorna 1
            }
        }
    }
    if (resp == 1) {
        alert("Há valores repetidos")
    } else {
        alert("Não há valores repetidos")
    }
}