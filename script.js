const formulario = document.getElementById('formulario')
const botao = document.getElementById('chutarbotao')
let resposta = document.getElementById('resposta')

const min = 1;
const max = 20;
let numero = Math.floor(Math.random()*(max-min+1)) + min;

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const chute = document.getElementById('chute').value;
    const teste = document.getElementById('teste');
    teste.textContent = numero

    if(chute<min){
        resposta.textContent = "O número deve ser maior ou igual a 1";
    } else if(chute>max){
        resposta.textContent = "O número deve ser menor ou igual a 20";
    } else if(chute==numero){
        resposta.textContent = `Parabéns, você acertou! A resposta era: ${numero}`;
    } else if(chute>numero){
        resposta.textContent = "O número é menor";
    } else if(chute<numero){
        resposta.textContent = "O número é maior";
    }

})