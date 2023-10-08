let gameSeq =[];
let userSeq =[];


let btns =["yellow", "red", "purple", "green"];


let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

//game flash make color white
function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
};

//userFlash function make color green
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 1000);
};


function levelUp(){
    //userseq empty hoga tuo reset hoga
    userSeq = [];
    level++;
    //level update
    h2.innerText =`Level ${level}`;

    //random number generate 
    let randIdx = Math.floor(Math.random() * 3);
    //from array we can go btn index color choose
    let randColer = btns[randIdx];
    //bcz of color we can make class after that we can choose that btn
    let randBtn = document.querySelector(`.${randColer}`);
    // //random button index
    // console.log(randIdx);
    // //random button color
    // console.log(randColer);
    // console.log(randBtn);


    //when random color generate we make game push
    gameSeq.push(randColer);
    console.log(gameSeq);

    //btn ko flash krna hai
    gameFlash(randBtn);
};


//doubt occcue chanve bcz of indx and idx 
function checkAns(idx){
    // console.log("curr level" , level);
    let indx = level -1 ;

    if(userSeq[indx] ===  gameSeq[indx]){
       if(userSeq.length == gameSeq.length){
        //delay from one level to another level
           setTimeout(levelUp , 1000);
       }
    }else{
        h2.innerHTML =` Game over! Your score was <b>${level}</b>  <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },150)
        reset();
    };
};

//btnpres function
function btnPress(){
    //btn track
    // console.log(this);
    //this store in btn
    let btn= this;
    //call btnflash and pass the button
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);


    checkAns(userSeq.length -  1);
};

//html all btn access
let allBtns = document.querySelectorAll(".btn");
//all btnn lloop
for(btn of allBtns){
    //add btn we use callback function in eventListener
    btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
};