var newreq = new XMLHttpRequest();
console.log("loading request");
var data;

newreq.open("GET", "./json/profile.json");
newreq.addEventListener("readystatechange", function () {
  if (newreq.readyState == 4 && newreq.status == 200) {
    data = JSON.parse(newreq.response);

    console.log(data);
  }
});

//button of sin up and button of log in on page sign in
document
  .getElementById("login_sign_in")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("login_sign_in").style.cursor = "not-allowed";
  });
document
  .getElementById("login_sign_up")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.open("index.html", "_self");
  });

//form
var form2 = document.getElementById("form_log");
var _email = document.getElementById("Email_log").Value;
var _passward = document.getElementById("Passward_log").Value;

newreq.send("");
