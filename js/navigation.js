// NAVIGATION MENU

const menu1 = document.querySelector('#topRatedMenu');
const menu2 = document.querySelector('#popularMenu');
const menu3 = document.querySelector('#upcomingMenu');
const menu4 = document.querySelector('#latestMenu');
const menu5 = document.querySelector('#home');

menu1.addEventListener(
    'click',
    (e) => {
        window.location = 'toprated.html';
    }
);

menu2.addEventListener(
    'click',
    (e) => {
        window.location = 'popular.html';
    }
);

menu3.addEventListener(
    'click',
    (e) => {
        window.location = 'upcoming.html';
    }
);

menu4.addEventListener(
    'click',
    (e) => {
        window.location = 'latest.html';
    }
);

menu5.addEventListener(
    'click',
    (e) => {
        window.location = 'home.html';
    }
);

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener(
    'click',
    () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
);