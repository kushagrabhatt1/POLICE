let boxes=document.querySelectorAll("#gbut");
let  newgamebtn= document.querySelector("#new")
let game=document.querySelectorAll("#game");
let  msgContainer= document.querySelector(".msg-container hide")
let msg=document.querySelector("#msg")
let msg2=document.querySelector("#msg2")
let audio= document.querySelector("audio")
let on= document.querySelector("#on")
let of= document.querySelector("#of")
let Counter =document.querySelector("#Counter");
let counterX =document.querySelector("#counter");
let counterO =document.querySelector("#counterX");
let stval=document.querySelector("#stval");
let stval2=document.querySelector("#stval2");

let counter2 = 0;
let turnO=true;
let score1=0
let score2 =0 
let count=0;
function random(){
const items =[
"RAJA=100","CHOR=0","POLICE=50"
]
shuffle= items[Math.floor(Math.random()*(items.length))]
msg.innerText= shuffle;
}    
msg.innerHTML="CLICK"

//function for draw
const draw = () =>{
  msg.innerText= "draw"
}
let shuffletimes=0;
boxes.forEach((gbut)=> {
    gbut.addEventListener("click",function(event)
    { console.log("box click");       

    shuffletimes++;         if(turnO)
                 {random()
                  msg2.innerHTML="TURN OF PLAYER 2ND"
                    turnO=false;
                                        if(shuffle=="RAJA=100")
{
stval.innerText=score1+=100;
}                 
if(shuffle=="CHOR=0")
{
 stval.innerText=score1+=0;
 
}

if(shuffle=="POLICE=50")
{

 stval.innerText=score1+=50;

}}
            else    {
random()
msg2.innerHTML="TURN OF 1ST PLAYER";


if(shuffle=="RAJA=100")
{
stval2.innerText=`A ${score2+=100}` ;
}                 
if(shuffle=="CHOR=0")
{
 stval2.innerText=score2+=0;
 
}

if(shuffle=="POLICE=50")
{

 stval2.innerText=score2+=50;

};
turnO=true;

if(shuffletimes>19){
  if(score1>score2){
    
  msg2.innerText="PLAYER 1 Won"
  }
  else if(score1<score2){
    msg2.innerText="PLAYER 2 Won"
    
  }
gbut.disabled=true;
}
}    
;
}                )
; }       )               
   

const reseter = ()=>{
  shuffletimes=0;
  turnO=true;
count=0;
msg2.innerText="LET'S MAKE THE GLORY"
boxes.forEach((gbut) =>  {
   
    gbut.disabled=false;
 

    msg.innerText="Click"
})
;
}






function audioon(){
  audio.play()
}

function audiooff(){
  audio.pause()
}
on.addEventListener("click",audioon);
of.addEventListener("click",audiooff);


newgamebtn.addEventListener("click",reseter);

