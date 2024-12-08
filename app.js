let newgame=document.querySelector("#newgame");
let resetgame=document.querySelector("#resetgame");
let iszero=true;
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer");
let btns=document.querySelectorAll(".box");

const winnings=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

function disableboxes(){
    for(btn of btns)
       {
        btn.disabled=true;
       }
}

function enableboxes(){
  for(btn of btns)
     {
      btn.disabled=false;
      btn.innerText="";
     }
}

const reset_game=()=>{
  iszero=true;
  enableboxes();
  msgcontainer.classList.add("hide");
}

function showwinner(winner)
 {
     msg.innerText=`congratulations, winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disableboxes();
 }

function checkwinning()
 {
    for (let i = 0; i < winnings.length; i++) {  // Use a standard for loop
        let pattern = winnings[i];              // Get the actual pattern array
        let num1 = document.querySelectorAll(".box")[pattern[0]].innerText;
        let num2 = document.querySelectorAll(".box")[pattern[1]].innerText;
        let num3 = document.querySelectorAll(".box")[pattern[2]].innerText;


        if (num1 !== "" && num2 !== "" && num3 !== "") {
            if (num1 === num2 && num2 === num3) {
                showwinner(num1);
            }
        }
    }
}
 

function btnpress()
 {
    let btn=this;
    if(iszero)
     {
       btn.innerText="0";
       iszero=false;
       btn.disabled=true;
     }
    else{
       btn.innerText="X";
       iszero=true;
       btn.disabled=true;
    }
    // console.log("btn was clicked");
    checkwinning();
}




for(btn of btns)
     {
        btn.addEventListener("click",btnpress);
     }


newgame.addEventListener("click",reset_game);
resetgame.addEventListener("click",reset_game);