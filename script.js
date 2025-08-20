const formulario = document.getElementById('formulario');
let resposta = document.getElementById('resposta');
let erros = document.getElementById('erros');
let chances = document.getElementById('chances');
let tentativas = 1;

const min = 1;
const max = 20;
let numero = Math.floor(Math.random()*(max-min+1)) + min;
let chutes = [];

function verificar_palpite(num, msg){
    if(num<min){
        msg.textContent = "O número deve ser maior ou igual a 1";
    } else if(num>max){
        msg.textContent = "O número deve ser menor ou igual a 20";
    } else if(num==numero){
        msg.textContent = `Parabéns, você acertou! A resposta era: ${numero}`;
    } else if(num>numero){
        msg.textContent = "O número é menor";
    } else if(num<numero){
        msg.textContent = "O número é maior";
    }
}

while(tentativas<=5){
    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const chute = document.getElementById('chute').value;
        if((chute<min) || (chute>max)){
            chutes.pop(chute);
        } else{
            chutes.push(chute);
            erros.textContent = chutes.join(', ');
        }
        
        verificar_palpite(chute, resposta);
        tentativas += 1;

    const teste = document.getElementById('teste');
    teste.textContent = numero
})
}