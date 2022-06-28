const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

const themeToggle = document.querySelector('.theme-toggle')

menuBtn.addEventListener('click', function () {
  sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
  sideMenu.style.display = 'none'
})

// Dark Theme
themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme-variables')

  themeToggle.querySelector('i:nth-child(1)').classList.toggle('active')
  themeToggle.querySelector('i:nth-child(2)').classList.toggle('active')
})
