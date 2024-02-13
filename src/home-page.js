import Latte from './latte.jpg';
import './style.css';
function homePage() {
    const content = document.querySelector('#content');
    const h1 = document.querySelector('h1');
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');
    const slogan = document.createElement('p');
    slogan.setAttribute('id', 'slogan');
    const subtext = document.createElement('p');
    subtext.setAttribute('id', 'subtext');
    const coffeeImg = document.createElement('img');
    h1.textContent = "cinna cafe";
    slogan.textContent = "Brunch All Day," + "\n" + "Everyday";
    subtext.textContent = "Cinna cafe delivers lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    coffeeImg.src = Latte;
    content.appendChild(mainContent);
    mainContent.appendChild(slogan);
    mainContent.appendChild(subtext);
    mainContent.appendChild(coffeeImg);
}
export { homePage };