// const settingsMenu = document.querySelector('.settings-menu');
// const online = document.querySelector('.online');

// online.addEventListener('click', () => {
//   console.log('clicked');
// })

const settingsMenu = document.querySelector('.settings-menu');
const darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {
  darkBtn.classList.toggle("dark-btn-on");

  document.body.classList.toggle("dark-theme")
}