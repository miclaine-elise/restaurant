import Cafe from './cafe.jpg';
import './style.css';

function aboutPage() {
    const aboutContent = document.createElement('div');
    aboutContent.setAttribute('id', 'about-content');
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const aboutBtn = document.querySelector('#about-btn');
    homeBtn.removeAttribute('class', 'selected-btn');
    menuBtn.removeAttribute('class', 'selected-btn');
    aboutBtn.setAttribute('class', 'selected-btn');

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "The beginnings of Cinna...";
    const aboutInfo = document.createElement('p');
    aboutInfo.textContent = "Cinna was created by Miclaine for an assigment during her time working on The Odin Project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const cafeImg = document.createElement('img');
    cafeImg.src = Cafe;

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const contactUs = document.createElement('span');
    contactUs.textContent = "contact us";
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone: 000-000-0000';
    const instagram = document.createElement('p');
    instagram.textContent = 'Instagram: @cinnacafe';

    content.appendChild(aboutContent);
    aboutContent.appendChild(aboutTitle);
    aboutContent.appendChild(aboutInfo);
    aboutContent.appendChild(cafeImg);
    aboutContent.appendChild(contact);
    contact.appendChild(contactUs);
    contact.appendChild(phoneNumber);
    contact.appendChild(instagram);

}
export { aboutPage }