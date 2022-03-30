// Elementos com as cores
const azul = document.getElementById('azul');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');
const vermelho = document.getElementById('vermelho');
const botaoInicio = document.getElementById('novoJogo')
let placar = 1;
let cor = [];



//criar pagina inicial esta incomleto não deu tempo de seguir  a demo

function criarModal(){
    const main = document.querySelector('main')
    const popUp = document.createElement('div')
    popUp.setAttribute('id','popUp')
    popUp.classList.add('show')
    main.appendChild(popUp)
    const popUpTitulo = document.createElement('h2')
    popUpTitulo.setAttribute('id','popUp_title')
    popUpTitulo.innerText = 'GENIUS'
    popUp.appendChild(popUpTitulo)

    const form = document.createElement('form')
    form.setAttribute('id','popUp_form')

    const input = document.createElement('input')
    input.id = 'input_name'

    const label = document.createElement('label')
    label.htmlFor = 'input_name';
    label.innerText = 'Insira seu nome'

    const button = document.createElement('button')
    button.setAttribute('id','popUp_button')
}
criarModal()
//inicio real


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
//function corAleatoria(){
 //   Math.random(1,4);
    

//}
//funcao que le o array cor
f//unction corAtual(cor){
   // cor.forEach(//anima o css aqui dentro)
//}

//funcao executa
function genius(){
    //if click em qualCor = true
    //score +1
    //if click Qual cor = false
    //score = 0 game over
    
}