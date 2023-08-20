// Navbar For Mobile

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

// Fade in Main Image

let homeimg = document.getElementById("main-home-img");
let opacity = 0;
let fadeIn = setInterval(() => {
  if (opacity >= 1) {
    clearInterval(fadeIn);
  }
  homeimg.style.opacity = opacity;
  opacity += 0.01;
}, 15);


// To change img on click in about section

 function clickimg (smallImg){
    let fullimg = document.querySelector("#imgabt");
    fullimg.src = smallImg.src
 }


 