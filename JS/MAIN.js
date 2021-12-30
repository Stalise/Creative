'use strict'


if (window.pageYOffset >= 0) {
   document.querySelector('.header_title-title').classList.add('_active');
}


window.addEventListener('scroll', () => {

   if (document.body.clientWidth >= 992) {

      if (window.pageYOffset >= 545) {
         for (let i of document.querySelector('.about_rows').children) {
            i.classList.add('_active');
         }
      }

      if (window.pageYOffset >= 1065) {
         document.querySelector('.news_top_left-contain').classList.add('_active');
         document.querySelector('.news_top_right-contain').classList.add('_active');
      }
      if (window.pageYOffset >= 1520) {
         document.querySelector('.news_bottom_left-contain').classList.add('_active');
         document.querySelector('.news_bottom_right-contain').classList.add('_active');
      }

      if (window.pageYOffset >= 2450) {
         for (let i of document.querySelector('.blog_blocks').children) {
            i.classList.add('_active');
         }
      }

      if (window.pageYOffset >= 2850) {
         document.querySelector('.notes_note1').classList.add('_active');
         document.querySelector('.notes_note2').classList.add('_active');
      }

      if (window.pageYOffset >= 3450) {
         document.querySelector('.feature_inform').classList.add('_active');
         document.querySelector('.feature_phone').classList.add('_active');
      }

      if (window.pageYOffset >= 4600) {
         for (let i of document.querySelector('.team_blocks').children) {
            i.classList.add('_active');
         }
      }
   }

})
