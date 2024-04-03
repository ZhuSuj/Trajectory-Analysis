
var atimegivenidnum = new Map()
var alltime = new Array()
var defaultinitindex = 0;
var atimeidforbarchart = new Array();

$( "#displayidsort" ).click(function() {
    // 先将atimegivenidnum  alltime atimeidforbarchart清空,为下一次的筛选做准备
    Object.keys(atimegivenidnum).forEach(function(d){delete atimegivenidnum[d]})
    alltime.length = 0;
    defaultinitindex = 0;
    atimeidforbarchart.length = 0;

    let dayvalue = document.getElementById("dayvalue").value
    let threshold = document.getElementById("countnum").value
    var atimeseveralpis = new Map()

    d3.csv("data/idstrarttimesort/alldayStarttime.csv",function(error,datatemp) {
        for (var i = 0; i < datatemp.length; i++) {
            if (atimeseveralpis.hasOwnProperty(datatemp[i].time)) {
                atimeseveralpis[datatemp[i].time].push(datatemp[i])
            } else {
                var array = new Array();
                array.push(datatemp[i]);
                atimeseveralpis[datatemp[i].time] = array
            }
        }

        //将阈值大于给定值存进新的map
        for(var i in atimeseveralpis){
            if(atimeseveralpis[i].length >= 1){
                alltime.push(i)
                atimegivenidnum[i] = atimeseveralpis[i]
            }
        }

        atimeidforbarchart.length = 0;

        let atimegivenidnumtemp = new Map();
        let atimegivenidnumtempprevious = new Map();
        let atimegivenidnumtempnext = new Map();

        var nextfalge = 0;
        for(var p in atimegivenidnum){
            let atimegivenpiditem = atimegivenidnum[p]
            for(var a in atimegivenpiditem){
                if(nextfalge==1){//满足条件的下一个下标数据
                    break;
                }
                if(atimegivenpiditem[a].id == threshold){
                    nextfalge++;
                    atimegivenidnumtemp = atimegivenpiditem;
                }
                atimegivenidnumtempprevious = atimegivenpiditem;//满足条件的上一个下标数据
            }
        }

        var allserchpid = new Array()
        d3.selectAll(".personid").attr("r",personiddotoriginer)
            .style("opacity", 0.7).style("fill", persondotdefaultcolor)
        for(var p in atimegivenidnumtemp){
            allserchpid.push(atimegivenidnumtemp[p].id)
        }
        allserchpid.forEach(function(d,i){
            personidtrackclick(d,trackcolor[i])
            //高亮personiddot
            d3.select("#personid"+d).attr("r",personiddotoselectedr).style("opacity", 1).style("fill", trackcolor[i])
        })
        barchartinputpidarray(allserchpid)
        display1 (allserchpid)

        defaultinitindex++;

    })
})

$( "#previousone" ).click(function() {

    atimeidforbarchart.length = 0;
    let atimegivenidnumtemp = atimegivenidnum[alltime[defaultinitindex]];
    //deal for bartchart
    for(var t in atimegivenidnumtemp){
        var item = {}
        item.id = atimegivenidnumtemp[t].id;
        item.track = allcharacteridtrack[item.id];
        atimeidforbarchart.push(item)
    }
    display1 (atimegivenidnum[alltime[defaultinitindex]])
    barchart(atimeidforbarchart);
    defaultinitindex--;
    //防止下表超出范围
    if(defaultinitindex < atimegivenidnum.length - 1){
        defaultinitindex = 0;
    }

})
$( "#nextone" ).click(function() {
    atimeidforbarchart.length = 0;
    let atimegivenidnumtemp = atimegivenidnum[alltime[defaultinitindex]];
    //deal for bartchart
    for(var t in atimegivenidnumtemp){
        var item = {}
        item.id = atimegivenidnumtemp[t].id;
        item.track = allcharacteridtrack[item.id];
        atimeidforbarchart.push(item)
    }
    display1 (atimegivenidnum[alltime[defaultinitindex]])
    barchart(atimeidforbarchart);

    defaultinitindex++;
    if(defaultinitindex == atimegivenidnum.length - 1){
        defaultinitindex = 0;
    }
})


function display1 (atimeallid){
    d3.selectAll(".personid").attr("r",personiddotoriginer)
        .style("opacity", 0.7).style("fill", persondotdefaultcolor)
    d3.selectAll(".persontrack").remove();
    d3.selectAll(".personidtrackdot").remove();
    d3.selectAll(".movingcircle").remove();
    d3.selectAll(".moveingtext").remove();
    var printout = "";
    for (var i in atimeallid) {
        printout = printout+atimeallid[i]+", "
        personidtrackclick(atimeallid[i], trackcolor[i]);
        }
        printout = "time: " + atimeallid[i] + "   id: " +printout;
    console.log(printout)
}

















