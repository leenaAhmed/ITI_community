var flowerercount = document.getElementById("profileFollowers");
// profile variable
var userFullName = document.getElementById("UserFullName");
var userTrack = document.getElementById("UserTrack");
var bio = document.getElementById("profile_bio");
var profileName = document.getElementById("profileFullName");
// edit variables
var editname = document.getElementById("FnameEdite");
var LnameEdite = document.getElementById("LnameEdite");
var emailEdite = document.getElementById("emailEdite");
var bioEdite = document.getElementById("bioEdite");
// profile
var newProfileImg = document.getElementById("EditProfileImg");
var homeprofileImg = document.getElementById("homeProfileImg");
// ProfileImg
var proFileImg = document.getElementById("ProfileImg");
var editprofileInfo = document.getElementById("editProfileBtn");
// cover
var coverImg = document.getElementById("profileCover");
var selectCover = document.getElementById("selectCover");
var path;
// function changealign

flowerercount.innerHTML = localStorage.getItem("count");

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
  document.cookie = "UserEmail=" + emailEdite.value + ";expires=" + d;
  document.cookie = "BIO=" + bioEdite.value + ";expires=" + d;
  document.cookie = "EditProfileImg=" + newProfileImg.value + ";expires=" + d;
  document.cookie = "coverImage=" + coverImg.src + ";expires=" + d;
}
function displaycookie() {
  var getcookie = getcookies();
  console.log(getcookie);

  var _fname = getcookie["firstName"];
  var _lName = getcookie["lastName"];

  var _Track = getcookie["Track"];
  var _Email = getcookie["UserEmail"];
  var _bio = getcookie["BIO"];
  var _coverprofile = getcookie["coverImage"];
  var _newProfileImg = getcookie["EditProfileImg"];
  console.log("_newProfileImg", _newProfileImg);
  var profile = _newProfileImg.replace(/C:\\fakepath\\/g, "");
  console.log(profile);

  userFullName.innerHTML = `${_fname}  ${_lName} `;
  userTrack.innerHTML = `${_Track}`;
  proFileImg.src = `/assest/image/${profile}`;
  bio.innerHTML = `${_bio}`;

  // value
  editname.value = `${_fname}  `;
  LnameEdite.value = `${_lName}`;
  emailEdite.value = `${_Email}`;
  bioEdite.value = `${_bio}`;
  // newProfileImg.value = `${profile}`;
  console.log(_coverprofile);
  var cover = _coverprofile.replace("http://127.0.0.1:5501/", "");

  // coverImg.src = `./${cover}`;
  // profileName.innerHTML = `${_profilenam} ${_profileLnam}`;
  // homeprofileImg.src = `/assest/image/${profile}`;

  editprofileInfo.addEventListener("click", function (e) {
    setCookie();
    displaycookie();
    userFullName.innerHTML = `${_fname} ${_lName} `;

    userTrack.innerHTML = `${_Track}`;

    path = `"/assest/image/${profile}"`;

    proFileImg.src = path;
    bio.innerHTML = `${_bio}`;
    // homeprofileImg.src = path;
    setTimeout(function () {
      document.getElementsByClassName("editModal").style.display = "none";
    }, 100);

    location.reload(true);
  });
  selectCover.addEventListener("click", function () {
    setCookie();
    var radio = document.getElementsByName("cvr");
    for (i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        var mysrc = radio[i].value;
      }
    }
    console.log("edit", mysrc);
    coverImg.src = mysrc;
    modal.style.display = "none";
    // location.reload(true);
  });
}

displaycookie();
