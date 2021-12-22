var slider = document.getElementById("slidercontent");
var slider_button = document.getElementById("slider_button");
var btnContainer = document.getElementsByClassName("btn");
var nextBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");
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
    pages = DisplayList(obj);
  }
});

let current_page = 1;
let rows = 4;

function DisplayList(items, rows_per_page = rows, page = current_page) {
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    slider.innerHTML += `<div class="slider__container__card">
     <img src="./assest/image/${item.profilepic}" alt="" srcset="">
      <h3 class="slider__username"> ${item.Fristname} ${item.lastname}</h3>
       <button class="slider__button__follow"> Follow</button>
     </div>`;
  }
}
function update() {
  DisplayList(pages[index]);
}
slider_button.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;

  if (e.target.classList.contains("next-btn")) {
    current_page++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    current_page--;
    if (index < 0) {
      current_page = pages.length - 1;
    }
  }
  update();
});
xhr.send("");
