var usersPosts = document.getElementById("users_posts");
var usersRquet = new XMLHttpRequest();
var data;
var all_posts = [];
var comment;
usersRquet.open("GET", "./json/profile.json");
usersRquet.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    obj = data["posts"];
    comment = data["comments"];

    displayusers(obj);
    onTestChange(obj);
  }
});

function displayusers(users) {
  users.forEach((post) => {
    var newPosts = ` <section class="users__posts-card">
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
     <span class="userLikeCounter">${post.likes}</span> Likes
   </div>
      <div class="users__profile__react">
        <div onclick="likecounter(this)" class="likeClass"> <i class="far fa-thumbs-up"></i> like</div>
         <div class="commentsClass">
            <i class="fas fa-comments"></i>
            Comment
        </div>
      </div>`;
    newPosts += ` <div class="users__profile__comments" > `;

    newPosts += `<div class="users__comment">
         <div class="img">
             <img src="./assest/image/${profile}">
         </div>
         <textarea rows="3" onkeypress="onTestChange(this);"  
             placeholder="Write a comment.." 
             spellcheck="false"></textarea>
          </div> `;
    for (var i = 0; i < comment.length; i++) {
      if (comment[i].postid == post.id) {
        newPosts += `<div class="users__comment">
              <div class="imguser">
                  <img src="./assest/image/${comment[i].userprofilepic}">
                  <p><b><a style="text-decoration: none;" href="profile.html"  target="_self"> 
                    ${comment[i].username}  </a></b></p>
              </div>
              <div class="post-text">
                <p>${comment[i].content}</p>
            </div>
          </div>
          </div>
          </section>`;
      }
    }
    usersPosts.innerHTML += newPosts;
  });
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
  _profilenam = getcookie["firstName"];
  _profileLnam = getcookie["lastName"];
  var _newProfileImg = getcookie["EditProfileImg"];

  profile = _newProfileImg.replace(/C:\\fakepath\\/g, "");

  newProfileImg.src = `/assest/image/${profile}`;
}
function onTestChange(me) {
  var key = window.event.keyCode;
  if (key === 13) {
    console.log(me.value);
    console.log(me.per);
    var commentvalue = me.value;
    var comment = `
    <div class="users__comment">
            <div class="imguser">
                <img src="./assest/image/${profile}">
                <p><b><a style="text-decoration: none;" href="profile.html"  target="_self"> 
                  ${_profilenam} ${_profileLnam} </a></b></p>
            </div>
            <div class="post-text">
               <p>${commentvalue}</p>
           </div>
         </div>`;
    me.parentElement.parentElement.innerHTML += comment;
    me.value = "";
    return false;
  } else {
    return true;
  }
}
// var counter = 0;

function likecounter(likes) {
  var likesco = document.getElementsByClassName("userLikeCounter");

  for (var i = 0; i < likesco.length; i++) {
    likesco[i].innerHTML = parseInt(likesco[i].innerHTML) + 1;
  }
  console.log(likes);
  console.log(parseInt(likesco.innerHTML));
}

displaycookie();
usersRquet.send("");
