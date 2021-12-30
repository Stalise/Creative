'use strict'

document.querySelector('.header_burger-icon').onclick = function () {
   if (document.querySelector('.header_burger').dataset.burg == 'close') {
      document.querySelector('.header_burger').style.display = 'block';
      setTimeout(() => document.querySelector('.header_burger').style.opacity = '1', 100);
      document.querySelector('.header_burger').dataset.burg = 'open';
      document.querySelector('.header_burger-icon').style.background = 'url(ICON/CROSS.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'hidden';

   } else if (document.querySelector('.header_burger').dataset.burg == 'open') {
      document.querySelector('.header_burger').style.opacity = '0'
      setTimeout(() => document.querySelector('.header_burger').style.display = 'none', 500);
      document.querySelector('.header_burger').dataset.burg = 'close';
      document.querySelector('.header_burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'visible';
   }
}

window.addEventListener('resize', () => {
   if (document.body.clientWidth >= 993) {
      document.querySelector('.header_burger').style.opacity = '0'
      setTimeout(() => document.querySelector('.header_burger').style.display = 'none', 500);
      document.querySelector('.header_burger').dataset.burg = 'close';
      document.querySelector('.header_burger-icon').style.background = 'url(ICON/BURGER.png) 0 0/contain no-repeat';
      document.body.style.overflow = 'visible';
   }
})






