var toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function (e) {
  var htm = document.getElementById("Container");
  var h = document.getElementsByClassName("profile_right_side")[0];
  var t = document.getElementsByClassName("post__user--profile")[0];
  var m = document.getElementsByClassName("post--body")[0];
  var post = document.getElementById("post-btn");
  var slider = document.getElementsByClassName("slider")[0]
  if (
    htm.classList.contains("dark") &&
    h.classList.contains("dark") &&
    t.classList.contains("dark") &&
    m.classList.contains("dark") &&
    post.classList.contains("dark")&&
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
});
