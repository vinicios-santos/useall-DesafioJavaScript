document.getElementById('calcular').addEventListener('click', calculoMedia);
document.getElementById('calcularVarios').addEventListener('click', calculoVarias);
document.getElementById('gerar').addEventListener('click', gerarForm);
let criaForm = 1;



function calculoMedia(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    var total = (nota1 + nota2 + nota3)/3;
    alert("A média é: "+total)
}

function calculoVarias(){
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.variasNotas').style.display = 'block';
}

function gerarForm(){
    if(criaForm > 0){
        criaForm ++;
        let inputNotas = document.createElement("input");
        document.body.appendChild(inputNotas)
    }
}