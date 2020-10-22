if(localStorage.getItem('comentarios')==undefined){
    localStorage.setItem('comentarios',JSON.stringify([]));
}

var listaComentarios = JSON.parse(localStorage.getItem('comentarios'));


function publicar() {
    var txt = document.getElementById("comentario").value
    var nome = document.getElementById("nome").value
    
    listaComentarios.push(nome+": "+txt);
    
    localStorage.setItem('comentarios',JSON.stringify(listaComentarios));

    mostraComentarios();
 }


 function mostraComentarios() {
    document.getElementById('lista-comentarios').innerHTML = "";
    
    let html = "";
    for(let t of listaComentarios){
            html += '<div>'+t+'</div>' ;
    }
    
    document.getElementById('lista-comentarios').innerHTML = html;
 }
 

 function carregaImagem(event) {
    let arquivo = document.getElementById('arquivo').value;
    let fundo = document.getElementById('imagem-fundo');
    let logo = document.getElementById('imagem-logo');

    fundo.src =  URL.createObjectURL(event.target.files[0]);
    logo.src = "img/logo.png";
 }

 function trocaLogoClaro(){
   let logo = document.getElementById('imagem-logo');
   logo.src = "img/logo-branco.png";
 }

 function trocaLogoEscuro(){
   let logo = document.getElementById('imagem-logo');
   logo.src = "img/logo.png";
 }

 function atualizaTexto() {
   let pTexto = document.getElementById('imagem-texto');
   let texto = document.getElementById('texto').value;

   pTexto.innerText = texto;
 }

 function atualizaFonte() {
   let pTexto = document.getElementById('imagem-texto');
   let tamanho = document.getElementById('tamanho-fonte').value;

   pTexto.style.fontSize = tamanho+"px";
 }

 function textoTopo() {
   let pTexto = document.getElementById('imagem-texto');
   pTexto.style.top = "0px";
   pTexto.style.bottom = "initial";
 }

 function textoBaixo() {
   let pTexto = document.getElementById('imagem-texto');
   pTexto.style.top = "initial";
   pTexto.style.bottom = "0px";
 }

 function posicaoLogo(top,left,bottom,right) {
   let iLogo = document.getElementById('imagem-logo');
   iLogo.style.top = top;
   iLogo.style.bottom = bottom;
   iLogo.style.right = right;
   iLogo.style.left = left;
 }