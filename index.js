const form = document.getElementById("recommendation-form");
const recommendationList = document.querySelector(".recommendations");
const confirmation = document.getElementById("confirmation-message");
const hideBtn = document.getElementById("hide-confirmation");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const newCard = document.createElement("div");
    newCard.className = "recommendation-card";
    newCard.innerHTML = `${message} — <strong>${name}</strong>`;

    recommendationList.appendChild(newCard);

    // Réinitialiser le formulaire
    form.reset();

    // Afficher le message de confirmation
    confirmation.classList.remove("hidden");
  }
});

// Cacher la notification quand on clique sur "OK"
hideBtn.addEventListener("click", function () {
  confirmation.classList.add("hidden");
});
 const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });