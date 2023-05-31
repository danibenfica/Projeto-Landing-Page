var Leonardo = document.getElementById('Leonardo')
var Samantha = document.getElementById('Samantha')
var Bruna = document.getElementById('Bruna')
var setaDireita = document.getElementById('setaDireita')
var setaEsquerda = document.getElementById('setaEsquerda')

function rolarParaDireita () {
    Leonardo.style.display = 'none'
    Bruna.style.display = 'flex'
    setaEsquerda.style.display = 'flex'
    setaEsquerda.style.marginTop = '55px'
    setaDireita.style.display = 'none'
}

function rolarParaEsquerda () {
    Leonardo.style.display = 'flex'
    Bruna.style.display = 'none'
    setaEsquerda.style.display = 'none'
    setaDireita.style.display = 'flex'
    setaDireita.style.marginTop = '55px'
    
}