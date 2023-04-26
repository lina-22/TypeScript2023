"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
// console.log(userName);
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
    };
    console.log(data);
});
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
