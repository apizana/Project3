// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, location, and population
let cities = [{
  location: [32.4475361, -99.7795099],
  name: "Abilene",
  website: "alz.org"
},
{
  location: [35.198636, -101.8421383],
  name: "Amarillo",
  website: "https://parkcentral.org/the-ware/"
},
{
  location: [35.2113934, -101.9129013],
  name: "Amarillo",
  Website: "https://www.alzcottages.com/"
},
{
  location: [32.613897, -97.160176],
  name: "Arlington",
  website: "https://avalonmemorycare.com/location/arlington/"
},
{
  location: [32.6953867, -97.1133593],
  name: "Arlington",
  website: "https://www.alzheimers.net/resources/texas/arlington/autumn-leaves-of-arlington"
},
{
  location: [32.7462539, -97.131633],
  name: "Arlington",
  website: "https://www.alzheimers.net/resources/texas/arlington/broadway-plaza-at-pecan-park"
},
{
  location: [30.406729, -97.8155],
  name: "Austin",
  website: "https://arden-courts.org/Austin?utm_source=google&utm_medium=organic&utm_campaign=gmb&cid=18611"
},
{
  location: [30.406729, -97.8155],
  name: "Austin",
  website: "https://www.querenciabartoncreek.com/supported-living/"
},
{
  location: [30.1010448, -94.1685556],
  name: "Beaumont",
  website: "https://www.brookdale.com/en/communities/brookdale-dowlen-oaks.html?cid=yext"
},
{
  location: [32.831707, -97.142389],
  name: "Bedford",
  Website: "https://www.brookdale.com/en/communities/brookdale-oak-hollow.html"
},
{
  location: [33.0354622, -96.8861672],
  name: "Carrolton",
  website: "https://grandbrook.com/communities/carrollton/"
},
{
  location: [30.479579, -97.8224673],
  name: "Cedar Park",
  website: "https://sinceriseniorliving.com/cedar-ridge/"
},
{
  location: [29.715926, -96.538343],
  name: "Columbus",
  website: "https://www.dhcgrp.com/columbus-oaks/"
},
{
  location: [29.5371403, -98.3338143],
  name: "Converse",
  website: "https://esplanadeseniorcampus.com/"
},
{
  location: [32.9012168, -96.7878763],
  name: "Dallas",
  website: "https://www.carechanges.com/living-communities/the-hillcrest-house_dallas_texas"
},
{
  location: [32.948257, -96.825411],
  name: "Dallas",
  website: "https://www.alz.org/dallasnetexas"
},
{
  location: [32.8840333, -96.7643599],
  name: "Dallas",
  website: "https://walnutplacelcs.com"
},
{
  location: [32.804524, -96.774386],
  name: "Dallas",
  website: "https://www.seniorcare.com/assisted-living/tx/dallas/desoto-tx-arbor-house-lp/40008/"
},
{
  location: [32.8728349, -96.7297142],
  name: "Dallas",
  website: "https://www.aplaceformom.com/community/stone-bridge-alzheimers-special-care-center-50615"
},
{
  location: [31.80441, -106.510482],
  name: "El Paso",
  website: "https://www.alz.org/"
},
{
  location: [31.854637, -106.5215936],
  name: "El Paso",
  website: "https://www.alzheimers.net/resources/texas/el-paso/sunridge-at-desert-springs"
},
{
  location: [31.7755011, -106.3798259],
  name: "El Paso",
  website: "https://www.seniorresource.com/assisted_living/village-oaks-at-cielo-vista/"
},
{
  location: [29.693716, -97.105561],
  name: "Faltonia",
  website: "https://www.nexion-health.com/flatonia/"
},
{
  location: [32.7479414, -97.3410567],
  name: "Fort Worth",
  website: "https://www.jameslwest.org/"
},
{
  location: [32.6531918, -97.4177664],
  name: "Fort Worth",
  website: "https://autumnleaves.com/cityview/"
},
{
  location: [32.7079414, -97.4146512],
  name: "Fort Worth",
  website: "http://www.uncommoncare.com/"
},
{
  location: [32.6635711, -97.4239278],
  name: "Fort Worth",
  website: "https://lcca.com/locations/tx/gt-fort-worth/"
},
{
  location: [],
  name: "Gunter",
  population: 2296224
},
{
  location: [],
  name: "Houston",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Houston",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Houston",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Houston",
  population: 446599
},
{
  location: [41.2524, -95.9980],
  name: "Houston",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Irving",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Katy",
  population: 446599
},
{
  location: [29.7604, -95.3698],
  name: "Laredo",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "League City",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Lubbock",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Lubbock",
  population: 3971883
},
{
  location: [29.7604, -95.3698],
  name: "Mckinney",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Mesquite",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Mission",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "New Braunfuls",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "North Richland Hills",
  population: 446599
},
{
  location: [41.2524, -95.9980],
  name: "Plano",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Plano",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Richardson",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Round Rock",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "San Antonio",
  population: 446599
},
{
  location: [29.7604, -95.3698],
  name: "San Antonio",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "San Antonio",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "San Antonio",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "San Antonio",
  population: 3971883
},
{
  location: [34.0522, -118.2437],
  name: "Seguin",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Sugar Land",
  population: 446599
},
{
  location: [29.7604, -95.3698],
  name: "Texarkana",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Texas City",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Vernon",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Victoria",
  population: 3971883
},
{
  location: [29.7604, -95.3698],
  name: "Waco",
  population: 2296224
},
{
  location: [41.2524, -95.9980],
  name: "Waxahachie",
  population: 446599
},
{
  location: [29.7604, -95.3698],
  name: "Whitehouse",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Wichita Falls",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Wichita Falls",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Wichita Falls",
  population: 3971883
},
];

// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (let i = 0; i < cities.length; i++) {
  let city = cities[i];
  L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(myMap);
}
