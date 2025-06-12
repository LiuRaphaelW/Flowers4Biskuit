document.body.addEventListener("click", function(event) {
  // Create the flower
  const flower = document.createElement("div");
  flower.className = "flower";

  // Position the flower at the click location
  flower.style.left = '${event.clientX - 10}px';
  flower.style.top = '${event.clientY - 10}px';

  // Add it to the page
  document.body.appendChild(flower);


});
