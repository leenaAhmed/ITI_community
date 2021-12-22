var modal = document.getElementById("myModal");
var edit = document.getElementById("editModal");

var editProfile = document.getElementById("edit-profile");
var covermodel = document.getElementById("coverModal");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

covermodel.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == edit) {
    edit.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
span2.onclick = function () {
  edit.style.display = "none";
};
editProfile.onclick = function (event) {
  edit.style.display = "block";
};

//
