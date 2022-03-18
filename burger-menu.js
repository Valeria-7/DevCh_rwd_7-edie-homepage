const burgerOpen = document.querySelector('.burger-open')
const burgerClose = document.querySelector('.burger-close')
const menu = document.querySelector('.menu')

function openMenu () {
  burgerClose.classList.remove('hidden')
  burgerOpen.classList.add('hidden')
  menu.classList.add('show-menu')
}

function closeMenu () {
  burgerClose.classList.add('hidden')
  burgerOpen.classList.remove('hidden')
  menu.classList.remove('show-menu')
}

burgerOpen.addEventListener('click', () => {
  openMenu()
})

burgerClose.addEventListener('click', () => {
  closeMenu()
})

menu.addEventListener('click', event => {
  let target = event.target
  if (target.classList.contains('menu-link')) closeMenu()
})

