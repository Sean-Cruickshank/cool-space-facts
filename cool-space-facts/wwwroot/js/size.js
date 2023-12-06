const navbarSelect = document.querySelector('.js-nav-link-size');
navbarSelect.classList.add('nav-link-current');

const sizeList = [
    {
        id: 'size-01',
        title: 'Asteroids',
        size: '1km',
        factList: 'There are more asteroids in the solar system, than $100 notes in my wallet'
    },
    {
        id: 'size-02',
        title: 'Ceres',
        size: '1000km',
        factList: 'It is the largest asteroid in the asteroid belt and really should just be called a planet I think'
    },
    {
        id: 'size-03',
        title: 'The Fucking Moon',
        size: '2000km',
        factList: 'Look in the sky!!! You can see it with your eye!'
    },
]

let sizeHTML = '';
let sidebarHTML = '';

sizeList.forEach((item) => {
    sizeHTML += `
        <h1 id="${item.id}" class="size-card-title">${item.title}</h1>
        <p>${item.size}</p>
        <p>${item.factList}</p>
        `;

    sidebarHTML += `
        <a class="nav-side-item" href="#${item.id}">${item.title}</a>
`
});

document.querySelector('.js-size-card').innerHTML = sizeHTML;
document.querySelector('.js-nav-side-content').innerHTML = sidebarHTML;