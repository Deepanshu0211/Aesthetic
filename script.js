window.addEventListener('load', () => {
    const container = document.getElementById('container');
    container.classList.add('loaded'); // Trigger the animation
});
var delay = 5; 
var swiftness = 0.1; 

var mouseX = 0;
var mouseY = 0;
var posX = 0;
var posY = 0;

document.addEventListener("mousemove", function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function moveCursor() {
  var distX = mouseX - posX;
  var distY = mouseY - posY;

  posX += distX * swiftness;
  posY += distY * swiftness;

  document.querySelector(".mouse").style.left = posX + "px";
  document.querySelector(".mouse").style.top = posY + "px";

  document.querySelector(".mouse").style.transform = "translate(-50%, -50%)";

  requestAnimationFrame(moveCursor); 
}

setTimeout(moveCursor, delay);

document.querySelectorAll("a, .img, .intro, .word-container").forEach(item => {
  item.addEventListener("mouseenter", function() {
    document.querySelector(".mouse").style.width = "200px";
    document.querySelector(".mouse").style.height = "200px";
    document.querySelector(".mouse").style.opacity = "0.5";
    document.querySelector(".mouse").style.zIndex = "-1";
    document.querySelector(".mouse").style.filter = "invert(1)";

  });
  item.addEventListener("mouseleave", function() {
    document.querySelector(".mouse").style.width = "100px";
    document.querySelector(".mouse").style.height = "100px";
    document.querySelector(".mouse").style.opacity = "1";
    document.querySelector(".mouse").style.filter = "invert(0)";
  });
});