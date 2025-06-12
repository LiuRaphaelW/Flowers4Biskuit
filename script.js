document.body.addEventListener("click", function(event) {
  console.log("You clicked at:", event.clientX, event.clientY);
  const flower = document.createElement("img");
  flower.src = "images/pngwing.com.png"; 
  flower.className = "flower";
  flower.style.left = `${event.clientX - 25}px`;
  flower.style.top = `${event.clientY - 25}px`;
  console.log("flower coord:", flower.style.left, flower.style.top);
  document.body.appendChild(flower);


});
