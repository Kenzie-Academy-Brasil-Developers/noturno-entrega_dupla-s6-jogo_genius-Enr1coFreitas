// Elementos com as cores
const azul = document.getElementById('1');
const amarelo = document.getElementById('2');
const verde = document.getElementById('3');
const vermelho = document.getElementById('4');
const botaoInicio = document.getElementById('novoJogo')
let placar = 0;
let cor = [];

//
azul.addEventListener('click')
//inicio real


//inicio jogo e mostra placar
function novojogo(){
    alert('1 rodada' + ' ' + 'seu placar é' + ' ' + placar);
    botaoInicio.addEventListener('click', () =>{placar++;numeroAleatoria(placar)})
   }
   //funcao executa

    //if click em qualCor = true
    //score +1
    //if click Qual cor = false
    //score = 0 game over
    
}



//decide qual cor é cada const e anima
function qualCor(element){
    if(element === 1) {
        return azul;// .style...verificar
    }else if(element === 2) {
        return amarelo;
    }else if (element === 3) {
        return verde;
    }else if (element === 4) {
        return vermelho;
    } 
}

 //Gera aleatoriamente os valores de cor
function numeroAleatoria(placar){
    
    if(placar > 0){
        for(let index = 1;index <= placar;index++){ 
            let numero = Math.random(1,4)
            numero = Math.floor(numero)
            cor.push(numero)
            
        }
        cor.forEach(element => {qualCor(element)});
}
}
//funcao que le o array cor
function genius(cor,placar){
    for(let index = placar;index < placar;index++){
        let numeroBotao = cor[index];
        const botao = document.getElementById(`${numeroBotao}`);
        //(botao.addEventListener('click',{placar++;numeroAleatoria(placar)}
     
        
    }
    
  

















//criar pagina inicial esta incomleto não deu tempo de seguir  a demo
criarModal()
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