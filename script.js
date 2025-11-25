const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

let circle = {
  x: 50,
  y: 50,
  radius: 30,
  dx: 2,
  dy: 2,
  color: "red"
};

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  circle.x += circle.dx;
  circle.y += circle.dy;

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx *= -1;
    circle.color = getRandomColor();
  }
  if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy *= -1;
    circle.color = getRandomColor();
  }

  requestAnimationFrame(update);
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

canvas.addEventListener("click", () => {
  circle.color = getRandomColor();
});

update();
