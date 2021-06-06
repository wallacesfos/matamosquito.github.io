var largura;
var altura;
var vidas = 1;
tempo = 30
var tempinho


function ajustaTamanho(){
    largura =  window.innerWidth;
    altura = window.innerHeight;
    console.log(largura, altura);
}
ajustaTamanho();

var cronometro = setInterval(function(){
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criamosca)
        window.location.href = 'vitoria.html'
    }

    document.getElementById('cronometro').innerHTML = tempo
    tempo -= 1
}, 1000)


function posicaoRandomica(){

    var elementoMosquito = document.querySelector("#mosquito");
    
    if (elementoMosquito){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src = "./imagens/coracao_vazio.png"
        
        vidas++
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0? 0 : posicaoX;
    posicaoY = posicaoY < 0? 0 : posicaoY;

    //Criar o elemento HTML
    var mosquitinho = document.createElement('img')
    document.body.appendChild(mosquitinho);
    mosquitinho.src = './imagens/mosca.png';
    mosquitinho.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquitinho.style.left = posicaoX + 'px'
    mosquitinho.style.top = posicaoY + 'px'
    mosquitinho.style.position = 'absolute'
    mosquitinho.id = 'mosquito'
    mosquitinho.onclick = function(){
        document.getElementById('mosquito').remove();
    }
}


// Tamanho e lado aleatório
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);
    
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}

