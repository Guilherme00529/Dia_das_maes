const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const message = document.getElementById('message');

ctx.translate(canvas.width / 2, canvas.height / 2);

let t = -Math.PI;
const step = 0.02;
ctx.beginPath();

function animate() {
  if (t > Math.PI) {
    ctx.stroke();
    canvas.classList.add('glow');
    setTimeout(() => {
      message.style.opacity = 1;
      const dedicatoria = document.querySelector('.dedicatoria');
dedicatoria.style.opacity = 1;

    }, 500);
    return;
  }

  const x = 160 * Math.pow(Math.sin(t), 3);
  const y = 130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t);

  if (t === -Math.PI) {
    ctx.moveTo(x, -y);
  } else {
    ctx.lineTo(x, -y);
  }

  ctx.strokeStyle = '#ff0000'; // vermelho neon
  ctx.lineWidth = 2;
  ctx.stroke();

  t += step;
  requestAnimationFrame(animate);
}

animate();
