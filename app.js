// Burger

const nav = document.querySelector(".nav_bar");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});


// Watch
let time = document.getElementById('time');

setInterval(setTime, 1000);


function setTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();

  time.textContent = `${hours} : ${mins} : ${sec}`;
}

// 0 - 255
function ran(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// form

let inputEmail = document.getElementById('email');
let inputName = document.getElementById('name');
let overlay = document.getElementById('overlay');
let modal = document.getElementById('modal');
let modalTitle = document.querySelector('.modal-title');

document.getElementById('btn-modal').addEventListener('click', function () {
  if (inputEmail.value != "" && inputName != "") {
    overlay.classList.add('is-visible');
    modal.classList.add('is-visible');
    modalTitle.innerHTML = `Thank you, ${inputName.value} your email sent !!!`
    modalTitle.style.color = "#42ba96"
  } else {
    overlay.classList.add('is-visible');
    modal.classList.add('is-visible');
    modalTitle.innerHTML = `Invalid input value, Please enter correct info`
    modalTitle.style.color = "red"
  }
});

document.getElementById('close-btn').addEventListener('click', function () {
  overlay.classList.remove('is-visible');
  modal.classList.remove('is-visible');
});
overlay.addEventListener('click', function () {
  overlay.classList.remove('is-visible');
  modal.classList.remove('is-visible');
});
