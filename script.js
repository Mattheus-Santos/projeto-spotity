let musicas = [
    
    {titulo:'Anomalous Hedges', artista:'Mini Vandals', src:'musicas/Anomalous Hedges - Mini Vandals.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'Bourree', artista:'Joel Cummins', src:'musicas/Bourree - Joel Cummins.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'Impetinence', artista:'Joel Cummins', src:'musicas/Impertinence - Joel Cummins.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'Night Snow', artista:'Asher Fulero', src:'musicas/Night Snow - Asher Fulero.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'No.6 In My Dreams', artista:'Esther Abrami', src:'musicas/No.6 In My Dreams - Esther Abrami.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'No.7 Alone With My Thoughts', artista:'Esther Abrami', src:'musicas/No.7 Alone With My Thoughts - Esther Abrami.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'Sonatina No 2 in F Major Rondo', artista:'Joel Cummins', src:'musicas/Sonatina No 2 in F Major Rondo - Joel Cummins.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'Star Spangled Banner', artista:'Cooper Cannell', src:'musicas/Star Spangled Banner - Cooper Cannell.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'To Loom Is to Love', artista:'Mini Vandals', src:'musicas/To Loom Is to Love - Mini Vandals.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    {titulo:'Vespers on the Shore', artista:'Mini Vandals', src:'musicas/Vespers on the Shore - Mini Vandals.mp3', img:'imagens/pexels-pixabay-210764.jpg'},
    
   
];



let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//Eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 10){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector(".botao-pause").style.display = "block";
    document.querySelector(".botao-play").style.display = "none";

}

function pausarMusica() {
    musica.pause();
    document.querySelector(".botao-pause").style.display = "none";
    document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}