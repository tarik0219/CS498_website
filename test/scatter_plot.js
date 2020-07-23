// set the dimensions and margins of the graph



var margin = {top: 10, right: 30, bottom: 100, left: 100},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page


var svg4 = d3.select("#my_dataviz2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left  + "," + margin.top + ")");

var svg = d3.select("#my_dataviz2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left  + "," + margin.top + ")");

var svg3 = d3.select("#my_dataviz2")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500 )
  .append("g")
  .attr("transform", "translate(" + (margin.left )  + "," + margin.top + ")");


var svg2 = d3.select("#my_dataviz2")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500 )
  .append("g")
  .attr("transform", "translate(" + (margin.left )  + "," + margin.top + ")");







  d3.csv("cbb_2020.csv", function(data) {

    var x4 = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);
    svg4.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x4));

    var y4 = d3.scaleLinear()
    .domain([0, 30])
    .range([ height, 0]);
    svg4.append("g")
      .call(d3.axisLeft(y4));
    
    var tooltip4 = d3.select("#my_dataviz")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")

    var color4 = d3.scaleOrdinal()
      .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
      .range([ "red", "blue", "green", "orange", "yellow", "black"])
    
    
    var mouseover4 = function(d) {
      tooltip4.style("visibility", "visible")

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
          .attr("r", 5)
    }

    var mousemove4 = function(d) {
      tooltip4
      .html("Team: " + d.TEAM + "</br>" + "Conference: " + d.CONF + "</br>" + "Win % : " + Math.round((((+ d.W)/ (+ d.G)) * 10000))/100 + "</br>" + "Adjuste Offence - Adjusted Defence: " + ( Math.round((d["ADJOE"] - d["ADJDE"])*100)/100))
      .style("top", (event.pageY + 100)+"px").style("left",(event.pageX + 100)+"px")
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave4 = function(d) {
      tooltip4.style("visibility", "hidden")
      d3.selectAll(".dot")
        .transition()
        .duration(200)
        .style("fill", function (d) { return color4(d.CONF) })
        .attr("r", 3) 
    }

    svg4.append('g')
      .selectAll("dot")
      .data(data.filter(function(d,i){ if (d.CONF == "B10" || d.CONF == "ACC" || d.CONF == "B12" || d.CONF == "P12" || d.CONF == "BE" || d.CONF == "SEC" ){ return d }}))  // the .filter part is just to keep a few dots on the chart, not all of them
      .enter()
      .append("circle")
        .attr("class", function (d) { return "dot " + d.CONF } )
        .attr("cx", function (d) { return  + x4(((+ d.W)/ (+ d.G)) * 100); } )
        .attr("cy", function (d) { return + y4(d["ADJOE"] - d["ADJDE"]); } )
        .attr("r", 3)
        .style("fill", function (d) { return color4(d.CONF) } )
      .on("mouseover", mouseover4 )
      .on("mousemove", mousemove4 )
      .on("mouseleave", mouseleave4 )

      svg4.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width - (width/2) )
      .attr("y", height + 50)
      .text("Win %");
  
      svg4.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", -60)
        .attr("x", -width/2 + 80)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Adjuste Offence - Adjusted Defence");
      
      svg4.append("text").attr("x", 50).attr("y", 100).text("y = 0.3673x - 8.4819").style("font-size", "10px").attr("alignment-baseline","middle") 
      svg4.append("text").attr("x", 50).attr("y", 115).text("   R² = 0.6861      ").style("font-size", "10px").attr("alignment-baseline","middle")

      svg4.append("line")//making a line for legend
      .attr("x1", 85.44)
      .attr("x2", width)
      .attr("y1", 390)
      .attr("y2", 22.7747)
      .style("stroke-dasharray","5,5")//dashed array for line
      .style("stroke", "blue");

  })




d3.csv("cbb_2020.csv", function(data) {

    var x3 = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);
    svg3.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x3));
    
    var y3 = d3.scaleLinear()
    .domain([44, 60])
    .range([ height, 0]);
    svg3.append("g")
      .call(d3.axisLeft(y3));

    var tooltip3 = d3.select("#my_dataviz2")
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")

    var color3 = d3.scaleOrdinal()
      .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
      .range([ "red", "blue", "green", "orange", "yellow", "black"])
    
    var mouseover3 = function(d) {
      tooltip3.style("visibility", "visible")

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
          .attr("r", 5)
    }

    var mousemove3 = function(d) {
      tooltip3
      .html("Team: " + d.TEAM + "</br>" + "Conference: " + d.CONF + "</br>" + "Win % : " + Math.round((((+ d.W)/ (+ d.G)) * 10000))/100 + "</br>" + "Two Point FG %: " + ( d["2P_O"]))
      .style("top", (event.pageY + 100)+"px").style("left",(event.pageX + 100)+"px")
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave3 = function(d) {
      tooltip3.style("visibility", "hidden")
      d3.selectAll(".dot")
        .transition()
        .duration(200)
        .style("fill", function (d) { return color3(d.CONF) })
        .attr("r", 3) 
    }

    svg3.append('g')
      .selectAll("dot")
      .data(data.filter(function(d,i){ if (d.CONF == "B10" || d.CONF == "ACC" || d.CONF == "B12" || d.CONF == "P12" || d.CONF == "BE" || d.CONF == "SEC" ){ return d }}))  // the .filter part is just to keep a few dots on the chart, not all of them
      .enter()
      .append("circle")
        .attr("class", function (d) { return "dot " + d.CONF } )
        .attr("cx", function (d) { return  + x3(((+ d.W)/ (+ d.G)) * 100); } )
        .attr("cy", function (d) { return + y3(d["2P_O"]); } )
        .attr("r", 3)
        .style("fill", function (d) { return color3(d.CONF) } )
      .on("mouseover", mouseover3 )
      .on("mousemove", mousemove3 )
      .on("mouseleave", mouseleave3 )
    
      svg3.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width - (width/2) )
      .attr("y", height + 50)
      .text("Win %");
  
      svg3.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", -60)
        .attr("x", -width/2)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Two Point FG%");
      
      svg3.append("text").attr("x", 50).attr("y", 100).text("y = 0.0779x + 45.151").style("font-size", "10px").attr("alignment-baseline","middle") 
      svg3.append("text").attr("x", 50).attr("y", 115).text("   R² = 0.1982      ").style("font-size", "10px").attr("alignment-baseline","middle")

      svg3.append("line")//making a line for legend
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", 361.94)
      .attr("y2", 172.33)
      .style("stroke-dasharray","5,5")//dashed array for line
      .style("stroke", "blue");
})


d3.csv("cbb_2020.csv", function(data) {
    
    // Add X axis
    var x2 = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);
    svg2.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x2));


    var y2 = d3.scaleLinear()
    .domain([20, 40])
    .range([ height, 0]);
    svg2.append("g")
      .call(d3.axisLeft(y2));

    var tooltip2 = d3.select("#my_dataviz2")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")

    var color2 = d3.scaleOrdinal()
      .domain(["B10", "ACC","BE", "B12", "P12", "SEC"])
      .range([ "red", "blue", "green", "orange", "yellow", "black"])

    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    var mouseover2 = function(d) {
      tooltip2.style("visibility", "visible")

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
          .attr("r", 5)
    }

    var mousemove2 = function(d) {
      tooltip2
      .html("Team: " + d.TEAM + "</br>" + "Conference: " + d.CONF + "</br>" + "Win % : " + Math.round((((+ d.W)/ (+ d.G)) * 10000))/100 + "</br>" + "Offensive Reboud %: " + ( d.ORB))
      .style("top", (event.pageY + 100)+"px").style("left",(event.pageX + 100)+"px")
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave2 = function(d) {
      tooltip2.style("visibility", "hidden")
      d3.selectAll(".dot")
        .transition()
        .duration(200)
        .style("fill", function (d) { return color2(d.CONF) })
        .attr("r", 3) 
    }

    // Add dots
    svg2.append('g')
      .selectAll("dot")
      .data(data.filter(function(d,i){ if (d.CONF == "B10" || d.CONF == "ACC" || d.CONF == "B12" || d.CONF == "P12" || d.CONF == "BE" || d.CONF == "SEC" ){ return d }}))  // the .filter part is just to keep a few dots on the chart, not all of them
      .enter()
      .append("circle")
        .attr("class", function (d) { return "dot " + d.CONF } )
        .attr("cx", function (d) { return  + x2(((+ d.W)/ (+ d.G)) * 100); } )
        .attr("cy", function (d) { return + y2(d.ORB); } )
        .attr("r", 3)
        .style("fill", function (d) { return color2(d.CONF) } )
      .on("mouseover", mouseover2 )
      .on("mousemove", mousemove2 )
      .on("mouseleave", mouseleave2 )

    svg2.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Win %");

    svg2.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", -60)
      .attr("x", -width/2)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text("Offensive Reboud %");
      
    svg2.append("line")//making a line for legend
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", 322.57)
      .attr("y2", 118.99)
      .style("stroke-dasharray","5,5")//dashed array for line
      .style("stroke", "blue");
    
      svg2.append("text").attr("x", 50).attr("y", 100).text("y = 0.1044x + 23.458").style("font-size", "10px").attr("alignment-baseline","middle") 
      svg2.append("text").attr("x", 50).attr("y", 115).text("   R² = 0.1309      ").style("font-size", "10px").attr("alignment-baseline","middle") 

})

d3.csv("cbb_2020.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 100])
    .range([ 0, width]);
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
  var tooltip = d3.select("#my_dataviz2")
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
        .attr("r", 5)
  }

  var mousemove = function(d) {
    tooltip
    .html("Team: " + d.TEAM + "</br>" + "Conference: " + d.CONF + "</br>" + "Win % : " + Math.round((((+ d.W)/ (+ d.G)) * 10000))/100 + "</br>" + "3PT FG%: " + d["3P_O"])
    .style("top", (event.pageY + 100)+"px").style("left",(event.pageX + 100)+"px")
  }

  // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
  var mouseleave = function(d) {
    tooltip.style("visibility", "hidden")
    d3.selectAll(".dot")
      .transition()
      .duration(200)
      .style("fill", function (d) { return color(d.CONF) })
      .attr("r", 3) 
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
      .attr("r", 3)
      .style("fill", function (d) { return color(d.CONF) } )
    .on("mouseover", mouseover )
    .on("mousemove", mousemove )
    .on("mouseleave", mouseleave )

  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 50)
    .text("Win %");

  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Three Point FG %");


    svg.append("circle").attr("cx",100).attr("cy",130-50).attr("r", 3).style("fill", "red")
    svg.append("circle").attr("cx",100).attr("cy",140-50).attr("r", 3).style("fill", "blue")
    svg.append("circle").attr("cx",100).attr("cy",150-50).attr("r", 3).style("fill", "green")
    svg.append("circle").attr("cx",100).attr("cy",160-50).attr("r", 3).style("fill", "orange")
    svg.append("circle").attr("cx",100).attr("cy",170-50).attr("r", 3).style("fill", "yellow")
    svg.append("circle").attr("cx",100).attr("cy",180-50).attr("r", 3).style("fill", "black")
    svg.append("text").attr("x", 120).attr("y", 130-50).text("Big Ten").style("font-size", "10px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 120).attr("y", 140-50).text("ACC").style("font-size", "10px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 120).attr("y", 150-50).text("Big East").style("font-size", "10px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 120).attr("y", 160-50).text("Big 12").style("font-size", "10px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 120).attr("y", 170-50).text("Pac 12").style("font-size", "10px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 120).attr("y", 180-50).text("SEC").style("font-size", "10px").attr("alignment-baseline","middle") 
    
    svg.append("text").attr("x", 200).attr("y", 100).text("y = 0.0621 x + 29.45").style("font-size", "10px").attr("alignment-baseline","middle") 
    svg.append("text").attr("x", 200).attr("y", 115).text("   R² = 0.1398").style("font-size", "10px").attr("alignment-baseline","middle") 


    svg.append("line")//making a line for legend
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", 320.58)
      .attr("y2", 223.7)
      .style("stroke-dasharray","5,5")//dashed array for line
      .style("stroke", "blue");
})

