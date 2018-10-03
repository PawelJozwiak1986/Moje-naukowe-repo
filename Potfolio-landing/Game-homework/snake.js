const  canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function drawCanvas() {
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}
function drawSnake(){
  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'darkgreen';
  ctx.fillRect (100, 100, 10, 10);
  ctx.strokeRect (100, 100, 10, 10);

}

drawCanvas();
drawSnake();