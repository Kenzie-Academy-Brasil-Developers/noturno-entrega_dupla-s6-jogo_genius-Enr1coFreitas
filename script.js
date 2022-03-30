function criaTabuleiro(input){
    const main = document.getElementById("main")
    const container = document.createElement("section")
    container.classList.add("tabuleiro")
    container.innerHTML = `
        <div id = "3" class = "botao"></div>
        <div id = "2" class = "botao></div>
        <div id = "4" class = "botao"></div>
        <div id = "1" class = "botao"></div>
        <div class="infos">${input}</div>
    `
    main.appendChild(container)
}

// Elementos com as cores
const azul = document.getElementById('1');
const amarelo = document.getElementById('2');
const verde = document.getElementById('3');
const vermelho = document.getElementById('4');
const botaoInicio = document.getElementById('novoJogo')
let placar = 0;
let cor = [];
let clicks = [];
//

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
    




//decide qual cor é cada const e anima
function qualCor(element){
    if(element === 1) {
        azul.classList.add('opacidade')
        return azul;// .style.<< modificar o estila ja nessa função
    }else if(element === 2) {
        amarelo.classList.add('opacidade')
        return amarelo;
    }else if (element === 3) {
        verde.classList.add('opacidade')
        return verde;
    }else if (element === 4) {
        vermelho.classList.add('opacidade')
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
/* function genius(cor,placar){
    for(let index = placar;index < placar;index++){
        let numeroBotao = cor[index];
        const botao = document.getElementById(`${numeroBotao}`);
        botao.addEventListener('click' ())
     
        
    }
}
*/ 
const caixaCores = document.getElementById('conteinerGlobal');
caixaCores.addEventListener('click',(event) =>{
    jogoUsuario(event)
})

function jogoUsuario(event){
    
    let idCor = event.target.id
    clicks.push(idCor)
    for(let index = 0;index <cor.length;index++){
    if(clicks[index] === cor[index]){
        Window.alert('voce passou')
        placar++
    }else{
        Window.alert('voce perdeu!')
        placar = 0
        cor = [];

    }
}
}