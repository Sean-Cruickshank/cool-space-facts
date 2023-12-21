import { attributionsList } from '../js/data/attributionsdata.js';

//Populates attributionsTable with data from attributionsdata.js
let attributionsHTML = `<tr>
    <th>Name:</th>
                <th>Page:</th>
                <th>Source:</th>
            </tr`;

attributionsList.forEach((item) => {
    attributionsHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.page}</td>
            <td>
                <a target="_blank" href="${item.source}">
                    ${item.sourceName}
                </a>
            </td>

        `;
    document.querySelector('.attributionsTable').innerHTML = attributionsHTML;
})

//Generates click events for the radio buttons
let radioFilter = 'name';
const radioName = document.getElementById('radio-name');
radioName.addEventListener('click', () => {
    radioFilter = 'name';
    attributionSearch();
});
const radioPage = document.getElementById('radio-page');
radioPage.addEventListener('click', () => {
    radioFilter = 'page';
    attributionSearch();
});
const radioSource = document.getElementById('radio-source');
radioSource.addEventListener('click', () => {
    radioFilter = 'source';
    attributionSearch();
});

const myInputEvent = document.getElementById('myInput');
myInputEvent.addEventListener('keyup', () => {
    attributionSearch();
});


//Enables searchbar functionality and filters results by radio button selected
function attributionSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("attributionsTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        if (radioFilter === 'name') {
            td = tr[i].getElementsByTagName("td")[0];
        } else if (radioFilter === 'page') {
            td = tr[i].getElementsByTagName("td")[1];
        } else if (radioFilter === 'source') {
            td = tr[i].getElementsByTagName("td")[2];
        }

        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};