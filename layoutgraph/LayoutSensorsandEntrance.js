//sensor dot tooltip
var sensordottooltip = d3.select("#containerfloor1").append("sensordotdiv")
    .attr("class", "sensordottooltip")
    .style("opacity", 0).style("z-index", 500);
d3.csv("data/sensorsposition.csv",function(error,sensorspositiontemp){
    allsensorid = sensorspositiontemp;

    // for(var i = 0 ; i<sensorsposition.length; i++){
    //     var sensorname = sensorsposition[i];
    //     console.log(sensorname);
    //     var recidcenter = d3.selectAll("."+sensorsposition[i].sensorname)
    //         ._groups[0][0].attributes.id.nodeValue.split(",")
    //     svgfloor1.append("circle")
    //         .attr("cx",recidcenter[1])
    //         .attr("cy",recidcenter[2])
    //         .attr("r",5)
    //         .style("opacity", 0.5)
    //         .style("fill", "#ff5417")
    //         .on("mouseover", function(event) {
    //             sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
    //             sensordottooltip.html( "sensorid <br/>" + sensorsposition[i].sensorname)
    //                 .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    //         })
    //         .on("mouseout", function(d) {
    //             sensordottooltip.transition().duration(500).style("visibility", "hidden").style("opacity", 0);
    //         });
    //
    // }

//TODO 惊天bug, .data(sensorsposition).enter() 加载数据后前面的16个是空
    var hardcode = new Array();
    for(var i = 0 ; i<16; i++){
        hardcode[i] = sensorspositiontemp[i]
    }
    var sensorsposition = hardcode.concat(sensorspositiontemp);

        svgfloor1.selectAll("path")
            .data(sensorsposition).enter()
            .append("circle")
            .attr("class","sensors").attr("id",function(d, i){
            return "RectSensoridfloor"+d.sid;
        })
            .attr("cx",function(d, i){
                return d3.selectAll(".RectSensoridfloor"+sensorsposition[i].sid)
                    ._groups[0][0].attributes.id.nodeValue.split(",")[1]
            })
            .attr("cy",function(d, i){
                return d3.selectAll(".RectSensoridfloor"+sensorsposition[i].sid)
                    ._groups[0][0].attributes.id.nodeValue.split(",")[2]
            })
            .attr("r",1).style("fill", "#ff5417").style("opacity",0.5)
            .on("mouseover", function(d) {
                sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
                sensordottooltip.html( "sensor: " + d.sid+"<br/>")
                    .style("left", (d3.event.pageX)-450 + "px").style("top", (d3.event.pageY+20 ) + "px");
            })
            .on("mouseout", function(d) {
                sensordottooltip.transition().duration(500).style("visibility", "hidden")
                    .style("opacity", 0);
            });

})

//in and out arrows
//in and out entrance
var arrow = [
    {up:    [{x :3.5, y:17.7}, {x :5.5, y:17.7}, {x :8.5, y:17.7}, {x :20.5, y:2.4}]    },
    {down:  [{x :6.5, y:17.7}, {x :16.5, y:17.7}, {x :18.5, y:17.7}]  },
    {right:  [{x :1.5, y:15.6}]  }
]
//up entrance
svgfloor1.append("g").selectAll("path")
    .data(arrow[0].up).enter().append("path").attr("class","arrow")
    .attr("d", d3.symbol().size([300]).type(d3.symbolTriangle))
    .attr("transform",   function(d){
        return  "translate(" + d.x*pixcel + "," + d.y*pixcel + ")"
    })
svgfloor1.append("g").selectAll("path")
    .data(arrow[0].up).enter().append("path").attr("class","arrow")
    .attr("d", d3.symbol().size([300]).type(d3.symbolSquare))
    .attr("transform", function(d){
        return  "translate(" + (d.x*pixcel) + "," + (d.y*pixcel+10) + ")"
    })
//down entrance
svgfloor1.append("g").selectAll("path")
    .data(arrow[1].down).enter().append("path").attr("class","arrow")
    .attr("d", d3.symbol().size([300]).type(d3.symbolTriangle))
    .attr("transform",   function(d){
        return  "translate(" + d.x*pixcel + "," + (d.y*pixcel+10) + ") rotate(180)"
    })
svgfloor1.append("g").selectAll("path")
    .data(arrow[1].down).enter().append("path").attr("class","arrow")
    .attr("d", d3.symbol().size([300]).type(d3.symbolSquare))
    .attr("transform", function(d){
        return  "translate(" + (d.x*pixcel) + "," + (d.y*pixcel) + ")"
    })
//right entrance
svgfloor1.append("g").selectAll("path")
    .data(arrow[2].right).enter().append("path").attr("class","arrow")
    .attr("d", d3.symbol().size([300]).type(d3.symbolTriangle))
    .attr("transform",   function(d){
        return  "translate(" + (d.x*pixcel-5) + "," + (d.y*pixcel-5) + ") rotate(90)"
    })
svgfloor1.append("g").selectAll("path")
    .data(arrow[2].right).enter().append("path").attr("class","arrow")
    .attr("d", d3.symbol().size([300]).type(d3.symbolSquare))
    .call(drag_behavior)
    .attr("transform", function(d){
        return  "translate(" + (d.x*pixcel-15) + "," + (d.y*pixcel-5) + ") rotate(90)"
    })
