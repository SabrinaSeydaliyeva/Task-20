let form = document.querySelector("form");
let fromInput = document.querySelector(".from-input");
let toInput = document.querySelector(".to-input");
let amountInput = document.querySelector(".amount-input");
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

btn.addEventListener("click", postData)
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
getData()


// post data
function postData(e) {
    let info={
        from:fromInput.value,
        to:toInput.value,
        amount: amountInput.value
    }
     
    fetch("https://acb-api.algoritmika.org/api/transaction",{
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify(info)
    })

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



