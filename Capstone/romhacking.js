
//Items for main nav, mobile nav, and submenu
let mover = document.querySelector("#mobileNavbar");
let origin = document.querySelector("#mainNav");
let hamburger = document.querySelector("#menu");
let links = document.querySelector("#myLinks");
let origin2 = document.querySelector("#origin2");
let sectionSubDiv = document.querySelector("#sectionSubMenu");
let sectionSub = document.querySelector("#orderSublink");
let sectionLi = document.querySelector("#sectionLi");

//Main event handler for mobile menu
hamburger.addEventListener("click", () => {
  if (window.innerWidth <= 1024) {
    mover.appendChild(links);
    sectionSub.style.display = "none";
    if (links.id === "open") {
      sectionSub.style.display = "none";
      links.removeAttribute("id", "open");
      links.setAttribute("id", "closed");
      hamburger.setAttribute("name", "menu");
    } else {
      links.removeAttribute("id", "closed");
      links.setAttribute("id", "open");
      hamburger.setAttribute("name", "close");
    
    }
  } else {
    origin.appendChild(links);
  }
});

//Sub menu function
function subMenu() {
  if (sectionSub.style.display === "block") {
    sectionSub.style.display = "none";
  } else {
    sectionSub.style.display = "block";
  }
}

//Sub menu even listener
sectionLi.addEventListener("click", () => {
  if (window.innerWidth <= 1024) {
    subMenu();
  }
});

//Customized button faders
let innerButton1 = document.querySelector("#boxButton1");
let innerButton2 = document.querySelector("#boxButton2");
let cardA = document.querySelector("#cardA");
let cardB = document.querySelector("#cardB");

function fadeFunction1() {
  if (cardA.id === "hoverP") {
    cardA.removeAttribute("id", "hoverP");
    innerButton1.style.opacity = "0";
  } else {
    cardA.setAttribute("id", "hoverP");
    innerButton1.style.opacity = "1";
  }
}

function fadeFunction2() {
  if (cardB.id === "hoverP") {
    cardB.removeAttribute("id", "hoverP");
    innerButton2.style.opacity = "0";
  } else {
    cardB.setAttribute("id", "hoverP");
    innerButton2.style.opacity = "1";
  }
}

//reload on resize to make sure menus update

window.onresize = function () {location.reload()};
