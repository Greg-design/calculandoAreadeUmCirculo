// Com seus conhecimentos já adquiridos em HTML, CSS e javaScript,
// crie uma página Web que tenha o objetivo de calcular a área de uma circunferência utilizando a seguinte
//  fórmula: area= pi x raio². Considere para este problema que pi = 3.14159.
//   Após a criação da página e do calculo,
//   efetuar um push para um novo repositório no Github que você deverá criar chamado "Área do Círculo".
//  Insira a URL do repositório criado no campo abaixo.


let  raio = document.getElementById("raio")
let botao = document.getElementById("env")



const pi = 3.14159;

botao.addEventListener('click', ()=>{

    const area = pi * Number(raio.value) ** 2;
    alert(area);

})