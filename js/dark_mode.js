var toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function (e) {
  
  var htm = document.getElementById("Container");
  var h = document.getElementsByClassName("profile_right_side")[0];
  var t = document.getElementsByClassName("post__user--profile")[0];
  var m = document.getElementsByClassName("post--body")[0];
  var post = document.getElementById("post-btn");
  var slider = document.getElementsByClassName("slider")[0];
  //posts
  //var userPost = document.querySelectorAll(".users__posts-card")
  var userPost = document.querySelectorAll(".users__posts-card")[0];
  var userPost1 = document.querySelectorAll(".users__posts-card")[1];
  var userPost2 = document.querySelectorAll(".users__posts-card")[2];
  var userPost3 = document.querySelectorAll(".users__posts-card")[3];
  var userPost4 = document.querySelectorAll(".users__posts-card")[4];
  var userPost5 = document.querySelectorAll(".users__posts-card")[5];
 

  if (
   
    htm.classList.contains("dark") &&
    h.classList.contains("dark") &&
    t.classList.contains("dark") &&
    m.classList.contains("dark") &&
    post.classList.contains("dark") &&
    slider.classList.contains("dark")
  ) {
    
    htm.classList.remove("dark");
    h.classList.remove("dark");
    t.classList.remove("dark");
    m.classList.remove("dark");
    post.classList.remove("dark");
    slider.classList.remove("dark");
    
  } else {
    
    htm.classList.add("dark");
    h.classList.add("dark");
    t.classList.add("dark");
    m.classList.add("dark");
    post.classList.add("dark");
    slider.classList.add("dark");
    
  }
  // for(var i=0; i<userPost.length; i++){
  //   if(userPost[i].classList.contains("users__posts-black")){
  //     userPost.classList.remove("users__posts-black");
  //   }else{
  //     userPost.classList.add("users__posts-black");
  //   }
  // }

  if (
    userPost.classList.contains("users__posts-black") &&
    userPost1.classList.contains("users__posts-black") &&
    userPost2.classList.contains("users__posts-black") &&
    userPost3.classList.contains("users__posts-black") &&
    userPost4.classList.contains("users__posts-black") &&
    userPost5.classList.contains("users__posts-black") 
  ) {
    userPost.classList.remove("users__posts-black");
    userPost1.classList.remove("users__posts-black");
    userPost2.classList.remove("users__posts-black");
    userPost3.classList.remove("users__posts-black");
    userPost4.classList.remove("users__posts-black");
    userPost5.classList.remove("users__posts-black");
   
  } else {
    userPost.classList.add("users__posts-black");
    userPost1.classList.add("users__posts-black");
    userPost2.classList.add("users__posts-black");
    userPost3.classList.add("users__posts-black");
    userPost4.classList.add("users__posts-black");
    userPost5.classList.add("users__posts-black");
    
  }
});
