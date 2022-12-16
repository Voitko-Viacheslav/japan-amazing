(function () {
  const header = document.querySelector('.header__wrapper');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active')
    } else {
      header.classList.remove('header_active')
    }
  }
}())

(function () {
  const burderItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close')
  burderItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active')
  })
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active')
  })
}());