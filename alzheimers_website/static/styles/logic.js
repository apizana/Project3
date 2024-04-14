// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});
myMap.addTo(map)

// Add a tile layer.
var myMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// An array containing each city's name, location, and population
let cities = [{
  location: [],
  name: "Abilene",
  population: 8550405
},
{
  location: [41.8781, -87.6298],
  name: "Amarillo",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Amarillo",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Arlington",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Arlington",
  population: 446599
},
{
  location: [41.8781, -87.6298],
  name: "Arlington",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Austin",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Austin",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Beaumont",
  population: 446599
},
{
  location: [41.8781, -87.6298],
  name: "Bedford",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Carrolton",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Cedar Park",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Columbus",
  population: 446599
},
{
  location: [41.8781, -87.6298],
  name: "Converse",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Dallas",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Dallas",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Dallas",
  population: 446599
},
{
  location: [29.7604, -95.3698],
  name: "Dallas",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Dallas",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Dallas",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Dallas",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Dallas",
  population: 446599
},
{
  location: [41.8781, -87.6298],
  name: "Denison",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "El Paso",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "El Paso",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "El Paso",
  population: 446599
},
{
  location: [41.8781, -87.6298],
  name: "Faltonia",
  population: 2720546
},
{
  location: [34.0522, -118.2437],
  name: "Fort Worth",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Fort Worth",
  population: 446599
},
{
  location: [29.7604, -95.3698],
  name: "Fort worth",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Fort Worth",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Fort Worth",
  population: 446599
},
{
  location: [34.0522, -118.2437],
  name: "Fort Worth",
  population: 3971883
},
{
  location: [29.7604, -95.3698],
  name: "Gunter",
  population: 2296224
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
