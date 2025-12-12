/* // Получаем все ссылки в навигации
const navLinks = document.querySelectorAll('.header__menu-link');
// Получаем текущий URL страницы
const currentUrl = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active'); // Добавляем класс 'active'
  } else {
    link.classList.remove('active'); // Убираем класс, если не активен
  }
});
 */




const swiper = new Swiper(".myswiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
})
wow.init();
