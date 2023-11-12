let select1 = document.querySelector("#select_1");
let select2 = document.querySelector("#select_2");
let btn = document.querySelector("button");
let p = document.querySelector("p");

// fetch for select Option
fetch(`https://v6.exchangerate-api.com/v6/58994f47683e75ca87a824d0/latest/USD`)
  .then((e) => e.json())
  .then((data) => {
    console.log(data);
    Object.keys(data.conversion_rates).map((selectData) => {
      select1.innerHTML += `
        <option class="option_1">${selectData}</option>
        `;
      select2.innerHTML += `
        <option class="option_2">${selectData}</option>
        `;
    });
  });

// function for currency converter
btn.addEventListener("click", () => {
  p.innerHTML = `
  <span class="loader"></span>

  `;
  fetch(
    `https://v6.exchangerate-api.com/v6/58994f47683e75ca87a824d0/latest/${select1.value}`
  )
    .then((e) => e.json())
    .then((datas) => {
      console.log(datas);
      p.innerHTML = ` 1 <span class="firstCurrency">${select1.value}</span> = ${
        datas.conversion_rates[select2.value]
      }  <span class="secondCurrency">${select2.value}</span>`;
    });
});
