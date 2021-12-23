// profile variable
var userFullName = document.getElementById("UserFullName");
var userTrack = document.getElementById("UserTrack");
var bio = document.getElementById("profile_bio");

// edit variables
var editname = document.getElementById("FnameEdite");
var LnameEdite = document.getElementById("LnameEdite");
var emailEdite = document.getElementById("emailEdite");
var bioEdite = document.getElementById("bioEdite");
var newProfileImg = document.getElementById("EditProfileImg");
// ProfileImg
var proFileImg = document.getElementById("ProfileImg");
var editprofileInfo = document.getElementById("editProfileBtn");
var path;
// function changealign

function getcookies() {
  var associativeCookie = [];
  var cookies = document.cookie.split(";"); //

  for (var i = 0; i < cookies.length; i++) {
    associativeCookie[cookies[i].split("=")[0].trim()] =
      cookies[i].split("=")[1];
    // console.log(cookies[i].split("=")[1]);
  }
  return associativeCookie;
}
function setCookie() {
  var d = new Date();
  d.setMonth(d.getMonth() + 6);

  document.cookie = "firstName=" + editname.value + ";expires=" + d;
  document.cookie = "lastName=" + LnameEdite.value + ";expires=" + d;
  document.cookie = "Email=" + emailEdite.value + ";expires=" + d;
  document.cookie = "BIO=" + bioEdite.value + ";expires=" + d;
  document.cookie = "EditProfileImg=" + newProfileImg.value + ";expires=" + d;
}
function displaycookie() {
  var getcookie = getcookies();
  console.log(getcookie);

  var _fname = getcookie["firstName"];
  var _lName = getcookie["lastName"];
  var _Track = getcookie["Track"];
  var _Email = getcookie["Email"];
  var _bio = getcookie["BIO"];

  var _newProfileImg = getcookie["EditProfileImg"];

  var profile = _newProfileImg.replace(/C:\\fakepath\\/g, "");
  console.log(profile);

  userFullName.innerHTML = `${_fname} ${_lName} `;
  userTrack.innerHTML = `${_Track}`;
  bio.innerHTML = `${_bio}`;
  proFileImg.src = `/assest/image/${profile}`;
  editprofileInfo.addEventListener("click", function (e) {
    setCookie();
    getcookies();
    displaycookie();
    userFullName.innerHTML = `${_fname} ${_lName} `;
    userTrack.innerHTML = `${_Track}`;
    bio.innerHTML = `${bio}`;

    path = `"/assest/image/${profile}"`;

    proFileImg.src = path;
    setTimeout(function () {
      document.getElementsByClassName("editModal").style.display = "none";
    }, 100);
    location.reload(true);
  });
}

displaycookie();
