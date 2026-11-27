/**
 * Descripción: Genera el efecto de lluvia estilo matrix.
 * @author Jose Luis Garcia Martinez.
 * @version 1.0
 */

const canvas = document.getElementById('matrix');
const canvastext = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&';
const sizefuente = 16;
const columnas = Math.floor(canvas.width / sizefuente);
const gota = Array(columnas).fill(1);

function dibujarMatrix() {
      canvastext.fillStyle = 'rgba(0, 0, 0, 0.05)';
      canvastext.fillRect(0,0, canvas.width, canvas.height);
      canvastext.fillStyle = '#00ff41';
      canvastext.font = sizefuente + 'px monospace';

      for (let i = 0; i < gota.length; i++) {
        const texto = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        canvastext.fillText(texto, i * sizefuente, gota[i] * sizefuente);

          if (gota[i] * sizefuente > canvas.height && Math.random() > 0.950) {
            gota[i] = 0;
          }
          gota[i]++;
      }
}

    setInterval(dibujarMatrix, 40);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
 