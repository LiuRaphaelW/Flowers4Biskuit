document.body.addEventListener("click", function(event) {
  console.log("You clicked at:", event.clientX, event.clientY);
  const flower = document.createElement("div");
  flower.className = "flower";

  flower.style.left = '${event.clientX - 10}px';
  flower.style.top = '${event.clientY - 10}px';

  document.body.appendChild(flower);


});
