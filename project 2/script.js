score = 0;
cross = true;
audiogo = new Audio('Wallpaper.mp3');
audioin = new Audio('mixkit-falling-game-over-1942.wav');
setTimeout(() => {
  audiogo.play();
},100);

document.onkeydown = function(e){
    console.log("Key code is: ", e.altKey)
    if(e.altKey == false){
        minecraftrun = document.querySelector('.minecraftrun');
        minecraftrun.classList.add('animatemine');
        setTimeout(() => {
            minecraftrun.classList.remove('animatemine')
        }, 700);
   }

}
setInterval(() => {
minecraftrun = document.querySelector('.minecraftrun');
gameover = document.querySelector('.gameover');
obstacle = document.querySelector('.obstacle');


dx = parseInt(window.getComputedStyle(minecraftrun, null).getPropertyValue('left'));
dy = parseInt(window.getComputedStyle(minecraftrun, null).getPropertyValue('top'));

ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);
console.log(offsetX,offsetY)
if(offsetX< 96 && offsetY< 57){
    gameover.style.visibility = 'visible';
    obstacle.classList.remove('obstacleAni1')
    audioin.play();
    setTimeout(() => {
      audioin.pause();
      audiogo.pause();
    }, 100);

}
else if( offsetX< 160 && cross){
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
}
},100);
function updateScore(score){
    scorecount.innerHTML = "  YOUR SCORE IS  "  +  score
}