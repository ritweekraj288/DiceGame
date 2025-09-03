var randomNumber1=Math.floor(Math.random()*6)+1;
const dice1=document.querySelector(".img1");
dice1.setAttribute("src","./images/dice"+randomNumber1+".png");

var randomNumber2=Math.floor(Math.random()*6)+1;
const dice2=document.querySelector(".img2");
dice2.setAttribute("src","./images/dice"+randomNumber2+".png");

const h1text=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    h1text.innerHTML="Player 1 wins!"
}else if(randomNumber1<randomNumber2){
    h1text.innerHTML="Player 2 wins";
}else{
    h1text.innerHTML="Draw"
}