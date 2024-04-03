var data = new Array();
var pixcel = 23;
for(var p = 0; p <16; p++) {
    var xcolum = new Array();
    for(var q = 0; q<30; q ++){
        xcolum.push(q*pixcel);
    }
    data[p] = xcolum;
}

var svgfloor1 = d3.select("#containerfloor1")
    .append("svg").attr("y", 100).attr("x",100).style("top",100)
    .attr("width", 1080).attr("height", 480)
    .attr("transform", "translate(-10,0)")
var svgfloor2 = d3.select("#containerfloor2")
    .append("svg").attr("y", 100).attr("x",100)
    .attr("width", 300).attr("height", 260)

var persondotdiv = d3.select("#div_persondot")
    .append("svg").attr("y", 100).attr("x",100)
    .attr("width", 945).attr("height", 440)
    .attr("fill","black").attr("opacity",0.5)

var floor1 = 1;
var floor2 = 2;

//二楼
//餐厅的rect//room5//休闲区//扶梯//厕所//room6//扶梯

// creatrectandtext(svgfloor1,4,33,5,8,"#A52A2A","restaurant",1/4,1/2);
// creatrectandtext(svgfloor1,12,33,5,2,"#008000","room5",1/4,1/4);
// creatrectandtext(svgfloor1,15,32,6,3,"#A0522D","休闲区",1/4,1/2);
// creatrectandtext(svgfloor1,3,42,2,1,"#1E90FF","扶梯1",1/4,1/4)
// creatrectandtext(svgfloor1,6,42,2,2,"#FF69B4","厕所3",1/5,1/4)
// creatrectandtext(svgfloor1,8,42,2,2,"#6B8E23","room6",0,1/4);
// creatrectandtext(svgfloor1,16,42,2,1,"#1E90FF","扶梯2",1/4,1/4)
//
// //一楼
// creatrectandtext(svgfloor1,4,2,5,2,"#F08080","分会场A",1/4,1/2);
// creatrectandtext(svgfloor1,6,2,5,2,"#FA8072","分会场B",1/4,1/2);
// creatrectandtext(svgfloor1,8,2,5,2,"#E9967A","分会场C",1/4,1/2);
// creatrectandtext(svgfloor1,10,2,5,2,"#FFA07A","分会场D",1/4,1/2);
// creatrectandtext(svgfloor1,14,3,4,2,"#FFFF00","签到处",1/4,1/2);
// creatrectandtext(svgfloor1,5,8,2,7,"#2F4F4F","海报区",0,1/2);
// creatrectandtext(svgfloor1,3,11,2,1,"#1E90FF","扶梯1",1/4,1/4)
// creatrectandtext(svgfloor1,16,11,2,1,"#1E90FF","扶梯2",1/4,1/4)
// creatrectandtext(svgfloor1,6,11,2,2,"#DB7093","厕所1",1/4,1/4)
// creatrectandtext(svgfloor1,8,11,2,4,"#ADFF2F","room1",0,1/2)
// creatrectandtext(svgfloor1,12,11,2,2,"#32CD32","room2",0,1/3)
// creatrectandtext(svgfloor1,4,16,4,10,"#778899","展厅",1/3,1/2)
// creatrectandtext(svgfloor1,4,20,10,10,"#CD5C5C","主会场",1/2,1/2)
//
// creatrectandtext(svgfloor1,16,20,2,2,"#FFD700","服务台",0,1/4)
// creatrectandtext(svgfloor1,16,22,4,2,"#00FA9A","room3",1/3,1/4)
// creatrectandtext(svgfloor1,16,26,2,2,"#2E8B57","room4",0,1/4)
// creatrectandtext(svgfloor1,16,28,2,2,"#FF1493","厕所2",0,1/4)
// var meetingroomcolor = [
//     {"meetingroom":"confA", "color":"#F08080",       "textname":"分会场A"},
//     {"meetingroom":"confB", "color":"#FA8072",       "textname":"分会场B"},
//     {"meetingroom":"confC", "color":"#E9967A",       "textname":"分会场C"},
//     {"meetingroom":"confD", "color":"#FFA07A",       "textname":"分会场D"},
//     {"meetingroom":"signDesk", "color":"#e1ffa8",    "textname":"签到处"},
//     {"meetingroom":"poster", "color":"#08137d",      "textname":"海报区"},
//     {"meetingroom":"wc1", "color":"#DB7093",         "textname":"厕所1"},
//     {"meetingroom":"wc2", "color":"#924973",         "textname":"厕所2"},
//     {"meetingroom":"wc3", "color":"#FF69B4",         "textname":"厕所3"},
//     {"meetingroom":"room1", "color":"#83a664",       "textname":"room1"},
//     {"meetingroom":"room2", "color":"#53b552",       "textname":"room2"},
//     {"meetingroom":"room3", "color":"#52a982",       "textname":"room3"},
//     {"meetingroom":"room4", "color":"#2E8B57",       "textname":"room4"},
//     {"meetingroom":"room5", "color":"#008000",       "textname":"room5"},
//     {"meetingroom":"room6", "color":"#6B8E23",       "textname":"room6"},
//     {"meetingroom":"exhibition", "color":"#778899",  "textname":"展厅"},
//     {"meetingroom":"mainMeeting", "color":"#CD5C5C", "textname":"主会场"},
//     {"meetingroom":"serviceRoom", "color":"#FFD700", "textname":"服务台"},
//     {"meetingroom":"restaurant", "color":"#A52A2A",   "textname":"餐厅"},
//     {"meetingroom":"relaxRoom", "color":"#A0522D",   "textname":"休闲区"},
//     {"meetingroom":"escalator", "color":"#1E90FF",    "textname":"扶梯"},
//     {"meetingroom":"importExport", "color":"#ffffff", "textname":"出入口"},
//     {"meetingroom":"secondAisle", "color":"#7c727a",  "textname":"2楼走廊"},
//     {"meetingroom":"firstAisle", "color":"#69615c",   "textname":"1楼走廊"}
// ]

creatrectandtext(svgfloor1,4,33,5,8,meetinglayoutcolor,  "restaurant", "restaurant", 1/4,1/2);
creatrectandtext(svgfloor1,12,33,5,2,meetinglayoutcolor, "room5",     "room5",     1/4,1/4);
creatrectandtext(svgfloor1,15,32,6,3,meetinglayoutcolor, "休闲区",    "relaxRoom", 1/3,1/3);
creatrectandtext(svgfloor1,3,42,2,1,meetinglayoutcolor,  "扶梯1",     "escalator", 1/20,1/4)
creatrectandtext(svgfloor1,6,42,2,2,meetinglayoutcolor,  "厕所3",     "wc3",       1/20,1/4)
creatrectandtext(svgfloor1,8,42,2,2,meetinglayoutcolor,  "room6",     "room6",     0,1/4);
creatrectandtext(svgfloor1,16,42,2,1,meetinglayoutcolor,  "扶梯2",    "escalator", 1/15,1/4)

//一楼
creatrectandtext(svgfloor1,4,2,5,2,meetinglayoutcolor,"分会场A",   "confA",      1/4,1/3);
creatrectandtext(svgfloor1,6,2,5,2,meetinglayoutcolor,"分会场B",   "confB",      1/4,1/3);
creatrectandtext(svgfloor1,8,2,5,2,meetinglayoutcolor,"分会场C",   "confC",      1/4,1/3);
creatrectandtext(svgfloor1,10,2,5,2,meetinglayoutcolor,"分会场D",  "confD",      1/4,1/3);
creatrectandtext(svgfloor1,14,3,4,2,meetinglayoutcolor,"签到处",   "signDesk",   1/4,1/3);
creatrectandtext(svgfloor1,5,8,2,7,meetinglayoutcolor,"海报区",    "poster",     0,1/2);
creatrectandtext(svgfloor1,3,11,2,1,meetinglayoutcolor,"扶梯1",    "escalator",  0,1/4)
creatrectandtext(svgfloor1,16,11,2,1,meetinglayoutcolor,"扶梯2",   "escalator",  1/15,1/4)
creatrectandtext(svgfloor1,6,11,2,2,meetinglayoutcolor,"厕所1",    "wc1",        1/15,1/4)
creatrectandtext(svgfloor1,8,11,2,4,meetinglayoutcolor,"room1",    "room1",      0,1/2)
creatrectandtext(svgfloor1,12,11,2,2,meetinglayoutcolor,"room2",   "room2",      0,1/3)
creatrectandtext(svgfloor1,4,16,4,10,meetinglayoutcolor,"展厅",    "exhibition", 1/3,1/2)
creatrectandtext(svgfloor1,4,20,10,10,meetinglayoutcolor,"主会场", "mainMeeting",1/3,1/2)

creatrectandtext(svgfloor1,16,20,2,2,meetinglayoutcolor,"服务台",  "serviceRoom", 0,1/4)
creatrectandtext(svgfloor1,16,22,4,2,meetinglayoutcolor,"room3",   "room3",       1/3,1/4)
creatrectandtext(svgfloor1,16,26,2,2,meetinglayoutcolor,"room4",   "room4",       0,1/4)
creatrectandtext(svgfloor1,16,28,2,2,meetinglayoutcolor,"厕所2",   "wc2",         0,1/4)



// (svgtemp,x,y,width,height,colorrect,classname,text)

for(var k = 0; k <16; k++){
    var y =( k+2)*pixcel;
    svgfloor1.selectAll("path").data(data[k]).enter().append("rect")
        .attr("y", y).attr("x",function(d){return d + pixcel*1;})
        .attr("width", pixcel).attr("height", pixcel)
        .attr("id",function(d,i){//对应的是svg的x,y坐标
            return "center,"+( i+1.5 )*pixcel+","+ ( k + 2.5 ) * pixcel
        })
        .attr("class",function(d,i){            //RectSensoridfloor11218指第一层坐标为（12，18）的传感器
            return "layoutrect RectSensoridfloor"+floor1+translatedigital(k)+translatedigital(i)})
        .attr("fill", meetinglayoutcolor).attr("stroke", "black").style("stroke-width", 1)
        .style("opacity", 0.1)
        .on("click",function(d){
            // d3.selectAll(".persontrack").remove();
            // d3.selectAll(".personidtracktexttime").remove();
            // d3.selectAll(".personidtrackdot").remove();
            // var personinasensor = new Array();
            // for(var item in originedataallpersonsdata){
            //     if("layoutrect "+originedataallpersonsdata[item].sensorname == d3.event.path[0].className.baseVal){
            //         personinasensor.push(originedataallpersonsdata[item].id)
            //     }
            // }
            // personinasensor.forEach(function(d,i){
            //     d3.select("#personid"+d).attr("r",personiddotoselectedr)
            //         .style("opacity", 0.7).style("fill", persondotdefaultcolor)
            //     personidtrack(d,trackcolor[12][i])
            //     d3.select("#personid"+d).attr("r",personiddotoselectedr).style("opacity", 1).style("fill", "red")
            //
            // })
            // for(var id = 0; id<personinasensor.length; id++){
            //     d3.select("#personid"+personinasensor[id]).attr("r",personiddotoselectedr)
            //         .style("opacity", 0.7).style("fill", persondotdefaultcolor)
            // }
            //
            // for(var id = 0; id<personinasensor.length; id++){
            //     personidtrack(personinasensor[id],trackcolor[12][id])
            //     d3.select("#personid"+personinasensor[id]).attr("r",personiddotoselectedr).style("opacity", 1).style("fill", "red")
            // }
            let sid = this.getAttribute("class").split(" ")[1].substring(17,22);
            var meetingroomname = sensoridreturntomeeting(sid);console.log(sensoridreturntomeeting(sid))
            var nowplayfiremeetingname = document.getElementById("playfiremeeingname").getAttribute("class");
            if(meetingroomname!=nowplayfiremeetingname[1]&&meetingroomname != ""){
                playfair(alldaydatamapforplayfire[meetingroomname],"#playfireformeeting",meetingroomname)
            }
        })

    //第二层仅显示活动区域
    let xcolum = new Array();
    for(var q = 0; q<14; q ++){
        xcolum.push(q*pixcel);
    }

    svgfloor1.selectAll("path").data(xcolum).enter().append("rect")
        .attr("y", y ).attr("x",function(d){return d + pixcel*32;})
        .attr("width", pixcel).attr("height", pixcel)
        .attr("class",function(d,i){
            return "layoutrect RectSensoridfloor"+floor2+translatedigital(k)+translatedigital(i)
        })
        .attr("fill", meetinglayoutcolor).attr("stroke", "black")
        .style("stroke-width", 1).style("opacity",0.1)
        .attr("id",function(d,i){//对应的是会场的x,y坐标
            var centery = (i+1.5+31)*pixcel;
            return "center,"+centery+","+ (k+2.5)*pixcel
        })
        .on("click",function(d){
            // d3.selectAll(".persontrack").remove();
            // d3.selectAll(".personidtracktexttime").remove();
            // d3.selectAll(".personidtrackdot").remove();
            // var personinasensor = new Array();
            // for(var item in originedataallpersonsdata){
            //     if("layoutrect "+originedataallpersonsdata[item].sensorname == d3.event.path[0].className.baseVal){
            //         personinasensor.push(originedataallpersonsdata[item].id)
            //     }
            // }
            // personinasensor.forEach(function(d,i){
            //     d3.select("#personid"+d).attr("r",personiddotoselectedr)
            //         .style("opacity", 0.7).style("fill", persondotdefaultcolor)
            //     personidtrack(d,trackcolor[12][i])
            //     d3.select("#personid"+d).attr("r",personiddotoselectedr).style("opacity", 1).style("fill", "red")
            //
            // })
            // for(var id = 0; id<personinasensor.length; id++){
            //     d3.select("#personid"+personinasensor[id]).attr("r",personiddotoselectedr)
            //         .style("opacity", 0.7).style("fill", persondotdefaultcolor)
            // }
            //
            // for(var id = 0; id<personinasensor.length; id++){
            //     personidtrack(personinasensor[id],trackcolor[12][id])
            //     d3.select("#personid"+personinasensor[id]).attr("r",personiddotoselectedr).style("opacity", 1).style("fill", "red")
            // }
            let sid = this.getAttribute("class").split(" ")[1].substring(17,22);
            var meetingroomname = sensoridreturntomeeting(sid);console.log(sensoridreturntomeeting(sid))
            var nowplayfiremeetingname = document.getElementById("playfiremeeingname").getAttribute("class");
            if(meetingroomname!=nowplayfiremeetingname[1]&&meetingroomname != ""){
                playfair(alldaydatamapforplayfire[meetingroomname],"#playfireformeeting",meetingroomname)
            }

        })


//添加8个虚拟的框框用于扶梯上的轨迹跨越
    function virtualrect(x,y,sort){
        svgfloor1.append("rect").style("opacity", 0.02)
            .attr("y", y*pixcel ).attr("x", x*pixcel)
            .attr("width", pixcel).attr("height", pixcel)
            .attr("class",function(d,i){
                return "layoutrectvirtual virtualrect"+ sort
            })
            .attr("fill", "white").attr("stroke", "black")
            .style("stroke-width", 1).style("stroke-dasharray", "4")
            .attr("id",function(d,i){//对应的是会场的x,y坐标
                return "center," + (x+0.5)*pixcel +","+ (y + 0.5) * pixcel
            })
    }
//一楼的虚拟扶梯
    virtualrect(11,0,10110)
    virtualrect(12,1,10111)
    virtualrect(11,19,11410)
    virtualrect(12,18,11411)
//二楼的虚拟扶梯
    virtualrect(42,1,20110)
    virtualrect(43,0,20111)
    virtualrect(42,18,21410)
    virtualrect(43,19,21411)


}


