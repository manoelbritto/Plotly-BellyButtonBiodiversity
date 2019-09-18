# Project: Interactive Dashboard
This project built an interactive dashboard to explore a data set in JSON. The data set is from a science project called [Belly Button Biodiversity](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/). 
This project was developed in JavaScript using Plotly.JS and D3.JS.

## Publish
If you want to see this project, then click [here](https://manoelbritto.github.io/Plotly-BellyButtonBiodiversity/).

## Webpage and coding
* The IDs are selected dynamically from the data set from [JSON file](/JS/data/samples.json).<br>
![doc](/images/selectID.PNG)<br>

This initial function was developed to handle the JSON file, and extract just the IDs from the JSON and send it to the Html page:<br>
```JavaScript
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
```

* Panel that shows information based on the selected ID<br>
![panel](/images/panel.PNG) <br>
```JavaScript
function panelPlot(valueSelect) {
  //   console.log(valueSelect);
  var filterValue = data.metadata.filter(value => value.id == valueSelect);

  var divValue = d3.select(".panel-body");
  divValue.html("");
  divValue.append("p").text(`id: ${filterValue[0].id}`);
  divValue.append("p").text(`ethnicity: ${filterValue[0].ethnicity}`);
  divValue.append("p").text(`gender: ${filterValue[0].gender}`);
  divValue.append("p").text(`age: ${filterValue[0].age}`);
  divValue.append("p").text(`location: ${filterValue[0].location}`);
  divValue.append("p").text(`bbtype: ${filterValue[0].bbtype}`);
  divValue.append("p").text(`wfreq: ${filterValue[0].wfreq}`);
}
```
* Horizontal Bar with descending(reversed) values based on selected data<br>
![hbar](/images/horizontalbar.PNG) <br>
```JavaScript
function demographicFunc(valueSelect) {
...
}
```
* Bubble chart based on selected data<br>
![hbar](/images/bubblechart.PNG) <br>
```JavaScript
function bubbleChart(valueSelect) {
...
}
```

* Gauge chart based on selected data<br>
![hbar](/images/gaugechart.PNG) <br>
```JavaScript
function gaugeChart(valueSelect) {
...
}
```

# Features:
* JavaScript
  * D3.js
  * Plotly.js
* HTML and CSS3
