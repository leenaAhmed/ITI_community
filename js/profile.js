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
  document.cookie = "coverImage=" + coverImg.src + ";expires=" + d;
}
function displaycookie() {
  var getcookie = getcookies();
  console.log(getcookie);

  var _fname = getcookie["firstName"];
  var _lName = getcookie["lastName"];
  var _profilenam = getcookie["firstName"];
  var _profileLnam = getcookie["lastName"];
  var _Track = getcookie["Track"];
  var _Email = getcookie["Email"];
  var _bio = getcookie["BIO"];
  var _coverprofile = getcookie["coverImage"];
  var _newProfileImg = getcookie["EditProfileImg"];

  var profile = _newProfileImg.replace(/C:\\fakepath\\/g, "");
  console.log(profile);

  userFullName.innerHTML = `${_fname}  ${_lName} `;
  userTrack.innerHTML = `${_Track}`;
  proFileImg.src = `/assest/image/${profile}`;
  bio.innerHTML = `${_bio}`;
  console.log(_coverprofile);
  // coverImg.src = `${_coverprofile}`;
  // profileName.innerHTML = `${_profilenam} ${_profileLnam}`;
  // homeprofileImg.src = `/assest/image/${profile}`;

  editprofileInfo.addEventListener("click", function (e) {
    setCookie();
    getcookies();
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
    var radio = document.getElementsByName("cvr");
    for (i = 0; i < radio.length; i++) {
      if (radio[i].checked) var mysrc = radio[i].value;
    }
    console.log(mysrc);

    coverImg.src = mysrc;

    modal.style.display = "none";
  });
}

displaycookie();
