let jogosAlugados = 0;

function contarEExibirJogosAlugados (){
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}


function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let btnAlugarDevolver = jogoClicado.querySelector('.dashboard__item__button');
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
        btnAlugarDevolver.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        btnAlugarDevolver.textContent = 'Alugar';
        alert('O jogo foi devolvido para nossa biblioteca.');
        jogosAlugados--;
        }
    } else {
        btnAlugarDevolver.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        btnAlugarDevolver.textContent = 'Devolver';
        jogosAlugados++;

        contarEExibirJogosAlugados();        
    }
};

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})
