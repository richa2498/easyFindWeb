
  var myIndex = 0;
  carousel();
  var nav = document.getElementById("mySidenav");
  var isNavOpen = false;


  function toggleNav(){
    if (!isNavOpen){
      openNav();
    }else{
      closeNav();
    }
  }

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
  }


  function openNav() {
    isNavOpen = true;
    navIcon.innerHTML = "x";
    nav.style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }

  function closeNav() {
    isNavOpen = false;
    navIcon.innerHTML = "☰";
    nav.style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
