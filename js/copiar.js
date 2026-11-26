function copi(){
    var texto = document.getElementById("txt2"); 
    texto.select();
    var textocopiado=document.execCommand('copy');
    document.getElementById("txt2").value="";
    
        
}