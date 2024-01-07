import { speedList } from '../js/data/speeddata.js';

const navbarSelect = document.querySelector('.js-nav-link-speed');
navbarSelect.classList.add('nav-link-current');



//Generates IDs for each data entry based on index in the array
const speedListId = speedList.map((item, index) => {
    return item.id = `speed-${index}`;
})

let speedHTML = '';
let sidebarHTML = '';
let factCount = 0;


//Generates HTML cards for each entry in speedList
speedList.forEach((item) => {
    let factListHTML = '';
    for (let i = 0; i < item.factList.length; i++) {
        const fact = item.factList[i];
        factListHTML += `<p class="card-fact">${fact}</p>`;
    }

    /* Old HTML formatting
    if (factCount % 2 === 0) {
        speedHTML += `
        <div id="${item.id}" class="compare-card">
            <div class="row">
                <div class="col-md-6 col-12">
                    <img class="card-image" src="${item.image}" title="${item.imageDesc}">
                </div>
                <div class="col-md-6 col-12">
                    <h1 class="card-title">${item.title}</h1>
                    <p class="card-speed">Speed: ${item.speed}</p>
                    ${factListHTML}
                </div>
            </div>
        </div>
        `;
        factCount++;
    } else {
        speedHTML += `
        <div id="${item.id}" class="compare-card">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h1 class="card-title">${item.title}</h1>
                    <p class="card-speed">Speed: ${item.speed}</p>
                    ${factListHTML}
                </div>
                <div class="col-md-6 col-12">
                    <img class="card-image" src="${item.image}" title="${item.imageDesc}">
                </div>
            </div>
        </div>
        `;
        factCount++;
    }
    */

    if (factCount % 2 === 0) {
        speedHTML += `
        <div id="${item.id}" class="compare-card">
            <div class="row justify-content-around">
                <div class="col-10 card-title-container">
                    <h1 class="card-count">- ${factCount + 1} -</h1>
                    <h1 class="card-title">${item.title}</h1>
                    <p class="card-diameter">Speed: ${item.speed}</p>
                </div>
                <div class="col-md-6 col-12">
                    <img class="card-image" src="${item.image}" title="${item.imageDesc}">
                    <p class="card-image-caption">${item.imageDesc} by ${item.imageCaption}</p>
                </div>
                <div class="card-fact-container col-md-6 col-12">
                    <h2>Facts:</h2>
                    <p>${factListHTML}</p>
                </div>
            </div>
        </div>
        `;
        factCount++;
    } else {
        speedHTML += `
        <div id="${item.id}" class="compare-card">
            <div class="row justify-content-around">
                <div class="col-10 card-title-container">
                    <h1 class="card-count">- ${factCount + 1} -</h1>
                    <h1 class="card-title">${item.title}</h1>
                    <p class="card-diameter">Speed: ${item.speed}</p>
                </div>
                <div class="card-fact-container col-md-6 col-12">
                    <h2>Facts:</h2>
                    <p>${factListHTML}</p>
                </div>
                <div class="col-md-6 col-12">
                    <img class="card-image" src="${item.image}" title="${item.imageDesc}">
                    <p class="card-image-caption">${item.imageDesc} by ${item.imageCaption}</p>
                </div>
            </div>
        </div>
        `;
        factCount++;
    }



    if (item.id === 'speed-0') {
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

    document.querySelector('.js-speed-body').innerHTML = speedHTML;
    document.querySelector('.js-nav-side-content').innerHTML = sidebarHTML;

});

//Highlights entries on sidenav based on position on the page
window.addEventListener('scroll', () => {
    const position = Math.floor((scrollY + 500) / 1000);
    if (position < speedList.length) {
        NavSideHighlight(position);
    }

});

//Highlights the active card div and removes highlights from all others
function NavSideHighlight(index) {
    const test = document.querySelector(`.speed-${index}`);
    const hello = Array.from(document.getElementsByClassName('js-nav-side-item'));
    hello.forEach((test) => {
        test.classList.remove('js-nav-side-item');
    });
    test.classList.add('js-nav-side-item');
}