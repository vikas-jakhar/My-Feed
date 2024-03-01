const menuiocn = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const searchicon = document.querySelector(".search-icon");
const searchbox = document.querySelector(".search-box");

menuiocn.addEventListener("click", function () {
    menulist.classList.toggle("show")
});

searchicon.addEventListener("click", function () {
    searchbox.classList.toggle("search")
});