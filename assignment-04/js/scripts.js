var menuTitles = document.getElementsByClassName('menu-link');

function slideList() {
  var menuList = this.getElementsByClassName('menu-list')[0];
  var menuCSS = window.getComputedStyle(menuList);
  
  if (menuCSS.height == "0px"){
    for (i = 0; i < 5; i++) {
      menuTitles[i].getElementsByClassName('menu-list')[0].style.height = "0px";
    }

    menuList.style.height = "250px";
  } else {
    menuList.style.height = "0px";
  }
}

for (i=0; i < 5; i++) {
  menuTitles[i].addEventListener('click', slideList);
}
