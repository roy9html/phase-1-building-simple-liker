// Constants for heart symbols
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Modal element
const modal = document.getElementById("modal");
modal.classList.add("hidden");

const modalMessage = document.getElementById("modal-message");

// Select all heart icons
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        modalMessage.textContent = error;
        modal.classList.remove("hidden");

        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});

// Provided mimic server function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
