
fetch("http://127.0.0.1:5500/Resources/AlzheimersDB.Questions_Data_1stHalf.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// Path: app.js
// Define the URL for the JSON data
const url = "http://127.0.0.1:5500/Resources/AlzheimersDB.Questions_Data_1stHalf.json";
function init() {
  let dropDown = d3.select("#selDatabase");
  // retrieve JSON data
  d3.json(url).then((data) => {
    console.log(`Data: ${data}`);
    // array of question names
    let questions = data.AlzheimersDB.Questions_Data_1stHalf.map(entry => entry.Question);
    // Iterate through question names Array
    questions.forEach((question) => {
      // Append each name as an option to the drop down menu
      dropDown.append("option").text(question).property("value", question);
    });
    // Assign first question to a variable
    let firstQuestion = questions[0];
    // Call the functions to make demographic panel, bar chart, and bubble chart for the first question
    buildDemo(firstQuestion);
    buildCharts(firstQuestion);
  }).catch(error => {
    console.error(error);
  });
}
// build function to create charts
function buildCharts(question) {
  d3.json(url).then(function (data) {
    // filter data for the selected question
    var questionData = data.AlzheimersDB.Questions_Data_1stHalf.find(entry => entry.Question === question);
    // variables for charts
    var sampleValuesSlice = questionData.sample_values.slice(0, 10).reverse();
    var otuIdsSlice = questionData.otu_ids.slice(0, 10).reverse().map(item => `OTU ${item}`);
    var otuLabelsSlice = questionData.otu_labels.slice(0, 10).reverse();
    var wash = questionData.wfreq;
    // build chart 1
    var trace1 = {
      x: sampleValuesSlice,
      y: otuIdsSlice,
      type: "bar",
      orientation: "h",
      text: otuLabelsSlice
    };
    var data = [trace1];
    Plotly.newPlot("bar", data);
    // build chart 2
    var trace2 = {
      x: questionData.otu_ids,
      y: questionData.sample_values,
      mode: "markers",
      marker: {
        size: questionData.sample_values,
        color: questionData.otu_ids,
        colorscale: "Earth"
      },
      text: questionData.otu_ids
    };
    var data2 = [trace2];
    var layout = {
      showlegend: false
    };
    Plotly.newPlot("bubble", data2, layout);
    // build chart 3; gauge chart adapted from plotly
    var data3 = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: wash,
      title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        bar: { color: "black" },
        steps: [
          { range: [0, 1], color: "rgba(114, 70, 28, 0.9)" },
          { range: [1, 2], color: "rgba(169, 146, 48, 0.9)" },
          { range: [2, 3], color: "rgba(199, 188, 58, 0.9)" },
          { range: [3, 4], color: "rgba(221, 226, 68, 0.9)" },
          { range: [4, 5], color: "rgba(66, 206, 58, 0.9)" },
          { range: [5, 6], color: "rgba(29, 184, 122, 0.9)" },
          { range: [6, 7], color: "rgba(15, 155, 165, 0.9)" },
          { range: [7, 8], color: "rgba(11, 117, 154, 0.9)" },
          { range: [8, 9], color: "rgba(0, 34, 125, 0.9)" },
        ],
        threshold: {
          line: { color: "black", width: 4 },
          thickness: 0.75,
          value: wash
        }
      }
    }];
    var layout2 = { width: 600, height: 450, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data3, layout2);
  });
}
// build demographic info/metadata for each subject
function buildDemo(question) {
  var demoPanel = d3.select("#sample-metadata");
  d3.json(url).then(function (data) {
    var metaData = data.metadata;
    var metaDataSample = metaData.find(entry => entry.id === question.id);
    // Clear previous data
    demoPanel.html("");
    // Append metadata info
    for (const [key, value] of Object.entries(metaDataSample)) {
      demoPanel.append("p").text(`${key}: ${value}`);
    }
  });
}
// Function called when user selects a different sample from the dropdown menu
function optionChanged(selectedQuestion) {
  buildDemo(selectedQuestion);
  buildCharts(selectedQuestion);
}
// Call initialize function to run
init();