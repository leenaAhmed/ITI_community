var test = document.getElementById("pic");
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "./json/profile.json");
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    data = JSON.parse(xhr.response);
    var obj = data["users"];

var profna = document.getElementById("Nameuser");
profna.innerHTML+=obj[2].Fristname +" " + obj[2].lastname;
var profjo = document.getElementById("Jopuser");
profna.innerHTML+="<br>" +obj[2].track ;
var profimg = document.getElementById("imguser");
profimg.src=obj[2].profilepic ;
var profimgp = document.getElementsByClassName("profile_img")[1];
profimgp.src=obj[2].profilepic ;
console.log(profimgp.src);
/**post */
var postna = document.getElementsByClassName("post_us")[0];
postna.innerHTML+=obj[2].Fristname +" " + obj[2].lastname;
var profimgp = document.getElementsByClassName("profile_img")[2];
profimgp.src=obj[2].profilepic ;
var profimgp1 = document.getElementsByClassName("profile_img")[2];
profimgp1.src=obj[2].profilepic ;
var profimgp1 = document.getElementsByClassName("profile_img")[3];
profimgp1.src=obj[2].profilepic ;

/**post others */
var profimgp1 = document.getElementsByClassName("profile_img")[4];
profimgp1.src=obj[3].profilepic ;
var profimgp1 = document.getElementsByClassName("profile_img")[5];
profimgp1.src=obj[3].profilepic ;
var postna = document.getElementsByClassName("post_us")[1];
postna.innerHTML+=obj[3].Fristname +" " + obj[3].lastname;
var profimgp1 = document.getElementsByClassName("profile_img")[6];
profimgp1.src=obj[1].profilepic ;
var profimgp1 = document.getElementsByClassName("profile_img")[7];
profimgp1.src=obj[1].profilepic ;
var postna = document.getElementsByClassName("post_us")[2];
postna.innerHTML+=obj[1].Fristname +" " + obj[1].lastname;
    // test.innerHTML = `<img src="./assest/image/${obj[1].profilepic}"/>`;
    // profilepic;
  }
});

xhr.send("");

function uploadefile(){
  // var arr=[];
  var place=document.getElementById("post");
  var place1=document.getElementById("tex_post");
 var newElement= document.createElement("div");
 newElement.setAttribute("id","display_image");

  place.insertBefore(newElement, place1);

  // <div id="display_image" ></div>
const image_input = document.querySelector("#uploade");
var uploaded_image;
image_input.addEventListener('change', function() {
const reader = new FileReader();
reader.addEventListener('load', () => {
uploaded_image = reader.result;
// document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;


let img = document.createElement('img');
            img.src = uploaded_image;
            document.querySelector("#display_image").appendChild(img);


});
reader.readAsDataURL(this.files[0]);
});
// console.log(place);

}
/*second icon*/
function changealign()
{
  var align=["center","right","left"];

  var result=align[Math.floor(Math.random()*align.length)];
  var textbox = document.getElementById("tex_post");
  textbox.style.textAlign=result;

}
/*third icon*/
function changefont()
{
  var align=["sans-serif","serif","cursive","monospace"];

  var result=align[Math.floor(Math.random()*align.length)];
  var textbox = document.getElementById("tex_post");
  textbox.style.fontFamily=result;
  // var textbox = document.getElementById("tex_post");
  // textbox.style.fontSize=

}
/*4 icon*/
function changecolor()
{
  var align=["red","black","blue","green","brown"];

  var result=align[Math.floor(Math.random()*align.length)];
  var textbox = document.getElementById("tex_post");
  textbox.style.color=result;

}
/**to add post */
function addpost()
{ 
  
  // document.getElementById("val")=document.getElementById("tex_post").value; 

  var po = document.getElementById("val");
po.innerHTML+=document.getElementById("tex_post").value; 
var vs=document.getElementById("hpost").style.display = "block";
let s= new Date();
var protime = document.getElementsByClassName("post_time")[0];
protime.innerHTML =  s.getHours() + " h " + s.getMinutes()  + " m , " + s.getDay() + " d " + s.getMonth() + " m ";

}

  



