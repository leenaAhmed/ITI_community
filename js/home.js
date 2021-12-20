var test = document.getElementById("pic");
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "./json/profile.json");
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    var obj = data["users"];
    test.innerHTML = `<img src="./assest/image/${obj[1].profilepic}"/>`;
    // profilepic;
  }
});

xhr.send("");
