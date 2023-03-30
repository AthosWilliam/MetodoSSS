let video = document.querySelector('video');
let mudo = document.getElementById('mudo');
let pause = document.getElementById('pause');
let compraBtn = document.getElementById('compraBtn')
let preco = document.querySelector('h2')
let pagamento = document.querySelector('.pagamento')
video.volume = 0.0;

function comecar() {
    video.volume = 0.9;
    video.currentTime= 0;

    mudo.style.display = "none";
}

function playPause() {
    if(video.paused){
        video.play();
        pause.style.display = "none"
    } else {
        video.pause();
        pause.style.display = "block"
    }
}

var tempoParaAparecer = 225

setInterval(() =>{
    if(video.currentTime >= tempoParaAparecer){
        compraBtn.style.display = "block";
        preco.style.display = "block";
        pagamento.style.display = "block";
    }
},1000)