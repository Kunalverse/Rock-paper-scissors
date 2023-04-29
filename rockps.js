var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
rock.value=0;
paper.value=1;
scissors.value=2;

var count=10;
var pcount=0;
var ccount=0;
function updatePlayer(){
    pcount++;
    document.getElementById('player').innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${pcount}`;
}
function updateComputer(){
    ccount++;
    document.getElementById('computer').innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ccount}`;
}

function changeDisplay(){
    document.getElementById('gDisplay').innerHTML=`<div id="gDisplay">
    <h1 style="color:aliceblue">Game Over!!</h1>
</div>`
    if(pcount > ccount){
        document.getElementById('gDisplay').innerHTML +=`<h1 style="color : green;">&nbsp;&nbsp;&nbsp;You Won!!</h1> `
    }
    else if(pcount == ccount){
        document.getElementById('gDisplay').innerHTML +=`<h1 style="color : aliceblue;"> Match Tied!!</h1> `
    }
    else{
        document.getElementById('gDisplay').innerHTML +=`<h1 style="color : red;">&nbsp;&nbsp;You Lose!!</h1> `
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    document.getElementById('result').remove();
    const reloadBtn = document.getElementById('restartBtn');
    reloadBtn.innerText='Restart';
    reloadBtn.style.display='flex';
    reloadBtn.addEventListener('click',()=>{
        window.location.reload();
    })
}
function checkCount(){
    if(count>1){
        count--;
    document.getElementById('moves').innerHTML=`&emsp;&emsp;&emsp;&emsp;&emsp;Moves left: ${count}`
    }
    else{
        count--;
    if(count==0){
        changeDisplay();
    }
    }
}

function checkVal(val){
    let comp=Math.floor(Math.random()*3);

    if(val==comp){
        document.getElementsByTagName('h3')[0].style.color="aliceblue";
      document.getElementsByTagName('h3')[0].innerHTML =`Tied`;
    }
    else if((val==0 && comp== 2) || (val==1 && comp==0) || (val==2 && comp==1)){
        document.getElementsByTagName('h3')[0].style.color="green";
        document.getElementsByTagName('h3')[0].innerHTML =`You Won`;
        updatePlayer();
    }
    else{
        document.getElementsByTagName('h3')[0].style.color="aliceblue";
      document.getElementsByTagName('h3')[0].innerHTML =`Computer Won`;
      updateComputer();
    }
    checkCount();
}
function getRock(){
    checkVal(0);
} 
function getPaper(){
    checkVal(1);
}
function getScissors(){
    checkVal(2);
}
