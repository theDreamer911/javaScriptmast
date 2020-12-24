// javascript

//globals
var pushed = false; //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById("spinning"); //The spinning number

//event listener
document
  .getElementById("buttonPressed")
  .addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed() {
  pushed = true;
}

document.getElementById("buttonRestart").addEventListener("click", refreshPage);

function refreshPage() {
  window.location.reload();
}

//set the target Int
function setTargetInt() {
  var targetElem = document.getElementById("targetNum");
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

//number spinner
const spin = async () => {
  for (let i = 0; i <= 100; i++) {
    if (i == 100) {
      i = 0;
    }
    if (pushed == true) {
      stop(i);
      break;
    } else {
      spinningElem.innerHTML = i;
      await sleep(75);
    }
  }
};

function stop(i) {
  let offSite = Math.abs(targetInt - (i - 1));
  let message;

  if (offSite == 0) {
    message = "Congratulation You Won, Merry Christmast";
  } else {
    message = `It's okay, not this time, you miss ${offSite.toString()} number from target`;
  }
  var result = document.getElementById("result");
  result.innerHTML = message;
  result.classList.add("colorize");
}

setTargetInt();
spin();
