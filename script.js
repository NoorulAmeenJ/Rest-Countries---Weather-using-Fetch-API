var API = "https://restcountries.com/v3.1/all";

var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital[0],
        region: value.region,
        population: value.population,
      };
      createcountry(spreadOperator);
    });
  });

function createcountry({ name, flag, code, capital, region, population }) {
  document.body.innerHTML += `
  
    <div class="card" style="width: 18rem;">
    <h4>${name}</h4>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="card-body">
  <p><span>Population :</span>${population}</p>
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary">Click for Weather</a>
  <div>sss</div>
  </div>
</div>
`

}
// country- value.name.common
// flag - value.flags.png
// capital -value.capital[0]
// region-value.region
//   lat/lag -value.latlng[0],value.latlng[1]
//   weather-
