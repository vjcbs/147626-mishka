var menu = document.querySelector('.nav-menu');
var menuToggle = document.querySelector('.nav-menu__toggle');

menu.classList.remove('nav-menu--nojs');

menuToggle.addEventListener("click", (e) => {

  if ( menu.classList.contains('nav-menu--slide-down') ) {
    menu.classList.remove('nav-menu--slide-down');
    menuToggle.classList.remove('nav-menu__toggle--closed');
  }
  else {
    menu.classList.add('nav-menu--slide-down');
    menuToggle.classList.add('nav-menu__toggle--closed');
  }

});

// $(function() {
//   var menu = document.querySelector('.nav-menu');
//   var menuToggle = document.querySelector('.nav-menu__toggle');
//
//   $(menuToggle).click(function() {
//     console.log('Clicked!');
//     $(menu).addClass("nav-menu--slide-down");
//   });
// });
