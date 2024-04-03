var timeformat = d3.timeFormat("%Y-%m-%d %H:%M:%S");

var day1alldata = new Array();
var day2alldata = new Array();
var day3alldata = new Array();
var alldaydatamapforplayfire = new Map();
d3.csv("data/meeetingnumcount/tenalldayPositionNomber.csv",function(error,data){
    var alldaydatamap = new Map();
    for(var i = 0 ; i<data.length; i ++){
        if(data[i].dayvalue == 1){
            day1alldata.push(data[i])
        }else if(data[i].dayvalue == 2){
            day2alldata.push(data[i])
        }else{
            day3alldata.push(data[i])
        }
    }

    let datacolums = data.columns;
    for(var p = 2 ; p < datacolums.length; p++){//从1开始的原因：0是dayvalue无意义，1是time
        let ameetingdatatemp = new Array();
        alldaydatamap[datacolums[p]] = ameetingdatatemp
    }

    // for(var Key in alldaydatamap){
    //     console.log(alldaydatamap[Key])
    //     day1alldata.forEach(function(d){
    //         var item = {};
    //         item.time = d.time
    //         switch(Key) {
    //             case "confA":
    //                 alldaydatamap[Key].push()
    //                 break;
    //             case "confB":
    //                 // code block
    //                 break;
    //             case "confC":
    //                 // code block
    //                 break;
    //             case "confD":
    //                 // code block
    //                 break;
    //             case "confC":
    //                 // code block
    //                 break;
    //             case "signDesk":
    //                 // code block
    //                 break;
    //             case "poster":
    //                 // code block
    //                 break;
    //             case "wc1":
    //                 // code block
    //                 break;
    //             case "wc2":
    //                 // code block
    //                 break;
    //             case "wc3":
    //                 // code block
    //                 break;
    //             case "room1":
    //                 // code block
    //                 break;
    //             case "room2":
    //                 // code block
    //                 break;
    //             case "room3":
    //                 // code block
    //                 break;
    //             case "room4":
    //                 // code block
    //                 break;
    //             case "room5":
    //                 // code block
    //                 break;
    //             case "room6":
    //                 // code block
    //                 break;
    //             case "exhibition":
    //                 // code block
    //                 break;
    //             case "mainMeeting":
    //                 // code block
    //                 break;
    //             case "serviceRoom":
    //                 // code block
    //                 break;
    //             case "restaurant":
    //                 // code block
    //                 break;
    //             case "relaxRoom":
    //                 // code block
    //                 break;
    //             case "escalator":
    //                 // code block
    //                 break;
    //             case "importExport":
    //                 // code block
    //                 break;
    //             case "firstAisle":
    //                 // code block
    //                 break;
    //             case "secondAisle":
    //                 // code block
    //                 break;
    //
    //
    //
    //
    //
    //
    //
    //
    //             default:
    //             // code block
    //         }
    //
    //
    //
    //
    //     })
    // }
    for(var t = 0 ; t < day1alldata.length; t++){
        var item0 = {}; item0.id = new Date( "2019-07-21 "+day1alldata[t].time); item0.volume = [day1alldata[t].confA, day2alldata[t].confA,day3alldata[t].confA]; alldaydatamap["confA"].push(item0)
        var item1 = {}; item1.id = new Date( "2019-07-21 "+day1alldata[t].time); item1.volume = [day1alldata[t].confB, day2alldata[t].confB,day3alldata[t].confB]; alldaydatamap["confB"].push(item1)
        var item2 = {}; item2.id = new Date( "2019-07-21 "+day1alldata[t].time); item2.volume = [day1alldata[t].confC, day2alldata[t].confC,day3alldata[t].confC]; alldaydatamap["confC"].push(item2)
        var item3 = {}; item3.id = new Date( "2019-07-21 "+day1alldata[t].time); item3.volume = [day1alldata[t].confD, day2alldata[t].confD,day3alldata[t].confD]; alldaydatamap["confD"].push(item3)
        var item4 = {}; item4.id = new Date( "2019-07-21 "+day1alldata[t].time); item4.volume = [day1alldata[t].escalator, day2alldata[t].escalator,day3alldata[t].escalator]; alldaydatamap["escalator"].push(item4)
        var item5 = {}; item5.id = new Date( "2019-07-21 "+day1alldata[t].time); item5.volume = [day1alldata[t].exhibition, day2alldata[t].exhibition,day3alldata[t].exhibition]; alldaydatamap["exhibition"].push(item5)
        var item6 = {}; item6.id = new Date( "2019-07-21 "+day1alldata[t].time); item6.volume = [day1alldata[t].firstAisle, day2alldata[t].firstAisle,day3alldata[t].firstAisle]; alldaydatamap["firstAisle"].push(item6)
        var item7 = {}; item7.id = new Date( "2019-07-21 "+day1alldata[t].time); item7.volume = [day1alldata[t].importExport, day2alldata[t].importExport,day3alldata[t].importExport]; alldaydatamap["importExport"].push(item7)
        var item8 = {}; item8.id = new Date( "2019-07-21 "+day1alldata[t].time); item8.volume = [day1alldata[t].poster, day2alldata[t].poster,day3alldata[t].poster]; alldaydatamap["poster"].push(item8)
        var item9 = {}; item9.id = new Date( "2019-07-21 "+day1alldata[t].time); item9.volume = [day1alldata[t].relaxRoom, day2alldata[t].relaxRoom,day3alldata[t].relaxRoom]; alldaydatamap["relaxRoom"].push(item9)
        var item10 = {}; item10.id = new Date( "2019-07-21 "+day1alldata[t].time); item10.volume = [day1alldata[t].restaurant, day2alldata[t].restaurant,day3alldata[t].restaurant]; alldaydatamap["restaurant"].push(item10)
        var item11 = {}; item11.id = new Date( "2019-07-21 "+day1alldata[t].time); item11.volume = [day1alldata[t].room1, day2alldata[t].room1,day3alldata[t].room1]; alldaydatamap["room1"].push(item11)
        var item12 = {}; item12.id = new Date( "2019-07-21 "+day1alldata[t].time); item12.volume = [day1alldata[t].room2, day2alldata[t].room2,day3alldata[t].room2]; alldaydatamap["room2"].push(item12)
        var item13 = {}; item13.id = new Date( "2019-07-21 "+day1alldata[t].time); item13.volume = [day1alldata[t].room3, day2alldata[t].room3,day3alldata[t].room3]; alldaydatamap["room3"].push(item13)
        var item14 = {}; item14.id = new Date( "2019-07-21 "+day1alldata[t].time); item14.volume = [day1alldata[t].room4, day2alldata[t].room4,day3alldata[t].room4]; alldaydatamap["room4"].push(item14)
        var item15 = {}; item15.id = new Date( "2019-07-21 "+day1alldata[t].time); item15.volume = [day1alldata[t].room5, day2alldata[t].room5,day3alldata[t].room5]; alldaydatamap["room5"].push(item15)
        var item16 = {}; item16.id = new Date( "2019-07-21 "+day1alldata[t].time); item16.volume = [day1alldata[t].room6, day2alldata[t].room6,day3alldata[t].room6]; alldaydatamap["room6"].push(item16)
        var item17 = {}; item17.id = new Date( "2019-07-21 "+day1alldata[t].time); item17.volume = [day1alldata[t].secondAisle, day2alldata[t].secondAisle,day3alldata[t].secondAisle]; alldaydatamap["secondAisle"].push(item17)
        var item18 = {}; item18.id = new Date( "2019-07-21 "+day1alldata[t].time); item18.volume = [day1alldata[t].serviceRoom, day2alldata[t].serviceRoom,day3alldata[t].serviceRoom]; alldaydatamap["serviceRoom"].push(item18)
        var item19 = {}; item19.id = new Date( "2019-07-21 "+day1alldata[t].time); item19.volume = [day1alldata[t].signDesk, day2alldata[t].signDesk,day3alldata[t].signDesk]; alldaydatamap["signDesk"].push(item19)
        var item20 = {}; item20.id = new Date( "2019-07-21 "+day1alldata[t].time); item20.volume = [day1alldata[t].wc1, day2alldata[t].wc1,day3alldata[t].wc1]; alldaydatamap["wc1"].push(item20)
        var item21 = {}; item21.id = new Date( "2019-07-21 "+day1alldata[t].time); item21.volume = [day1alldata[t].wc2, day2alldata[t].wc2,day3alldata[t].wc2]; alldaydatamap["wc2"].push(item21)
        var item22 = {}; item22.id = new Date( "2019-07-21 "+day1alldata[t].time); item22.volume = [day1alldata[t].wc3, day2alldata[t].wc3,day3alldata[t].wc3]; alldaydatamap["wc3"].push(item22)
        var item23 = {}; item23.id = new Date( "2019-07-21 "+day1alldata[t].time); item23.volume = [day1alldata[t].mainMeeting, day2alldata[t].mainMeeting,day3alldata[t].mainMeeting]; alldaydatamap["mainMeeting"].push(item23)
    }
    // console.log(alldaydatamap);

for(var ameetingname in alldaydatamap){
    var ameetingplayfire = alldaydatamap[ameetingname];
    var dataNest = new Array()
    for (var t = 0; t < ameetingplayfire.length; t++) {
        var item_out = {};
        var item_in={};
        var itrm_thirdday = {}
        item_in.date_entered = ameetingplayfire[t].id;
        item_in.volume = ameetingplayfire[t].volume[0];
        item_in.day = 1
        item_out.date_entered = ameetingplayfire[t].id;
        item_out.volume = ameetingplayfire[t].volume[1];
        item_out.day = 2
        itrm_thirdday.date_entered = ameetingplayfire[t].id;
        itrm_thirdday.volume = ameetingplayfire[t].volume[2];
        itrm_thirdday.day = 3
        dataNest.push(item_in);
        dataNest.push(item_out);
        dataNest.push(itrm_thirdday);
    }
    alldaydatamapforplayfire[ameetingname] = dataNest;
}
    playfair(alldaydatamapforplayfire["mainMeeting"],"#playfireformeeting","mainMeeting")

})

// var day1data = new Array();
// var day2data = new Array();
// var day3data = new Array();
// var alldata = new Array()
// var day1alldata = new Array();
// var day2alldata = new Array();
// var day3alldata = new Array();
// var dataNest = new Array()
// // d3.csv("data/meeetingnumcount/tenMinutesDay1PositionNomber.csv",function(error,data){
// //     for(var i = 0 ; i< data.length; i++){
// //         var item = {};
// //         item.time = data[i].time
// //         item.countnum = data[i].mainMeeting
// //         day1data.push(item)
// //     }
// //     d3.csv("data/meeetingnumcount/tenMinutesDay2PositionNomber.csv",function(error,datatemp2){
// //         for(var i = 0 ; i< datatemp2.length; i++){
// //             var item = {};
// //             item.time = datatemp2[i].time
// //             item.countnum = datatemp2[i].mainMeeting
// //             day2data.push(item)
// //         }
// //         d3.csv("data/meeetingnumcount/tenMinutesDay3PositionNomber.csv",function(error,datatemp3){
// //             for(var i = 0 ; i< datatemp3.length; i++){
// //                 var item = {};
// //                 item.time = datatemp3[i].time
// //                 item.countnum = datatemp3[i].mainMeeting
// //                 day3data.push(item)
// //             }
// //             for(var i = 0 ; i < day1data.length; i++){
// //                 var item = {}
// //                 item.id = new Date( "2019-07-21 " + day1data[i].time )
// //                 item.volume = [day1data[i].countnum, day2data[i].countnum,day3data[i].countnum]
// //                 alldata.push(item);
// //             }
// //             for (var t = 0; t < alldata.length; t++) {
// //                 var item_out = {};
// //                 var item_in={};
// //                 var itrm_thirdday = {}
// //                 item_in.date_entered = alldata[t].id;
// //                 item_in.volume = alldata[t].volume[0];
// //                 item_in.day = 1
// //                 item_out.date_entered = alldata[t].id;
// //                 item_out.volume = alldata[t].volume[1];
// //                 item_out.day = 2
// //                 itrm_thirdday.date_entered = alldata[t].id;
// //                 itrm_thirdday.volume = alldata[t].volume[2];
// //                 itrm_thirdday.day = 3
// //                 dataNest.push(item_in);
// //                 dataNest.push(item_out);
// //                 dataNest.push(itrm_thirdday);
// //             }
// //             playfair(dataNest,"#playfireformeeting")
// //         })
// //     })
// //
// // })


function playfair(dataNest,div_name,meetingname){
    d3.selectAll("#playfireformeetingsvg").remove()

    var margin = {top: 10, right: 20, bottom: 50, left: 40},
        width =  document.querySelector(div_name).clientWidth  - margin.left - margin.right,
        height = document.querySelector(div_name).clientHeight - 30  ;

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var xAxis=d3.axisBottom(x)
    var yAxis =d3.axisLeft(y)

    var linepolygonin = d3.area()
        .curve(d3.curveMonotoneX)
        .x(function(d) { return x(d.dtg); })
        .y(function(d) { return y(d["polygonin"]); })
    var lineStyle = d3.area()
        .curve(d3.curveMonotoneX)
        .x(function(d) { return x(d.dtg); })
        .y(function(d) { return y(d["Style"]); });
    var third = d3.area()
        .curve(d3.curveMonotoneX)
        .x(function(d) { return x(d.dtg); })
        .y(function(d) { return y(d["third"]); });

    var area = d3.area()
        .curve(d3.curveMonotoneX)
        .x(function(d) { return x(d.dtg); })
        .y1(function(d) { return y(d["polygonin"]); })

    var svg = d3.select(div_name).append("svg").attr("id","playfireformeetingsvg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    dataNest.forEach(function(d) {
        d.dtg = d.date_entered;
        d.volume = +d.volume;
        d.day = d.day+""
    })
    var data = d3.nest()
        .key(function(d) {return d.dtg;})
        .entries(dataNest);

    data.forEach(function(d) {
        d.dtg = d.values[0]['dtg'];
        d["polygonin"] = d.values[0]['volume'];
        d["Style"] = d.values[1]['volume'];
        d["third"] = d.values[2]['volume'];
    });

    x.domain(d3.extent(data, function(d) { return d.dtg; }));
    // y.domain([
    //     d3.min(data, function(d) {
    //         return Math.min(d["polygonin"], d["Style"], d["third"])}),
    //     d3.max(data, function(d) {
    //         return Math.max(d["polygonin"], d["Style"]), d["third"]})
    // ]);
    y.domain([
        d3.min(dataNest, function(d) {
            return d.volume}),
        d3.max(dataNest, function(d) {
            return d.volume})
    ])
    svg.datum(data);
    svg.append("clipPath")
        .attr("id", "clip-above")
        .append("path")
        .attr("d", area.y0(0));

    svg.append("clipPath")
        .attr("id", "clip-below")
        .append("path")
        .attr("d", area.y0(height));

    svg.append("path")
        .attr("class", "area below")
        .attr("clip-path", "url(#clip-above)")
        .attr("d", area.y0(function(d) { return y(d["Style"]); }));

    svg.append("path")
        .attr("class", "area above")
        .attr("clip-path", "url(#clip-below)")
        .attr("d", area.y0(function(d) { return y(d["Style"]); }));

    svg.append("path")
        .attr("class", "line")
        .style("stroke", "darkgreen")
        .attr("d", linepolygonin);

    svg.append("path")
        .attr("class", "line")
        .style("stroke", "red")
        .attr("d", lineStyle);

    svg.append("path")
        .attr("class", "line")
        .style("stroke", "yellow")
        .attr("d", third);

    // add the dots with tooltips
    svg.selectAll("dot")
        .data(dataNest)
        .enter().append("circle")
        .attr("r", function(d){
            let radius = 0;
            if(d.volume!=0){radius = 2;}
            return radius
        }).attr("fill","white").style("opacity","0.5")
        .attr("cx", function(d) {
            return x(d.dtg); })
        .attr("cy", function(d) { return y(d.volume); })
        .on("mouseover", function(d) {
               d3.select(this) .transition()
                .duration(250).style("r",5).style("opacity",1)
            svg.append("text") // polygonin Legend Text shadow
                .attr("x", x(d.dtg) + 10)
                .attr("y", y(d.volume)-15)
                .attr("dy", ".91em").attr("class", "timecounrtemp")
                .style("font-size", "15px")
                .attr("fill", "white")
                .text("第" + d.day + "天"    +
                    timeformat(d.dtg).split(" ")[1].substring(0,5) + "\n总人数" +d.volume );
        })
        .on("mouseout", function(d) {
            d3.select(this).transition()
                .duration(250).style("r",2).style("opacity",0.5)
            d3.selectAll(".timecounrtemp").remove()
        });

    var locale = d3.timeFormatLocale({
        dateTime: "%a %b %e %X %Y",
        date: "%Y/%-m/%-d",
        time: "%H:%M:%S",
        periods: ["上午", "下午"],
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    })

    svg.append("g")
        .attr("class", "playfirexaxis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis
            .tickFormat(locale.format("%H:%M")),function(){});

    svg.append("g")
        .attr("class", "playfireyaxis")
        .call(yAxis.ticks(5))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")

    // ******* Legend Block ********

    for(var i = 0; i<3 ; i++){
        svg.append("rect") // Style Legend Rectangle
            .attr("x", 865 )
            .attr("y", -5+i*16+18 )
            .attr("width", 30)
            .attr("height", 15)
            .attr("class", function(){
                if(i==0){return "area above"}
                else if(i==1){ return "area below"}
                else{return "area third"}
            });
        svg.append("text") // Style Legend Text shadow
            .attr("x", 880)
            .attr("y", -2+i*16+18 )
            .attr("dy", ".71em")
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .attr("class", "shadow")
            .text("第"+(i+1)+"天");
    }

    // svg.append("g")
    //     .attr("class", "playfireyaxis")
    //     .attr("transform", "translate(" + width+ ", 0)")     // console.log(d.dtg)
    //     .style("stroke-dasharray", ("1, 3"))
    //     .call(yAxis)
    //     .style("font-size", "5px")
    svg.append("text") // polygonin Legend Text shadow
        .attr("x", 850)
        .attr("y", margin.top-15)
        .attr("dy", ".91em").attr("id","playfiremeeingname").attr("class","playfiremeeingname " + meetingroomcolor[i].meetingroom)
        .style("font-size", "15px")
        .attr("fill", "white")
        .text(function(){
            for(var i in meetingroomcolor){
                if(meetingname == meetingroomcolor[i].meetingroom){
                    return meetingroomcolor[i].textname
                }
            }
        });

}
