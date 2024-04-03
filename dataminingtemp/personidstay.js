
$( "#barchartreset" ).click(function() {
    plotchartclickpidarray = []
    d3.select("#personidstay").remove();
    d3.select("#div_personidstay").style('display', 'none');
})
d3.select("#div_personidstay").style("display","none")
function barchart(aselectediddatacluster){
    var timestart = "2019-07-21 00:00:00"
    aselectediddatacluster.forEach(function(item){
        item.track.forEach(function(d){
        d.belongtomeetingroom = sensoridreturntomeeting(d.sensorid)
        })

        //计算会场的轨迹
        var meetingroomtrack = new Array()
        var temp = item.track
        var temproom = temp[0].belongtomeetingroom ;
        var temptime = temp[0].time ;
        var lasttime = temp[0].time ;

        //TODO 此处停留多久有待商榷//temp[0].time - temp[1].time
        temp[0].meetingroomremaintime = 0
        let timestarttemp0 = new Date(timestart);
        let timeendtemp0 = new Date(timestart);
        timestarttemp0.setTime(timestarttemp0.getTime()+ parseInt(temp[1].time)*1000 );
        timeendtemp0.setTime(timeendtemp0.getTime()+ parseInt(temp[0].time)*1000 );
        temp[0].startdateformat = timestarttemp0;
        temp[0].enddateformat = timeendtemp0
        meetingroomtrack.push(temp[0])

        temp.forEach(function(d,i){
            if(temproom != d.belongtomeetingroom){
                temp[i-1].meetingroomremaintime = temptime- d.time
                let timestarttemp = new Date(timestart);
                let timeendtemp = new Date(timestart);
                timestarttemp.setTime(timestarttemp.getTime()+ parseInt(d.time)*1000 );
                timeendtemp.setTime(timeendtemp.getTime()+ parseInt(temptime)*1000 );
                temp[i-1].startdateformat = timestarttemp;
                temp[i-1].enddateformat = timeendtemp
                meetingroomtrack.push(temp[i-1])
                temproom = d.belongtomeetingroom
                temptime = d.time
            }
        })

        item.meetingroomtrack = meetingroomtrack;

    })

    var dateformat = d3.timeFormat("%Y-%m-%d %H:%M");
    var parsedtg = d3.timeParse("%Y-%m-%d %H:%M");//d3.timeParse("%d-%b-%y");
    d3.select("#personidstay").remove();

    var personidstaydata = new Array();

    for(var i in aselectediddatacluster){
        var clustertemp = aselectediddatacluster[i]
        var item = {};
        item.endtime = clustertemp.track[0].time
        item.endsensorsensorname = clustertemp.track[0].sensorname
        item.starttime = clustertemp.track[clustertemp.track.length-1].time
        item.startsensorsensorname = clustertemp.track[clustertemp.track.length-1].sensorname

        var timeendtemp = new Date(timestart);
        timeendtemp.setTime(timeendtemp.getTime()+ parseInt(clustertemp.track[0].time)*1000 );
        var timestarttemp = new Date(timestart);
        timestarttemp.setTime(timestarttemp.getTime()+ parseInt(clustertemp.track[clustertemp.track.length-1].time)*1000 );

        item.enddateformat = timeendtemp
        item.startdateformat = timestarttemp
        item.id = clustertemp.id
        item.meetingroomtrack = clustertemp.meetingroomtrack
        personidstaydata.push(item)
    }

    var data = personidstaydata;

    var margin = {top: 2, right: 20, bottom: 5, left: 25};
    var width = document.querySelector('#div_personidstay').clientWidth - 20
    var height = document.querySelector('#div_personidstay').clientHeight - 20;
    var y = d3.scaleBand()
        .rangeRound([0, height])

    // var x = d3.scaleLinear()
    //     .range([0,width]);

    var x = d3.scaleTime().range([0,width])
    y.domain(data.map(function(d) { return d.id; }));

    // x.domain([d3.min(data,function(d){return parseInt(d.starttime);}),
    //     d3.max(data,function(d){return parseInt(d.endtime);})]);
    var dayvalue = document.getElementById("dayvalue").value;
    x.domain([
        new Date("2019/7/21 07:00:00"),
        new Date("2019/7/23 16:00:00")
    ])


    var xAxis = d3.axisBottom()
        .scale(x)
        .ticks(5);

    var yAxis = d3.axisLeft()
        .scale(y)
    var locale = d3.timeFormatLocale({
        dateTime: "%a %b %e %X %Y",
        date: "%Y/%-m/%-d",
        time: "%H:%M:%S",
        periods: ["上午", "下午"],
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    });

    var svgpersonmeetingtrack = d3.select("#div_personidstay").append("svg").attr("id","personidstay")
        .attr("width", width + margin.left + margin.right)
        .attr("height", 140).append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svgpersonmeetingtrack.append("g").attr("class", "axisWhite")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis.tickFormat(locale.format("%H:%M")))
        .append("text")
        .attr("x", width-75)
        .attr("dx", ".71em").attr("dy", "-.71em")
        .style("fill", "black")


    svgpersonmeetingtrack.append("g").attr("class", "axisWhite")
        .call(yAxis).attr("id","pidbarchartaxis")
        .attr("transform", "translate(0,0)")
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.0em")
        .attr("dy", ".1em")
        .attr("x", "1")
        .attr("transform", function(d) {
            return "rotate(-45)"
        });

    d3.selectAll("g#pidbarchartaxis").selectAll("g").selectAll("line").remove()


    // svgpersonmeetingtrack.append("g")
    //     .attr("class", "y axis")
    //     .call(yAxis)
    //     .style("z-index",999)
    //     .attr("transform", "translate("+x(new Date("2019/7/22 00:00:00"))+",0)")
    // svgpersonmeetingtrack.append("g")
    //     .attr("class", "y axis")
    //     .call(yAxis)
    //     .attr("transform", "translate("+x(new Date("2019/7/23 00:00:00"))+",0)")

    //进出场馆时间
    // svgpersonmeetingtrack.selectAll(".bar")
    //     .data(data)
    //     .enter().append("rect")
    //     .attr("class", "bar")
    //     .attr("y", function(d) { return y(d.id); })
    //     .attr("height", y.bandwidth())
    //     .attr("x", function(d) { return x(new Date(d.startdateformat)); })
    //     .attr("width", function(d) { return x(new Date(d.enddateformat))-x(new Date(d.startdateformat)) })
    //     .style("fill",function(d,i){return trackcolor[24][i]})

    // for(var  q = 0 ; q < data.length ; q++){
    //     var apersonber = data[q].meetingroomtrack;
    //     svgpersonmeetingtrack.selectAll(".bar1")
    //         .data(apersonber)
    //         .enter().append("rect")
    //         .attr("class", "bar")
    //         .attr("y", function(d,i) { console.log(data[q].id);return y(data[q].id); })
    //         .attr("height", y.bandwidth())
    //         .attr("x", function(d) { return x(new Date(d.startdateformat)); })
    //         .attr("width", function(d) { return x(new Date(d.enddateformat))-x(new Date(d.startdateformat)) })
    //         .style("fill",function() {return "hsl(" + Math.random() * 360 + ",100%,50%)";})
    // }

    data.forEach(function(item){
        var apersonber = item.meetingroomtrack;
        svgpersonmeetingtrack.selectAll(".bar1")
            .data(apersonber)
            .enter().append("rect")
            .attr("class", function(d){ return "bar "+item.id+" "+ d.belongtomeetingroom})
            .attr("y",  y(item.id) )
            .attr("height", y.bandwidth())
            .attr("x", function(d) { return x(new Date(d.startdateformat)); })
            .attr("width", function(d) { return x(new Date(d.enddateformat))-x(new Date(d.startdateformat)) })
            .style("opacity",0.8)
            .style("fill",function(d) {
                var colortemp = "red";
                for(i in meetingroomcolor){
                    if(meetingroomcolor[i].meetingroom==d.belongtomeetingroom){
                        colortemp = meetingroomcolor[i].color
                        break;0
                    }
                }
                return colortemp;
            })
    })

    let Aisle = new Array()
    meetingroomcolor.forEach(function(d){
        if(d.meetingroom=="firstAisle"){
            Aisle.push(d)
        }else if(d.meetingroom=="secondAisle"){
            Aisle.push(d)
        }
    })
// // add legend
//     for(var i = 0 ; i < Aisle.length; i++){
//
//         var legend = svgpersonmeetingtrack.append("g")
//             .attr("class", "legend")
//         legend
//             .append("rect")
//             .attr("x", width-margin.left-30)
//             .attr("y", -10+i*8)
//             .attr("width", 8)
//             .attr("height", 8 )
//             .style("fill", Aisle[i].color)
//         legend
//             .append("text")
//             .attr("x", width-margin.left  - 10)
//             .attr("y", i*8)
//             .text(Aisle[i].textname)
//             .style("fill", Aisle[i].color)
//
//     }

    var personstaytooltip = d3.select("body")
        .append('div')
        .attr('class', 'personstaytooltip');

    personstaytooltip.append('div')
        .attr('class', 'id');
    personstaytooltip.append('div')
        .attr('class', 'tempRange');

    svgpersonmeetingtrack.selectAll(".bar")
        .on('mouseover', function(d) {
            personstaytooltip.select('.id').html(
                "<b>person: " + d3.select(this)._groups[0][0].classList[1]+ "<br>经过 "+
                d.belongtomeetingroom + "</br>"
                +((d.enddateformat.getTime()/1000-d.startdateformat.getTime()/1000)/60).toFixed(2) + "分钟</br>"
            );
            personstaytooltip.select('.tempRange').html(dateformat(d.startdateformat) + " to " + dateformat(d.enddateformat));
            personstaytooltip.style('display', 'block').style('z-index', '999');
            personstaytooltip.style('opacity',2);

        })
        .on('mousemove', function(d) {
            personstaytooltip.style('left', (d3.event.pageX )+20 + 'px')
                .style('top', (d3.event.pageY - 28) + 'px');
        })
        .on('mouseout', function() {
            personstaytooltip.style('display', 'none');
            personstaytooltip.style('opacity',0);
        })
        .on("click",function(d){
            d3.selectAll(".persontrack").remove();
            d3.selectAll(".personidtracktexttime").remove();
            d3.selectAll(".personidtrackdot").remove();
            d3.selectAll(".movingcircle").remove();
            d3.selectAll(".moveingtext").remove();
            d3.selectAll(".personid").attr("r",personiddotoriginer)
                // .style("opacity", 0.7).style("fill", persondotdefaultcolor)
            var pid = d3.select(this)._groups[0][0].classList[1];
            personidtrackclick(pid ,"red")
        })
}


function barchartinputpidarray(pidarray){
    var aselectediddatacluster =  new Array()

    pidarray.forEach(function(d,i){
        if(allcharacteridtrack.hasOwnProperty(d)){
            var item = {}
            item.id = d
            item.track = allcharacteridtrack[d];
            aselectediddatacluster.push(item)
        }

    })

    var timestart = "2019-07-21 00:00:00"
    aselectediddatacluster.forEach(function(item){
        item.track.forEach(function(d){
            d.belongtomeetingroom = sensoridreturntomeeting(d.sensorid)
        })

        //计算会场的轨迹
        var meetingroomtrack = new Array()
        var temp = item.track
        var temproom = temp[0].belongtomeetingroom ;
        var temptime = temp[0].time ;
        var lasttime = temp[0].time ;

        //TODO 此处停留多久有待商榷//temp[0].time - temp[1].time
        temp[0].meetingroomremaintime = 0
        let timestarttemp0 = new Date(timestart);
        let timeendtemp0 = new Date(timestart);
        timestarttemp0.setTime(timestarttemp0.getTime()+ parseInt(temp[1].time)*1000 );
        timeendtemp0.setTime(timeendtemp0.getTime()+ parseInt(temp[0].time)*1000 );
        temp[0].startdateformat = timestarttemp0;
        temp[0].enddateformat = timeendtemp0
        meetingroomtrack.push(temp[0])

        temp.forEach(function(d,i){
            if(temproom != d.belongtomeetingroom){

                temp[i-1].meetingroomremaintime = temptime- d.time
                let timestarttemp = new Date(timestart);
                let timeendtemp = new Date(timestart);
                timestarttemp.setTime(timestarttemp.getTime()+ parseInt(d.time)*1000 );
                timeendtemp.setTime(timeendtemp.getTime()+ parseInt(temptime)*1000 );
                temp[i-1].startdateformat = timestarttemp;
                temp[i-1].enddateformat = timeendtemp
                meetingroomtrack.push(temp[i-1])
                temproom = d.belongtomeetingroom
                temptime = d.time
            }
        })

        item.meetingroomtrack = meetingroomtrack;

    })

    var dateformat = d3.timeFormat("%Y-%m-%d %H:%M");
    var parsedtg = d3.timeParse("%Y-%m-%d %H:%M");//d3.timeParse("%d-%b-%y");
    d3.select("#personidstay").remove();

    var personidstaydata = new Array();

    for(var i in aselectediddatacluster){
        var clustertemp = aselectediddatacluster[i]
        var item = {};
        item.endtime = clustertemp.track[0].time
        item.endsensorsensorname = clustertemp.track[0].sensorname
        item.starttime = clustertemp.track[clustertemp.track.length-1].time
        item.startsensorsensorname = clustertemp.track[clustertemp.track.length-1].sensorname

        var timeendtemp = new Date(timestart);
        timeendtemp.setTime(timeendtemp.getTime()+ parseInt(clustertemp.track[0].time)*1000 );
        var timestarttemp = new Date(timestart);
        timestarttemp.setTime(timestarttemp.getTime()+ parseInt(clustertemp.track[clustertemp.track.length-1].time)*1000 );

        item.enddateformat = timeendtemp
        item.startdateformat = timestarttemp
        item.id = clustertemp.id
        item.meetingroomtrack = clustertemp.meetingroomtrack
        personidstaydata.push(item)
    }

    var data = personidstaydata;

    var margin = {top: 2, right: 20, bottom: 5, left: 25};
    var width = document.querySelector('#div_personidstay').clientWidth - 20;
    var height = document.querySelector('#div_personidstay').clientHeight - 20;
    var y = d3.scaleBand()
        .rangeRound([0, height])

    // var x = d3.scaleLinear()
    //     .range([0,width]);

    var x = d3.scaleTime().range([0,width])
    y.domain(data.map(function(d) { return d.id; }));

    // x.domain([d3.min(data,function(d){return parseInt(d.starttime);}),
    //     d3.max(data,function(d){return parseInt(d.endtime);})]);
    var dayvalue = document.getElementById("dayvalue").value;
    x.domain([new Date("2019/7/21 07:00:00"),
        new Date("2019/7/23 16:00:00")]);

    var xAxis = d3.axisBottom()
        .scale(x)
        .ticks(5);

    var yAxis = d3.axisLeft()
        .scale(y)
    var locale = d3.timeFormatLocale({
        dateTime: "%a %b %e %X %Y",
        date: "%Y/%-m/%-d",
        time: "%H:%M:%S",
        periods: ["上午", "下午"],
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    });


    var svgpersonmeetingtrack = d3.select("#div_personidstay").append("svg").attr("id","personidstay")
        .attr("width", width + margin.left + margin.right)
        .attr("height", 140).append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svgpersonmeetingtrack.append("g").attr("class", "axisWhite")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis.tickFormat(locale.format("%H:%M")))
        .append("text")
        .attr("x", width-75)
        .attr("dx", ".71em").attr("dy", "-.71em")
        .style("fill", "#000")


    svgpersonmeetingtrack.append("g").attr("class", "axisWhite")
        .call(yAxis).attr("id","pidbarchartaxis")
        .attr("transform", "translate(0,0)")
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.0em")
        .attr("dy", ".1em")
        .attr("x", "1")
        .attr("transform", function(d) {
            return "rotate(-45)"
        });

    d3.selectAll("g#pidbarchartaxis").selectAll("g").selectAll("line").remove()

    // svgpersonmeetingtrack.append("g")
    //     .attr("class", "y axis")
    //     .call(yAxis)
    //     .style("z-index",999)
    //     .attr("transform", "translate("+x(new Date("2019/7/22 00:00:00"))+",0)")
    // svgpersonmeetingtrack.append("g")
    //     .attr("class", "y axis")
    //     .call(yAxis)
    //     .attr("transform", "translate("+x(new Date("2019/7/23 00:00:00"))+",0)")

    //进出场馆时间
    // svgpersonmeetingtrack.selectAll(".bar")
    //     .data(data)
    //     .enter().append("rect")
    //     .attr("class", "bar")
    //     .attr("y", function(d) { return y(d.id); })
    //     .attr("height", y.bandwidth())
    //     .attr("x", function(d) { return x(new Date(d.startdateformat)); })
    //     .attr("width", function(d) { return x(new Date(d.enddateformat))-x(new Date(d.startdateformat)) })
    //     .style("fill",function(d,i){return trackcolor[24][i]})

    // for(var  q = 0 ; q < data.length ; q++){
    //     var apersonber = data[q].meetingroomtrack;
    //     svgpersonmeetingtrack.selectAll(".bar1")
    //         .data(apersonber)
    //         .enter().append("rect")
    //         .attr("class", "bar")
    //         .attr("y", function(d,i) { console.log(data[q].id);return y(data[q].id); })
    //         .attr("height", y.bandwidth())
    //         .attr("x", function(d) { return x(new Date(d.startdateformat)); })
    //         .attr("width", function(d) { return x(new Date(d.enddateformat))-x(new Date(d.startdateformat)) })
    //         .style("fill",function() {return "hsl(" + Math.random() * 360 + ",100%,50%)";})
    // }

    data.forEach(function(item){
        var apersonber = item.meetingroomtrack;
        svgpersonmeetingtrack.selectAll(".bar1")
            .data(apersonber)
            .enter().append("rect")
            .attr("class", function(d){ return "bar "+item.id+" "+ d.belongtomeetingroom})
            .attr("y",  y(item.id) )
            .attr("height", y.bandwidth())
            .attr("x", function(d) { return x(new Date(d.startdateformat)); })
            .attr("width", function(d) { return x(new Date(d.enddateformat))-x(new Date(d.startdateformat)) })
            .style("opacity",0.8)
            .style("fill",function(d) {
                var colortemp = "red";
                for(i in meetingroomcolor){
                    if(meetingroomcolor[i].meetingroom==d.belongtomeetingroom){
                        colortemp = meetingroomcolor[i].color
                        break;
                    }
                }
                return colortemp;
            })
    })
    // let Aisle = new Array()
    // meetingroomcolor.forEach(function(d){
    //     Aisle.push(d)
    //     // if(d.meetingroom=="firstAisle"){
    //     //     Aisle.push(d)
    //     // }else if(d.meetingroom=="secondAisle"){
    //     //     Aisle.push(d)
    //     // }
    // })
    //
    // for(var i = 0 ; i < Aisle.length; i++){
    //     // add legend
    //     var legend = svgpersonmeetingtrack.append("g")
    //         .attr("class", "legend")
    //     legend
    //         .append("rect")
    //         .attr("x", width-margin.left-30)
    //         .attr("y", -10+i*8)
    //         .attr("width", 8)
    //         .attr("height", 8 )
    //         .style("fill", Aisle[i].color)
    //     legend
    //         .append("text")
    //         .attr("x", width-margin.left  - 10)
    //         .attr("y", i*8)
    //         .text(Aisle[i].textname)
    //         .style("fill", Aisle[i].color)
    //
    // }



    var personstaytooltip = d3.select("body")
        .append('div')
        .attr('class', 'personstaytooltip');

    personstaytooltip.append('div')
        .attr('class', 'id');
    personstaytooltip.append('div')
        .attr('class', 'tempRange');

    svgpersonmeetingtrack.selectAll(".bar")
        .on('mouseover', function(d) {
            personstaytooltip.select('.id').html(
                "<b>person: " + d3.select(this)._groups[0][0].classList[1]+ "<br>经过 "+
                d.belongtomeetingroom + "</br>"
                +((d.enddateformat.getTime()/1000-d.startdateformat.getTime()/1000)/60).toFixed(2) + "分钟</br>"
            );
            personstaytooltip.select('.tempRange').html(dateformat(d.startdateformat) + " to " + dateformat(d.enddateformat));
            personstaytooltip.style('display', 'block').style('z-index', '999');
            personstaytooltip.style('opacity',2);
            d3.selectAll("#"+d.belongtomeetingroom).style("fill","yellow").style("opacity", 1)

        })
        .on('mousemove', function(d) {
            personstaytooltip.style('left', (d3.event.pageX )+20 + 'px')
                .style('top', (d3.event.pageY - 28) + 'px');
        })
        .on('mouseout', function(d) {
            personstaytooltip.style('display', 'none');
            personstaytooltip.style('opacity',0);
            d3.selectAll("#"+d.belongtomeetingroom).style("fill","white").style("opacity",0.1)
        })
        .on("click",function(d){
            d3.selectAll(".persontrack").remove();
            d3.selectAll(".personidtracktexttime").remove();
            d3.selectAll(".personidtrackdot").remove();
            d3.selectAll(".movingcircle").remove();
            d3.selectAll(".moveingtext").remove();
            d3.selectAll(".personid").attr("r",personiddotoriginer)
                // .style("opacity", 0.7).style("fill", persondotdefaultcolor)
            var pid = d3.select(this)._groups[0][0].classList[1];
            personidtrackclick(pid ,"red")

        })





}


