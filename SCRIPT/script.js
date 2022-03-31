
let placar = 0; // placar geral e indice  dos numeros randomicos
let cor = []; // array com os numeros aleatorios
let clicks = []; // clicks do usuario


function criarTabuleiro(input){
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('tabuleiro')

    container.innerHTML = `
        <div class="botao botao--green"></div>
        <div class="botao botao--yellow"></div>
        <div class="botao botao--red"></div>
        <div class="botao botao--blue"></div>
        <div class="infos">${input}</div>
        `

    main.appendChild(container)
}

function criarModal(){
    const main = document.querySelector("main");
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp');
    popUp.classList.add('show');
    main.appendChild(popUp);

    const popUpTitle = document.createElement('h2');
    popUpTitle.setAttribute('id', 'popUp_title');
    popUpTitle.innerText = 'JOGO GENIUS';
    popUp.appendChild(popUpTitle);

    const form = document.createElement('form');
    form.setAttribute('id', 'popUp_form');

    const input = document.createElement('input');
    input.setAttribute('id', 'input_name');

    const label = document.createElement('label');
    label.htmlFor = 'input_name';
    label.innerText = 'Insira seu nome aqui';

    const button = document.createElement('button');
    button.setAttribute('id', 'popUp_button');
    button.innerText = 'INICIAR O JOGO';

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    popUp.appendChild(form);
}


<<<<<<< HEAD
criarModal();
=======

criarModal()
>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1

const button = document.getElementById('popUp_button')
button.addEventListener('click', (event) => {
    event.preventDefault()

    const popUp = document.getElementById('popUp');
<<<<<<< HEAD
    const input = document.getElementById('input_name').value;
    if (input === ''){
        console.log('input vazio')
=======
    const input = document.getElementById('input_name').value
    if (input === '') {
        console.log('Input vazio')
    } else {
        popUp.classList.add('hide')
        popUp.classList.remove('show')
        criarTabuleiro(input)
        adicionarEventosAosBotoes()
        gerarNumeroRandomico(1,4)
>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1
    }
    else{
        popUp.classList.add("hide");
        popUp.classList.remove('show');
        placar++
        criarTabuleiro(input);
        gerarNumeroRandom(1,4);
        adicionarEventosAosBotoes();
        jogoUsuario();
    }
});

//demo codes

<<<<<<< HEAD
function gerarNumeroRandom(min, max){
    if (placar > 0){
        let cor = Math.floor(Math.random() * (max - min)) + min;
        console.log(cor)
    }
    return cor;
    
=======
function gerarNumeroRandomico(min, max){
    cor = Math.floor(Math.random() * (max - min)) + min;
    return cor
>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1
}

function animacao(botao, cor){
    botao.classList.add(`animacao${cor}`);
    setTimeout(function(){
        botao.classList.remove(`animacao${cor}`)
    }, 1000)
}

function animarBotao(botao, cor){
    setTimeout(function(){
        animacao(botao, cor)
    }, 1000)
}

function adicionarEventosAosBotoes(){
    const botoes = [...document.getElementsByClassName('botao')];
    botoes.forEach(function(element){
        element.addEventListener('click', function(event){
            const botao = event.target;
            const corBotao = botao.classList[1].split('-')[2]
            animarBotao(botao, corBotao)
        })
    })
}


<<<<<<< HEAD
/*const caixaCores = document.getElementById('conteinerGlobal');
=======
const caixaCores = document.getElementById('conteinerGlobal');
>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1
caixaCores.addEventListener('click',(event) =>{
    jogoUsuario(event)
})
jogoUsuario()
<<<<<<< HEAD
*/

=======
>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1
//se o clique do usuario for no elemento com o id numerico equivalente ao array cor então o jogo prossegue
function jogoUsuario(event){
    
    let idCor = event.target.id
    clicks.push(idCor)
    for(let index = 0;index <cor.length;index++){
    if(clicks[index] === cor[index]){
<<<<<<< HEAD
        Window.alert('Você passou!')
        placar++
    }else{
        Window.alert('Você perdeu!')
=======
        Window.alert('voce passou')
        placar++
    }else{
        Window.alert('voce perdeu!')
>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1
        placar = 0
        cor = [];

    }
}
}

//Elementos com as cores

//

//inicio real


//inicio jogo e mostra placar
/* 
const azul = document.getElementById('1');
const amarelo = document.getElementById('2');
const verde = document.getElementById('3');
const vermelho = document.getElementById('4');
//botao que inicia o codigo
const botaoInicio = document.getElementById('novoJogo')
function novojogo(){
    alert('1 rodada' + ' ' + 'seu placar é' + ' ' + placar);
    placar++
    botaoInicio.addEventListener('click', () =>{corAleatoria(placar)}) 
   }
   novojogo() */
//Gera aleatoriamente os valores de cor




/*
function corAleatoria(placar){
    
    if(placar > 0){
        for(let index = 1;index <= placar;index++){ 
            let numero = Math.floor(Math.random(1,4) * placar);//Math.random(1,4)
            //numero = Math.floor(numero)
            
            cor.push(numero)
            
        }
        cor.forEach(element => {qualCor(element)});
}
}
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
 
//funcao que le o array cor
 function genius(cor,placar){
    for(let index = placar;index < placar;index++){
        let numeroBotao = cor[index];
        const botao = document.getElementById(`${numeroBotao}`);
        botao.addEventListener('click' ())
     
        
    }
}
*/

<<<<<<< HEAD
=======

>>>>>>> 58021489a528fd31f33d9da6693cb7e6fea04aa1
