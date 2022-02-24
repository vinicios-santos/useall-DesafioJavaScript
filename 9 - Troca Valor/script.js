document.querySelector('button').addEventListener('click', troca); // puxa o button e np momento que ele for clicado acontece a função troca


function troca() {
    let n1 = document.getElementById("numero1").value; // pega o valor do input numero1
    let n2 = document.getElementById("numero2").value; // pega o valor do input numero2
    console.log(n1)
    console.log(n2)

    n1 ^= n2
    n2 ^= n1
    n1 ^= n2


    alert("Primeiro valor: " + n1 + "        Segundo valor:  " + n2)
}