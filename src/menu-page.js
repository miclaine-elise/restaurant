import './style.css';

function menuPage() {
    const content = document.querySelector('#content');
    const homeBtn = document.querySelector('#home-btn');
    homeBtn.removeAttribute('class', 'selected-btn');
    const menuBtn = document.querySelector('#menu-btn');
    menuBtn.setAttribute('class', 'selected-btn');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    const coffeeMenu = document.createElement('div');
    coffeeMenu.setAttribute('id', 'coffee-menu');
    const coffeeTitle = document.createElement('span');
    coffeeTitle.setAttribute('class', 'category-title');
    coffeeTitle.textContent = "COFFEE";
    const coffeeList = document.createElement('ul');
    const espresso = document.createElement('li');
    espresso.textContent = "espresso 1.50";
    const americano = document.createElement('li');
    americano.textContent = "americano 1.50";
    const capuccino = document.createElement('li');
    capuccino.textContent = "capuccino 3";
    const latte = document.createElement('li');
    latte.textContent = "latte 3";

    const teaMenu = document.createElement('div');
    teaMenu.setAttribute('id', 'tea-menu');
    const teaTitle = document.createElement('span');
    teaTitle.setAttribute('class', 'category-title');
    teaTitle.textContent = "TEA";
    const teaList = document.createElement('ul');
    const matcha = document.createElement('li');
    matcha.textContent = "matcha latte 3";
    const chai = document.createElement('li');
    chai.textContent = "chai latte 3";
    const mint = document.createElement('li');
    mint.textContent = "mint 1";
    const chamomille = document.createElement('li');
    chamomille.textContent = "chamomille 1";

    const bakeryMenu = document.createElement('div');
    bakeryMenu.setAttribute('id', 'bakery-menu');
    const bakeryTitle = document.createElement('span');
    bakeryTitle.setAttribute('class', 'category-title');
    bakeryTitle.textContent = "BAKERY";
    const bakeryList = document.createElement('ul');
    const croissant = document.createElement('li');
    croissant.textContent = "croissant 3";
    const chocolateCroissant = document.createElement('li');
    chocolateCroissant.textContent = "chocolate croissant 3";
    const brioche = document.createElement('li');
    brioche.textContent = "garlic brioche 3";
    const lemonCake = document.createElement('li');
    lemonCake.textContent = "lemon cake 4";

    const brunchMenu = document.createElement('div');
    brunchMenu.setAttribute('id', 'brunch-menu');
    const brunchTitle = document.createElement('span');
    brunchTitle.setAttribute('class', 'category-title');
    brunchTitle.textContent = "BRUNCH";
    const brunchList = document.createElement('ul');
    const zucPancakes = document.createElement('li');
    const zucPancakesTitle = document.createElement('h4');
    zucPancakesTitle.textContent = "ZUCCHINI PANCAKES 8";
    const zucPancakesDes = document.createElement('p');
    zucPancakesDes.textContent = "zucchini pancakes, greek yogurt, maple syrup, smoked salmon, cilantro";
    const waffles = document.createElement('li');
    const wafflesTitle = document.createElement('h4');
    wafflesTitle.textContent = "SWEET POTATO WAFFLES 7";
    const wafflesDes = document.createElement('p');
    wafflesDes.textContent = "sweet potato waffle, maple syrup, berries"
    const omellette = document.createElement('li');
    const omelletteTitle = document.createElement('h4');
    omelletteTitle.textContent = "OMELLETTE 7";
    const omelleteDes = document.createElement('p');
    omelleteDes.textContent = "eggs, mushroom, cherry tomato, goat cheese, spinach";
    const hash = document.createElement('li');
    const hashTitle = document.createElement('h4');
    hashTitle.textContent = "MUSHROOM HASH 7";
    const hashDes = document.createElement('p');
    hashDes.textContent = "eggs, mushroom, potato, onion, cheese";

    content.appendChild(menu);
    menu.appendChild(coffeeMenu);
    coffeeMenu.appendChild(coffeeTitle);
    coffeeMenu.appendChild(coffeeList);
    coffeeList.appendChild(espresso);
    coffeeList.appendChild(americano);
    coffeeList.appendChild(capuccino);
    coffeeList.appendChild(latte);
    menu.appendChild(teaMenu)
    teaMenu.appendChild(teaTitle);
    teaMenu.appendChild(teaList);
    teaList.appendChild(matcha);
    teaList.appendChild(chai);
    teaList.appendChild(mint);
    teaList.appendChild(chamomille);
    menu.appendChild(bakeryMenu)
    bakeryMenu.appendChild(bakeryTitle);
    bakeryMenu.appendChild(bakeryList);
    bakeryList.appendChild(croissant);
    bakeryList.appendChild(chocolateCroissant);
    bakeryList.appendChild(brioche);
    bakeryList.appendChild(lemonCake);
    menu.appendChild(brunchMenu);
    brunchMenu.appendChild(brunchTitle);
    brunchMenu.appendChild(brunchList);
    brunchList.appendChild(zucPancakes);
    zucPancakes.appendChild(zucPancakesTitle);
    zucPancakes.appendChild(zucPancakesDes);
    brunchList.appendChild(waffles);
    waffles.appendChild(wafflesTitle);
    waffles.appendChild(wafflesDes);
    brunchList.appendChild(omellette);
    omellette.appendChild(omelletteTitle);
    omellette.appendChild(omelleteDes);
    brunchList.appendChild(hash);
    hash.appendChild(hashTitle);
    hash.appendChild(hashDes);


}
export { menuPage }