//     let custFirstNames = customers.map((cust)=> cust.name.first)
//     function renderNames(arr) {
//         arr.forEach(name => {
//             let h2 = document.createElement("h2")
//             h2.innerText = name;
//             document.getElementById("output").appendChild(h2)
//         });
//     }
//     renderNames(custFirstNames)

//     let custLastNames = customers.map((cust)=> cust.name.last)
//     function renderNames(arr) {
//         arr.forEach(name => {
//             let h2 = document.createElement("h2")
//             h2.innerText = name;
//             document.getElementById("output").appendChild(h2)
//         });
//     }
//     renderNames(custLastNames)
// Tried to follow along with Amy's videos. Got stuck. My brain hurts. Goodnight
const cust = customers[0];
console.log(customers);

const insertionPoint = document.querySelector("#output");

const customerCard = document.createElement("div");

customerCard.classList.add("customer-card");
insertionPoint.appendChild(customerCard);
console.log(customerCard);
const custName = cust.name.first + " " + cust.name.last
customerCard.innerHTML = "<h2>${custName}</h2>"
