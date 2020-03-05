function myFunction() {
    let x = document.querySelector("#myLinks");
    let hamburger = document.querySelector("#menu");
    if (x.style.display === "block") {
      x.style.display = "none";
      hamburger.setAttribute("class", "fa fa-bars");
    } else {
      x.style.display = "block";
      hamburger.setAttribute("class", "fas fa-times");
    }
  }
  
function displayUpdate() {
  let winWidth = window.innerWidth;
  console.log(winWidth)
  let navState = document.querySelector("nav");
  let navState2 = document.querySelector("nav > ul")
  if (winWidth > 560) {
     navState.setAttribute("class", "removOverflow")
     navState.setAttribute("class", "navDesk")
  } else {
    navState.setAttribute("class", "addOverflow")
    navState2.setAttribute("class", "navMobile")
  }
}

