document.addEventListener("DOMContentLoaded", () => {

  // ======================
  // ADD TO CART BUTTONS
  // ======================
  const cartButtons = document.querySelectorAll(".add-cart");

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.parentElement; // get the game-card div
      const title = card.querySelector("h3").innerText;
      const price = card.querySelector("p").innerText;

      // Get existing cart from localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Add current item
      cart.push({ title, price });

      // Save cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Feedback to user
      alert(`"${title}" has been added to your cart!`);
    });
  });

  // ======================
  // CART PAGE DISPLAY
  // ======================
  const cartItemsDiv = document.getElementById("cart-items");
  const totalP = document.getElementById("total");
  if(cartItemsDiv){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
      cartItemsDiv.innerHTML = "<p>Your cart is empty!</p>";
      if(totalP) totalP.innerText = "";
    } else {
      let total = 0;
      cartItemsDiv.innerHTML = cart.map((item, index) => {
        const priceNum = parseFloat(item.price.replace('$',''));
        total += priceNum;
        return `
          <div class="cart-item">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
          </div>
        `;
      }).join('');

      if(totalP) totalP.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;

      // Remove item functionality
      const removeButtons = document.querySelectorAll(".remove-item");
      removeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const index = btn.getAttribute("data-index");
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          location.reload(); // reload page to update cart display
        });
      });
    }
  }

  // ======================
  // TRADE-IN FORM
  // ======================
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

  // ======================
  // CONTACT FORM
  // ======================
  const contactForm = document.getElementById("contact-form");
  const contactConfirmation = document.getElementById("contact-confirmation");
  if(contactForm){
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      contactConfirmation.textContent = `Thanks ${name}! Your message has been sent to GameZify.`;
      contactForm.reset();
    });
  }

});
