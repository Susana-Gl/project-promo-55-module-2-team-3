"use strict";

import "./share.js";

console.log(">> Ready :)");

// let savedName = localstorage.getItem("name");
// nameValue.appendchild(savedName);

const background = document.getElementById("background");


const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const dateInput = document.querySelector(".date-input");
const messageInput = document.querySelector(".message-input");
const imageInput = document.querySelector(".image-input");
const senderInput = document.querySelector(".sender-input");

const resetButton = document.querySelector(".reset-btn");

const previewCard = document.querySelector(".preview-card");

const nameValue = document.querySelector(".name-value");
const emailValue = document.querySelector(".email-value");
const dateValue = document.querySelector(".date-value");
const messageValue = document.querySelector(".message-value");
const imageValue = document.querySelector(".image-value");
const senderValue = document.querySelector(".sender-value");

if (localStorage.getItem("name")) {
  nameInput.value = localStorage.getItem("name");
  nameValue.textContent = "Para " + nameInput.value;
}

if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
  emailValue.textContent = emailInput.value;
}

if (localStorage.getItem("date")) {
  dateInput.value = localStorage.getItem("date");
  dateValue.textContent = dateInput.value;
}

if (localStorage.getItem("message")) {
  messageInput.value = localStorage.getItem("message");
  messageValue.textContent = messageInput.value;
}

if (localStorage.getItem("sender")) {
  senderInput.value = localStorage.getItem("sender");
  senderValue.textContent = senderInput.value;
}

const accordionHeaders = document.querySelectorAll(".accordion-header");


accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const section = header.parentElement;
    section.classList.toggle("active");
  });
});

const handleClickReset = () => {
  nameInput.value = "";
  nameValue.textContent = "Para Lucía";
  emailInput.value = "";
  emailValue.textContent = "lucia@gmail.com";
  dateInput.value = "";
  dateValue.textContent = "01/01/2026";
  messageInput.value = "";
  messageValue.textContent = "¡Feliz cumpleaños!";
  senderInput.value = "";
  senderValue.textContent = "María";
};

resetButton.addEventListener("click", handleClickReset);

const handleChangeSelect = () => {
  const backgroundResult = background.value;

  if (backgroundResult === "birthday") {
    previewCard.classList.add("birthday");
    previewCard.classList.remove("christmas", "valentine");
  } else if (backgroundResult === "christmas") {
    previewCard.classList.add("christmas");
    previewCard.classList.remove("birthday", "valentine");
  } else {
    previewCard.classList.add("valentine");
    previewCard.classList.remove("christmas", "birthday");
  }
  localStorage.setItem ("background", backgroundResult);
};

background.addEventListener("change", handleChangeSelect);

if (localStorage.getItem("background")) {
  background.value = localStorage.getItem("background");
  handleChangeSelect ();
  console.log(background.value);
}

nameInput.addEventListener("input", () => {
  nameValue.textContent = "Para " + nameInput.value;
  localStorage.setItem ("name", nameInput.value);
});

emailInput.addEventListener("input", () => {
  emailValue.textContent = emailInput.value;
  localStorage.setItem ("email", emailInput.value);
});

dateInput.addEventListener("input", () => {
  dateValue.textContent = dateInput.value;
  localStorage.setItem ("date", dateInput.value);
});

messageInput.addEventListener("input", () => {
  messageValue.textContent = messageInput.value;
  localStorage.setItem ("message", messageInput.value);
});

senderInput.addEventListener("input", () => {
  senderValue.textContent = senderInput.value;
  localStorage.setItem ("sender", senderInput.value);
});

// Duda Ana !

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const saveImage = reader.result;
      imageValue.src = saveImage;
      localStorage.setItem ("image", saveImage);
    };
    reader.readAsDataURL(file);
  }
});

let imageDefault = "";

if (imageDefault !== "") {
  imageValue.src = imageDefault;
} else {
  imageValue.src = "./images/default.png";
}

if (localStorage.getItem("image")) {
  imageInput.value = localStorage.getItem("image");
  imageValue.src = saveImage.value;
  console.log(saveImage);
}
