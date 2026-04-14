const submitSelectButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitSelectButton.addEventListener("click", function (event) {
  event.preventDefault();

  const message = document.createElement("p");
  message.textContent = "Thank you for your message!";
  message.style.fontSize = "24px";

  contactPage.innerHTML = "";
  contactPage.appendChild(message);
  contactPage.classList.add("thank-you");
});
