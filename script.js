// Levi Alves Sant'ana e Lorena Galrão França
const botaoIniciar = document.getElementById('iniciar');
const jogarNovamente = document.getElementById('jogarnovamente');
const botaoJogarNovamente = document.getElementById('jogardnv');
const iniciar = document.getElementById('iniciar');
const formulario = document.getElementById('formulario');
const principal = document.getElementById("principal");
const menu = document.getElementById('menu');
let resposta = document.getElementById('resposta');
let tentativasRestantes = document.getElementById('tentativas');
let exibirChutes = document.getElementById('chutes');
let mensagem = document.getElementById('msg');

let numero
let tentativas
let chutes
principal.style.display = 'none';

function iniciarjogo(){
    numero = Math.floor(Math.random()*21);
    tentativas = 10;
    chutes = [];
    menu.style.display = 'none';
    principal.style.display = 'grid';
    let teste = document.getElementById('teste');
    teste.textContent = numero;
}

botaoIniciar.addEventListener('click', iniciarjogo)

function verificar_palpite(num){
    if(num<0 || num>20 || isNaN(num)){
        msg.style.color = "red";
        msg.textContent = "O número deve ser maior ou igual a 0";
        chutes.push(num);
    } else if(num==numero){
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
    const msgTentativas = document.getElementById("msgTentativas");
    tentativasRestantes.textContent = tentativas;
    if(tentativas<=6 && tentativas>3){
        msgTentativas.style.color = "#FF4500";
        tentativasRestantes.textContent = tentativas;
    } else if(tentativas<=3){
        msgTentativas.style.color = "red";
        tentativasRestantes.textContent = tentativas;
    } else if(tentativas==0){
        mensagem.style.color = "red";
        mensagem.textContent = `Poxa, você perdeu... A resposta era ${numero}`;
    }
    exibirChutes.textContent = `Chutes: ${chutes.join(', ')}`;
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const chute = parseInt(document.getElementById('chute').value)
    verificar_palpite(chute);
    tentativas--;
    exibirMensagem();

    if(tentativas==0 || chute==numero){
        document.getElementById("chute").disabled = true;
        document.getElementById('chutarbotao').disabled = true;
        jogarNovamente.style.display = 'grid';
    }
})

botaoJogarNovamente.addEventListener('click', function(){
    numero = Math.floor(Math.random()*21);
    tentativas = 10;
    chutes = [];

    document.getElementById("chute").disabled = false;
    document.getElementById("chutarbotao").disabled = false;
    document.getElementById("chute").value = "";
    mensagem.textContent = "";
    mensagem.style.display = 'block';
    jogarNovamente.style.display = "none";

    exibirMensagem();
});