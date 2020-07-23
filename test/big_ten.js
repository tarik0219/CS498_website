var margin = {top: 30, right: 30, bottom: 70, left: 60},
width = 500 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;



var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var svg3 = d3.select("#my_dataviz2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

var svg2 = d3.select("#my_dataviz2")
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


var svg5 = d3.select("#my_dataviz3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    
var svg6 = d3.select("#my_dataviz3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

var svg7 = d3.select("#my_dataviz3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return a["ORB"] - b["ORB"];
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg7.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([20, 40])
    .range([ height, 0]);
svg7.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg7.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d["ORB"]); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d["ORB"]); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg7.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg7.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Offensive Rebound %")

})

d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return a["2P_O"] - b["2P_O"];
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg6.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([45, 55])
    .range([ height, 0]);
svg6.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg6.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d["2P_O"]); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d["2P_O"]); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg6.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg6.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("2PT FG%")

})

d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return a["3P_O"] - b["3P_O"];
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg5.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([30, 40])
    .range([ height, 0]);
svg5.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg5.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d["3P_O"]); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d["3P_O"]); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg5.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg5.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("3PT FG%")

})

d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return b.ADJDE - a.ADJDE;
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg4.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([90, 105])
    .range([ height, 0]);
svg4.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg4.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d.ADJDE); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.ADJDE); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg4.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg4.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Adjuste Defence")

})


d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return a.BOTH - b.BOTH;
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 25])
    .range([ height, 0]);
svg3.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg3.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d.BOTH); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.BOTH); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg3.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg3.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Adjusted Offence - Adjuste Defence")

})

d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return a.ADJOE - b.ADJOE;
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([100, 120])
    .range([ height, 0]);
svg2.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg2.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d.ADJOE); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.ADJOE); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg2.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg2.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Adjusted Offence")

})


d3.csv("big_ten.csv", function(data) {

    data.sort(function(b, a) {
        return a.W - b.W;
        });

var color = d3.scaleOrdinal()
    .domain(["Michigan_St", "Ohio_St","Michigan", "Penn_St", "Wisconsin", "Purdue","Maryland","Minnesota","Illinois","Rutgers","Iowa","Indiana","Northwestern","Nebraska"])
    .range([ "#22870E", "#BD2008", "yellow", "#1B56E0", "#E02510", "gold","#BA1E0D","maroon","orange","red","black","#DB123A","purple","red"])

// X axis
var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.TEAM; }))
    .padding(0.2);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
    .domain([0, 20])
    .range([ height, 0]);
svg.append("g")
    .call(d3.axisLeft(y));


var mouseover = function(d) {


teams = d.TEAM

d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", "lightgrey")

d3.selectAll("." + teams)
    .transition()
    .duration(200)
    .style("fill", color(teams))
    }


var mouseleave = function(d) {
d3.selectAll(".dot")
    .transition()
    .duration(200)
    .style("fill", function (d) { return color(d.TEAM) })
}

// Bars
svg.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function (d) { return "dot " + d.TEAM } )
    .attr("x", function(d) { return x(d.TEAM); })
    .attr("y", function(d) { return y(d.W); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.W); })
    .attr("fill", function (d) { return color(d.TEAM) } )
    .on("mouseover", mouseover )
    .on("mouseleave", mouseleave )

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width - (width/2) )
    .attr("y", height + 60)
    .text("Teams");

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -60)
    .attr("x", -width/2 + 80)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Wins")

})