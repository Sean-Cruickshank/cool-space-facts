const navbarSelect = document.querySelector('.js-nav-link-size');
navbarSelect.classList.add('nav-link-current');

const sizeList = [
    {
        id: 'size-0',
        title: 'Asteroids',
        size: '1km',
        factList: 'There are more asteroids in the solar system, than $100 notes in my wallet'
    },
    {
        id: 'size-1',
        title: 'Ceres',
        size: '1000km',
        factList: 'It is the largest asteroid in the asteroid belt and really should just be called a planet I think'
    },
    {
        id: 'size-2',
        title: 'The Moon',
        size: '2000km',
        factList: 'Look in the sky!!! You can see it with your eye!'
    },
    {
        id: 'size-3',
        title: 'Venus',
        size: '2000km',
        factList: 'hot'
    },
    {
        id: 'size-4',
        title: 'Mercury',
        size: '2000km',
        factList: 'less hot somehow'
    },
    {
        id: 'size-5',
        title: 'The Sun',
        size: '2000km',
        factList: 'more hot'
    }
]

let sizeHTML = '';
let sidebarHTML = '';


//Generates HTML cards for each entry in sizeList
sizeList.forEach((item) => {
    sizeHTML += `
        <div class="size-card">
            <h1 id="${item.id}" class="size-card-title">${item.title}</h1>
            <p>${item.size}</p>
          <p>${item.factList}</p>
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