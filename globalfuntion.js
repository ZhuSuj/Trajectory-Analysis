var personiddotoriginer = 3
var personiddotoselectedr = 5
var timeformat = d3.timeFormat("%Y-%m-%d %H:%M:%S");

//颜色
var trackcolor1 = {
    3: ["#a6cee3","#1f78b4","#b2df8a"],
    4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
    5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
    6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
    7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
    8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
    9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
    10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
    11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
    12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],
    24: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928",
        "#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]

}
var trackcolor = ["#ababab","#958a7a","#00e318","#1f78b4","#b2df8a","#33a02c","#fb9a99","#fdbf6f",
    "#ff7f00","#cab2d6","#6a3d9a","#b15928",
    "#a6cee3","#1f78b4","#b2df8a","#e31a1c","#33a02c","#fb9a99",
    "#fdbf6f","#ff7f00","#e31a1c","#6a3d9a","#b15928","#cab2d6"
]
var track3daycolor = [
    "#ff2500",
    "#09ff13",
    "#1b25ff"]

var clustersresult

for(var i = 0 ; i<6000; i++){
    trackcolor.push(i)
}

function colorlegend_selectcolor(maxvalue){
    maxvalue=Math.sqrt(maxvalue);
    var colorSelfDefine = d3.scaleLinear()
        .domain([0,maxvalue*1/10, maxvalue*2/10,maxvalue*3/10,maxvalue*4/10,maxvalue*5/10,maxvalue*6/10,maxvalue*7/10,maxvalue*8/10,maxvalue*9/10,maxvalue
        ])
        .interpolate(d3.interpolateHcl)
        .range(["#faf8f6","#fecc5c","#fd8d3c","#f03b20","#bd0026","#DB7093","#FFFF00","#2F4F4F","#00FFFF","#0000FF"]);
    // .range(["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"]);
    //     .range( ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"]);
    return colorSelfDefine;
}

//bar的颜色
var meetingroomcolor = [

    {"meetingroom":"firstAisle", "color":"#ababab",   "textname":"1楼走廊"},
    {"meetingroom":"secondAisle", "color":"#958a7a",  "textname":"2楼走廊"},
    {"meetingroom":"importExport", "color":"#ffffff", "textname":"出入口"},
    {"meetingroom":"mainMeeting", "color":"#1f78b4", "textname":"主会场"},
    {"meetingroom":"confA", "color":"#b2df8a",       "textname":"分会场A"},
    {"meetingroom":"confB", "color":"#33a02c",       "textname":"分会场B"},
    {"meetingroom":"confC", "color":"#fb9a99",       "textname":"分会场C"},
    {"meetingroom":"confD", "color":"#fdbf6f",       "textname":"分会场D"},
    {"meetingroom":"escalator", "color":"#ff7f00",    "textname":"扶梯"},
    {"meetingroom":"exhibition", "color":"#cab2d6",  "textname":"展厅"},
    {"meetingroom":"poster", "color":"#6a3d9a",      "textname":"海报区"},
    {"meetingroom":"relaxRoom", "color":"#b15928",   "textname":"休闲区"},
    {"meetingroom":"restaurant", "color":"#a6cee3",   "textname":"餐厅"},
    {"meetingroom":"room1", "color":"#1f78b4",       "textname":"room1"},
    {"meetingroom":"room2", "color":"#b2df8a",       "textname":"room2"},
    {"meetingroom":"room3", "color":"#e31a1c",       "textname":"room3"},
    {"meetingroom":"room4", "color":"#33a02c",       "textname":"room4"},
    {"meetingroom":"room5", "color":"#fb9a99",       "textname":"room5"},
    {"meetingroom":"room6", "color":"#fdbf6f",       "textname":"room6"},
    {"meetingroom":"serviceRoom", "color":"#ff7f00", "textname":"服务台"},
    {"meetingroom":"signDesk", "color":"#e31a1c",    "textname":"签到处"},
    {"meetingroom":"wc1", "color":"#6a3d9a",         "textname":"厕所1"},
    {"meetingroom":"wc2", "color":"#b15928",         "textname":"厕所2"},
    {"meetingroom":"wc3", "color":"#cab2d6",         "textname":"厕所3"},










]
var meetingroom = new Map;
meetingroomcolor.forEach(function(d,i){
    meetingroom[d.meetingroom] = trackcolor[i]
})

//场馆底图颜色
var meetinglayoutcolor = "#7c727a"

var persondotdefaultcolor = "blue";

//迭代方式实现
function translatedigital(i){
    if(i<=9){
        return "0"+i;
    }else return i;
}
//分别为svg x,y 坐标，宽高，rect填充颜色，以及classname
function creatrectandtext(svgtemp,y,x,width,height,colorrect,classname,idname,textpositionx,textpositiony){
    svgtemp.append("rect").attr("y", pixcel*y).attr("x",pixcel*x).attr("width", pixcel*width)
        .attr("height", pixcel*height).attr("id", "room" + idname )
        .attr("class","mergedrect").attr("fill", colorrect)
        .attr("stroke", "black").style("stroke-width", 1.5).style("opacity", 0.1)

    svgtemp.append("text").text(classname).attr("y",pixcel*y+ pixcel*height*textpositiony)
        .attr("x", pixcel*x+pixcel*width*textpositionx)
        .style("font-size", 13).style("alignment-baseline", "hanging").style("fill", "#b2c2b9")
        .attr("class","mergedrecttext")
}

function comparedown(property){
    return function(obj1,obj2){
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value2 - value1
            ;     // 降序
    }
}
function compareup(property){
    return function(obj1,obj2){
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 - value2
            ;     // 升序
    }
}
//timestart是初始时间，data是初始时间加上的秒数
function inputdigitaltimeformatout (timestart,data){
    let dateformat = d3.timeFormat("%Y-%m-%d %H:%M")
    let timestarttemp = new Date(timestart);
    timestarttemp.setTime(timestarttemp.getTime()+ parseInt(data)*1000 );
    return dateformat(timestarttemp)
}
function getdayvalue (timevalue){
    var dayvalue = 1
    if(timevalue<86400){}
    else if(timevalue>172800){dayvalue = 3}
    else{ dayvalue = 2  }
    return dayvalue;
}


var x_scale = d3.scaleLinear().domain([0,1500]).range([0,1500]);
var y_scale = d3.scaleLinear().domain([0,33*50]).range([0,33*50]);

//drage
var drag_behavior = d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged);
function dragstarted() {
    d3.select(this).raise();
}
function dragged(shape) {
    var dx = d3.event.sourceEvent.offsetX,
        dy = d3.event.sourceEvent.offsetY;
    d3.select(this)
        .attr("transform",  "translate(" + dx + "," + dy + ")");
}

function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}

//所有场馆
var meetingrooms= ["confA", "confB" , "confC" , "confD" , "escalator","signDesk" , "poster" ,
    "wc1","wc2", "wc3" , "room1" , "room2" , "room3" , "room4" , "room5" ,
    "room6" , "exhibition" , "mainMeeting" , "serviceRoom","restaurant" , "relaxRoom" ,
    "escalator" , "importExport" , "secondAisle" , "firstAisle" ]
//sensorid对应的场馆
var sensoridbelongtomeeting = [  {"sensorid": "10201", "belongmeeting": "confA"},
    {"sensorid": "10202", "belongmeeting": "confA"},
    {"sensorid": "10203", "belongmeeting": "confA"},
    {"sensorid": "10204", "belongmeeting": "confA"},
    {"sensorid": "10205", "belongmeeting": "confA"},
    {"sensorid": "10301", "belongmeeting": "confA"},
    {"sensorid": "10302", "belongmeeting": "confA"},
    {"sensorid": "10303", "belongmeeting": "confA"},
    {"sensorid": "10304", "belongmeeting": "confA"},
    {"sensorid": "10305", "belongmeeting": "confA"},
    {"sensorid": "10401", "belongmeeting": "confB"},
    {"sensorid": "10402", "belongmeeting": "confB"},
    {"sensorid": "10403", "belongmeeting": "confB"},
    {"sensorid": "10404", "belongmeeting": "confB"},
    {"sensorid": "10405", "belongmeeting": "confB"},
    {"sensorid": "10501", "belongmeeting": "confB"},
    {"sensorid": "10502", "belongmeeting": "confB"},
    {"sensorid": "10503", "belongmeeting": "confB"},
    {"sensorid": "10504", "belongmeeting": "confB"},
    {"sensorid": "10505", "belongmeeting": "confB"},
    {"sensorid": "10601", "belongmeeting": "confC"},
    {"sensorid": "10602", "belongmeeting": "confC"},
    {"sensorid": "10603", "belongmeeting": "confC"},
    {"sensorid": "10604", "belongmeeting": "confC"},
    {"sensorid": "10605", "belongmeeting": "confC"},
    {"sensorid": "10701", "belongmeeting": "confC"},
    {"sensorid": "10702", "belongmeeting": "confC"},
    {"sensorid": "10703", "belongmeeting": "confC"},
    {"sensorid": "10704", "belongmeeting": "confC"},
    {"sensorid": "10705", "belongmeeting": "confC"},
    {"sensorid": "10801", "belongmeeting": "confD"},
    {"sensorid": "10802", "belongmeeting": "confD"},
    {"sensorid": "10803", "belongmeeting": "confD"},
    {"sensorid": "10804", "belongmeeting": "confD"},
    {"sensorid": "10805", "belongmeeting": "confD"},
    {"sensorid": "10901", "belongmeeting": "confD"},
    {"sensorid": "10902", "belongmeeting": "confD"},
    {"sensorid": "10903", "belongmeeting": "confD"},
    {"sensorid": "10904", "belongmeeting": "confD"},
    {"sensorid": "10905", "belongmeeting": "confD"},
    {"sensorid": "11202", "belongmeeting": "signDesk"},
    {"sensorid": "11203", "belongmeeting": "signDesk"},
    {"sensorid": "11204", "belongmeeting": "signDesk"},
    {"sensorid": "11205", "belongmeeting": "signDesk"},
    {"sensorid": "11302", "belongmeeting": "signDesk"},
    {"sensorid": "11303", "belongmeeting": "signDesk"},
    {"sensorid": "11304", "belongmeeting": "signDesk"},
    {"sensorid": "11305", "belongmeeting": "signDesk"},
    {"sensorid": "10307", "belongmeeting": "poster"},
    {"sensorid": "10407", "belongmeeting": "poster"},
    {"sensorid": "10507", "belongmeeting": "poster"},
    {"sensorid": "10607", "belongmeeting": "poster"},
    {"sensorid": "10707", "belongmeeting": "poster"},
    {"sensorid": "10807", "belongmeeting": "poster"},
    {"sensorid": "10907", "belongmeeting": "poster"},
    {"sensorid": "10308", "belongmeeting": "poster"},
    {"sensorid": "10408", "belongmeeting": "poster"},
    {"sensorid": "10508", "belongmeeting": "poster"},
    {"sensorid": "10608", "belongmeeting": "poster"},
    {"sensorid": "10708", "belongmeeting": "poster"},
    {"sensorid": "10808", "belongmeeting": "poster"},
    {"sensorid": "10908", "belongmeeting": "poster"},
    {"sensorid": "10410", "belongmeeting": "wc1"},
    {"sensorid": "10411", "belongmeeting": "wc1"},
    {"sensorid": "10510", "belongmeeting": "wc1"},
    {"sensorid": "10511", "belongmeeting": "wc1"},
    {"sensorid": "11427", "belongmeeting": "wc2"},
    {"sensorid": "11428", "belongmeeting": "wc2"},
    {"sensorid": "11527", "belongmeeting": "wc2"},
    {"sensorid": "11528", "belongmeeting": "wc2"},
    {"sensorid": "20410", "belongmeeting": "wc3"},
    {"sensorid": "20411", "belongmeeting": "wc3"},
    {"sensorid": "20510", "belongmeeting": "wc3"},
    {"sensorid": "20511", "belongmeeting": "wc3"},
    {"sensorid": "10610", "belongmeeting": "room1"},
    {"sensorid": "10710", "belongmeeting": "room1"},
    {"sensorid": "10810", "belongmeeting": "room1"},
    {"sensorid": "10910", "belongmeeting": "room1"},
    {"sensorid": "10611", "belongmeeting": "room1"},
    {"sensorid": "10711", "belongmeeting": "room1"},
    {"sensorid": "10811", "belongmeeting": "room1"},
    {"sensorid": "10911", "belongmeeting": "room1"},
    {"sensorid": "11010", "belongmeeting": "room2"},
    {"sensorid": "11011", "belongmeeting": "room2"},
    {"sensorid": "11110", "belongmeeting": "room2"},
    {"sensorid": "11111", "belongmeeting": "room2"},
    {"sensorid": "11421", "belongmeeting": "room3"},
    {"sensorid": "11422", "belongmeeting": "room3"},
    {"sensorid": "11423", "belongmeeting": "room3"},
    {"sensorid": "11424", "belongmeeting": "room3"},
    {"sensorid": "11521", "belongmeeting": "room3"},
    {"sensorid": "11522", "belongmeeting": "room3"},
    {"sensorid": "11523", "belongmeeting": "room3"},
    {"sensorid": "11524", "belongmeeting": "room3"},
    {"sensorid": "11425", "belongmeeting": "room4"},
    {"sensorid": "11426", "belongmeeting": "room4"},
    {"sensorid": "11525", "belongmeeting": "room4"},
    {"sensorid": "11526", "belongmeeting": "room4"},
    {"sensorid": "21001", "belongmeeting": "room5"},
    {"sensorid": "21002", "belongmeeting": "room5"},
    {"sensorid": "21003", "belongmeeting": "room5"},
    {"sensorid": "21004", "belongmeeting": "room5"},
    {"sensorid": "21005", "belongmeeting": "room5"},
    {"sensorid": "21101", "belongmeeting": "room5"},
    {"sensorid": "21102", "belongmeeting": "room5"},
    {"sensorid": "21103", "belongmeeting": "room5"},
    {"sensorid": "21104", "belongmeeting": "room5"},
    {"sensorid": "21105", "belongmeeting": "room5"},
    {"sensorid": "20610", "belongmeeting": "room6"},
    {"sensorid": "20611", "belongmeeting": "room6"},
    {"sensorid": "20710", "belongmeeting": "room6"},
    {"sensorid": "20711", "belongmeeting": "room6"},
    {"sensorid": "10215", "belongmeeting": "exhibition"},
    {"sensorid": "10315", "belongmeeting": "exhibition"},
    {"sensorid": "10415", "belongmeeting": "exhibition"},
    {"sensorid": "10515", "belongmeeting": "exhibition"},
    {"sensorid": "10615", "belongmeeting": "exhibition"},
    {"sensorid": "10715", "belongmeeting": "exhibition"},
    {"sensorid": "10815", "belongmeeting": "exhibition"},
    {"sensorid": "10915", "belongmeeting": "exhibition"},
    {"sensorid": "11015", "belongmeeting": "exhibition"},
    {"sensorid": "11115", "belongmeeting": "exhibition"},
    {"sensorid": "10216", "belongmeeting": "exhibition"},
    {"sensorid": "10316", "belongmeeting": "exhibition"},
    {"sensorid": "10416", "belongmeeting": "exhibition"},
    {"sensorid": "10516", "belongmeeting": "exhibition"},
    {"sensorid": "10616", "belongmeeting": "exhibition"},
    {"sensorid": "10716", "belongmeeting": "exhibition"},
    {"sensorid": "10816", "belongmeeting": "exhibition"},
    {"sensorid": "10916", "belongmeeting": "exhibition"},
    {"sensorid": "11016", "belongmeeting": "exhibition"},
    {"sensorid": "11116", "belongmeeting": "exhibition"},
    {"sensorid": "10217", "belongmeeting": "exhibition"},
    {"sensorid": "10317", "belongmeeting": "exhibition"},
    {"sensorid": "10417", "belongmeeting": "exhibition"},
    {"sensorid": "10517", "belongmeeting": "exhibition"},
    {"sensorid": "10617", "belongmeeting": "exhibition"},
    {"sensorid": "10717", "belongmeeting": "exhibition"},
    {"sensorid": "10817", "belongmeeting": "exhibition"},
    {"sensorid": "10917", "belongmeeting": "exhibition"},
    {"sensorid": "11017", "belongmeeting": "exhibition"},
    {"sensorid": "11117", "belongmeeting": "exhibition"},
    {"sensorid": "10218", "belongmeeting": "exhibition"},
    {"sensorid": "10318", "belongmeeting": "exhibition"},
    {"sensorid": "10418", "belongmeeting": "exhibition"},
    {"sensorid": "10518", "belongmeeting": "exhibition"},
    {"sensorid": "10618", "belongmeeting": "exhibition"},
    {"sensorid": "10718", "belongmeeting": "exhibition"},
    {"sensorid": "10818", "belongmeeting": "exhibition"},
    {"sensorid": "10918", "belongmeeting": "exhibition"},
    {"sensorid": "11018", "belongmeeting": "exhibition"},
    {"sensorid": "11118", "belongmeeting": "exhibition"},
    {"sensorid": "10219", "belongmeeting": "mainMeeting"},
    {"sensorid": "10319", "belongmeeting": "mainMeeting"},
    {"sensorid": "10419", "belongmeeting": "mainMeeting"},
    {"sensorid": "10519", "belongmeeting": "mainMeeting"},
    {"sensorid": "10619", "belongmeeting": "mainMeeting"},
    {"sensorid": "10719", "belongmeeting": "mainMeeting"},
    {"sensorid": "10819", "belongmeeting": "mainMeeting"},
    {"sensorid": "10919", "belongmeeting": "mainMeeting"},
    {"sensorid": "11019", "belongmeeting": "mainMeeting"},
    {"sensorid": "11119", "belongmeeting": "mainMeeting"},
    {"sensorid": "10220", "belongmeeting": "mainMeeting"},
    {"sensorid": "10320", "belongmeeting": "mainMeeting"},
    {"sensorid": "10420", "belongmeeting": "mainMeeting"},
    {"sensorid": "10520", "belongmeeting": "mainMeeting"},
    {"sensorid": "10620", "belongmeeting": "mainMeeting"},
    {"sensorid": "10720", "belongmeeting": "mainMeeting"},
    {"sensorid": "10820", "belongmeeting": "mainMeeting"},
    {"sensorid": "10920", "belongmeeting": "mainMeeting"},
    {"sensorid": "11020", "belongmeeting": "mainMeeting"},
    {"sensorid": "11120", "belongmeeting": "mainMeeting"},
    {"sensorid": "10221", "belongmeeting": "mainMeeting"},
    {"sensorid": "10321", "belongmeeting": "mainMeeting"},
    {"sensorid": "10421", "belongmeeting": "mainMeeting"},
    {"sensorid": "10521", "belongmeeting": "mainMeeting"},
    {"sensorid": "10621", "belongmeeting": "mainMeeting"},
    {"sensorid": "10721", "belongmeeting": "mainMeeting"},
    {"sensorid": "10821", "belongmeeting": "mainMeeting"},
    {"sensorid": "10921", "belongmeeting": "mainMeeting"},
    {"sensorid": "11021", "belongmeeting": "mainMeeting"},
    {"sensorid": "11121", "belongmeeting": "mainMeeting"},
    {"sensorid": "10222", "belongmeeting": "mainMeeting"},
    {"sensorid": "10322", "belongmeeting": "mainMeeting"},
    {"sensorid": "10422", "belongmeeting": "mainMeeting"},
    {"sensorid": "10522", "belongmeeting": "mainMeeting"},
    {"sensorid": "10622", "belongmeeting": "mainMeeting"},
    {"sensorid": "10722", "belongmeeting": "mainMeeting"},
    {"sensorid": "10822", "belongmeeting": "mainMeeting"},
    {"sensorid": "10922", "belongmeeting": "mainMeeting"},
    {"sensorid": "11022", "belongmeeting": "mainMeeting"},
    {"sensorid": "11122", "belongmeeting": "mainMeeting"},
    {"sensorid": "10223", "belongmeeting": "mainMeeting"},
    {"sensorid": "10323", "belongmeeting": "mainMeeting"},
    {"sensorid": "10423", "belongmeeting": "mainMeeting"},
    {"sensorid": "10523", "belongmeeting": "mainMeeting"},
    {"sensorid": "10623", "belongmeeting": "mainMeeting"},
    {"sensorid": "10723", "belongmeeting": "mainMeeting"},
    {"sensorid": "10823", "belongmeeting": "mainMeeting"},
    {"sensorid": "10923", "belongmeeting": "mainMeeting"},
    {"sensorid": "11023", "belongmeeting": "mainMeeting"},
    {"sensorid": "11123", "belongmeeting": "mainMeeting"},
    {"sensorid": "10224", "belongmeeting": "mainMeeting"},
    {"sensorid": "10324", "belongmeeting": "mainMeeting"},
    {"sensorid": "10424", "belongmeeting": "mainMeeting"},
    {"sensorid": "10524", "belongmeeting": "mainMeeting"},
    {"sensorid": "10624", "belongmeeting": "mainMeeting"},
    {"sensorid": "10724", "belongmeeting": "mainMeeting"},
    {"sensorid": "10824", "belongmeeting": "mainMeeting"},
    {"sensorid": "10924", "belongmeeting": "mainMeeting"},
    {"sensorid": "11024", "belongmeeting": "mainMeeting"},
    {"sensorid": "11124", "belongmeeting": "mainMeeting"},
    {"sensorid": "10325", "belongmeeting": "mainMeeting"},
    {"sensorid": "10425", "belongmeeting": "mainMeeting"},
    {"sensorid": "10525", "belongmeeting": "mainMeeting"},
    {"sensorid": "10625", "belongmeeting": "mainMeeting"},
    {"sensorid": "10725", "belongmeeting": "mainMeeting"},
    {"sensorid": "10825", "belongmeeting": "mainMeeting"},
    {"sensorid": "10925", "belongmeeting": "mainMeeting"},
    {"sensorid": "11025", "belongmeeting": "mainMeeting"},
    {"sensorid": "11125", "belongmeeting": "mainMeeting"},
    {"sensorid": "10326", "belongmeeting": "mainMeeting"},
    {"sensorid": "10426", "belongmeeting": "mainMeeting"},
    {"sensorid": "10526", "belongmeeting": "mainMeeting"},
    {"sensorid": "10626", "belongmeeting": "mainMeeting"},
    {"sensorid": "10726", "belongmeeting": "mainMeeting"},
    {"sensorid": "10826", "belongmeeting": "mainMeeting"},
    {"sensorid": "10926", "belongmeeting": "mainMeeting"},
    {"sensorid": "11026", "belongmeeting": "mainMeeting"},
    {"sensorid": "11126", "belongmeeting": "mainMeeting"},
    {"sensorid": "10327", "belongmeeting": "mainMeeting"},
    {"sensorid": "10427", "belongmeeting": "mainMeeting"},
    {"sensorid": "10527", "belongmeeting": "mainMeeting"},
    {"sensorid": "10627", "belongmeeting": "mainMeeting"},
    {"sensorid": "10727", "belongmeeting": "mainMeeting"},
    {"sensorid": "10827", "belongmeeting": "mainMeeting"},
    {"sensorid": "10927", "belongmeeting": "mainMeeting"},
    {"sensorid": "11027", "belongmeeting": "mainMeeting"},
    {"sensorid": "11127", "belongmeeting": "mainMeeting"},
    {"sensorid": "11419", "belongmeeting": "serviceRoom"},
    {"sensorid": "11420", "belongmeeting": "serviceRoom"},
    {"sensorid": "11519", "belongmeeting": "serviceRoom"},
    {"sensorid": "11520", "belongmeeting": "serviceRoom"},
    {"sensorid": "20202", "belongmeeting": "restaurant"},
    {"sensorid": "20302", "belongmeeting": "restaurant"},
    {"sensorid": "20402", "belongmeeting": "restaurant"},
    {"sensorid": "20502", "belongmeeting": "restaurant"},
    {"sensorid": "20602", "belongmeeting": "restaurant"},
    {"sensorid": "20702", "belongmeeting": "restaurant"},
    {"sensorid": "20802", "belongmeeting": "restaurant"},
    {"sensorid": "20902", "belongmeeting": "restaurant"},
    {"sensorid": "20203", "belongmeeting": "restaurant"},
    {"sensorid": "20303", "belongmeeting": "restaurant"},
    {"sensorid": "20403", "belongmeeting": "restaurant"},
    {"sensorid": "20503", "belongmeeting": "restaurant"},
    {"sensorid": "20603", "belongmeeting": "restaurant"},
    {"sensorid": "20703", "belongmeeting": "restaurant"},
    {"sensorid": "20803", "belongmeeting": "restaurant"},
    {"sensorid": "20903", "belongmeeting": "restaurant"},
    {"sensorid": "20204", "belongmeeting": "restaurant"},
    {"sensorid": "20304", "belongmeeting": "restaurant"},
    {"sensorid": "20404", "belongmeeting": "restaurant"},
    {"sensorid": "20504", "belongmeeting": "restaurant"},
    {"sensorid": "20604", "belongmeeting": "restaurant"},
    {"sensorid": "20704", "belongmeeting": "restaurant"},
    {"sensorid": "20804", "belongmeeting": "restaurant"},
    {"sensorid": "20904", "belongmeeting": "restaurant"},
    {"sensorid": "20205", "belongmeeting": "restaurant"},
    {"sensorid": "20305", "belongmeeting": "restaurant"},
    {"sensorid": "20405", "belongmeeting": "restaurant"},
    {"sensorid": "20505", "belongmeeting": "restaurant"},
    {"sensorid": "20605", "belongmeeting": "restaurant"},
    {"sensorid": "20705", "belongmeeting": "restaurant"},
    {"sensorid": "20805", "belongmeeting": "restaurant"},
    {"sensorid": "20905", "belongmeeting": "restaurant"},
    {"sensorid": "21300", "belongmeeting": "relaxRoom"},
    {"sensorid": "21301", "belongmeeting": "relaxRoom"},
    {"sensorid": "21302", "belongmeeting": "relaxRoom"},
    {"sensorid": "21303", "belongmeeting": "relaxRoom"},
    {"sensorid": "21304", "belongmeeting": "relaxRoom"},
    {"sensorid": "21305", "belongmeeting": "relaxRoom"},
    {"sensorid": "21400", "belongmeeting": "relaxRoom"},
    {"sensorid": "21401", "belongmeeting": "relaxRoom"},
    {"sensorid": "21402", "belongmeeting": "relaxRoom"},
    {"sensorid": "21403", "belongmeeting": "relaxRoom"},
    {"sensorid": "21404", "belongmeeting": "relaxRoom"},
    {"sensorid": "21405", "belongmeeting": "relaxRoom"},
    {"sensorid": "21500", "belongmeeting": "relaxRoom"},
    {"sensorid": "21501", "belongmeeting": "relaxRoom"},
    {"sensorid": "21502", "belongmeeting": "relaxRoom"},
    {"sensorid": "21503", "belongmeeting": "relaxRoom"},
    {"sensorid": "21504", "belongmeeting": "relaxRoom"},
    {"sensorid": "21505", "belongmeeting": "relaxRoom"},
    {"sensorid": "10110", "belongmeeting": "escalator"},
    {"sensorid": "10111", "belongmeeting": "escalator"},
    {"sensorid": "11410", "belongmeeting": "escalator"},
    {"sensorid": "11411", "belongmeeting": "escalator"},
    {"sensorid": "20110", "belongmeeting": "escalator"},
    {"sensorid": "20111", "belongmeeting": "escalator"},
    {"sensorid": "21410", "belongmeeting": "escalator"},
    {"sensorid": "21411", "belongmeeting": "escalator"},
    {"sensorid": "11300", "belongmeeting": "importExport"},
    {"sensorid": "11502", "belongmeeting": "importExport"},
    {"sensorid": "11504", "belongmeeting": "importExport"},
    {"sensorid": "11505", "belongmeeting": "importExport"},
    {"sensorid": "11507", "belongmeeting": "importExport"},
    {"sensorid": "11515", "belongmeeting": "importExport"},
    {"sensorid": "11517", "belongmeeting": "importExport"},
    {"sensorid": "10019", "belongmeeting": "importExport"},
    {"sensorid": "20206", "belongmeeting": "secondAisle"},
    {"sensorid": "20306", "belongmeeting": "secondAisle"},
    {"sensorid": "20406", "belongmeeting": "secondAisle"},
    {"sensorid": "20506", "belongmeeting": "secondAisle"},
    {"sensorid": "20606", "belongmeeting": "secondAisle"},
    {"sensorid": "20706", "belongmeeting": "secondAisle"},
    {"sensorid": "20806", "belongmeeting": "secondAisle"},
    {"sensorid": "20906", "belongmeeting": "secondAisle"},
    {"sensorid": "21006", "belongmeeting": "secondAisle"},
    {"sensorid": "21106", "belongmeeting": "secondAisle"},
    {"sensorid": "21206", "belongmeeting": "secondAisle"},
    {"sensorid": "21306", "belongmeeting": "secondAisle"},
    {"sensorid": "21406", "belongmeeting": "secondAisle"},
    {"sensorid": "20207", "belongmeeting": "secondAisle"},
    {"sensorid": "20307", "belongmeeting": "secondAisle"},
    {"sensorid": "20407", "belongmeeting": "secondAisle"},
    {"sensorid": "20507", "belongmeeting": "secondAisle"},
    {"sensorid": "20607", "belongmeeting": "secondAisle"},
    {"sensorid": "20707", "belongmeeting": "secondAisle"},
    {"sensorid": "20807", "belongmeeting": "secondAisle"},
    {"sensorid": "20907", "belongmeeting": "secondAisle"},
    {"sensorid": "21007", "belongmeeting": "secondAisle"},
    {"sensorid": "21107", "belongmeeting": "secondAisle"},
    {"sensorid": "21207", "belongmeeting": "secondAisle"},
    {"sensorid": "21307", "belongmeeting": "secondAisle"},
    {"sensorid": "21407", "belongmeeting": "secondAisle"},
    {"sensorid": "20208", "belongmeeting": "secondAisle"},
    {"sensorid": "20308", "belongmeeting": "secondAisle"},
    {"sensorid": "20408", "belongmeeting": "secondAisle"},
    {"sensorid": "20508", "belongmeeting": "secondAisle"},
    {"sensorid": "20608", "belongmeeting": "secondAisle"},
    {"sensorid": "20708", "belongmeeting": "secondAisle"},
    {"sensorid": "20808", "belongmeeting": "secondAisle"},
    {"sensorid": "20908", "belongmeeting": "secondAisle"},
    {"sensorid": "21008", "belongmeeting": "secondAisle"},
    {"sensorid": "21108", "belongmeeting": "secondAisle"},
    {"sensorid": "21208", "belongmeeting": "secondAisle"},
    {"sensorid": "21308", "belongmeeting": "secondAisle"},
    {"sensorid": "21408", "belongmeeting": "secondAisle"},
    {"sensorid": "20209", "belongmeeting": "secondAisle"},
    {"sensorid": "20309", "belongmeeting": "secondAisle"},
    {"sensorid": "20409", "belongmeeting": "secondAisle"},
    {"sensorid": "20509", "belongmeeting": "secondAisle"},
    {"sensorid": "20609", "belongmeeting": "secondAisle"},
    {"sensorid": "20709", "belongmeeting": "secondAisle"},
    {"sensorid": "20809", "belongmeeting": "secondAisle"},
    {"sensorid": "20909", "belongmeeting": "secondAisle"},
    {"sensorid": "21009", "belongmeeting": "secondAisle"},
    {"sensorid": "21109", "belongmeeting": "secondAisle"},
    {"sensorid": "21209", "belongmeeting": "secondAisle"},
    {"sensorid": "21309", "belongmeeting": "secondAisle"},
    {"sensorid": "21409", "belongmeeting": "secondAisle"},
    {"sensorid": "20210", "belongmeeting": "secondAisle"},
    {"sensorid": "20211", "belongmeeting": "secondAisle"},
    {"sensorid": "20310", "belongmeeting": "secondAisle"},
    {"sensorid": "20311", "belongmeeting": "secondAisle"},
    {"sensorid": "21210", "belongmeeting": "secondAisle"},
    {"sensorid": "21211", "belongmeeting": "secondAisle"},
    {"sensorid": "21310", "belongmeeting": "secondAisle"},
    {"sensorid": "21311", "belongmeeting": "secondAisle"},
    {"sensorid": "11401", "belongmeeting": "firstAisle"},
    {"sensorid": "11402", "belongmeeting": "firstAisle"},
    {"sensorid": "11403", "belongmeeting": "firstAisle"},
    {"sensorid": "11404", "belongmeeting": "firstAisle"},
    {"sensorid": "11405", "belongmeeting": "firstAisle"},
    {"sensorid": "11406", "belongmeeting": "firstAisle"},
    {"sensorid": "11407", "belongmeeting": "firstAisle"},
    {"sensorid": "11408", "belongmeeting": "firstAisle"},
    {"sensorid": "11409", "belongmeeting": "firstAisle"},
    {"sensorid": "11412", "belongmeeting": "firstAisle"},
    {"sensorid": "11413", "belongmeeting": "firstAisle"},
    {"sensorid": "11414", "belongmeeting": "firstAisle"},
    {"sensorid": "11415", "belongmeeting": "firstAisle"},
    {"sensorid": "11416", "belongmeeting": "firstAisle"},
    {"sensorid": "11417", "belongmeeting": "firstAisle"},
    {"sensorid": "11418", "belongmeeting": "firstAisle"},
    {"sensorid": "11301", "belongmeeting": "firstAisle"},
    {"sensorid": "11306", "belongmeeting": "firstAisle"},
    {"sensorid": "11307", "belongmeeting": "firstAisle"},
    {"sensorid": "11308", "belongmeeting": "firstAisle"},
    {"sensorid": "11309", "belongmeeting": "firstAisle"},
    {"sensorid": "11310", "belongmeeting": "firstAisle"},
    {"sensorid": "11311", "belongmeeting": "firstAisle"},
    {"sensorid": "11312", "belongmeeting": "firstAisle"},
    {"sensorid": "11313", "belongmeeting": "firstAisle"},
    {"sensorid": "11314", "belongmeeting": "firstAisle"},
    {"sensorid": "11315", "belongmeeting": "firstAisle"},
    {"sensorid": "11316", "belongmeeting": "firstAisle"},
    {"sensorid": "11317", "belongmeeting": "firstAisle"},
    {"sensorid": "11318", "belongmeeting": "firstAisle"},
    {"sensorid": "11319", "belongmeeting": "firstAisle"},
    {"sensorid": "11320", "belongmeeting": "firstAisle"},
    {"sensorid": "11321", "belongmeeting": "firstAisle"},
    {"sensorid": "11322", "belongmeeting": "firstAisle"},
    {"sensorid": "11323", "belongmeeting": "firstAisle"},
    {"sensorid": "11324", "belongmeeting": "firstAisle"},
    {"sensorid": "11325", "belongmeeting": "firstAisle"},
    {"sensorid": "11326", "belongmeeting": "firstAisle"},
    {"sensorid": "11327", "belongmeeting": "firstAisle"},
    {"sensorid": "11328", "belongmeeting": "firstAisle"},
    {"sensorid": "11206", "belongmeeting": "firstAisle"},
    {"sensorid": "11207", "belongmeeting": "firstAisle"},
    {"sensorid": "11208", "belongmeeting": "firstAisle"},
    {"sensorid": "11209", "belongmeeting": "firstAisle"},
    {"sensorid": "11210", "belongmeeting": "firstAisle"},
    {"sensorid": "11211", "belongmeeting": "firstAisle"},
    {"sensorid": "11212", "belongmeeting": "firstAisle"},
    {"sensorid": "11213", "belongmeeting": "firstAisle"},
    {"sensorid": "11214", "belongmeeting": "firstAisle"},
    {"sensorid": "11215", "belongmeeting": "firstAisle"},
    {"sensorid": "11216", "belongmeeting": "firstAisle"},
    {"sensorid": "11217", "belongmeeting": "firstAisle"},
    {"sensorid": "11218", "belongmeeting": "firstAisle"},
    {"sensorid": "11219", "belongmeeting": "firstAisle"},
    {"sensorid": "11220", "belongmeeting": "firstAisle"},
    {"sensorid": "11221", "belongmeeting": "firstAisle"},
    {"sensorid": "11222", "belongmeeting": "firstAisle"},
    {"sensorid": "11223", "belongmeeting": "firstAisle"},
    {"sensorid": "11224", "belongmeeting": "firstAisle"},
    {"sensorid": "11225", "belongmeeting": "firstAisle"},
    {"sensorid": "11226", "belongmeeting": "firstAisle"},
    {"sensorid": "11227", "belongmeeting": "firstAisle"},
    {"sensorid": "11228", "belongmeeting": "firstAisle"},
    {"sensorid": "11106", "belongmeeting": "firstAisle"},
    {"sensorid": "11006", "belongmeeting": "firstAisle"},
    {"sensorid": "10906", "belongmeeting": "firstAisle"},
    {"sensorid": "10806", "belongmeeting": "firstAisle"},
    {"sensorid": "10706", "belongmeeting": "firstAisle"},
    {"sensorid": "10606", "belongmeeting": "firstAisle"},
    {"sensorid": "10506", "belongmeeting": "firstAisle"},
    {"sensorid": "10406", "belongmeeting": "firstAisle"},
    {"sensorid": "10306", "belongmeeting": "firstAisle"},
    {"sensorid": "10206", "belongmeeting": "firstAisle"},
    {"sensorid": "10112", "belongmeeting": "firstAisle"},
    {"sensorid": "10113", "belongmeeting": "firstAisle"},
    {"sensorid": "10114", "belongmeeting": "firstAisle"},
    {"sensorid": "10115", "belongmeeting": "firstAisle"},
    {"sensorid": "10116", "belongmeeting": "firstAisle"},
    {"sensorid": "10117", "belongmeeting": "firstAisle"},
    {"sensorid": "10118", "belongmeeting": "firstAisle"},
    {"sensorid": "10119", "belongmeeting": "firstAisle"},
    {"sensorid": "11107", "belongmeeting": "firstAisle"},
    {"sensorid": "11007", "belongmeeting": "firstAisle"},
    {"sensorid": "10207", "belongmeeting": "firstAisle"},
    {"sensorid": "11108", "belongmeeting": "firstAisle"},
    {"sensorid": "11008", "belongmeeting": "firstAisle"},
    {"sensorid": "10208", "belongmeeting": "firstAisle"},
    {"sensorid": "11109", "belongmeeting": "firstAisle"},
    {"sensorid": "11009", "belongmeeting": "firstAisle"},
    {"sensorid": "10909", "belongmeeting": "firstAisle"},
    {"sensorid": "10809", "belongmeeting": "firstAisle"},
    {"sensorid": "10709", "belongmeeting": "firstAisle"},
    {"sensorid": "10609", "belongmeeting": "firstAisle"},
    {"sensorid": "10509", "belongmeeting": "firstAisle"},
    {"sensorid": "10409", "belongmeeting": "firstAisle"},
    {"sensorid": "10309", "belongmeeting": "firstAisle"},
    {"sensorid": "10209", "belongmeeting": "firstAisle"},
    {"sensorid": "10310", "belongmeeting": "firstAisle"},
    {"sensorid": "10210", "belongmeeting": "firstAisle"},
    {"sensorid": "10211", "belongmeeting": "firstAisle"},
    {"sensorid": "10311", "belongmeeting": "firstAisle"}]
//
var meetingroomcontainsensors = {  "confA": ["10201", "10202", "10203", "10204", "10205", "10301", "10302", "10303", "10304", "10305"], "confB": ["10401", "10402", "10403", "10404", "10405", "10501", "10502", "10503", "10504", "10505"], "confC": ["10601", "10602", "10603", "10604", "10605", "10701", "10702", "10703", "10704", "10705"], "confD": ["10801", "10802", "10803", "10804", "10805", "10901", "10902", "10903", "10904", "10905"], "signDesk": ["11202", "11203", "11204", "11205", "11302", "11303", "11304", "11305"], "poster": ["10307", "10407", "10507", "10607", "10707", "10807", "10907", "10308", "10408", "10508", "10608", "10708", "10808", "10908"], "wc1": ["10410", "10411", "10510", "10511"], "wc2": ["11427", "11428", "11527", "11528"], "wc3": ["20410", "20411", "20510", "20511"], "room1": ["10610", "10710", "10810", "10910", "10611", "10711", "10811", "10911"], "room2": ["11010", "11011", "11110", "11111"], "room3": ["11421", "11422", "11423", "11424", "11521", "11522", "11523", "11524"], "room4": ["11425", "11426", "11525", "11526"], "room5": ["21001", "21002", "21003", "21004", "21005", "21101", "21102", "21103", "21104", "21105"], "room6": ["20610", "20611", "20710", "20711"], "exhibition": ["10215", "10315", "10415", "10515", "10615", "10715", "10815", "10915", "11015", "11115", "10216", "10316", "10416", "10516", "10616", "10716", "10816", "10916", "11016", "11116", "10217", "10317", "10417", "10517", "10617", "10717", "10817", "10917", "11017", "11117", "10218", "10318", "10418", "10518", "10618", "10718", "10818", "10918", "11018", "11118"], "mainMeeting": ["10219", "10319", "10419", "10519", "10619", "10719", "10819", "10919", "11019", "11119", "10220", "10320", "10420", "10520", "10620", "10720", "10820", "10920", "11020", "11120", "10221", "10321", "10421", "10521", "10621", "10721", "10821", "10921", "11021", "11121", "10222", "10322", "10422", "10522", "10622", "10722", "10822", "10922", "11022", "11122", "10223", "10323", "10423", "10523", "10623", "10723", "10823", "10923", "11023", "11123", "10224", "10324", "10424", "10524", "10624", "10724", "10824", "10924", "11024", "11124", "10325", "10425", "10525", "10625", "10725", "10825", "10925", "11025", "11125", "10326", "10426", "10526", "10626", "10726", "10826", "10926", "11026", "11126", "10327", "10427", "10527", "10627", "10727", "10827", "10927", "11027", "11127"], "serviceRoom": ["11419", "11420", "11519", "11520"], "restaurant": ["20202", "20302", "20402", "20502", "20602", "20702", "20802", "20902", "20203", "20303", "20403", "20503", "20603", "20703", "20803", "20903", "20204", "20304", "20404", "20504", "20604", "20704", "20804", "20904", "20205", "20305", "20405", "20505", "20605", "20705", "20805", "20905"], "relaxRoom": ["21300", "21301", "21302", "21303", "21304", "21305", "21400", "21401", "21402", "21403", "21404", "21405", "21500", "21501", "21502", "21503", "21504", "21505"], "escalator": ["10110", "10111", "11410", "11411", "20110", "20111", "21410", "21411"], "importExport": ["11300", "11502", "11504", "11505", "11507", "11515", "11517", "10019"], "secondAisle": ["20206", "20306", "20406", "20506", "20606", "20706", "20806", "20906", "21006", "21106", "21206", "21306", "21406", "20207", "20307", "20407", "20507", "20607", "20707", "20807", "20907", "21007", "21107", "21207", "21307", "21407", "20208", "20308", "20408", "20508", "20608", "20708", "20808", "20908", "21008", "21108", "21208", "21308", "21408", "20209", "20309", "20409", "20509", "20609", "20709", "20809", "20909", "21009", "21109", "21209", "21309", "21409", "20210", "20211", "20310", "20311", "21210", "21211", "21310", "21311"], "firstAisle": ["11401", "11402", "11403", "11404", "11405", "11406", "11407", "11408", "11409", "11412", "11413", "11414", "11415", "11416", "11417", "11418", "11301", "11306", "11307", "11308", "11309", "11310", "11311", "11312", "11313", "11314", "11315", "11316", "11317", "11318", "11319", "11320", "11321", "11322", "11323", "11324", "11325", "11326", "11327", "11328", "11206", "11207", "11208", "11209", "11210", "11211", "11212", "11213", "11214", "11215", "11216", "11217", "11218", "11219", "11220", "11221", "11222", "11223", "11224", "11225", "11226", "11227", "11228", "11106", "11006", "10906", "10806", "10706", "10606", "10506", "10406", "10306", "10206", "10112", "10113", "10114", "10115", "10116", "10117", "10118", "10119", "11107", "11007", "10207", "11108", "11008", "10208", "11109", "11009", "10909", "10809", "10709", "10609", "10509", "10409", "10309", "10209", "10310", "10210", "10211", "10311"]};

//所有的sensorid
var allsensorid

//give sensorid return to meeting
function sensoridreturntomeeting(sensorid){
    var belongs = ""
    for( var key in meetingroomcontainsensors ){
        var meetings = meetingroomcontainsensors[key]
        for( var j in  meetings ){
            if( meetings[j] == sensorid ){
                belongs = key
                break
            }
        }
        if(belongs != ""){break;}
    }
    return belongs
}


jQuery.fn.moveDivByID= function (id) {
    $("#"+id).mousedown(function(e){
        $(this).css("cursor","move");
        var offset= $(this).offset();
        console.log("c");
        var x= e.pageX-offset.left;
        var y= e.pageY-offset.top;


        $(document).bind("mousemove",function(ev){
            $("#"+id).stop();
            var _x= ev.pageX-x;
            var _y= ev.pageY-y;
            $("#"+id).animate({left:_x+"px",top:_y+"px"},10);
        });
    });


    $(document).mouseup(function()
    {
        $("#"+id).css("cursor","default");
        $(this).unbind("mousemove");
    });
};

$().moveDivByID("div_personidstay")


