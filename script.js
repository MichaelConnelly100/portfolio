const menuButton = document.getElementById('hamborger')
const menuList = document.getElementById('hamburgerMenu')

menuButton.addEventListener('click', () => {
   menuList.classList.toggle('hidden')
})