/**
 * Descripción: Se genera la desencriptacion del texto.
 * @author Jose Luis Garcia Martinez.
 * @version 1.0
 */

function desencriptar(){

    let nombre=document.getElementById("txt").value;
    let buscar=nombre.split('enter');
    let cambiar = buscar.join('e');
    document.getElementById("txt2").value=cambiar;
     
     buscar=cambiar.split('imes');
     cambiar = buscar.join('i');
     document.getElementById("txt2").value=cambiar;
  
     buscar=cambiar.split('ai');
     cambiar = buscar.join('a');
     document.getElementById("txt2").value=cambiar;

    
     buscar=cambiar.split('ober');
     cambiar = buscar.join('o');
     document.getElementById("txt2").value=cambiar;

     
     buscar=cambiar.split('ufat');
     cambiar = buscar.join('u');
     document.getElementById("txt2").value=cambiar;

     document.getElementById("txt").value="";

}