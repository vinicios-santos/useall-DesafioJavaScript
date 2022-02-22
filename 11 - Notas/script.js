document.querySelector('button').addEventListener('click', saque);

let nota


function saque(){
let valor = document.querySelector('input').value

if(valor % 10 !=0){
    alert("Valor indisponível, apenas notas de R$100, R$50, R$20 e R$10 á disposição neste caixa.")
}

let nota  = parseInt(valor / 100);
if(nota > 0){
let img = document.createElement("img");
img.setAttribute('src', '100reais.jpg')
let p = document.createElement("p")
p.textContent = (nota+"x");
document.body.appendChild(p);
document.body.appendChild(img);
valor  = valor  % 100;
}

nota = parseInt(valor / 50);
if(nota > 0){
let img = document.createElement("img");
img.setAttribute('src', '50reais.jpg')
let p = document.createElement("p")
p.textContent = (nota +"x");
document.body.appendChild(p);
document.body.appendChild(img);
valor  = valor  % 50;
}

nota  = parseInt(valor / 20);
if(nota > 0){
let img = document.createElement("img");
img.setAttribute('src', '20reais.jpg')
let p = document.createElement("p")
p.textContent = (nota +"x");
document.body.appendChild(p);
document.body.appendChild(img);
valor  = valor  % 20;
}

nota  = parseInt(valor / 10);
if(nota > 0){
let img = document.createElement("img");
img.setAttribute('src', '10reais.jpg')
let p = document.createElement("p")
p.textContent = (nota +"x");
document.body.appendChild(p);
document.body.appendChild(img);
valor  = valor  % 10;
}
}

