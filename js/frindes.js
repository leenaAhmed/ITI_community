var frindes = document.getElementById("personal-frindes");

function getFrindesFromStorage() {
  return localStorage.getItem("frindes")
    ? JSON.parse(localStorage.getItem("frindes"))
    : [];
}
function savedataInLocalStorage(item) {
  var frinds = getFrindesFromStorage();
  frinds.push(item);
  console.log(item);
  localStorage.setItem("frindes", JSON.stringify(frinds));
}
function getfrindes(frindesdetails) {
  frindes.innerHTML += `<div class="slider__container__card single__frind">
  <img src="${frindesdetails.imgeSrc}" alt="" srcset=""/>
  <h3 class="slider__username "> ${frindesdetails.name}</h3>
  <h4 class="slider__work">${frindesdetails.track}</h4>
  <button class="slider__button__follow follow" onclick="buttonFollower(this)">Follow</button>
  </div>`;
}
window.addEventListener("DOMContentLoaded", () => {
  var frindes = getFrindesFromStorage();
  frindes.forEach((frind) => getfrindes(frind));
});
