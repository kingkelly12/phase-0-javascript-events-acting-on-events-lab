// Your code here
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;

    }
  }
  function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    let left = parseInt(dodger.style.left.replace("px", ""), 10);

    if (left > 0) { // Prevent moving out of bounds
        dodger.style.left = `${left - 1}px`;
    }
}
