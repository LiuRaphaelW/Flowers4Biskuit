document.body.addEventListener("click", function(event) {
  const flower = document.createElement("img");
  flower.src = "images/flower.png"; // adjust path if needed
  flower.className = "flower";

  // Position at click (offset by half size)
  flower.style.left = `${event.clientX - 25}px`;
  flower.style.top = `${event.clientY - 25}px`;

  document.body.appendChild(flower);

  // Remove after animation
  setTimeout(() => flower.remove(), 2000);
});
