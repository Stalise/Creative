'use strict'


document.querySelector('.header_scroll-button').onclick = function () {
   let scrollAbout = setInterval(() => {
      scrollBy(0, 10)
      if (window.scrollY >= document.querySelector('.main_about').offsetTop) {
         clearInterval(scrollAbout)
      }
   }, 10)
}


document.querySelector('.header__menu-list').onclick = function (event) {
   if (event.target.tagName == 'A') {
      let scrollNav = setInterval(() => {
         scrollBy(0, 10)
         if (window.scrollY >= document.querySelector(`.${event.target.dataset.scroll}`).offsetTop) {
            clearInterval(scrollNav)
         }
      }, 5)
   }
}

document.querySelector('.burger_menu').onclick = function (event) {
   if (event.target.tagName == 'A') {
      document.querySelector('.header_burger').style.opacity = '0'
      setTimeout(() => document.querySelector('.header_burger').style.display = 'none', 500);
      document.querySelector('.header_burger').dataset.burg = 'close';
      document.querySelector('.header_burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'visible';
      let scrollNav = setInterval(() => {
         scrollBy(0, 10)
         if (window.scrollY == document.querySelector(`.${event.target.dataset.scroll}`).offsetTop) {
            clearInterval(scrollNav)
         }
      }, 0)
   }
}



