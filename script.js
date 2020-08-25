var main = document.querySelector("main");
var sitesEl = document.querySelector(".sites");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
var siteTitles = document.querySelectorAll("h4");

var sites = ["https://www.linkedin.com/in/alison-barber-b6b45444/", "https://www.instagram.com/alibarbershop/", "https://twitter.com/AliBarbershop"];

site1El.children[0].textContent = "Linkedin";
site1El.children[1].setAttribute("href", "https://www.linkedin.com/in/alison-barber-b6b45444/");
site1El.children[1].children[0].setAttribute("alt", "linkedin");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Instagram";
site2El.children[1].setAttribute("href", "https://www.instagram.com/alibarbershop/");
site2El.children[1].children[0].setAttribute("alt", "instagram");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Twitter";
site3El.children[1].setAttribute("href", "https://twitter.com/AliBarbershop");
site3El.children[1].children[0].setAttribute("alt", "twitter");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

for (var i = 0; i < siteTitles.length; i++) {
  siteTitles[i].setAttribute("style", "text-decoration: underline; padding-left:10px; margin: 0");
}

