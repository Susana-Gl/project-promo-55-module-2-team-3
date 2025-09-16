'use strict';

console.log('>> Ready :)');

const background = document.getElementById("background");

const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const dateInput = document.querySelector(".date-input");
const messageInput = document.querySelector(".message-input");
const imageInput = document.querySelector(".image-input");
const senderInput = document.querySelector(".sender-input");

const previewCard = document.querySelector(".preview-card");

const nameValue = document.querySelector(".name-value");
const emailValue = document.querySelector(".email-value");
const dateValue = document.querySelector(".date-value");
const messageValue = document.querySelector(".message-value");
const imageValue = document.querySelector(".image-value");
const senderValue = document.querySelector(".sender-value");

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
    console.log(backgroundResult);
};

background.addEventListener("change", handleChangeSelect);

