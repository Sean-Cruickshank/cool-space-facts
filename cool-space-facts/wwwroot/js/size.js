const navbarSelect = document.querySelector('.js-nav-link-size');
navbarSelect.classList.add('nav-link-current');

const sizeList = [
    {
        title: 'The International Space Station',
        size: '108m',
        image: '/images/size/iss.jpg',
        imageDesc: 'A view of the International Space Station over Earth',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Deimos',
        size: '12.4km',
        image: '/images/size/deimos.jpg',
        imageDesc: 'The moon Deimos',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Neutron Stars',
        size: '20km',
        image: '/images/size/neutron_star.jpg',
        imageDesc: 'A neutron star',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Vesta',
        size: '525km',
        image: '/images/size/vesta.jpg',
        imageDesc: 'The asteroid Vesta',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Ceres',
        size: '946km',
        image: '/images/size/ceres.jpg',
        imageDesc: 'Dwarf planet and asteroid, Ceres',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Pluto',
        size: '2377km',
        image: '/images/size/pluto.jpg',
        imageDesc: 'An image of Pluto',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'The Moon',
        size: '3475km',
        image: '/images/size/moon.jpg',
        imageDesc: 'The Moon in waning gibbous',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Mercury',
        size: '4879km',
        image: '/images/size/mercury.jpg',
        imageDesc: 'An image of Mercury',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Ganymede',
        size: '5268km',
        image: '/images/size/ganymede.jpg',
        imageDesc: 'Jupiter\'s largest moon, Ganymede',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Mars',
        size: '6779km',
        image: '/images/size/mars.jpg',
        imageDesc: 'An image of Mars',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'White Dwarf Stars',
        size: '11,200km - 24,000km',
        image: '/images/size/white_dwarf_star.jpg',
        imageDesc: 'A white dwarf star',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Venus',
        size: '12,104km',
        image: '/images/size/venus.jpg',
        imageDesc: 'An image of Venus',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Earth',
        size: '12,742km',
        image: '/images/size/earth.jpg',
        imageDesc: 'Cities of Earth at night',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Neptune',
        size: '49,244km',
        image: '/images/size/neptune.jpg',
        imageDesc: 'An image of Neptune',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Uranus',
        size: '50,724km',
        image: '/images/size/uranus.jpg',
        imageDesc: 'An image of Uranus with rings',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Red Dwarf Stars',
        size: '70,000km - 350,000km',
        image: '/images/size/red_dwarf_star.jpg',
        imageDesc: 'A red dwarf star',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Saturn',
        size: '116,460km (282,000km with rings)',
        image: '/images/size/saturn.jpg',
        imageDesc: 'An image of Saturn',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Jupiter',
        size: '139,820km',
        image: '/images/size/jupiter.jpg',
        imageDesc: 'An image of Jupiter',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'GQ Lupi b',
        size: '930,000km',
        image: '/images/size/gq_lupi_b.jpg',
        imageDesc: 'An image of GQ Lupi B',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'The Sun',
        size: '1,392,000km',
        image: '/images/size/sun.jpg',
        imageDesc: 'An image of the Sun',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Sagittarius A',
        size: '51,800,000km',
        image: '/images/size/sagittarius.jpg',
        imageDesc: 'An image of Sagittarius A',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'UY Scuti',
        size: '2,376,500,000km',
        image: '/images/size/uy_scuti.jpg',
        imageDesc: 'An artists depiction of UY Scuti',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'TON 618',
        size: '1,300AU',
        image: '/images/size/ton_618.jpg',
        imageDesc: 'An artists depiction of TON 618',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'The Oort Cloud',
        size: '800,000AU',
        image: '/images/size/oort_cloud.jpg',
        imageDesc: 'An illustration of the Oort Cloud',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Eagle Nebula',
        size: '70 Light Years',
        image: '/images/size/eagle_nebula.jpg',
        imageDesc: 'An image of the Eagle Nebula',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'The Milky Way',
        size: '105,700 Light Years',
        image: '/images/size/milky_way.jpg',
        imageDesc: 'An artists depiction of the Milky Way galaxy',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Andromeda',
        size: '152,000 Light Years',
        image: '/images/size/andromeda.jpg',
        imageDesc: 'An image of the Andromeda galaxy',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'ESO 383-G 076',
        size: '1,760,000 Light Years',
        image: '/images/size/eso_383g_076.jpg',
        imageDesc: 'An image of ESO 383-G 076',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Laniakea Supercluster',
        size: '520,000,000 Light Years',
        image: '/images/size/laniakea.jpg',
        imageDesc: 'An illustration of the Laniakea Supercluster',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'Hercules-Corona Borealis Great Wall',
        size: '10,000,000,000 Light Years',
        image: '/images/size/hercules_corona.jpg',
        imageDesc: 'An illustration of the Hercules-Corona Borealis Great Wall',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
    {
        title: 'The Observable Universe',
        size: '93,016,000,000 Light Years',
        image: '/images/size/universe.jpg',
        imageDesc: 'An illustration of the observable universe',
        factList: [
            'Fact A',
            'Fact B',
            'Fact C'
        ]
    },
];

//Generates IDs for each data entry based on index in the array
const sizeListId = sizeList.map((item, index) => {
    return item.id = `size-${index}`;
})

let sizeHTML = '';
let sidebarHTML = '';

console.log(sizeList);


//Generates HTML cards for each entry in sizeList
sizeList.forEach((item) => {
    let factListHTML = '';
    for (let i = 0; i < item.factList.length; i++) {
        const fact = item.factList[i];
        console.log(item.factList);
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