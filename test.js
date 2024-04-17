var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/Resources/AlzheimersDB.Questions_Data_1stHalf.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data)
    }
  }
// initialize function to pull ID numbers
function init() {
  var dropDown = d3.select("#selDataset");
  // retrieve JSON data
  d3.json(url).then(function (data) {
    var sampleId = data.names;
    sampleId.forEach((sample) => {
        dropDown.append("option").text(sample).property("value", sample)
    });
    var initSample = sampleId[0];
    buildDemo(initSample);
    buildCharts(initSample);
});
};

//build demographic info 
function buildDemo(sample) {
  var demo = d3.select("#selDataset");
  d3.json(url).then(function (data) {
      var metaData = data.metadata;
      var metaDataSample = metaData.filter(row => row.id == sample);
      demo.selectAll("p").remove();
      metaDataSample.forEach((row) => {
          for (const [key, value] of Object.entries(row)) {
              demo.append("p").text(`${key}: ${value}`);
          };
      });
  });
};

// 
function optionChanged(sample) {
  buildDemo(sample);
  buildCharts(sample);
};