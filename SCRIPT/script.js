
let placar = 0; // placar geral e indice  dos numeros randomicos
let cor = []; // array com os numeros aleatorios
let clicks = []; // clicks do usuario



function criarTabuleiro(input){
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('tabuleiro')

    container.innerHTML = `
        <div class="botao botao--green" id = "3"></div>
        <div class="botao botao--yellow" id = "2"></div>
        <div class="botao botao--red" id = "4"></div>
        <div class="botao botao--blue" id = "1"></div>
        <div class="infos">${input}</div>
    `
    main.appendChild(container)
}
const label = document.createElement('label')
function criarModal() {
    const main = document.querySelector('main')
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp')
    popUp.classList.add('show')
    main.appendChild(popUp)

    const popUpTitulo = document.createElement('h2')
    popUpTitulo.setAttribute('id', 'popUp_title')
    popUpTitulo.innerText = 'JOGO GENIUS'
    popUp.appendChild(popUpTitulo)

    const form = document.createElement('form')
    form.setAttribute('id', 'popUp_form')

    const input = document.createElement('input')
    input.id = 'input_name'

    
    label.htmlFor = 'input_name';
    label.innerText = 'Insira seu nome aqui:';

    const button = document.createElement('button')
    button.setAttribute('id', 'popUp_button')
    button.innerText = 'INICIAR O JOGO';

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)
    popUp.appendChild(form)

}



criarModal()



const button = document.getElementById('popUp_button')
button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const popUp = document.getElementById('popUp');
    const input = document.getElementById('input_name').value
    if (input === '') {
        console.log('Input vazio')
    } else {
       
        popUp.classList.add('hide')
        popUp.classList.remove('show')
        criarTabuleiro(input)
        adicionarEventosAosBotoes()
        gerarNumeroRandomico(1,4)
    }

})

// LOGICA
//GERA UM NUMERO RANDOMICO ARMAZENADO NO ARRAY COR [1-2-3-4] // click [1,2,3,4]
// PROGRAMA ANIMAÇÃO //
// CADA COR É ATRIBUIDA A UM ID 1AZUL,2VERDE,3AMARELO,4VERMELHO//
//FUNCAO LE O ARRAY COR E EXIBE ANIMAÇÃO COM BASE NELE //
// ARRAY CLICKS ARMAZENA OS CLICKS DO USUARIO <<
// SE CLICKS[INDEX] === COR [INDEX] VOCE PASSOU. <<

//tempo de animação nao funcionando
//evento de clique estranho


//CODIGOS DA DEMO

function gerarNumeroRandomico(min = 1, max = 4){

    let numero = Math.floor(Math.random() * (max - min)) + min;
    cor.push(numero)
    animarBotao(cor);
    
    
}

function animacao(botao, cor){
    
    botao.classList.add(`animacao${cor}`)
    setTimeout(function(){
        botao.classList.remove(`animacao${cor}`)
    },1000)
}

function animarBotao(cor){
    let corSelect = "";
    let buttonSelect = "";
    for(let i = 0; i < cor.length;i++){
        let corPisca = setTimeout(() => {
            corSelecionada(cor[i]) 
            clicks = []
            
        },300)

    }  
}


function corSelecionada(corSelecionada){
    const num1 = document.getElementById('1'); //azul
    const num2 = document.getElementById('3'); //verde
    const num3 = document.getElementById('2'); // amarelo
    const num4 = document.getElementById('4'); //red
    console.log(corSelecionada); 
    switch(corSelecionada){
        case 1: let azul = setInterval(()=> {
                num1.classList.add(`animacaoblue`)
                setTimeout(function(){
                    num1.classList.remove(`animacaoblue`);
                    clearInterval(azul);
                },500)
            }, 1100)
            break;
            case 2: let amarelo = setInterval(() => {
                num3.classList.add(`animacaoyellow`)
                setTimeout(function(){
                    num3.classList.remove(`animacaoyellow`);
                    clearInterval(amarelo);
                },500)
            }, 1300)
            break;
            case 3: let verde = setInterval(() => {
                num2.classList.add(`animacaogreen`)
                    setTimeout(function(){
                        num2.classList.remove(`animacaogreen`);
                        clearInterval(verde);
                    },500)
            }, 1500)
                break;
            case 4: let vermelho = setInterval(() => {
            num4.classList.add(`animacaored`)
                setTimeout(function(){
                    num4.classList.remove(`animacaored`);
                    clearInterval(vermelho);
                },500)
        }, 1700)
            break;
    }
    /*console.log(i)
        if(cor[i] === 1){
            corSelect = 'blue'
            buttonSelect = num1
        }
        else if(cor[i] === 3){
            corSelect = 'green'
            buttonSelect = num2
        }
        else if(cor[i] === 2){
            corSelect = 'yellow'
            buttonSelect = num3
        }
        else if(cor[i] === 4){
            corSelect = 'red'
            buttonSelect = num4
        }*/
}

function adicionarEventosAosBotoes(){
    const caixaCores = document.querySelector('.tabuleiro')
    caixaCores.addEventListener('click',(event) =>{
    jogoUsuario(event)
})

    const botoes = [...document.getElementsByClassName('botao')]
    console.log(botoes)
    botoes.forEach(function(elem){
        elem.addEventListener('click', function(e){
            const botao = e.target
            const corBotao = botao.classList[1].split('-')[2]
            animarBotao(botao, corBotao)
        })
    })
}



//se o clique do usuario for no elemento com o id numerico equivalente ao array cor então o jogo prossegue
function jogoUsuario(event){
    let idCor = event.target.id
    clicks.push(Number(idCor))
    console.log("cor:", cor)
    console.log("clique:", clicks)
    for (let i = 0; i < cor.length; i++){
        if(clicks[i] === cor[i]){
            if(i === cor.length - 1){
                //window.alert('voce passou')
                gerarNumeroRandomico(1,4);
                //animarBotao()
                //window.alert('Você acertou');
                //nameInGame.innerText = "Você acertou!"
            }
        }
        if(clicks[placar] !== cor[placar]){
            alert('Você perdeu!')
            placar = 0
            cor = [];
            clicks = [];         
           
        }
    }
    /*if(clicks[placar] === cor[placar]){
        //window.alert('voce passou')
        gerarNumeroRandomico(1,4)
        console.log('voce acertou');
        
    }
    else if(clicks[placar] !== cor[placar]){
            window.alert('voce perdeu!')
            placar = 0
            cor = [];
            clicks = [];         
           
    }

   */
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


