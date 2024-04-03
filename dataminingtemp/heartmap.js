



$( "#heatmap" ).click(function() {
    d3.csv("data/atimesidnumofpid/choiceSidNum.csv",function(error,datatemp) {
        datatemp.sort(comparedown("number"))//先对num降序排序
        var colorSelfDefine = colorlegend_selectcolor(datatemp[0].number);//最大值
        datatemp.forEach(function(d,i){
            //将num从低到高进行排序
            var num = d.number;
            var sid = d.sid;
            d3.select(".RectSensoridfloor"+ sid)
                .style("fill", function(d){
                    if(d.number == 0){
                        return "blue"
                    }else return colorSelfDefine(num);
                } )
                .style("opacity",0.8).attr("stroke", "white")
                .on("mouseover",function(i){
                    sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
                    sensordottooltip.html( "sensor: " + d.sid+"<br/>  number: "+ d.number+
                        "<br/> pid: "+d.idString)
                        .style("left", (d3.event.pageX)-450 + "px").style("top", (d3.event.pageY+20 ) + "px");
                })
                .on("mouseout", function(d) {
                    sensordottooltip.transition().duration(500).style("visibility", "hidden")
                        .style("opacity", 0);
                });

        })
    })

})
$( "#clearheatmap" ).click(function(){
    d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1).attr("stroke", "black")
    var time = document.getElementById("giveheattimevalue").value

})
function colorlegend_selectcolor(maxvalue){
    // maxvalue=Math.sqrt(maxvalue);
    var colorSelfDefine = d3.scaleLinear()
        .domain([0,maxvalue/5,2*maxvalue/5,3*maxvalue/5,4*maxvalue/5,maxvalue])
        .interpolate(d3.interpolateHcl)
        .range(["#faf2ab","#fecc5c","#fd8d3c","#f03b20","#bd0026"]);
    // .range(["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"]);
    //     .range( ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"]);
    return colorSelfDefine;
}



$( "#heatmapinitall" ).click(function() {
    d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1)
    var time = document.getElementById("giveheattimevalue").value
    givetimereturnheamap("2019/7/2"+time);
    $('#heatmapinitall').trigger("click");
})

function day1hatmap(){
    d3.csv("data/heatmapdata3days/sid1.csv",function(error,data){
        d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1)
        givdayreturnheamap(data)
    })
}
function day2hatmap(){
    d3.csv("data/heatmapdata3days/sid2.csv",function(error,data){
        d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1)
        givdayreturnheamap(data)
    })
}
function day3hatmap(){
    d3.csv("data/heatmapdata3days/sid3.csv",function(error,data){
        d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1)
        givdayreturnheamap(data)
    })
}

function givdayreturnheamap(allsensoridnum){
    allsensoridnum.sort(comparedown("number"))//先对num降序排序
    var colorSelfDefine = colorlegend_selectcolor(allsensoridnum[0].number);//最大值

    allsensoridnum.forEach(function(d,i){
        //将num从低到高进行排序
        var num = d.number;
        var sid = d.sid;
        if(num>0){

            d3.select(".RectSensoridfloor"+ sid)
                .style("fill",  colorSelfDefine(num)).style("opacity",0.8)
                .on("mouseover",function(i){
                    sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
                    sensordottooltip.html( "sensor: " + d.sid+"<br/>  热度: "+ d.number)
                        .style("left", (d3.event.pageX)-450 + "px").style("top", (d3.event.pageY+20 ) + "px");
                })
                .on("mouseout", function(d) {
                    sensordottooltip.transition().duration(500).style("visibility", "hidden")
                        .style("opacity", 0);
                })
                .on("click", function(){
                    d3.selectAll(".persontrack").remove();
                    d3.selectAll(".personidtracktexttime").remove();
                    d3.selectAll(".personidtrackdot").remove();
                    d3.selectAll(".movingcircle").remove();
                    d3.selectAll(".moveingtext").remove();
                    d3.selectAll(".personid").attr("r",personiddotoriginer)
                        .style("opacity", 0.7).style("fill", persondotdefaultcolor)
                    let sidallpid = d.idString.split(" ")
                    sidallpid.forEach(function(d,i){
                        duringtimecalculate(d)
                        // //高亮personiddot
                        // d3.select("#personid"+d).attr("r",personiddotoselectedr).style("opacity", 1).style("fill", trackcolor[i])
                    })
                    barchartinputpidarray(sidallpid)
                    var meetingroomname = sensoridreturntomeeting(d.sid);
                    var nowplayfiremeetingname = document.getElementById("playfiremeeingname").getAttribute("class");
                    if(meetingroomname!=nowplayfiremeetingname[1]){
                        playfair(alldaydatamapforplayfire[meetingroomname],"#playfireformeeting",meetingroomname)
                    }

                })
        }else{
            d3.select(".RectSensoridfloor"+ sid)
                .on("mouseover",function(i){
                    sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
                    sensordottooltip.html( "sensor: " + d.sid+"<br/>  number: 0")
                        .style("left", (d3.event.pageX)-450 + "px").style("top", ( d3.event.pageY+20 ) + "px");
                })
                .on("mouseout", function(d) {
                    sensordottooltip.transition().duration(500).style("visibility", "hidden")
                        .style("opacity", 0);
                });
        }

    })

}


function giventimereturnhratmapdata(formattime){
    let timetemp = new Date(formattime)
    let dayvalue = formattime.substring(8,9)
    var t = timetemp.getHours()*60*60 + timetemp.getMinutes()*60 + timetemp.getSeconds()+60*60*24*(dayvalue-1)
    var allsensoridnum = new Array()
    allsensorid.forEach(function(d,i){
        var item = {};
        item.sid = d.sid
        item.number = 0;
        item.idString = ""
        allsensoridnum.push(item)
    })

    for(var person in allcharacteridtrack){
        var persontrack = allcharacteridtrack[person];
        allcharacteridtrack[person].sort(comparedown ("time"))
        //先确定allcharacteridtrack[i]的time是升序，可以用allcharacteridtrack[i].sort(compareup("time"))
        if( t < parseInt(persontrack[0].time) && t > parseInt(persontrack[persontrack.length-1].time)){//此人在该时间在场馆内
            for(var p = persontrack.length-1 ; p >= 0; p--){
                if( t < parseInt(persontrack[p].time)   ){
                    // 此时遍历allsensorid的sid，然后对应的sid++

                    for( var item in allsensoridnum){

                        if(allsensoridnum[item].sid == persontrack[p].sensorid){
                            allsensoridnum[item].number = allsensoridnum[item].number + 1
                            allsensoridnum[item].idString = allsensoridnum[item].idString + person+" "
                            break;
                        }

                    }
                    break;
                }
            }
        }
    }
    return allsensoridnum;
}
function givetimereturnheamap(formattime){
    d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1)
    var allsensoridnum = giventimereturnhratmapdata(formattime)

    allsensoridnum.sort(comparedown("number"))//先对num降序排序
    var colorSelfDefine = colorlegend_selectcolor(allsensoridnum[0].number);//最大值

    allsensoridnum.forEach(function(d,i){
        //将num从低到高进行排序
        var num = d.number;
        var sid = d.sid;
        var idstrings = ""
        if(d.idString.split(" ").length<30){
            idstrings = d.idString
        }else{
            idstrings = d.idString.substring(0,168)+"..."
        }
        if(num>0){

            d3.select(".RectSensoridfloor"+ sid)
                .style("fill",  colorSelfDefine(num)).style("opacity",0.8)
                .on("mouseover",function(i){
                    sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
                    sensordottooltip.html( "sensor: " + d.sid+"<br/>  number: "+ d.number+
                        "<br/> pid: "+ idstrings)
                        .style("left", (d3.event.pageX)-450 + "px").style("top", (d3.event.pageY+20 ) + "px");
                })
                .on("mouseout", function(d) {
                    sensordottooltip.transition().duration(500).style("visibility", "hidden")
                        .style("opacity", 0);
                })
                .on("click", function(){
                    d3.selectAll(".persontrack").remove();
                    d3.selectAll(".personidtracktexttime").remove();
                    d3.selectAll(".personidtrackdot").remove();
                    d3.selectAll(".movingcircle").remove();
                    d3.selectAll(".moveingtext").remove();
                    d3.select("#div_personidstay").style("display","block")
                    d3.selectAll(".dividglyph").style("display","none")
                    d3.selectAll("#persondotsvg").selectAll(".personid").style("display","none")
                    let sidallpid = d.idString.split(" ")
                    sidallpid.forEach(function(d,i){
                        duringtimecalculate(d)
                        // //高亮personiddot
                        d3.select("#personid"+d).style("display","block")
                    })
                    barchartinputpidarray(sidallpid)
                    var meetingroomname = sensoridreturntomeeting(d.sid);
                    var nowplayfiremeetingname = document.getElementById("playfiremeeingname").getAttribute("class");
                    if(meetingroomname!=nowplayfiremeetingname[1]){
                        playfair(alldaydatamapforplayfire[meetingroomname],"#playfireformeeting",meetingroomname)
                    }

                })
        }else{
            d3.select(".RectSensoridfloor"+ sid)
                .on("mouseover",function(i){
                    sensordottooltip.transition().duration(200).style("visibility", "visible").style("opacity", 0.9);
                    sensordottooltip.html( "sensor: " + d.sid+"<br/>  number: 0")
                        .style("left", (d3.event.pageX)-450 + "px").style("top", ( d3.event.pageY+20 ) + "px");
                })
                .on("mouseout", function(d) {
                    sensordottooltip.transition().duration(500).style("visibility", "hidden")
                        .style("opacity", 0);
                });
        }

    })

    let timetemp = new Date(formattime)
    var t = timetemp.getHours()*60*60
    if(t>18||t<7){
        d3.select(".RectSensoridfloor11300").style("opacity",0.8).style("fill","rgb(250, 242, 170)")
        d3.select(".RectSensoridfloor11502").style("opacity",0.8).style("fill","rgb(250, 242, 170)")
        d3.select(".RectSensoridfloor11504").style("opacity",0.8).style("fill","rgb(250, 242, 170)")
        d3.select(".RectSensoridfloor11507").style("opacity",0.8).style("fill","rgb(250, 242, 170)")
    }


}
