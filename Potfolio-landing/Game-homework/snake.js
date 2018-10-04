const  canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let snake =[{x: 100, y: 100}];
let moveX = 0;
let moveY = 0;
let appleX ;
let appleY ; 

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
function snakeSteer(event){
  const key = event.keyCode;
  if(key === 37 && moveX !== 10){
    moveX = -10;
    moveY = 0;
  }
  if(key === 39 && moveX !== -10){
    moveX = 10;
    moveY = 0;
  }
  if(key === 38&& moveY !== 10){
    moveX = 0;
    moveY = -10;
  }
  if(key === 40&& moveY !== -10){
    moveX = 0;
    moveY = 10;
  }
}
function drawApple(){
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'darkred'
  ctx.fillRect(appleX, appleY, 10, 10);
  ctx.strokeRect(appleX, appleY, 10, 10);
}
function createApple(){
  appleX = randomApple(0, canvas.width - 10);
  appleY = randomApple(0, canvas.height - 10);

}
function randomApple(min, max){
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;

}

window.addEventListener('keydown', snakeSteer);

createApple();

function render(){
setTimeout(function(){
  drawCanvas();
  drawApple();
  moveSnake();
  drawSnake();
  render();
},300)

}
render();
