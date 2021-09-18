
const numero = document.getElementById("numero");

const botao = document.getElementById("env");

botao.addEventListener('click', () => {
  numero.value%2 === 0 ? alert('par') : alert('impar');
});

// function clicar(a){

//     if(Number(a)%2 === 0){
//        alert("par")
//     }else{
//         alert("impar")
//     }

// }
