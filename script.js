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
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createcountry(spreadOperator);
      // var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${value.latlng[0]}&lon=${value.latlng[1]}&appid={63b43da2942970bf5f69ddb11c8aea2b}`
      // console.log(WAPI) 
      console.log(value)
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region, population,latitude,longitude }) {
  // 
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card"  >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="card-body">
  <p><span>Population :</span>${population}</p>
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary">Click for Weather</a>
  <div>sss${latitude}</div>
  <div>sss${longitude}</div>
  </div>
</div>
</div>
`
}
//  var WAPI = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={63b43da2942970bf5f69ddb11c8aea2b}"