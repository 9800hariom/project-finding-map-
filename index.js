const flag = document.querySelector(".flags");
const form = document.querySelector("form");
const contry = document.querySelector(".country");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector(".input-box").value;
  fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (jsondata) {
      const flagUrl = jsondata[0].flags.png;
      flag.src = flagUrl;

      const population = jsondata[0].population;
      console.log(population)
      document.querySelector(".population").innerHTML = population;

      const country = jsondata[0].name.common;
      document.querySelector(".country").innerHTML = country;

      const Region = jsondata[0].region;
      document.querySelector(".regionn").innerHTML = Region;

      const capital =jsondata[0].capital[0];

      document.querySelector(".capital1").innerHTML = capital;

      const Language = jsondata[0].language;
      document.querySelector(".language1").innerHTML = Language;
    const currencies=jsondata[0].currencies;


      let currencyKey=Object.keys(currencies)[0];

      console.log(currencyKey)
 document.querySelector('.currencyname').innerHTML=jsondata[0].currencies[currencyKey].name;
console.log(jsondata[0].currencies[currencyKey])
      //console.log(currencies)
      // const currencies= jsondata[0].currency;
      // document.querySelector(".currencyname").innerHTML = jsondata[0].currencies[currencyKey].name;

      



    });
});
