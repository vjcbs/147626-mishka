// Открытие/закрытие главного меню

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

// Для вызова модального окна на главной странице

var modal = document.getElementById('modalCart');
var btn = document.getElementById("openCart");

if (btn) {
  btn.onclick = function() {
      modal.style.display = "block";
  }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Для вызовы модального окна на странице каталога

var elements = document.querySelectorAll("a.catalog__item-icon-link");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    modal.style.display = "block";
  });
}

// Карта

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 17
});

if (myMap) {
  console.log("Карта загружена");
  var mapPic = document.getElementsByClassName('contact__map-image')[0];
  mapPic.style.display = 'none';
}

myPlacemark = new ymaps.Placemark([59.938631, 30.323055], { hintContent: 'Мишка', balloonContent: 'Мишка: милые штуки ручной работы для дома'
    });

    myMap.geoObjects.add(myPlacemark);
}
