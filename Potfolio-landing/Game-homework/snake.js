const  canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let snake =[{x: 100, y: 100}];
let moveX = 20;
let moveY = 0;

function drawCanvas() {
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}
function drawSnake(){
  ctx.fillStyle = 'green';
  ctx.strokeStyle = 'darkgreen';
  
  snake.forEach(function(part){

  ctx.fillRect (part.x,part.y, 10, 10);
  ctx.strokeRect (part.x,part.y, 10, 10);

  })

}
function moveSnake(){
  const head ={x: snake[0].x + moveX, y: snake[0].y + moveY}
  snake.unshift(head);
  snake.pop();

}




function render(){
drawCanvas();
moveSnake();
drawSnake();
}
render();