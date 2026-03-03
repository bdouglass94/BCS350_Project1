// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // Add to Cart buttons
  const cartButtons = document.querySelectorAll(".add-cart");
  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Added to cart!");
      // You can later implement actual cart logic
    });
  });

  // Trade-In Form
  const tradeForm = document.getElementById("tradein-form");
  const confirmation = document.getElementById("confirmation");

  if(tradeForm){
    tradeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const game = document.getElementById("game").value;
      confirmation.textContent = `Thanks ${name}! Your trade-in request for "${game}" has been submitted.`;
      tradeForm.reset();
    });
  }

});
