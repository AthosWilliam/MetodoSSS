let video = document.querySelector('video');
let mudo = document.getElementById('mudo');
let pause = document.getElementById('pause');
let compraBtn = document.getElementById('compraBtn')
let preco = document.querySelector('h2')
let pagamento = document.querySelector('.pagamento')
let garantia = document.querySelector('.garantia')
let checkout = document.getElementById('checkout')
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

        compraBtn.style.visibility = "visible";
        preco.style.visibility = "visible";
        pagamento.style.visibility = "visible";
        garantia.style.visibility = "visible";
        checkout.style.pointerEvents = "all";
    }
},1000)