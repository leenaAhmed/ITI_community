var userFullName = document.getElementById("UserFullName");
var userTrack = document.getElementById("UserTrack");
var bio = document.getElementById("profile_bio");

var editprofileInfo = document.getElementById("editprofileBtn");
function displaycookies() {
  var associativeCookie = [];
  var cookies = document.cookie.split(";"); //

  for (var i = 0; i < cookies.length; i++) {
    associativeCookie[cookies[i].split("=")[0].trim()] =
      cookies[i].split("=")[1];
    console.log(cookies[i].split("=")[1]);
  }
  return associativeCookie;
}

function displaycookie() {
  var getcookie = displaycookies();
  console.log(getcookie);

  var _fname = getcookie["firstName"];
  var _lName = getcookie["lastName"];
  var _Track = getcookie["Track"];
  var _Email = getcookie["Email"];
  var _bio = getcookie["BIO"];
  console.log(getcookie["Fristname"]);
  console.log(_fname);
  userFullName.innerHTML = `${_fname} ${_lName} `;
  userTrack.innerHTML = `${_Track}`;
  bio.innerHTML = `${_bio}`;

  editprofileInfo.addEventListener(click, function (e) {
    var editname = document.getElementById("FnameEdite");
    var LnameEdite = document.getElementById("LnameEdite");
    var emailEdite = document.getElementById("emailEdite");
  });
}

displaycookie();
