const charactersList = document.getElementById('grid--container');
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('search--btn');

let apiUsers = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredData = apiUsers.filter((inputString) => {
        return (
            inputString.schemeName.toLowerCase().includes(searchString)
        );
    });
    searchBtn.addEventListener('click', () =>{
        displayData(filteredData);
    })
});

const loadData = async () => {
    const res = await fetch('https://api.mfapi.in/mf');
    apiUsers = await res.json();
    displayData(apiUsers);
    return apiUsers;
};

const displayData = (users) => {
    const renderData = users
        .map((user) => {
            return `<div class="card">
            <p class="code">Scheme-code: ${user.schemeCode}</p>
            <p class="name">Scheme-name: ${user.schemeName}</p>
        </div>`;
        })
        .join('');
    charactersList.innerHTML = renderData;
};

loadData().then(() => {
    console.log("resolved");
}).catch ((err) => {
        console.error("request rejected");
    });