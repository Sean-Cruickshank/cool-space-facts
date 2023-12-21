import { sizeList } from '../js/data/sizedata.js';

const navbarSelect = document.querySelector('.js-nav-link-size');
navbarSelect.classList.add('nav-link-current');



//Generates IDs for each data entry based on index in the array
const sizeListId = sizeList.map((item, index) => {
    return item.id = `size-${index}`;
})

let sizeHTML = '';
let sidebarHTML = '';


//Generates HTML cards for each entry in sizeList
sizeList.forEach((item) => {
    let factListHTML = '';
    for (let i = 0; i < item.factList.length; i++) {
        const fact = item.factList[i];
        factListHTML += `<p class="card-fact">${fact}</p>`;
    }

    sizeHTML += `
        <div id="${item.id}" class="compare-card">
            <img class="card-image" src="${item.image}" title="${item.imageDesc}">
            <h1 class="card-title">${item.title}</h1>
            <p class="card-diameter">Diameter: ${item.size}</p>
            ${factListHTML}
        </div>
        `;

    if (item.id === 'size-0') {
        sidebarHTML +=
            `
          <a class="nav-side-item ${item.id} js-nav-side-item" href="#${item.id}">${item.title}</a>
        `
    } else {
        sidebarHTML +=
            `
          <a class="nav-side-item ${item.id}" href="#${item.id}">${item.title}</a>
        `
    }
    
    document.querySelector('.js-size-body').innerHTML = sizeHTML;
    document.querySelector('.js-nav-side-content').innerHTML = sidebarHTML;

});


//When the user hovers their mouse over the div for a card, highlight the corresponding entry in the sidenav
/*
document.querySelectorAll('.size-card')
    .forEach((content, index) => {
        content.addEventListener('wheel', () => {
            sideNavHighlight(index);
        });
    });
*/

//When the user clicks an entry in the sidenav, highlight that entry
/*
document.querySelectorAll('.nav-side-item')
    .forEach((content, index) => {
        content.addEventListener('click', () => {
            sideNavHighlight(index);
        });
    });
*/

//Highlights entries on sidenav based on position on the page
window.addEventListener('scroll', () => {
    const position = Math.floor((scrollY + 375) / 750);
    if (position < sizeList.length) {
        NavSideHighlight(position);
    }

});

//Highlights the active card div and removes highlights from all others
function NavSideHighlight(index) {
    const test = document.querySelector(`.size-${index}`);
    const hello = Array.from(document.getElementsByClassName('js-nav-side-item'));
    hello.forEach((test) => {
        test.classList.remove('js-nav-side-item');
    });
    test.classList.add('js-nav-side-item');
}