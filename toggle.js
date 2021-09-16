const body = document.getElementById('body');
const toggle = document.getElementById('toggle');
const moon = document.getElementById('moon');
const sunBody = document.getElementById('sun');
const beam1 = document.getElementById('beam1');
const beam2 = document.getElementById('beam2');
const beam3 = document.getElementById('beam3');
const beam4 = document.getElementById('beam4');
const beam5 = document.getElementById('beam5');
const beam6 = document.getElementById('beam6');

let isMoon = true;

function toggleMode() {
  if (isMoon) {
    changeMoonToSun();
  }
  else {
    changeSunToMoon();
  }
}

function changeMoonToSun() {
  if (isMoon) {
    moon.style.animation = 'hideMoon 1.5s linear';
    sunBody.style.animation = 'revealSun 1.5s linear';
    beam1.style.animation = 'revealSun 1.1s linear 0.4s';
    beam2.style.animation = 'revealSun 1s linear 0.5s';
    beam3.style.animation = 'revealSun 0.9s linear 0.6s';
    beam4.style.animation = 'revealSun 0.8s linear 0.7s';
    beam5.style.animation = 'revealSun 0.7s linear 0.8s';
    beam6.style.animation = 'revealSun 0.6s linear 0.9s';
    isMoon = false;
    toggle.addEventListener('animationend', revealSun);
    body.classList.add('light');
  }
  return;
}


function revealSun() {
  if(!isMoon) {
    toggle.title = 'Activate dark mode';
    toggle.ariaLabel = 'Activate dark mode';
    moon.style.transform = 'scale(0)';
    sunBody.style.transform = 'scale(1)';
    beam1.style.transform = 'scale(1)';
    beam2.style.transform = 'scale(1)';
    beam3.style.transform = 'scale(1)';
    beam4.style.transform = 'scale(1)';
    beam5.style.transform = 'scale(1)';
    beam6.style.transform = 'scale(1)';
    
  }
  return;
}

function changeSunToMoon() {
  if (!isMoon) {
    sunBody.style.animation = 'hideSun 0.5s linear';
    beam1.style.animation = 'hideSun 0.5s linear';
    beam2.style.animation = 'hideSun 0.5s linear';
    beam3.style.animation = 'hideSun 0.5s linear';
    beam4.style.animation = 'hideSun 0.5s linear';
    beam5.style.animation = 'hideSun 0.5s linear';
    beam6.style.animation = 'hideSun 0.5s linear';
    moon.style.animation = 'revealMoon 1.5s linear';
    isMoon = true;
    toggle.addEventListener('animationend', revealMoon);
    body.classList.remove('light');
  }
  return;
}

function revealMoon() {
  if (isMoon) {
    toggle.title = 'Activate light mode';
    toggle.ariaLabel = 'Activate light mode';
    moon.style.transform = 'scale(1) rotate(-45deg)';
    sunBody.style.transform = 'scale(0)';
    beam1.style.transform = 'scale(0)';
    beam2.style.transform = 'scale(0)';
    beam3.style.transform = 'scale(0)';
    beam4.style.transform = 'scale(0)';
    beam5.style.transform = 'scale(0)';
    beam6.style.transform = 'scale(0)';
  }
  return;
}

toggle.addEventListener('click', toggleMode);
