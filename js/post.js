function previewFiles() {
  var preview = document.querySelector("#preview");
  var PostImage = document.querySelector("#postImgs").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          preview.appendChild(image);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (PostImage) {
    [].forEach.call(PostImage, readAndPreview);
  }
}

//
function getcookies() {
  var associativeCookie = [];
  var cookies = document.cookie.split(";"); //

  for (var i = 0; i < cookies.length; i++) {
    associativeCookie[cookies[i].split("=")[0].trim()] =
      cookies[i].split("=")[1];
    console.log(cookies[i].split("=")[1]);
  }
  return associativeCookie;
}
var newProfileImg = document.getElementById("homeProfileImg");
var homeprofileImg = document.getElementById("profileFullName");

function displaycookie() {
  var getcookie = getcookies();
  // console.log(getcookie);
  var _profilenam = getcookie["firstName"];
  var _profileLnam = getcookie["lastName"];
  homeprofileImg.innerHTML += `${_profilenam} ${_profileLnam} `;
  //
  var _newProfileImg = getcookie["EditProfileImg"];

  var profile = _newProfileImg.replace(/C:\\fakepath\\/g, "");
  newProfileImg.src = `/assest/image/${profile}`;

  // console.log(_profilenam);
}
displaycookie();
