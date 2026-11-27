/**
 * Descripción: Se copia el resultado de la encriptacion o desencriptacion.
 * @author Jose Luis Garcia Martinez.
 * @version 1.0
 */

function copi(){
    var texto = document.getElementById("txt2"); 
    texto.select();
    var textocopiado=document.execCommand('copy');
    document.getElementById("txt2").value="";
    
        
}