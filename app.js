// Search bar 
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");


const expand = () => {

  searchBtn.classList.toggle("close");

  input.classList.toggle("square");
};


searchBtn.addEventListener("click", expand);


// scroll things
document.addEventListener(scrollY, function () {
document.getElementById("slogan_content_inner").innerHTML.style.opacity = 0;
});