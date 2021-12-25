// verification firstName
var firstName = document.getElementById("fname");
var FnameMess = document.getElementById("FnameMess");
firstName.onkeyup = function () {
  FnameCheck();
};
function FnameCheck() {
  var Fname = firstName.value;
  if (Fname.length == 0) {
    FnameMess.innerHTML = " can't be empty!";
    FnameMess.style.color = "red";
    firstName.style.border = "2px solid red";
  } else if (Fname.length < 4) {
    FnameMess.innerHTML = " should be at least 4 chars!";
    FnameMess.style.color = "red";
    firstName.style.border = "2px solid red";
  } else if (!Fname.match(/^[A-Za-z]+$/)) {
    FnameMess.innerHTML = " should have only chars!";
    FnameMess.style.color = "red";
    firstName.style.border = "2px solid red";
  } else if (Fname.length > 10) {
    FnameMess.innerHTML = " should't be more than 7 chars!";
    FnameMess.style.color = "red";
    firstName.style.border = "2px solid red";
  } else {
    FnameMess.innerHTML = " Is Valid!";
    FnameMess.style.color = "green";
    firstName.style.border = "2px solid green";
  }
}

//verification lastName
var lastName = document.getElementById("lname");
var LnameMess = document.getElementById("LnameMess");
lastName.onkeyup = function () {
  LnameCheck();
};
function LnameCheck() {
  var Lname = lastName.value;
  if (Lname.length == 0) {
    LnameMess.innerHTML = " can't be empty!";
    LnameMess.style.color = "red";
    lastName.style.border = "2px solid red";
  } else if (Lname.length < 4) {
    LnameMess.innerHTML = " should be at least 4 chars!";
    LnameMess.style.color = "red";
    lastName.style.border = "2px solid red";
  } else if (!Lname.match(/^[A-Za-z]+$/)) {
    LnameMess.innerHTML = " should have only chars!";
    LnameMess.style.color = "red";
    lastName.style.border = "2px solid red";
  } else if (Lname.length > 10) {
    LnameMess.innerHTML = " should't be more than 7 chars!";
    LnameMess.style.color = "red";
    lastName.style.border = "2px solid red";
  } else {
    LnameMess.innerHTML = " Is Valid!";
    LnameMess.style.color = "green";
    lastName.style.border = "2px solid green";
  }
}

//verification email
var Email = document.getElementById("Email");
var EmailMess = document.getElementById("emailMess");
Email.onkeyup = function () {
  emailCheck();
};
function emailCheck() {
  var email = Email.value;
  var patteren = new RegExp("^[a-zA-Z0-9]+@[a-z]{5,7}.[a-z]{3,5}$");
  if (email.length == 0) {
    EmailMess.innerHTML = "Email can't Be empty!";
    EmailMess.style.color = "red";
    email.style.border = "2px solid red";
  } else if (!patteren.test(email)) {
    EmailMess.innerHTML = "Invalid Email Format!";
    EmailMess.style.color = "red";
    email.style.border = "2px solid red";
  } else {
    EmailMess.innerHTML = "Valid Email Format!";
    EmailMess.style.color = "green";
    Email.style.border = "2px solid green";
  }
}

//verfication select Track
var trackSelect = document.getElementById("track");
var trackMessg = document.getElementById("trackMessage");
trackSelect.onselect = function () {
  selectCheck();
};

function selectCheck() {
  var track = trackSelect.value;
  if (track == "") {
    trackMessg.innerText = "You Should Select a Track";
    trackSelect.style.border = "2px solid red";
    trackMessg.style.color = "red";
  } else {
    trackMessg.innerText = "";
    trackSelect.style.border = "2px solid green";
  }
}

//verification Passward
var Passward = document.getElementById("Passward");
var passwardMess = document.getElementById("passwardMess");
Passward.onkeyup = function () {
  passwordCheck();
};
function passwordCheck() {
  var password = Passward.value;
  if (password.length == 0) {
    passwardMess.innerHTML = "Password can't Be empty!";
    passwardMess.style.color = "red";
    Passward.style.border = "2px solid red";
  } else if (password.length < 8) {
    passwardMess.innerHTML = "Password can't Be less than 8 chars!";
    passwardMess.style.color = "red";
    Passward.style.border = "2px solid red";
  } else {
    passwardMess.innerHTML = "Valid Password!";
    passwardMess.style.color = "green";
    Passward.style.border = "2px solid green";
  }
}

// verification Passward && Check Passward
var checkedPassward = document.getElementById("check_Passward");
var passwarRepMess = document.getElementById("passwarRepMess");
checkedPassward.onkeyup = function () {
  checkedPasswardCheck();
};
function checkedPasswardCheck() {
  var passwarRepeat = checkedPassward.value;
  if (passwarRepeat.length == 0) {
    passwarRepMess.innerHTML = "Password can't Be empty!";
    passwarRepMess.style.color = "red";
    checkedPassward.style.border = "2px solid red";
  } else if (passwarRepeat.length < 8) {
    passwarRepMess.innerHTML = "Password can't Be less than 8 chars!";
    passwarRepMess.style.color = "red";
    checkedPassward.style.border = "2px solid red";
  } else if (Passward.value != passwarRepeat) {
    passwarRepMess.innerHTML = "Password and confirm password don't match";
    passwarRepMess.style.color = "red";
    checkedPassward.style.border = "2px solid red";
  } else {
    passwarRepMess.innerHTML = "Valid Password!";
    passwarRepMess.style.color = "green";
    checkedPassward.style.border = "2px solid green";
  }
}
// bio
var bio = document.getElementById("bio");
// Sign Up
var signUpForm = document.getElementById("form");
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    !firstName.value ||
    !lastName.value ||
    !Email.value ||
    !Passward.value ||
    !checkedPassward.value
  ) {
    alert("Invalid your Data!");
  } else {
    setCookie();
    //المفروض يدخلني على صفحة الهوم
    window.open("home.html", "_self");
  }
});
function setCookie() {
  var d = new Date();
  d.setMonth(d.getMonth() + 6);

  document.cookie = "firstName=" + firstName.value + ";expires=" + d;
  document.cookie = "lastName=" + lastName.value + ";expires=" + d;
  document.cookie = "Email=" + Email.value + ";expires=" + d;
  document.cookie = "Passward=" + Passward.value + ";expires=" + d;
  document.cookie = "Track=" + trackSelect.value + ";expires=" + d;
  document.cookie = "BIO=" + bio.value + ";expires=" + d;
}

//button of sin up and button of sin in
document.getElementById("signUp").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signUp").style.cursor = "not-allowed";
});
document.getElementById("signIn").addEventListener("click", function (e) {
  e.preventDefault();
  window.open("index2.html", "_self");
});
