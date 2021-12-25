var usersPosts = document.getElementById("users_posts");
var usersRquet = new XMLHttpRequest();
var data;

usersRquet.open("GET", "./json/profile.json");
usersRquet.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    var obj = data["posts"];
    displayusers(obj);
    onTestChange(obj);
  }
});
function displayusers(users) {
  var newPosts = users
    .map((post) => {
      // if (users.userid != id) {
      //   var href = href + "?id=" + post.userid;
      // }
      return `
      <section class="users__posts-card">
      <div class="users_posts-info">
          <div class="users_profile">
          <a href="" class="prfLink" target="_self">
          <img id="ProfileImg" src="./assest/image/${post.userprofilepic}">
           </a>
              
              <div class="users__profile_time">
              <a href="" class="prfLink" target="_self"> 
                 <p id="UserFullName">${post.username}</p>
                </a>
                 
                  <div class="time grayTxt"><i class="fa fa-history"></i>${post.created_at}</div>
              </div>
          </div>
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      <div class="users__profile__body">
          <p class="post-"> ${post.body}</p>
          <div class="users__profile__galary">
              <div class="imgsContainer">
                  <div id="newPostImgs">
                   </div>

              </div>
          </div>
      </div>
      <div class="user__couter--likes">
          <span id="userLikeCounter">${post.likes}</span> Likes

      </div>
      <div class="users__profile__react">
          <div onclick="likecounter(this)" class="likeClass"> <i class="far fa-thumbs-up"></i> like</div>
          <div class="commentsClass">
              <i class="fas fa-comments"></i>
              Comment
          </div>
      </div>
      <div class="users__profile__comments" >
         
           <div class="users__comment">
              <div class="img">
                  <img src="./assest/image/${post.userprofilepic}">
              </div>
              <textarea rows="3" onkeypress="onTestChange(this);" class="post-text"
                  placeholder="Write a comment.." 
                  spellcheck="false"></textarea>
          </div>
      </div>
  </section>


         `;
    })
    .join("");
  usersPosts.innerHTML = newPosts;
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
function onTestChange(me) {
  var key = window.event.keyCode;
  if (key === 13) {
    // var newdiv = document.createElement("div");
    // perent.insertBefore(newdiv, posts);
    console.log(me.value);
    console.log(me.per);
    var comContent = me.value;
    var comm = `
    <div class="users__comment">
            <div class="img">
                <img src="./assest/image/${profile}">
                <p><b><a style="text-decoration: none;" href="profile.html"  target="_self"> ${_profilenam} ${_profileLnam} </a></b></p>

            </div>
            <div class="post-text">
               <p>${comContent}</p>
           </div>
         </div>`;
    me.parentElement.parentElement.innerHTML += comm;
    me.value = "";
    return false;
  } else {
    return true;
  }
}
// var counter = 0;
// var likes = document.getElementById("userLikeCounter");
// var btnLikes = document.getElementsByClassName("likeClass");

// for (var i = 0; i < btn.length; i++) {
//   console.log("btn ", btn[i]);
//   // function likecounter() {
//   //     likes.innerHTML = parseInt(likes.innerHTML) + 1;

//   //     console.log(parseInt(likes.innerHTML));
//   //   }
// }
displaycookie();
usersRquet.send("");
