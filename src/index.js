import './style.css';
import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { aboutPage } from './about-page';


const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const content = document.querySelector('#content');
homeBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    homePage();
})
menuBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    menuPage();
})
aboutBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    aboutPage();
})

homePage();
