
function streamgraph(data, color) {
    var datearray = [];
    var colorrange = [];
    if (color == "blue") {
        colorrange = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"];
    }
    else if (color == "pink") {
        colorrange = ["#980043", "#DD1C77", "#DF65B0", "#C994C7", "#D4B9DA", "#F1EEF6"];
    }
    else if (color == "orange") {
        colorrange = ["#B30000", "#E34A33", "#FC8D59", "#FDBB84", "#FDD49E", "#FEF0D9"];
    }
    strokecolor = colorrange[0];

    var formattemp = d3v2.time.format("%Y-%m-%d %H:%M");

    var margin = {top: 20, right: 40, bottom: 30, left: 30};
    var width = 1500;
    // var width = document.body.clientWidth - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var tooltip = d3v2.select("body")
        .append("div")
        .attr("class", "remove")
        .style("position", "absolute")
        .style("z-index", "20")
        .style("visibility", "hidden")
        .style("top", "950px")
        .style("right", "100px");

    var x = d3v2.time.scale()
        .range([0, width]);

    var y = d3v2.scale.linear()
        .range([height-10, 0]);

    var z = d3v2.scale.ordinal()
        .range(colorrange);

    var xAxis = d3v2.svg.axis()
        .scale(x)
        .orient("bottom")
        // .ticks(d3v2.time.hours);

    var yAxis = d3v2.svg.axis()
        .scale(y);

    var yAxisr = d3v2.svg.axis()
        .scale(y);

    var stack = d3v2.layout.stack()
        .offset("silhouette")
        .values(function(d) { return d.values; })
        .x(function(d) { return d.date; })
        .y(function(d) { return d.value; });

    var nest = d3v2.nest()
        .key(function(d) { return d.key; });

    var area = d3v2.svg.area()
        .interpolate("cardinal")
        .x(function(d) { return x(d.date); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3v2.select("#div_streamgraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // var graph = d3v2.csv(csvpath, function(data) {
        data.forEach(function(d) {
            d.date = formattemp.parse(d.date.substring(0,16));
            d.valuestest = +d.valuestest;
        });

        var layers = stack(nest.entries(data));

        x.domain(d3v2.extent(data, function(d) { return d.date; }));
        y.domain([0, d3v2.max(data, function(d) { return d.y0 + d.y; })]);

        svg.selectAll(".layer")
            .data(layers)
            .enter().append("path")
            .attr("class", "layer")
            .attr("d", function(d) { return area(d.values); })
            .style("fill", function(d, i) { return z(i); });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + width + ", 0)")
            .call(yAxis.orient("right"));

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis.orient("left"));

        svg.selectAll(".layer")
            .attr("opacity", 1)
            .on("mouseover", function(d, i) {
                svg.selectAll(".layer").transition()
                    .duration(250)
                    .attr("opacity", function(d, j) {
                        return j != i ? 0.6 : 1;
                    })})

            .on("mousemove", function(d, i) {
                mousex = d3v2.mouse(this);
                mousex = mousex[0];
                var invertedx = x.invert(mousex);
                invertedx = invertedx.getMonth() + invertedx.getDate();
                var selected = (d.values);
                for (var k = 0; k < selected.length; k++) {
                    datearray[k] = selected[k].date
                    datearray[k] = datearray[k].getMonth() + datearray[k].getDate();
                }

                mousedate = datearray.indexOf(invertedx);
                pro = d.values[mousedate].value;

                d3v2.select(this)
                    .classed("hover", true)
                    .attr("stroke", strokecolor)
                    .attr("stroke-width", "0.5px"),
                    tooltip.html( "<p>" + d.key + "<br>" + pro + "</p>" ).style("visibility", "visible")
            // .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d, i) {
                svg.selectAll(".layer")
                    .transition()
                    .duration(250)
                    .attr("opacity", "1")
            .style("left", "0px").style("top", "950px");
                d3v2.select(this)
                    .classed("hover", false)
                    .attr("stroke-width", "0px"), tooltip.html( "<p>" + d.key + "<br>" + pro + "</p>" ).style("visibility", "hide");
            })

        var vertical = d3v2.select("#div_streamgraph")
            .append("div")
            .attr("class", "remove")
            .style("z-index", "190")
            .style("width", "1px")
            .style("height", "380px")
            .style("top", "950px")
            .style("right", "0px")
            .style("background", "#fff");

        d3v2.select(".chart")
            .on("mousemove", function(){
                mousex = d3v2.mouse(this);
                mousex = mousex[0] + 5;
                vertical.style("left", mousex + "px" )})
            .on("mouseover", function(){
                mousex = d3v2.mouse(this);
                mousex = mousex[0] + 5;
                vertical.style("left", mousex + "px")});
    // });
}