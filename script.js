// Elementos com as cores
const azul = document.getElementById('azul');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');
const vermelho = document.getElementById('vermelho');
const botaoInicio = document.getElementById('novoJogo')
let placar = 1;
let cor = [];

//inicio jogo e mostra placar
function novojogo(){
    alert('1 rodada' + ' ' + 'seu placar é' + ' ' + placar);
    botaoInicio.addEventListener('click', () =>{placar++})
   
}
//decide qual cor é cada const
function qualCor(cor){
    if(cor === 1) {
        return azul;
    }else if(cor === 2) {
        return amarelo;
    }else if (cor === 3) {
        return verde;
    }else if (cor === 4) {
        return azul;
    } 
}

// Gera aleatoriamente os valores de cor
function corAleatoria(){
    Math.random(1,4);
    

}
function genius(){
    
}