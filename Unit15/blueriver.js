function myFunction() {
    let x = document.querySelector("#myLinks");
    let hamburger = document.querySelector("#menu");
    if (x.style.display === "block") {
      x.style.display = "none";
      hamburger.setAttribute("name", "menu");
    } else {
      x.style.display = "block";
      hamburger.setAttribute("name", "close");
    }
  }

  window.onresize = function(){ location.reload(); }