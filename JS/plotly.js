//global variable
var data;

//init function to fill in the select option

function init() {
  d3.json("JS/data/samples.json").then(dataInitial => {
    data = dataInitial;
    var selectValues = dataInitial.names;

    var selectOpt = d3.select("#selDataset");

    selectValues.forEach(value => {
      selectOpt
        .append("option")
        .text(value)
        .attr("value", function() {
          return value;
        });
    });
  });
}
//start filling the data inside the select option
init();

//

d3.selectAll("#selDataset").on("change", demographicFunc);

function demographicFunc() {
  var valueSelect = d3.select("#selDataset").node().value;
  //   console.log(valueSelect);
  var filterValue = data.metadata.filter(value => value.id == valueSelect);

  console.log(filterValue);
  console.log(filterValue[0].id);
  var divValue = d3.select(".panel-body");
  divValue.html("");
  divValue.append("p").text(`id: ${filterValue[0].id}`);
  divValue.append("p").text(`ethnicity: ${filterValue[0].ethnicity}`);
  divValue.append("p").text(`gender: ${filterValue[0].gender}`);
  divValue.append("p").text(`age: ${filterValue[0].age}`);
  divValue.append("p").text(`location: ${filterValue[0].location}`);
  divValue.append("p").text(`bbtype: ${filterValue[0].bbtype}`);
  divValue.append("p").text(`wfreq: ${filterValue[0].wfreq}`);

  var filterValue2 = data.samples.filter(value => value.id == valueSelect);
  var ouid = filterValue2.map(v => v.otu_ids);
  var valueX = filterValue2.map(v => v.sample_values);

  // Create the Trace
  var trace = {
    x: valueX[0].slice(0, 10),
    y: ouid[0].slice(0, 10),
    type: "bar"
  };

  // Create the data array for the plot
  var dataV = [trace];

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar", dataV);
}
