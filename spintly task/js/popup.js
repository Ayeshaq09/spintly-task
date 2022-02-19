// fetch('https://fakestoreapi.com/products').then((data) => {
//     return data.json();
// }).then((success) => {
//     let renderData = "";
//     success.map((values) => {
//         renderData += `<div class="card">
//         <h1 class="title">${values.title}</h1>
//         <img src=${values.image} alt="">
//         <p class="description">${values.description}</p>
//         <p class="category">${values.category}</p>
//         <p class="price">${values.price}</p>
//     </div>`
//     });
//     document.getElementById("grid--container").innerHTML= renderData;
// }).catch((error) => {
//     console.log("cannot access the resource");
// });

// searchBar.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase();
//     console.log(value);
//     users.forEach(user => {
//         const isVisible =
//         user.title.toLowerCase().includes(value) ||
//         user.userId.toLowerCase().includes(value);
//         user.element.classList.toggle("hide", !isVisible)
//     })
// });


// fetch('https://jsonplaceholder.typicode.com/todos/').then((data) => {
//     return data.json();
// }).then((success) => {
//     renderData = "";
//     success.map((values) => {
//         renderData += `<div class="card">
//         <h1 class="title">${values.title}</h1>
//         <p class="desciption">${values.id}</p>
//         <p class="category">${values.userId}</p>
//         <p class="price">${values.completed}</p>
//     </div>`;
//     return {title: values.title, category: values.category}
//     });
//     document.getElementById("grid--container").innerHTML= renderData;
// }).catch((error) => {
//     console.log("cannot access the resource");
// });




const openModal = document.getElementById('button');
const closeModal = document.querySelector('.close');

const formInput = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');



openModal.addEventListener("click", function() {
	document.querySelector('.bg--popup').style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";

});

closeModal.addEventListener("click", function() {
	document.querySelector('.bg--popup').style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
});


formInput.addEventListener('submit', function(e) {

    e.preventDefault();

    console.log(`User Name: ${nameInput.value}`);
    console.log(`User Email Id: ${emailInput.value}`);
    console.log(`User Feedback: ${feedbackInput.value}`);
});