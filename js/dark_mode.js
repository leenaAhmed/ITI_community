var toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function (e) {
 

 
    
 
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
 
  }
});
