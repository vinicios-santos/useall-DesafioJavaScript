document.getElementById('calcular').addEventListener('click', calculoMedia);
document.getElementById('calcularVarios').addEventListener('click', calculoVarias);
document.getElementById('adicionar').addEventListener('click', adiciona);
document.getElementById('calcularMediaTotal').addEventListener('click', mostraMedia);
document.getElementById('mostrarNotas').addEventListener('click', mostraNotas);



let posi = 0;
let tamanho;
var vetor = new Array();
let contador = 0;



function calculoMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var total = (nota1 + nota2 + nota3) / 3;   //calculo básico de média com as notas que o usuário digitar / quantidade de notas
    alert("A média é: " + total)
}

function calculoVarias() {
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.variasNotas').style.display = 'block';
}

function adiciona() {
    document.querySelector('#calcularMediaTotal').style.display = 'unset';
    document.querySelector('#mostrarNotas').style.display = 'unset';
    let numero = parseFloat(document.querySelector('#variasNotas').value);
    vetor.push(numero);
    console.log(vetor);
    contador++;  //toda vez que digitar um número e clicar em adicionar, colocar um valor em cada posição do array e um contador para saber quantas posições foram adicionadas.
}
function mostraMedia() {
    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];  //Repetição para somar todos os valores / tamanho do array;
    }
    alert("A média entre as " + contador + " notas é: " + soma / contador);
}
function mostraNotas() {
    alert("As notas adicionadas são: " + vetor + ".")
}

