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

  // local storage update
  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

/*  Local Storage */

if(localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") == "dark") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

localStorage.setItem("theme", "dark");
localStorage.getItem("theme");