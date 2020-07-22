// set the dimensions and margins of the graph



var margin = {top: 10, right: 30, bottom: 100, left: 100},
    width = 1000 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");




d3.csv("cbb_2020.csv", function(data) {
  console.log(data)
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([25, 50])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
  // Its opacity is set to 0: we don't see it by default.
  var tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      


  var color = d3.scaleOrdinal()
      .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
      .range([ "red", "blue", "green", "orange", "yellow", "black"])

  // A function that change this tooltip when the user hover a point.
  // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
  var mouseover = function(d) {
    tooltip.style("visibility", "visible").style("background-color", "gray")

    selected_specie = d.CONF
  
    d3.selectAll(".dot")
        .transition()
        .duration(200)
        .style("fill", "lightgrey")
        .attr("r", 3)
  
    d3.selectAll("." + selected_specie)
        .transition()
        .duration(200)
        .style("fill", color(selected_specie))
        .attr("r", 7)
  }

  var mousemove = function(d) {
    tooltip
    .html("Team: " + d.TEAM + "</br>" + "Conference: " + d.CONF + "</br>" + "Win % : " + Math.round((((+ d.W)/ (+ d.G)) * 10000))/100)
    .style("top", (event.pageY + 100)+"px").style("left",(event.pageX + 100)+"px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip.style("visibility", "hidden")
    d3.selectAll(".dot")
      .transition()
      .duration(200)
      .style("fill", function (d) { return color(d.CONF) })
      .attr("r", 5) 
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data.filter(function(d,i){ if (d.CONF == "B10" || d.CONF == "ACC" || d.CONF == "B12" || d.CONF == "P12" || d.CONF == "BE" || d.CONF == "SEC" ){ return d }}))  // the .filter part is just to keep a few dots on the chart, not all of them
    .enter()
    .append("circle")
      .attr("class", function (d) { return "dot " + d.CONF } )
      .attr("cx", function (d) { return  + x(((+ d.W)/ (+ d.G)) * 100); } )
      .attr("cy", function (d) { return + y(d["3P_O"]); } )
      .attr("r", 7)
      .style("fill", function (d) { return color(d.CONF) } )
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) + 90 )
    .attr("y", height + 50)
    .text("Win %");

  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -400)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Three Point FG %");


    svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "red")
    svg.append("circle").attr("cx",200).attr("cy",150).attr("r", 6).style("fill", "blue")
    svg.append("circle").attr("cx",200).attr("cy",170).attr("r", 6).style("fill", "green")
    svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 6).style("fill", "orange")
    svg.append("circle").attr("cx",200).attr("cy",210).attr("r", 6).style("fill", "yellow")
    svg.append("circle").attr("cx",200).attr("cy",230).attr("r", 6).style("fill", "black")
    svg.append("text").attr("x", 220).attr("y", 130).text("Big Ten").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 150).text("ACC").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 170).text("Big East").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 190).text("Big 12").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 210).text("Pac 12").style("font-size", "15px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 230).text("SEC").style("font-size", "15px").attr("alignment-baseline","middle")
      
  
    
    

})

