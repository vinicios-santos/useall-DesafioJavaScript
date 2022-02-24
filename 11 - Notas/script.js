document.querySelector('button').addEventListener('click', saque); // após o click no botão executa a função saque

let nota


function saque() {
    let valor = document.querySelector('input').value

    if (valor % 10 != 0) {
        alert("Valor indisponível, apenas notas de R$100, R$50, R$20 e R$10 á disposição neste caixa.") // se dividido por 10 e a sobra de divisão for diferente de 0 ele diz que o valor não está disponível, esse if tem como função de não aceitar unidade diferente de 0 porque a menor nota é de 10 reais
    }

    let nota = parseInt(valor / 100);            //atribui a variável nota que será do tipo inteiro e o valor digitado pelo usuário divido por 100 será a quantidade de notas necessárias.
    if (nota > 0) {                              //confere se há necessidade de uma nota de 100 reais, caso não, passa pra próxima nota
        let img = document.createElement("img"); //cria uma tag img
        img.setAttribute('src', '100reais.jpg')  //atribui um src á imagem, no caso a nota de 100 reais
        let p = document.createElement("p")      //cria uma tag p
        p.textContent = (nota + "x");            //atribui a tag p a quantidade de notas de 100 reais
        document.body.appendChild(p);            //manda a tag p pro body 
        document.body.appendChild(img);          //manda a img pro body
        valor = valor % 100;                     //pega o que sobrar da divisão por 100 e manda pro próximo if
    }                                            //repete o mesmo processo para as próximas notas

    nota = parseInt(valor / 50);
    if (nota > 0) {
        let img = document.createElement("img");
        img.setAttribute('src', '50reais.jpg')
        let p = document.createElement("p")
        p.textContent = (nota + "x");
        document.body.appendChild(p);
        document.body.appendChild(img);
        valor = valor % 50;
    }

    nota = parseInt(valor / 20);
    if (nota > 0) {
        let img = document.createElement("img");
        img.setAttribute('src', '20reais.jpg')
        let p = document.createElement("p")
        p.textContent = (nota + "x");
        document.body.appendChild(p);
        document.body.appendChild(img);
        valor = valor % 20;
    }

    nota = parseInt(valor / 10);
    if (nota > 0) {
        let img = document.createElement("img");
        img.setAttribute('src', '10reais.jpg')
        let p = document.createElement("p")
        p.textContent = (nota + "x");
        document.body.appendChild(p);
        document.body.appendChild(img);
        valor = valor % 10;
    }
}

