var API = "https://restcountries.com/v3.1/all";

var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.map( value => {
    var spreadOperator = {
        ...value,
        name:value.name.common,
        flag:value.flags.png,
        code:value.cioc,
        capital:value.capital[0],
        region:value.region,
        population:value.population
    }
   createcountry(spreadOperator)   
    });
  })

  function createcountry({name,flag,code,capital,region,population}){
    document.body.innerHTML +=
    `
    <div class="card" style="width: 18rem;" >
    <div class="card-title" ><h2>${name}</h2></div>
    <img src="${flag}" class="card-img-top" alt="${name}'Flag image">
    <div class="card-body">

      <p class="card-text ">Population :${code}</p>
      <p class="card-text">Captial : ${capital}</p>
      <p class="card-text">Region : ${region}</p>
      <p class="card-text">Country Code :${population}</p>
      <a href="#" class="btn btn-primary">Click for Weather</a>
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
