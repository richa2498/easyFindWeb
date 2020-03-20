

  var nav = document.getElementById("mySidenav");
  var isNavOpen = false;


  function toggleNav(){
    if (!isNavOpen){
      openNav();
    }else{
      closeNav();
    }
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
