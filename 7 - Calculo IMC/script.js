document.querySelector('button').addEventListener('click', calculoImc); // puxa o button e no momento que ele é clicado acontece a função calculoIMC



function calculoImc() {
    let peso = document.querySelector('#peso').value; //puxa o id do input peso e armazena o valor
    console.log(peso); 
    let altura = document.querySelector('#altura').value; //puxa o id do input altura e armazena o valor
    console.log(altura);
    let imc = peso / (altura * altura); // fórmula de cálculo imc

    if (imc < 18) { // caso o imc seja menor de 18 imprime "Abaixo do peso" 
        alert("imc:  " +imc+ "  Abaixo do peso")

    }
    if (imc < 25 && imc >= 18) { // caso o imc esteja entre 18 e 24 imprime "Peso Normal" 
        alert("imc:  " +imc+ "  Peso Normal")


    }
    if (imc >= 25) { // caso o imc seja maior ou igual a 25 imprime "Acima do peso"
        alert("imc:  " +imc+ "  Acima do peso")


    }
}

