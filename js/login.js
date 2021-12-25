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
var email = document.getElementById("Email_log");
var passward = document.getElementById("Passward_log");

logIn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value.length == 0 || passward.value.length == 0) {
    alert("Invalid your Data!");
  } else {
    var arr = [];
    var cookie = document.cookie.split(";");
    for (var i = 0; i < cookie.length; i++) {
      var cookieValue = cookie[i].split("=")[1];
      console.log(cookieValue);
      arr.push(cookieValue);
    }

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == email.value) {
        for (var j = 0; j < arr.length; j++) {
          if (arr[j] == passward.value) {
            document.getElementById("wPassward").innerHTML = " ";
            window.open("profile.html");
            var remember = document.getElementById("remember");
            if (remember.checked) {
              var d = new Date();
              d.setMonth(d.getMonth() + 6);
              document.cookie = "UserEmail=" + email.value + ";expires=" + d;
              document.cookie = "Passwared=" + passward.value + ";expires=" + d;
              document.cookie = "id=" + user.id + ";expires=" + d;
            }
          } else {
            document.getElementById("wPassward").innerHTML =
              "passward is Wrong";
            document.getElementById("wPassward").style.color = "red";
          }
        }
      } /*else{
        if (confirm("you are not have an account/Are you want sign Up? ") == true) {
          window.open("index.html");
        
        
      }*/
    }
  }
});
