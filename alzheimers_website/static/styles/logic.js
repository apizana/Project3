const url = "../static/styles/AlzheimersDB.Question_Data.json"

function init() {
  var dropDown = d3.select("#selDataset");
  // retrieve JSON data
  d3.json(url).then(function (data) {
      var sampleId = data.names;
      sampleId.array((sample) => {
          dropDown.append("option").text(sample).property("value", sample)
      });
      var initSample = sampleId[0];
      buildDemo(initSample);
      buildCharts(initSample);
  });
};

// build function to create charts 
function buildCharts(sample) {
  d3.json(url).then(function (data) {
      // variables for charts
      var allSamples = data.samples;
      var sampleInfo = allSamples.filter(row => row.id == sample);
      var sampleValues = sampleInfo[0].sample_values;
      var sampleValuesSlice = sampleValues.slice(0,10).reverse();
      var otuIds = sampleInfo[0].otu_ids;
      var otuIdsSlice = otuIds.slice(0,10).reverse();
      var otuLabels = sampleInfo[0].otu_labels;
      var otuLabelsSlice = otuLabels.slice(0,10).reverse();
      var metaData = data.metadata;
      var metaDataSample = metaData.filter(row => row.id == sample);
      var wash = metaDataSample[0].wfreq;

            // build chart 1
            var trace1 = {
              x: sampleValuesSlice,
              y: otuIdsSlice.map(item => `OTU ${item}`),
              type: "bar",
              orientation: "h",
              text: otuLabelsSlice,
          };
          var data = [trace1];
          Plotly.newPlot("bar", data)
  
          // build chart 2 
          var trace2 = {
              x: otuIds,
              y: sampleValues,
              mode: "markers",
              marker: {
                  size: sampleValues,
                  color: otuIds,
                  colorscale: "Earth"
              },
              text: otuIds
          };
          var data2 = [trace2];
          var layout = {
              showlegend: false
          };
  
          Plotly.newPlot("bubble", data2, layout);
        });
      };
init(); 
//var globalData = [];

//d3.json("/api/data").then(data => init(data));

//function init(data){
  //console.log(data);
  //globalData.push(data);
//}
  
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
  website: "https://www.alzcottages.com/"
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
  location: [29.5141376, -98.3793664],
  name: "Gunter TX - Texas Alzheimer's facilities -- Hilltop Haven",
  website: "https://www.aplaceformom.com/community/hilltop-haven-50398"
},
{
  location: [29.7609196, -95.6282567],
  name: "Houston TX - Texas dementia facilities -- Park Way Place",
  website: "https://bucknerparkwayplace.org"
},
{
  location: [29.7539, -95.574748],
  name: "Houston TX - Texas short-term memory facilities -- Memorial Oaks",
  website: "https://www.brookdale.com/en/communities/brookdale-memorial-oaks.html?cid=yext"
},
{
  location: [29.9210368, -95.6288881],
  name: "Houston TX - Texas Alzheimer's facilities -- Right At Home",
  website: "https://www.rightathome.net/northwest-houston"
},
{
  location: [29.727954, -95.580442],
  name: "Houston TX - Texas dementia facilities -- Colonial Oaks Assisted Living & Alzhemers Care",
  website: "https://colonialoaks.com/"
},
{
  location: [29.7417779, -95.5152329],
  name: "Houston TX - Texas short-term memory facilities -- The Buckingham",
  website: "https://www.buckinghamhouston.com/"
},
{
  location: [32.8347731,-96.9472847],
  name: "Irving TX - Texas Alzheimer's facilities -- Ashford Hall Nursing Home",
  website: "https://ashfordhall.com/"
},
{
  location: [29.778451,-95.74634],
  name: "Katy TX - Texas dementia facilities -- Colonial Oaks Assisted Living & Alzheimers Care",
  website: "https://www.reserveatkaty.com/"
},
{
  location: [27.5515748,-99.4946408],
  name: "Laredo TX - Texas short-term memory facilities -- Laredo Elderly Service",
  website: ""
},
{
  location: [29.4967785,-95.1264113],
  name: "CaLeague City TX - Texas Alzheimer's facilities -- The Cottages At Clear Lakerrolton",
  website: "https://www.alzcottages.com/"
},
{
  location: [33.5933456,-101.8933769],
  name: "Lubbock TX - Texas dementia facilities -- Garrison Geriatric Educ. and Care Center",
  website: "https://garrisongecc.com/" 
},
{
  location: [33.174926,-96.635696],
  name: "Mckinney TX - Texas Alzheimer's facilities -- Provident Living Centers of McKinney",
  website: ""
},
{
  location: [32.8353134,-96.6132037],
  name: "Mesquite TX - Texas dementia facilities -- Courtyard The at Christian Care Center",
  website: "https://www.christiancaretexas.org/cccs-mesquite/"
},
{
  location: [26.172405,-98.073141],
  name: "Mission TX - Texas short-term memory facilities -- The Bridges at Mission",
  population: "https://thebridgesatmission.com/"
},
{
  location: [32.8455892,-97.2018382],
  name: "North Richland Hills TX - Texas dementia facilities -- Clare Bridge of Richland Hills",
  website: "https://www.brookdale.com/en/communities/brookdale-north-richland-hills.html?cid=yext"
},
{
  location: [33.0184363,-96.7696076],
  name: "Plano TX - Texas Alzheimer's facilities -- Collin Oaks",
  website: "https://www.brookdale.com/en/communities/brookdale-collin-oaks.html?cid=yext"
},
{
  location: [32.9338719,-96.7308903],
  name: "Richardson TX - Texas dementia facilities -- Arden Courts Alzheimer's Assisted Living",
  website: "https://arden-courts.org/Richardson?utm_source=google&utm_medium=organic&utm_campaign=gmb&cid=18608"
},
{
  location: [30.5658723,-97.6480956],
  name: "DaRound Rock TX - Texas short-term memory facilities -- Cottages Alzheimer Care",
  website: "https://www.alzcottages.com/project/chandler-creek/"
},
{
  location: [29.5736271,-98.378409],
  name: "San Antonio TX - Texas dementia facilities -- Clare Bridge of San Antonio",
  website: "N/A"
},
{
  location: [29.5959242,-98.4733984],
  name: "San Antonio TX - Texas short-term memory facilities -- Village Oaks at Hollywood Park",
  website:  "N/A"
},
{
  location: [29.5171011,-98.5918148],
  name: "San Antonio TX - Texas Alzheimer's facilities -- Hamilton House",
  website: "N/A"
},
{
  location: [29.5265895,-98.5765939],
  name: "San Antonio TX - Texas dementia facilities -- Woodbridge Estates",
  website: "N/A"
},
{
  location: [29.5638357,-97.9468321],
  name: "ESeguin TX - Texas short-term memory facilities -- Guadalupe Valley Nursing Centerl Paso",
  website: "N/A"
},
{
  location: [29.5949399,-95.6039886],
  name: "Sugar Land TX - Texas Alzheimer's facilities -- Barton House",
  website: "https://barton-house.com/"
},
{
  location: [33.462016,-94.0478413],
  name: "Texarkana TX - Texas dementia facilities -- Alzheimer's Association Greater",
  website: "https://www.alztristate.org/"
},
{
  location: [34.157621,-99.313749],
  name: "Vernon TX - Texas Alzheimer's facilities -- Vernon Care Center",
  website: "N/A"
},
{
  location: [31.591322,-97.153048],
  name: "Waco TX - Texas short-term memory facilities -- Meadowlands Terrace",
  website: "https://seniorcarehomes.com/assisted-living-facilities/texas/waco/brookdale-meadowlands-terrace/"
},
{
  location: [32.264273,-95.255596],
  name: "Whitehouse TX - Texas dementia facilities -- Tender Loving Elderly Care",
  website: "N/A"
},
{
  location: [33.8671579,-98.5247827],
  name: "Wichita Falls TX - Texas short-term memory facilities -- Lakeridge Place",
  website: "N/A"
},
{
  location: [33.943784,-98.523064],
  name: "Wichita Falls TX - Texas Alzheimer's facilities -- Texhoma Christian Care Center",
  website: "https://texhomachristiancare.com/"
},
{
  location: [33.9051039,-98.5359429],
  name: "Wichita Falls TX - Texas dementia facilities -- Alzheimer's Diagnostic Clinic",
  website: "https://npidb.org/organizations/agencies/community-behavioral-health_251s00000x/1154538429.aspx"
}
];
// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (let i = 0; i < cities.length; i++) {
  let city = cities[i];
  L.marker(city.location)
  .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Website <a href="${city.website}" target="_blank">${city.website}<\a></h3>`)
    .addTo(myMap);
} 