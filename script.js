document.body.addEventListener("click", function(event) {
  console.log("You clicked at:", event.clientX, event.clientY);
  const flower = document.createElement("div");
  flower.className = "flower";

  flower.style.left = `300px`;
  flower.style.top = `300px`;
  console.log("flower coord:", flower.style.left, flower.style.top);
  document.body.appendChild(flower);


});
