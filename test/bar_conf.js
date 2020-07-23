// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg3 = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var svg2 = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            


var svg4 = d3.select("#my_dataviz2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

var svg5 = d3.select("#my_dataviz2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var svg6 = d3.select("#my_dataviz2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
    


d3.csv("conf_2020.csv", function(data) {

    data.sort(function(b, a) {
        return a["ORB"] - b["ORB"]
        });

var color6 = d3.scaleOrdinal()
    .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
    .range([ "red", "blue", "green", "orange", "yellow", "black"])

// X axis
var x6 = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.CONF; }))
    .padding(0.2);
svg6.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x6))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y6 = d3.scaleLinear()
    .domain([28, 31])
    .range([ height, 0]);
svg6.append("g")
    .call(d3.axisLeft(y6));


var mouseover6 = function(d) {


conference = d.CONF

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + conference)
    .transition()
    .duration(200)
    .style("fill", color6(conference))
    }


var mouseleave6 = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color6(d.CONF) })
}

// Bars
svg6.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.CONF } )
    .attr("x", function(d) { return x6(d.CONF); })
    .attr("y", function(d) { return y6(d["ORB"]); })
    .attr("width", x6.bandwidth())
    .attr("height", function(d) { return height - y6(d["ORB"]); })
    .attr("fill", function (d) { return color6(d.CONF) } )
    .on("mouseover", mouseover6 )
    .on("mouseleave", mouseleave6 )

svg6.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Conference");

svg6.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 50)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Average Offensive Rebound %")

}) 

d3.csv("conf_2020.csv", function(data) {

    data.sort(function(b, a) {
        return a["2P_O"] - b["2P_O"]
        });

var color5 = d3.scaleOrdinal()
    .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
    .range([ "red", "blue", "green", "orange", "yellow", "black"])

// X axis
var x5 = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.CONF; }))
    .padding(0.2);
svg5.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x5))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y5 = d3.scaleLinear()
    .domain([49, 52])
    .range([ height, 0]);
svg5.append("g")
    .call(d3.axisLeft(y5));


var mouseover5 = function(d) {


conference = d.CONF

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + conference)
    .transition()
    .duration(200)
    .style("fill", color5(conference))
    }


var mouseleave5 = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color5(d.CONF) })
}

// Bars
svg5.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.CONF } )
    .attr("x", function(d) { return x5(d.CONF); })
    .attr("y", function(d) { return y5(d["2P_O"]); })
    .attr("width", x5.bandwidth())
    .attr("height", function(d) { return height - y5(d["2P_O"]); })
    .attr("fill", function (d) { return color5(d.CONF) } )
    .on("mouseover", mouseover5 )
    .on("mouseleave", mouseleave5 )

svg5.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Conference");

svg5.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 50)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Average 2PT FG%")

})            

d3.csv("conf_2020.csv", function(data) {

    data.sort(function(b, a) {
        return a["3P_O"] - b["3P_O"]
        });

var color4 = d3.scaleOrdinal()
    .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
    .range([ "red", "blue", "green", "orange", "yellow", "black"])

// X axis
var x4 = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.CONF; }))
    .padding(0.2);
svg4.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x4))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y4 = d3.scaleLinear()
    .domain([32, 35])
    .range([ height, 0]);
svg4.append("g")
    .call(d3.axisLeft(y4));


var mouseover4 = function(d) {


conference = d.CONF

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + conference)
    .transition()
    .duration(200)
    .style("fill", color4(conference))
    }


var mouseleave4 = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color4(d.CONF) })
}

// Bars
svg4.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.CONF } )
    .attr("x", function(d) { return x4(d.CONF); })
    .attr("y", function(d) { return y4(d["3P_O"]); })
    .attr("width", x4.bandwidth())
    .attr("height", function(d) { return height - y4(d["3P_O"]); })
    .attr("fill", function (d) { return color4(d.CONF) } )
    .on("mouseover", mouseover4 )
    .on("mouseleave", mouseleave4 )

svg4.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Conference");

svg4.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 50)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Average 3PT FG%")

})

d3.csv("conf_2020.csv", function(data) {

    data.sort(function(b, a) {
        return a.BOTH - b.BOTH;
        });

var color3 = d3.scaleOrdinal()
    .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
    .range([ "red", "blue", "green", "orange", "yellow", "black"])

// X axis
var x3 = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.CONF; }))
    .padding(0.2);
svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x3))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y3 = d3.scaleLinear()
    .domain([10, 17])
    .range([ height, 0]);
svg3.append("g")
    .call(d3.axisLeft(y3));


var mouseover3 = function(d) {


conference = d.CONF

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + conference)
    .transition()
    .duration(200)
    .style("fill", color3(conference))
    }


var mouseleave3 = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color3(d.CONF) })
}

// Bars
svg3.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.CONF } )
    .attr("x", function(d) { return x3(d.CONF); })
    .attr("y", function(d) { return y3(d.BOTH); })
    .attr("width", x3.bandwidth())
    .attr("height", function(d) { return height - y3(d.BOTH); })
    .attr("fill", function (d) { return color3(d.BOTH) } )
    .on("mouseover", mouseover3 )
    .on("mouseleave", mouseleave3 )

svg3.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Conference");

svg3.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 180)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Adjusted Offence Average - Adjusted Defence Average")

})

d3.csv("conf_2020.csv", function(data) {

    data.sort(function(b, a) {
        return b.ADJDE - a.ADJDE;
        });

var color2 = d3.scaleOrdinal()
    .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
    .range([ "red", "blue", "green", "orange", "yellow", "black"])

// X axis
var x2 = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.CONF; }))
    .padding(0.2);
svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x2))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y2 = d3.scaleLinear()
    .domain([92, 98])
    .range([ height, 0]);
svg2.append("g")
    .call(d3.axisLeft(y2));


var mouseover2 = function(d) {


conference = d.CONF

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + conference)
    .transition()
    .duration(200)
    .style("fill", color2(conference))
    }


var mouseleave2 = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color2(d.CONF) })
}

// Bars
svg2.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.CONF } )
    .attr("x", function(d) { return x2(d.CONF); })
    .attr("y", function(d) { return y2(d.ADJDE); })
    .attr("width", x2.bandwidth())
    .attr("height", function(d) { return height - y2(d.ADJDE); })
    .attr("fill", function (d) { return color2(d.CONF) } )
    .on("mouseover", mouseover2 )
    .on("mouseleave", mouseleave2 )

svg2.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Conference");

svg2.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Adjusted Defence Average")

})

d3.csv("conf_2020.csv", function(data) {

    data.sort(function(b, a) {
        return a.ADJOE - b.ADJOE;
      });

var color = d3.scaleOrdinal()
    .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
    .range([ "red", "blue", "green", "orange", "yellow", "black"])

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.CONF; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([106, 111])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));


var mouseover = function(d) {


conference = d.CONF

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + conference)
    .transition()
    .duration(200)
    .style("fill", color(conference))
  }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.CONF) })
}

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("class", function (d) { return "dot " + d.CONF } )
    .attr("x", function(d) { return x(d.CONF); })
    .attr("y", function(d) { return y(d.ADJOE); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.ADJOE); })
    .attr("fill", function (d) { return color(d.CONF) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Conference");

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Adjusted Offence Average")

})