// Levi Alves Sant'ana e Lorena Galrão França

const formulario = document.getElementById('formulario');
let resposta = document.getElementById('resposta');
<<<<<<< HEAD
let tentativasRestantes = document.getElementById('tentativas');
=======
let erros = document.getElementById('erros');
let chances = document.getElementById('chances');
let tentativas = 10;
>>>>>>> f55ab4e6f2880012219c7364fae99104bfb7a400

let numero = Math.floor(Math.random()*21);
let tentativas = 9;
const teste = document.getElementById('teste');
teste.innerHTML = numero;

function verificar_palpite(num){
    if(num<0 || num>20 || num==""){
        console.log("O número deve ser maior ou igual a 0");
    } else if(num==numero){
       console.log(`Parabéns, você acertou! A resposta era: ${numero}`);
    } else if(num>numero){
        console.log("O número é menor");
    } else if(num<numero){
        console.log("O número é maior");
    }
}

while(tentativas>0){
    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const chute = document.getElementById('chute').value;
<<<<<<< HEAD
    
        verificar_palpite(chute);
        tentativas--;
        tentativasRestantes.textContent = tentativas;
=======
        if((chute<min) || (chute>max)){
            chutes.pop(chute);
        } else{
            chutes.push(chute);
            erros.textContent = chutes.join(', ');
        }
        
        verificar_palpite(chute, resposta);
        tentativas -= 10;
        chances.textContent = tentativas;
>>>>>>> f55ab4e6f2880012219c7364fae99104bfb7a400

        if(tentativas==0){
            console.log(`Poxa, você perdeu... O número era: ${numero}`);
        }
    })
}