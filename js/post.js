var textArea = document.getElementById("postTextArea");
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
var resultaligntext;
function changealign() {
  var aligntext = ["center", "right", "left"];

  resultaligntext = aligntext[Math.floor(Math.random() * aligntext.length)];
  // var textbox = document.getElementById("tex_post");
  textArea.style.textAlign = resultaligntext;
}
/*third icon*/
var resultalignfonts;
function changefont() {
  var alignfonts = ["sans-serif", "serif", "cursive", "monospace"];

  resultalignfonts = alignfonts[Math.floor(Math.random() * alignfonts.length)];
  textArea.style.fontFamily = resultalignfonts;
}
/*4 icon*/
var resultcolor;
function changecolor() {
  var aligncolor = ["red", "black", "blue", "green", "brown"];

  resultcolor = aligncolor[Math.floor(Math.random() * aligncolor.length)];
  // var textbox = document.getElementById("tex_post");
  textArea.style.color = resultcolor;
}
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
var _profilenam;
var _profileLnam;
var profile;
function displaycookie() {
  var getcookie = getcookies();
  // console.log(getcookie);
  _profilenam = getcookie["firstName"];
  _profileLnam = getcookie["lastName"];
  homeprofileImg.innerHTML += `${_profilenam} ${_profileLnam} `;
  //
  var _newProfileImg = getcookie["EditProfileImg"];

  profile = _newProfileImg.replace(/C:\\fakepath\\/g, "");

  newProfileImg.src = `/assest/image/${profile}`;

  // console.log(_profilenam);
}
var personalPosts = document.getElementById("personal-posts");
var image;
var time = new Date();
function addpost() {
  var valueText = textArea.value.trim();
  if (valueText.length != 0) {
    console.log(image);
    var textpost = `<section class="users__posts-card">
    <div class="users_posts-info">
        <div class="users_profile">
            <img id="ProfileImg" src="./assest/image/${profile}">
            <div class="users__profile_time">
                <p id="UserFullName" >${_profilenam} ${_profileLnam} </p>
                <div class="time grayTxt"><i class="fa fa-history"></i>  ${time.toLocaleString()}  </div>
            </div>
        </div>
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
    </div>
    <div class="users__profile__body">
        <p class="post-"  style = "text-align:${resultaligntext}; color:${resultcolor}; font-family:${resultalignfonts};">${valueText}</p>`;

    if (preview.childElementCount != 0) {
      textpost += `<div class="users__profile__galary">
     <div class="imgsContainer">
         <div id="newPostImgs">`;
      for (var j = 0; j < preview.children.length; j++) {
        image = preview.children[j];

        textpost += `<img id="img1" src="${image.src}" class="left0" title="">`;
      }
    }
    textpost += ` </div>
                    </div>
                </div>
                <div class="user__couter--likes">
                    <span id="userLikeCounter"></span> Likes

                </div>
                <div class="users__profile__react">
                    <div onclick="likecounter()" class="likeClass"> <i class="far fa-thumbs-up"></i> like</div>
                    <div class="commentsClass">
                        <i class="fas fa-comments"></i>
                        Comment
                    </div>
                </div>
                <div class="users__profile__comments">
                    <div class="users__comment">
                        <div class="img">
                            <img src="./assest/image/${profile}">
                        </div>
                        <textarea rows="3" onkeypress="onTestChange(this);" class="post-text"
                            placeholder="Write a comment.."
                            spellcheck="false"></textarea>
                    </div>
                </div>
                      </section>`;
    personalPosts.innerHTML += textpost;
    textArea.value = " ";
    preview.innerHTML = " ";
  }
}

// var counter = 0;

function likecounter(likes) {
  var likesco = document.getElementsByClassName("userLikeCounter");

  for (var i = 0; i < likesco.length; i++) {
    likesco[i].innerHTML = parseInt(likesco[i].innerHTML) + 1;
  }
  console.log(likes);
}

displaycookie();
