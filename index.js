const form = document.getElementById("recommendation-form");
const recommendationList = document.querySelector(".recommendations");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const newCard = document.createElement("div");
    newCard.className = "recommendation-card";
    newCard.innerHTML = `${message} — <strong>${name}</strong>`;

    recommendationList.appendChild(newCard);

    // Reset form
    form.reset();
  }
});
