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

function myFunction2() {
  let x = document.querySelector("#orderSublink");
  if (window.screen.width <= 560) {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
}

function myFunction3() {
  let x = document.querySelector("#orderSublink");
  let mover = document.querySelector("#fakeIt");
  let origin = document.querySelector("#origin")
  if (window.screen.width >= 561) {
    
    mover.appendChild(x);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } else {
    origin.appendChild(x);
  }
}
