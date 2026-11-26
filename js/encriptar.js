function encriptar(){

    let nombre=document.getElementById("txt").value;
    let buscar=nombre.split('e');
    let cambiar = buscar.join('enter');
    document.getElementById("txt2").value=cambiar;
     
     buscar=cambiar.split('i');
     cambiar = buscar.join('imes');
     document.getElementById("txt2").value=cambiar;
  
     buscar=cambiar.split('a');
     cambiar = buscar.join('ai');
     document.getElementById("txt2").value=cambiar;

    
     buscar=cambiar.split('o');
     cambiar = buscar.join('ober');
     document.getElementById("txt2").value=cambiar;

     
     buscar=cambiar.split('u');
     cambiar = buscar.join('ufat');
     document.getElementById("txt2").value=cambiar;

     document.getElementById("txt").value="";

}