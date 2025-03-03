let gameSeq=[];
let userSeq=[];
let hscore=0;
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        lebelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash")
    }, 250);
}

function lebelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level${level}`;

    //random btn choose
    let randidx=Math.floor(Math.random()*4);
    let randColor=btns[randidx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};
function checkAns(idx){
    // console.log("curr level :",level);
    // let idx=level-1;
    
    if(hscore<level){
        hscore=level;
    }
    h3.innerHTML=`Your highest score is ${hscore}`;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(lebelUp,1000);
        }
    }else{

        h2.innerHTML=`game over!Your Score was <b>${level}</b> <br> prass any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}