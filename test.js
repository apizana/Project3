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
    });
};    
//This is JsonData.json
//{"date_population": [
// 		{
// 		  "date": "1941",
// 		  "population": 406760
// 		},{
// 		  "date": "1951",
// 		  "population": 778977
// 		},{
// 		  "date": "1961",
// 		  "population": 1207000
// 		}
// 	]
// }