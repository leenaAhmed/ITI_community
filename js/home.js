var usersPosts = document.getElementById("users_posts");
var usersRquet = new XMLHttpRequest();
var data;

usersRquet.open("GET", "./json/profile.json");
usersRquet.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    var obj = data["posts"];
    displayusers(obj);
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
          <div onclick="likeFun(this)" class="likeClass"> <i class="far fa-thumbs-up"></i> like</div>
          <div>
              <i class="fas fa-comments"></i>
              Comment
          </div>
      </div>
      <div class="users__profile__comments">
          <div class="users__comment">
              <div class="img">
                  <img src="./assest/image/${post.userprofilepic}">
              </div>
              <textarea rows="3" onkeypress="onTestChange(this);" class="post-text"
                  placeholder="Write a comment.." onkeyup="txtautoheight(this)"
                  spellcheck="false"></textarea>
          </div>
      </div>
  </section>


         `;
    })
    .join("");
  usersPosts.innerHTML = newPosts;
}
usersRquet.send("");
