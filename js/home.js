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

/** */
/*icons for post*/
    /*first icon*/
    // function getImg_post(event)
    // {   var place = document.getElementById("post");
    //     var output=document.createElement("img");
	//    output.style.width="50%";
	// output.src = URL.createObjectURL(event.target.files[0]);
    // document.appendChild;

        
    // }
    // /*second icon*/
    // function changealign()
    // {   
    //     var align=["center","right","left"];
        
    //     var result=align[Math.floor(Math.random()*align.length)];
    //     var textbox = document.getElementById("tex_post");
    //     textbox.style.textAlign=result;
        
    // }
    //  /*third icon*/
    //  function changefont()
    // {    
    //     var align=["sans-serif","serif","cursive","monospace"];
        
    //     var result=align[Math.floor(Math.random()*align.length)];
    //     var textbox = document.getElementById("tex_post");
    //     textbox.style.fontFamily=result;
    //     // var textbox = document.getElementById("tex_post");
    //     // textbox.style.fontSize=
        
    // }
    //  /*4 icon*/
    //  function changecolor()
    // {   
    //     var align=["red","black","blue"];
        
    //     var result=align[Math.floor(Math.random()*align.length)];
    //     var textbox = document.getElementById("tex_post");
    //     textbox.style.ForeColor(result);
        
    // }

