var btnContainer = document.querySelector("#slider_button");
var container = document.querySelector("#slidercontent");

var xhr = new XMLHttpRequest();

var data;
var obj;
let index = 0;
let pages = [];
xhr.open("GET", "./json/profile.json");
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    obj = data["users"];
    pages = displayFollowers(obj);
    console.log(pages);
    init();
    buttonFollower();
  }
});

function paginate(followers) {
  var itemsPerPage = 4;
  var numberOfPages = Math.ceil(followers.length / itemsPerPage);

  var newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
}

function displayFollowers(followers) {
  var newFollowers = followers
    .map((person) => {
      var { profilepic, Fristname, lastname } = person;
      return `
      <div class="slider__container__card">
      <img src="./assest/image/${profilepic}" alt="" srcset="">
      <h3 class="slider__username"> ${Fristname} ${lastname}</h3>
      <button class="slider__button__follow follow" onclick="buttonFollower(event)">Follow</button>
  </div>
       `;
    })
    .join("");
  container.innerHTML = newFollowers;
}

function init() {
  var followers = obj;
  console.log("my followers", followers);
  pages = paginate(followers);
  console.log(pages);
  displayFollowers(pages[index]);
}

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;

  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  console.log(index);
  displayFollowers(pages[index]);
});

var followerbutton = document.getElementsByClassName("slider__button__follow");
function buttonFollower(e) {
  if (e.target.classList.contains("follow")) {
    e.target.classList.add("unfollow");
    e.target.classList.remove("follow");
    e.target.innerHTML = "unfollow";
  } else {
    e.target.classList.add("follow");
    e.target.classList.remove("unfollow");
    e.target.innerHTML = "follow";
  }
}

xhr.send("");
