document.body.addEventListener("click", function(event) {
  console.log("You clicked at:", event.clientX, event.clientY);
  const flower = document.createElement("img");
  const r = Math.floor(Math.random() * 4);
  if (r === 3 ) {
  flower.src = "images/pngwing.com-2.png"; 
  } else if (r === 2) {
  flower.src = "images/pngwing.com-3.png"; 
  } else if (r === 1) {
  flower.src = "images/pngwing.com-4.png"; 
  } else {
  flower.src = "images/pngwing.com.png"; 
  }
  flower.className = "flower";
  flower.style.left = `${event.clientX - 25}px`;
  flower.style.top = `${event.clientY - 25}px`;
  console.log("flower coordX:", flower.style.left, flower.style.top);
  document.body.appendChild(flower);


});
