let discoVoador = document.querySelector('.disco-voador')
let h1 = document.querySelector('h1')
let p  = document.querySelector('.conteudo p')

    discoVoador.onanimationend = ()=> devolver()
    h1.onanimationend = ()=> apagarLuzDoDiscoVoador()
    
    function devolver(){
        discoVoador.classList.add('devolver')
        h1.classList.add('animar')
    }


function apagarLuzDoDiscoVoador(){
    discoVoador.classList.remove('devolver')
    discoVoador.classList.add('flutuar')
    p.classList.add('mostrar')
}