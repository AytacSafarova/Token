// const info = {
//     from: 'me',
//     to: 'Joaquin Phoenix',
//     amount: 200
//   }
//   fetch('https://acb-api.algoritmika.org/api/transaction', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(info)
//   });
//   const info = {
//     from: 'Aytac',
//     to: 'Jane Doe',
//     amount: 20000000
//   }
//   fetch('https://acb-api.algoritmika.org/api/transaction/6', {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(info)
//   });







// //fetch data with api key 
// const ul = document.querySelector("ul");
// const searchInput = document.querySelector("input");
// const searchBtn = document.querySelector("button");

// const URL = "https://content.guardianapis.com/search";
// const API_KEY = "5ec6705d-11e7-4690-99b4-331b6a5224d2";



// function getData() {
//     let value = searchInput.value;
//     fetch(`${URL}?q=${value}&api-key=${API_KEY}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             ul.textContent = ""
//             let news = data.response.results;
//             news.forEach(element => {
//                 const li = document.createElement("li");
//                 li.innerHTML = element.webTitle
//                 ul.appendChild(li)
//             })
//         })
// }

// searchInput.addEventListener("keyup", (event) => {
//     if (event.key == "Enter") {
//         getData()
//     }
// })

// searchBtn.addEventListener("click", () => getData())




