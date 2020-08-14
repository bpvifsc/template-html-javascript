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
 