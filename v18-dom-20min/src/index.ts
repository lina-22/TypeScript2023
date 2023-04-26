const userForm = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLFormElement;
// console.log(userName);
const userEmail = document.querySelector("#email") as HTMLFormElement;

const userCountry = document.querySelector("#country") as HTMLFormElement;

const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    username: userName.value,
    useremail: userEmail.value,
  };
  console.log(data);
});

userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    username: userName.value,
    useremail: userEmail.value,
    userCountry: userCountry.value,
    userFeedback: userFeedback.value,
  };

  console.log(data);
});
