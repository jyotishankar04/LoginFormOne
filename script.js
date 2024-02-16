//array of objects to login
let loginUsernameField = document.getElementById("loginUsername");
let loginPasswordField = document.getElementById("loginPassword");
let loginSubmit = document.getElementById("loginSubmit");
let sussessPopupDiv = document.querySelector(".sussessPopup");

let usersArray = [
  {
    email: "patrajyotishankar@gmail.com",
    username: "subhamjyoti",
    password: "Subham@login",
  },
];

let login = () => {
  let userFieldValue = loginUsernameField.value;
  let passwordFieldValue = loginPasswordField.value;
  checkLogin(userFieldValue, passwordFieldValue);
};

let checkLogin = (username, password) => {
  usersArray.forEach((element) => {
    if (element.username == username && element.password == password) {
      let timeOfPopUpShow = setTimeout(() => {
        showLoginPopup();
      }, 500);
      setTimeout(() => {
        hideLoginPopup();
      }, 4000);
    } else worngUserOrPassowrd();
  });
};

let worngUserOrPassowrd = () => {
  loginPasswordField.style.animation = " vibrate  0.5s alternate";
  loginUsernameField.style.animation = " vibrate  0.5s alternate";
  setTimeout(() => {
    loginUsernameField.style.animation = "none";

    loginPasswordField.style.animation = "none";
  }, 500);
};
let showLoginPopup = () => {
  sussessPopupDiv.style.display = "flex";
  document.querySelector(".popUpStatus").style.animation =
    " popUpStatusBar  1 3.5s";
  // sussessPopupDiv.style.transition = "all 1s ease";
  sussessPopupDiv.style.transform = "translateX(-50%) scale(1)";
};
let hideLoginPopup = () => {
  setTimeout(() => {
    sussessPopupDiv.style.display = "none";
  }, 1000);
  sussessPopupDiv.style.transform = "translateX(-50%) scale(0)";
  // !Opening the Login after page
};
