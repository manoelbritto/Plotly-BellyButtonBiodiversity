//init function to fill in the select option
function init() {
  d3.json("JS/data/samples.json").then(dataInitial => {
    var data = dataInitial;

    selectValues = dataInitial.names;

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
init();
