var btnContainer = document.querySelector("#slider_button");
var container = document.querySelector("#slidercontent");
var flowerercount = document.getElementById("profileFollowers");
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
      var { profilepic, Fristname, lastname, track } = person;
      return `
      <div class="slider__container__card">
      <img src="./assest/image/${profilepic}" alt="" srcset="">
      <h3 class="slider__username"> ${Fristname} ${lastname}</h3>
      <h4 class="slider__work">${track}</h4>
      <button class="slider__button__follow follow" onclick="buttonFollower(this)">Follow</button>
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
function buttonFollower(btn) {
  var frinddetails;
  if (btn.classList.contains("follow")) {
    btn.classList.add("unfollow");
    btn.classList.remove("follow");
    btn.innerHTML = "unfollow";
    frinddetails = btn.parentElement;

    localStorage.setItem("count", parseInt(flowerercount.innerHTML) + 1);
    flowerercount.innerHTML = parseInt(flowerercount.innerHTML) + 1;
  } else {
    btn.classList.add("follow");
    btn.classList.remove("unfollow");
    btn.innerHTML = "follow";
    localStorage.setItem("count", parseInt(flowerercount.innerHTML) - 1);

    flowerercount.innerHTML = parseInt(flowerercount.innerHTML) - 1;
  }

  console.log(frinddetails);
  getfrinddetails(frinddetails);
}
flowerercount.innerHTML = localStorage.getItem("count");
var frindId = 1;
function getfrinddetails(frinds) {
  var FrindstDetails = {
    id: frindId,
    imgeSrc: frinds.querySelector("img").src,
    name: frinds.querySelector(".slider__username").textContent,
    track: frinds.querySelector(".slider__work").textContent,
  };
  frindId++;
  savedataInLocalStorage(FrindstDetails);
}

function savedataInLocalStorage(item) {
  var frinds = getFrindesFromStorage();
  frinds.push(item);

  console.log("nrew item", item);
  console.log("past item", frinds);
  for (var key in frinds) {
    if (frinds[key].name !== item.name) {
      localStorage.setItem("frindes", JSON.stringify(frinds));
    }
  }
  console.log("frinds[key].name :", frinds[key].name);
  console.log("item.name :", item.name);
}
function getFrindesFromStorage() {
  return localStorage.getItem("frindes")
    ? JSON.parse(localStorage.getItem("frindes"))
    : [];
}

xhr.send("");
