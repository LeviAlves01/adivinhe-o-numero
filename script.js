// Levi Alves Sant'ana e Lorena Galrão França

const botaoIniciar = document.getElementById('iniciarjogo');
const iniciar = document.getElementById('iniciar');
const formulario = document.getElementById('formulario');
let resposta = document.getElementById('resposta');
let tentativasRestantes = document.getElementById('tentativas');
let exibirChutes = document.getElementById('chutes');
let mensagem = document.getElementById('msg');
const principal = document.getElementById("principal");

let numero = Math.floor(Math.random()*21);
let tentativas = 9;
let chutes = [];
let vitoria = false;

const teste = document.getElementById('teste');
teste.textContent = numero;

function iniciarjogo(){
    principal.style.display = "block";
}

botaoIniciar.addEventListener('click', iniciarjogo);

function verificar_palpite(num){
    if(num<0 || num>20 || isNaN(num)){
        vitoria = false;
        msg.style.color = "red";
        msg.textContent = "O número deve ser maior ou igual a 0";
        chutes.push(num);
    } else if(num==numero){
        vitoria = true;
       mensagem.style.color = "green";
       mensagem.textContent = `Parabéns, você acertou! A resposta era: ${numero}`;
       chutes.push(num);
    } else if(num>numero){
        mensagem.style.color = "black";
        mensagem.textContent = "O número é menor";
        chutes.push(num);
    } else if(num<numero){
        mensagem.style.color = "black";
        mensagem.textContent = "O número é maior";
        chutes.push(num);
    }
}

exibirMensagem = () =>{
    tentativasRestantes.textContent = tentativas;
    exibirChutes.textContent = `Chutes: ${chutes.join(', ')}`;
}

iniciarjogo();

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const chute = parseInt(document.getElementById('chute').value);
    
    verificar_palpite(chute);
    tentativas--;
    exibirMensagem();

    if(tentativas==0){
        mensagem.style.color = "red";
        mensagem.textContent = `Poxa, você perdeu... A resposta era ${numero}`;
    }

})