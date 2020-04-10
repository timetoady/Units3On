// function myFunction() {
//     let x = document.querySelector("#myLinks");
//     let hamburger = document.querySelector("#menu");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//       hamburger.setAttribute("name", "menu");
//     } else {

//       x.style.display = "block";
//       hamburger.setAttribute("name", "close");
//     }
//   }
let mover = document.querySelector("#mobileNavbar");
let origin = document.querySelector("#origin");
let hamburger = document.querySelector("#menu");
let links = document.querySelector("#myLinks");
let origin2 = document.querySelector("#origin2");
let sectionSubDiv = document.querySelector("#sectionSubMenu");
let sectionSub = document.querySelector("#orderSublink");
let sectionLi = document.querySelector("#sectionLi");

hamburger.addEventListener("click", () => {
  if (window.screen.width <= 1024) {
    mover.appendChild(links);
    sectionSub.style.display = "none";
    if (links.id === "open") {
      console.log("It's TRUE!")
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

function subMenu() {
     if (sectionSub.style.display === "block") {
      sectionSub.style.display = "none";
    } else {
      sectionSub.style.display = "block";
    }
 
}


sectionLi.addEventListener("click", () => {
  if (window.screen.width <= 1024) {
    console.log("Click received");
    subMenu();
  }
});

// sectionLi.addEventListener("mouseover", () => {
//   if (window.screen.width > 1024) {
//     console.log("hover received");
//     subMenu();
//   }
// });


window.onresize = function () {
  location.reload();
};
