var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's the best mom ever?";
};

var openModal = function () {
  modal.classList.add("show-modal"); 
  button.innerText = "YOU'RE THE BEST MOM EVER!"; 
};

button.addEventListener("click", function () {
  openModal();
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  //console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});