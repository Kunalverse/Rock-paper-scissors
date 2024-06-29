var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
const imgUrl = [
    'assests/rock.png',
    'assests/paper.png',
    'assests/scissors.png'
]
rock.value=0;
paper.value=1;
scissors.value=2;

var count=0;
var pcount=0;
var ccount=0;
function updatePlayer(){
    pcount++;
    document.getElementById('player').innerHTML=`${pcount}`;
}
function updateComputer(){
    ccount++;
    document.getElementById('computer').innerHTML=`${ccount}`;
}

function checkCount(){
    count++
    document.getElementById('moves').innerHTML=`Games Played: ${count}`
}

function checkVal(val){
    let comp=Math.floor(Math.random()*3);
    document.getElementsByClassName('player-side')[0].style.display="block";
    document.getElementsByClassName('player-side')[1].style.display="block";
    document.getElementById('player-side').src = imgUrl[val];
            document.getElementById('computer-side').src = imgUrl[comp];

            const playerImage = document.getElementById('player-side');
            const computerImage = document.getElementById('computer-side');

            playerImage.classList.remove('player-image');
            computerImage.classList.remove('computer-image');

            void playerImage.offsetWidth;
            void computerImage.offsetWidth;

            playerImage.classList.add('player-image');
            computerImage.classList.add('computer-image');


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
        document.getElementsByTagName('h3')[0].style.color="red";
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

function handleReset(){
    if(count > 0) window.location.reload();
}