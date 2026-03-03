// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Added to cart!");
      // Later you can implement actual cart logic
    });
  });
});
