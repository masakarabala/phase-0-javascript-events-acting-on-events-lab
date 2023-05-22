// Your code here
//we want the user to be able to move the dodger to the left using the left arrow key

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
  //we want the user to be able to move the dodger to the right using the right arrow key
  function moveDodgerRight() {
   const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
    const right = left + dodger.offsetWidth;
    
  
    if (right > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

