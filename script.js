score=0;
cross=true;
audio =new Audio("bgmusic.mp3");
audiogo= new Audio('gameover.ogg');
audio.play() ;

window.addEventListener("keydown", function(event) {
    
    if (event.code === "Enter"){
        monkey=document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');
        setTimeout(()=>{
            monkey.classList.remove('animatemonkey');
        },700);
    }
    if(event.code==="ArrowRight"){
        monkey=document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');
        mx=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
        monkey.style.left=mx+112+"px";
    }
    if(event.code==="ArrowLeft"){
        monkey=document.querySelector('.monkey');
        monkey.classList.add('animatemonkey');
        mx=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
        monkey.style.left=mx-112+"px";
    }
})
setInterval(()=>{
    monkey=document.querySelector('.monkey');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    mx=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(monkey,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(mx-ox);
    offsetY=Math.abs(my-oy);

    if(offsetX<40 && offsetY<40){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleani');
        audio.pause();
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
        },5000);
        
    }
    else if(offsetX<145 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation.suration'));
        newSuraniDur-0.1;
        obstacle.style.animationDuration=newDur+'s';
        },500)
        
    }
},10);
function updatescore(score){
    scoreCount.innerHTML="Your Score "+score;
}