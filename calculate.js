

const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");



function makeSum() {// door dat we 9 doen en daar na +1 in plaats van 10 is omdat we dan nooit 0 krijgen
var getalA= Math.floor(Math.random()*9)+1;
var getalB= Math.floor(Math.random()*9)+1;
rightawnser = getalA * getalB;
myAssignment.innerHTML = getalA + " * " + getalB ;
myAnswer.focus();
}

myAnswer.addEventListener('keydown',(evt)=>{
  console.log(evt.keyCode);
  keyPressed(evt);
})

function keyPressed(evt) {
  if (evt.keyCode == 13){
    if (eval(rightawnser)== myAnswer.value){
      feedback.src = "img/good.png";

      myAssignment.innerHTML = "is goed!"
    }else {
        feedback.src = "img/fout.png";

        myAssignment.innerHTML = " is fout!"
      }
      window.setTimeout(waiting, 2000);
    }
  }


function waiting() {
feedback.src = "img/blank.png";
myAnswer.value = "";
makeSum();
}

makeSum();
myAssignment.addEventListener("keydown", keyPressed, false);
