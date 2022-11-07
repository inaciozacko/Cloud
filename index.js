function teleport(){
    const element = event.target;
    element.style.position = "absolute";
    element.style.left = getRndInteger(0,80)+'%';
    element.style.top = getRndInteger(0,80)+'%';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }