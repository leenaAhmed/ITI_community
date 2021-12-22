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

//log in
var form2 = document.getElementById("form_log");
var logIn = document.getElementById("login_form_sign");
var email = document.getElementById("Email_log").Value;
var passward = document.getElementById("Passward_log").Value;


logIn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.length == 0 || passward.length == 0) {
    alert("Invalid your Data!");
  } else {
    var newreq = new XMLHttpRequest();
    var data;
    newreq.open("GET", "./json/profile.json");
    newreq.addEventListener("readystatechange", function () {
      if (newreq.readyState == 4 && newreq.status == 200) {
        data = JSON.parse(newreq.response);
        var users = data.users;
        for (var i = 0; i < users.length; i++) {
          if (users[i].email == email) {
            if (users[i].password == passward) {
              var d = new Date();
              d.setMonth(d.getMonth() + 6);
              document.cookie ="id"+ users[i].id + ";expires=" + d;
              document.cookie = "email" + users[i].email + ";expires=" + d;
              document.cookie = "bio"+ users[i].bio + ";expires=" + d;
              document.cookie = "Passward=" +users[i].password + ";expires=" + d;
              document.cookie = "Fname"+ users[i].Fristname + ";expires=" + d;
              document.cookie = "Lname"+ users[i].lastname + ";expires=" + d;
              document.cookie = "BIO=" + users[i].info + ";expires=" + d;
              document.cookie = "Track=" + users[i].track + ";expires=" + d;
              document.cookie = "ProfilePicture=" + users[i].profilepic + ";expires=" + d;
              window.open("profile.html");
            }
          }
        }
      }
    });

    newreq.send("");
  }
});
