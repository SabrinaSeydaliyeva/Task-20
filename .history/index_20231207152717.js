let form = document.querySelector("form");
let fromInput = document.querySelector(".from-input");
let toInput = document.querySelector(".to-input");
let amountInput = document.querySelector(".amount-input");
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

// btn.addEventListener("click", createObject)
getData()
// fetch data
function getData(){
    // ul.innerHTML+=``   
    fetch("https://acb-api.algoritmika.org/api/transaction")
    .then((response) => {
      return response.json();
    })
    
    .then((data) => {
      showAllData(data)

    });
}
createObject()


// post data
function postData(element) {
    let info={
        from:fromInput.value,
        to:to,
        amount:""
    }
     
    fetch("https://acb-api.algoritmika.org/api/transaction",{
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify(info)
    })
    .then((response) => {
      return response.json();
    })
    
    .then((data) => {
      console.log(data);
      showAllData(data)

    });
}
// show data
function showAllData(data) {
    data.forEach((element) => {
      ul.innerHTML += `
      <li>
      <h1>${element.from}</h1>
      <h2>${element.to}</h2>
      <h3>${element.amount}</h3>
  
  </li>`;
    });
}



