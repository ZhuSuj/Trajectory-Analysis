
//persondotdiv1
var divpersondottooltip = d3.select("#div_persondot1").append("persondottooltip")
    .attr("class", "persondottooltip")
    .style("opacity", 0);
// var persondotdiv = d3.select("#div_persondot1")
//     .append("svg").attr("id","persondotsvg").style("position","absolute").style("top","0px")
//     .attr("width", 600).attr("height", 569)
//     .attr("fill","blue").attr("opacity",0.5)

// persondotchart1("data/clustermode/personldclusterMDS.csv")

persondotchartchange()
var glyphflag = 0;
var dealglyphsepa3daysep = new Map();
function persondotchartchange(){
    var clustermode = document.getElementById("clusterMode").value;
    console.log(clustermode)
    if(clustermode == "BoxplotChart"){
        d3.select(".chart-wrapper").style("visibility","block")
        d3.select("#persondotsvg").style("visibility","hidden")
    }else{
        d3.select(".chart-wrapper").style("visibility","hidden")
        d3.select("#persondotsvg").style("visibility","block")
        var filepath = "data/clustermode/personldcluster"+clustermode+".csv";
        console.log(filepath)
        persondotchart1(filepath)
    }
}

function persondotchart1(filepath){
    d3.selectAll("#persondotsvg").remove()
    var persondotdiv = d3.select("#div_persondot1")
        .append("svg").attr("id","persondotsvg").style("position","absolute").style("top","0px")
        .attr("width", document.querySelector( "#div_persondot1" ).clientWidth)
        .attr("height", document.querySelector( "#div_persondot1").clientHeight)
        .attr("fill","blue").attr("opacity",0.5)

    var all3dayperdonid = new Array();

var div_persondot1width = document.querySelector( "#div_persondot1" ).clientWidth ;
var div_persondot1height = document.querySelector( "#div_persondot1").clientHeight

    var sumroomstaycu3daytemp = {"confA": 0,"confB": 0,"confC": 0,
        "confD": 0,"signDesk":0,"poster": 0,"wc1": 0,"wc2": 0,
        "wc3": 0,"room1": 0,"room2": 0,"room3": 0,"room4": 0,
        "room5": 0,"room6": 0,"exhibition": 0,"mainMeeting": 0,
        "serviceRoom":0,"restaurant": 0,"relaxRoom": 0,"escalator": 0,
        "importExport": 0,"secondAisle": 0,"firstAisle": 0,"idstaytimesum":0};


    // var dealglyphsepa3day = {}
    d3.csv("data\\dealforcluster3daynew\\day1new.csv",function(error,allpersonid){
        for(var i = 0 ; i < allpersonid.length ; i++){
            var arecord = allpersonid[i]
            if(dealglyphsepa3daysep.hasOwnProperty(arecord.id)){
                for(var keyarecord in  arecord){
                    dealglyphsepa3daysep[arecord.id].day1[keyarecord] = parseInt(arecord[keyarecord]);
                    dealglyphsepa3daysep[arecord.id].sum3day[keyarecord] =
                        parseInt(dealglyphsepa3daysep[arecord.id].sum3day[keyarecord]) + parseInt(arecord[keyarecord]);
                }
            }else{
                var sumroomstaycu3day1 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day1[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3day2 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day2[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3day3 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day3[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3daysum = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3daysum[key] = sumroomstaycu3daytemp[key]
                })
                dealglyphsepa3daysep[arecord.id] = {}
                dealglyphsepa3daysep[arecord.id].day1 = sumroomstaycu3day1;
                dealglyphsepa3daysep[arecord.id].day2 = sumroomstaycu3day2;
                dealglyphsepa3daysep[arecord.id].day3 = sumroomstaycu3day3;
                dealglyphsepa3daysep[arecord.id].sum3day= sumroomstaycu3daysum;
                for(var keyarecord in  arecord){
                    dealglyphsepa3daysep[arecord.id].sum3day[keyarecord] = parseInt(arecord[keyarecord]);
                    dealglyphsepa3daysep[arecord.id].day1[keyarecord] = parseInt(arecord[keyarecord]);
                }

            }
        }
    })
    d3.csv("data\\dealforcluster3daynew\\day2new.csv",function(error,allpersonid){
        for(var i = 0 ; i < allpersonid.length ; i++){
            var arecord = allpersonid[i]
            if(dealglyphsepa3daysep.hasOwnProperty(arecord.id)){
                for(var keyarecord in  arecord){
                    dealglyphsepa3daysep[arecord.id].day2[keyarecord] = parseInt(arecord[keyarecord]);
                    dealglyphsepa3daysep[arecord.id].sum3day[keyarecord] =
                        parseInt(dealglyphsepa3daysep[arecord.id].sum3day[keyarecord]) + parseInt(arecord[keyarecord]);
                }
            }else{
                var sumroomstaycu3day1 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day1[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3day2 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day2[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3day3 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day3[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3daysum = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3daysum[key] = sumroomstaycu3daytemp[key]
                })
                dealglyphsepa3daysep[arecord.id] = {}
                dealglyphsepa3daysep[arecord.id].day1 = sumroomstaycu3day1;
                dealglyphsepa3daysep[arecord.id].day2 = sumroomstaycu3day2;
                dealglyphsepa3daysep[arecord.id].day3 = sumroomstaycu3day3;
                dealglyphsepa3daysep[arecord.id].sum3day= sumroomstaycu3daysum;
                for(var keyarecord in  arecord){
                    dealglyphsepa3daysep[arecord.id].sum3day[keyarecord] = parseInt(arecord[keyarecord]);
                    dealglyphsepa3daysep[arecord.id].day2[keyarecord] = parseInt(arecord[keyarecord]);
                }

            }
        }
    })
    d3.csv("data\\dealforcluster3daynew\\day3new.csv",function(error,allpersonid){
        for(var i = 0 ; i < allpersonid.length ; i++){
            var arecord = allpersonid[i]
            if(dealglyphsepa3daysep.hasOwnProperty(arecord.id)){
                for(var keyarecord in  arecord){
                    dealglyphsepa3daysep[arecord.id].day3[keyarecord] = parseInt(arecord[keyarecord]);
                    dealglyphsepa3daysep[arecord.id].sum3day[keyarecord] =
                        parseInt(dealglyphsepa3daysep[arecord.id].sum3day[keyarecord]) + parseInt(arecord[keyarecord]);
                }
            }else{
                var sumroomstaycu3day1 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day1[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3day2 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day2[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3day3 = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3day3[key] = sumroomstaycu3daytemp[key]
                })
                var sumroomstaycu3daysum = new Map();
                Object.keys(sumroomstaycu3daytemp).forEach(function(key) {
                    sumroomstaycu3daysum[key] = sumroomstaycu3daytemp[key]
                })
                dealglyphsepa3daysep[arecord.id] = {}
                dealglyphsepa3daysep[arecord.id].day1 = sumroomstaycu3day1;
                dealglyphsepa3daysep[arecord.id].day2 = sumroomstaycu3day2;
                dealglyphsepa3daysep[arecord.id].day3 = sumroomstaycu3day3;
                dealglyphsepa3daysep[arecord.id].sum3day= sumroomstaycu3daysum;
                for(var keyarecord in  arecord){
                    dealglyphsepa3daysep[arecord.id].sum3day[keyarecord] = parseInt(arecord[keyarecord]);
                    dealglyphsepa3daysep[arecord.id].day3[keyarecord] = parseInt(arecord[keyarecord]);
                }

            }
        }
    })

    d3.csv(filepath,function(error,allpersonid){
        for(var i = 0;i<allpersonid.length;i++){
            var item = {}
            item.id = allpersonid[i].id
            item.x = allpersonid[i].xdeal * div_persondot1width
            item.y = allpersonid[i].ydeal * div_persondot1height
            all3dayperdonid.push(item);//iddot
        }

        $(".glyphflag").click(function(){
            d3.selectAll("#persondotsvg").selectAll(".personid").style("display","block")
            d3.selectAll(".dividglyph").remove()
            // var treevistext = d3.select("#tree-vis").selectAll("text")._groups[0]
            // //不等于数字，就小号字体
            // treevistext.forEach(function(d,i){
            //     var sid = d.innerHTML ;
            //     if(!isNaN(  parseInt(sid)  )){
            //         d.style.cssText = "font-size: 4px"
            //     }
            // })


            all3dayperdonid.forEach(function(d){
                if(!dealglyphsepa3daysep.hasOwnProperty(d.id)){
                    all3dayperdonid.splice
                    (all3dayperdonid.findIndex(item => item.id === d.id), 1)
                }
            })

                //聚类
                var epsvalue=document.getElementById("expvalue").value;
                var minPtsvalue=document.getElementById("disvalue").value;
                var dbscanner = jDBSCAN().eps(parseInt(epsvalue)).minPts(parseInt(minPtsvalue))
                    .distance('EUCLIDEAN').data(all3dayperdonid);
                var point_assignment_result = dbscanner();
                var forallclustergluphdata = new Array()

                point_assignment_result.forEach(function(d, i) {
                    all3dayperdonid[i].belongcluster = d;
                });
                point_assignment_result.sort(function(a,b){return a-b});
                var clusternum = point_assignment_result[point_assignment_result.length-1]
                for(var i = 0 ; i<clusternum + 1 ; i++){
                    var itemcluster = {}
                    itemcluster.cluster = i;
                    itemcluster.allidtrack = new Array();
                    itemcluster.allidpara = new Array()
                    itemcluster.allid = new Array()
                    itemcluster.idstay3daytimesum = new Array()
                    forallclustergluphdata.push(itemcluster)
                }
                all3dayperdonid.forEach(function(d, i) {  //3天的所有数据，all3dayperdonid   iddot
                    if(dealglyphsepa3daysep.hasOwnProperty(d.id)){ //TODO id==18368时候显示undefined

                        var itemcluster = forallclustergluphdata[ d.belongcluster ]
                        var perid = allcharacteridtrack[d.id];
                        itemcluster.allidtrack .push(perid) //一个个id的路径组合
                        itemcluster.allid .push(d.id) //id的 id cluster x y
                        itemcluster.allidpara .push(d) //id的 id cluster x y

                        var aid3daystayroom = dealglyphsepa3daysep[d.id]
                        itemcluster.idstay3daytimesum.push( aid3daystayroom.sum3day  )
                    }

                    // dealglyphsepa3day.day2.forEach(function(dd){
                    //     if(dd.id == d.id){
                    //         dd.belongcluster = d.belongcluster
                    //         itemcluster.idstaytimesum = dd.idstaytimesum
                    //     }
                    // })
                    // dealglyphsepa3day.day3.forEach(function(dd){
                    //     if(dd.id == d.id){
                    //         dd.belongcluster = d.belongcluster
                    //         itemcluster.idstaytimesum = dd.idstaytimesum
                    //     }
                    // })
                });

                //所有簇forallclustergluphdata
                clustersresult = forallclustergluphdata;
                for(var i = 1 ; i < forallclustergluphdata.length; i ++){
                        var foraglychartphdata = new Array();
                        var clusterid = forallclustergluphdata[i].allidpara
                        var idstay3daytimesum = forallclustergluphdata[i].idstay3daytimesum


                    var centerxsum = 0
                        var centerysum = 0

                    foraglychartphdata.cluster = i
                    foraglychartphdata.datainstance = clusterid
                    foraglychartphdata.glyphdata = {}
                    foraglychartphdata.glyphdata.centerData = clusterid.length
                        var sumroomstaycu3daysumfinaltemp = {"confA": 0,"confB": 0,"confC": 0,
                            "confD": 0,"signDesk":0,"poster": 0,"wc1": 0,"wc2": 0,
                            "wc3": 0,"room1": 0,"room2": 0,"room3": 0,"room4": 0,
                            "room5": 0,"room6": 0,"exhibition": 0,"mainMeeting": 0,
                            "serviceRoom":0,"restaurant": 0,"relaxRoom": 0,"escalator": 0,
                            "importExport": 0,"secondAisle": 0,"firstAisle": 0,"idstaytimesum":0};
                    var sumroomstaycu3daysumfinal = new Map()
                        Object.keys(sumroomstaycu3daysumfinaltemp).forEach(function(key) {
                        sumroomstaycu3daysumfinal[key] = sumroomstaycu3daysumfinaltemp[key]
                    })

                    clusterid.forEach(function(d,i){
                        centerxsum = centerxsum + d.x
                        centerysum = centerysum + d.y
                        for(var keyidstay3daytimesum in idstay3daytimesum[i]){
                            sumroomstaycu3daysumfinal[keyidstay3daytimesum]=
                                sumroomstaycu3daysumfinal[keyidstay3daytimesum] + idstay3daytimesum[i][keyidstay3daytimesum]
                        }
                    })

                    foraglychartphdata.glyphdata.surroundingData = sumroomstaycu3daysumfinal

                    var center={};
                    center.x = centerxsum/clusterid.length
                    center.y = centerysum/clusterid.length


                    for(var key in sumroomstaycu3daysumfinal){
                        if(key!="id"){
                            sumroomstaycu3daysumfinal[key] = sumroomstaycu3daysumfinal[key]/clusterid.length
                        }
                    }
                        var radius = clusterid.length;
                    if(radius>5){
                        if(radius<20){
                            radius = 20
                        }else if(radius>100){
                            radius  =100+ Math.sqrt(radius)
                        }
                        glyphchart( "#div_persondot1",foraglychartphdata,
                            center.x - 0.5*radius ,center.y  - 0.2*radius ,radius, "glyph"+i)
                    }
                }


                var color = d3v3.scale.category20().domain(d3v3.range([0, d3v3.max(point_assignment_result)]));
                d3.select("#persondotsvg").selectAll('circle').data(all3dayperdonid).style('fill', function(d) {

                    if(d.belongcluster==0){
                        return "#000"
                    }else{
                        return color(d.belongcluster);
                    }

                })




        })



        // Lasso functions
        var circles = persondotdiv.selectAll("circle").data(all3dayperdonid).enter().append("circle")
            .attr("cx",function(d){ return d.x + 15   })
            .attr("cy",function(d){return d.y + 30 })
            .attr("r",personiddotoriginer).attr("class","personid")
            .attr("fill", persondotdefaultcolor)
            .attr("stroke", "black")
            .style("stroke-width", 1).style("opacity", 1)
            .attr("id",function(d,i){  return  "personid"+d.id})
            .on("mouseover", function(d) {
                divpersondottooltip.transition().duration(200).style("visibility", "visible")
                    .style("opacity", 1);
                divpersondottooltip.html( "person:  " + d.id)
                    .style("left", (d3.event.layerX)+10 + "px").style("top", (d3.event.layerY) + "px");
                d3.selectAll("#personid"+d.id)
                    .attr("r",personiddotoselectedr).style("opacity", 1)
                    // .style("fill", this.getAttribute("fill"))
            })
            .on("mouseout", function(d) {
                divpersondottooltip.transition().duration(500)
                    .style("visibility", "hide").style("opacity", 0);
                d3.selectAll("#personid"+d.id).attr("r",personiddotoriginer)//d3.select(this)._groups[0][0].attributes.r.value
                    // .attr("fill", this.getAttribute("fill"))
            })
            .on("click",function(d){
                personidtrackclick(d.id,"red")
                let pid = new Array()
                pid.push(d.id)
                barchartinputpidarray(pid)
            })

        // Lasso functions
        var lasso_start = function() {
            //拉索之前先将所有的dot的颜色归为默认值
            d3.selectAll(".personid").attr("r",personiddotoriginer)
                // .style("opacity", 0.7).style("fill", persondotdefaultcolor)

            lasso.items().attr("r",personiddotoriginer) // reset size
                .classed("not_possible",true)
                .classed("selected",false);
        };

        var lasso_draw = function() {
            // Style the possible dots
            lasso.possibleItems()
                .classed("not_possible",false)
                .classed("possible",true);

            // Style the not possible dot
            lasso.notPossibleItems()
                .classed("not_possible",true)
                .classed("possible",false);
        };

        var lasso_end = function() {
            // Reset the color of all dots
            lasso.items()
                .classed("not_possible",false)
                .classed("possible",false);

            // Style the selected dots
            lasso.selectedItems()
                .classed("selected",true)
                .attr("r",personiddotoselectedr);

            // Reset the style of the not selected dots
            lasso.notSelectedItems()
                .attr("r",personiddotoriginer);

            //执行select的人的路径

            // console.log( d3.selectAll(".selected")._groups[0] )
            d3.selectAll(".persontrack").remove();
            d3.selectAll(".personidtracktexttime").remove();
            d3.selectAll(".personidtrackdot").remove();
            d3.selectAll(".movingcircle").remove();
            d3.selectAll(".moveingtext").remove();

            var selectedperson = d3.selectAll(".selected")._groups[0]

            let aselectedidcluster = new Array();
            var aselectediddatacluster = new Array();
            for(var selectedindex = 0; selectedindex<selectedperson.length; selectedindex++){
                var personidname = selectedperson[selectedindex].id
                var personid = personidname.substring(8,personidname.length)

                //画轨迹
                duringtimecalculate(personid)

                aselectedidcluster.push(personid)
                if(allcharacteridtrack.hasOwnProperty(personid)){
                    var item = {};
                    item.id = personid;
                    item.track = allcharacteridtrack[personid]
                    aselectediddatacluster.push(item)
                }
            }


            //selectedpersonidcluster是选中的cluster的id名字
            //selectedpersoniddatacluster是选中的cluster的id名字和对应的数据
            selectedpersonidcluster.push(aselectedidcluster)
            selectedpersoniddatacluster.push(aselectediddatacluster)
            d3.select("#div_personidstay").style("display","block")
            barchart(aselectediddatacluster);

        };
        var lasso = d3.lasso()
            .closePathSelect(true)
            .closePathDistance(100)
            .items(circles)
            .targetArea(persondotdiv)
            .on("start",lasso_start)
            .on("draw",lasso_draw)
            .on("end",lasso_end);
        persondotdiv.call(lasso);
    })
    }

function glyphchart(glyphdivid ,datatemp, x,y,radius, divid){
    d3.select(glyphdivid).append("div").attr("id",divid).attr("class","dividglyph")
        .style("position","absolute")
        .style("left",x+"px")
        .style("top",y+"px")
        .style("width",radius+"px")
        .style("height",radius+"px")
        .style("background","none")
    glypharcrose(datatemp, "#"+divid)
    d3.select("#"+divid).style("display","block")
    // d3.select("#"+divid).style("display","none")
}
var highlightflag  = true;
function glypharcrose(data1, div_id){

    var datasurroundingData = data1.glyphdata.surroundingData
    var datainstance = data1.datainstance
    var data = new Array()
    var i = 0 ;
    for(var key in datasurroundingData){

        if(key == "belongcluster"||key == "id"||key == "idstaytimesum"){
            continue;
        }
            var item = {}
            item.id     =  key;
            item.cluster     =  data1.cluster;
            item.color  =  meetingroom[key];
            item.weight = 1;
            item.score  = datasurroundingData[key] *100;
            item.width  = datasurroundingData[key]*100;
            item.label  =  key;
            data.push(item)


        i++;
    }

    data.sort(function(a,b) {
        return a.score - b.score;
    })

    data.forEach(function(d){
        d.score = d.score/data[data.length-1].score
        d. width = d. width/data[data.length-1]. width
    })

    data.forEach(function(d){
        d.score = d.score * 40
        d. width = d. width * 40
    })


    var width = document.querySelector(div_id).clientWidth
    height = document.querySelector(div_id).clientHeight
    radius = Math.min(width, height) / 2.2,
        innerRadius = 0.4 * radius;

    var pie = d3v3.layout.pie()
        .sort(null)
        .value(function(d) { return d.width; });

    // var tip = d3v3.tip()
    //     .attr('class', 'd3v3-tip')
    //     .offset([0, 0])
    //     .html(function(d) {
    //         var tooltxt = "";
    //         var arr=[];
    //         var average=0;
    //         var middle=0;
    //
    //
    //         datainstance.forEach(function(dd){
    //             var pp = ""
    //             var apersonaroom = 0
    //             allcharacteridtrack[ dd[0] ].forEach(function(ddd){
    //                 ddd.roomname = sensoridreturntomeeting(ddd.sensorid)
    //                 pp = pp + ddd.roomname +" "+ ddd.value +" ";
    //                 if(d.data.label==ddd.roomname)
    //                 {
    //                     apersonaroom = apersonaroom + parseInt(ddd.staytime)
    //                 }
    //             })
    //
    //             arr.push(apersonaroom/allcharacteridtrack[ dd[0] ].length);
    //             average= average + parseFloat(apersonaroom/allcharacteridtrack[ dd[0] ].length);
    //             allcharacteridtrack[ d[0] ]
    //
    //             tooltxt = tooltxt + pp + "<br>"
    //
    //             })
    //
    //
    //         arr.sort();
    //         var min=arr[0];
    //         var max = arr[arr.length-1];
    //         average = (average/arr.length).toFixed(2);
    //         if(arr.length%2==0){
    //             middle=(arr[arr.length/2]+arr[(arr.length/2)-1])/2;
    //         }
    //         if(arr.length%2!=0){
    //             middle=arr[arr.length/2];
    //         }
    //         return d.data.label + ": <span style='color:orangered'>"
    //             // + tooltxt
    //             + "<br>"+" min:"+ min
    //             + "<br>"+"max: "+max
    //             + "<br>"+"average: "+average
    //             + "<br>"+"middle: "+middle
    //
    //             + "</span>";
    //     });

    var arc = d3v3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(function (d) {
            if(d.data.score<20){
                return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
            }else{
                return (radius - innerRadius) * (0.2 + (d.data.score - 20) / 150.0) + innerRadius;
            }



        });

    var outlineArc = d3v3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

    var svg = d3v3.select(div_id).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // svg.call(tip);


    // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

    var path = svg.selectAll(".solidArc")
        .data(pie(data))
        .enter().append("path")
        .attr("fill", function(d) { return d.data.color; })
        .attr("class", "solidArc").attr("opacity","0.5")
        .attr("stroke", "white")
        .attr("d", arc)
        // .on('mouseover', tip.show)
        .on('mouseover', function(d){
            d3.select("#textsLabels").selectAll(".textLabel")
                .style("opacity",0.25)
                // .attr("display","none")
            d3.select("#textsLabels").selectAll(".textLabel")._groups[0].forEach(function(dd){
                if(dd.innerHTML.toLowerCase() == d.data.id.toLowerCase()){
                    d3.select(dd).style("opacity",1)
                }
            })
            //map
            d3.select("#containerfloor1").select("#room" + d.data.id)
                .attr("fill","red").style("opacity", 0.8)
            //stream
            d3.select("#flowsInFocus").selectAll("path" )
                .style("opacity", 0.1)
            d3.select("#flowsInFocus").selectAll("#" + d.data.id.toLowerCase())
                .style("opacity", 1)

            d3.selectAll(".point-detection").style("display","none")
            d3.selectAll(".updownflagRectSensoridfloor"+d.data.id.toLowerCase()).style("display","block")
        })
        .on('mouseout', function(d){
            d3.select("#containerfloor1").select("#room" + d.data.id)
            .attr("fill",meetinglayoutcolor).style("opacity", 0.1)
            //map
            if(highlightflag){

                //stream
                d3.select("#flowsInFocus").selectAll("path")
                    .style("opacity", 1)
                d3.selectAll(".point-detection").style("display","block")

                d3.select("#textsLabels").selectAll(".textLabel")
                    .style("opacity",1)
            }


        })


        .on("click",function(d){
            if(arcsubflag){
                d3.select("#containerfloor1").select("#room" + d.data.id)
                    .attr("fill",meetinglayoutcolor).style("opacity", 0.1)

                var newdata = new Array()
                for(var key in data1.glyphdata.surroundingData){
                    if(key != d.data.label){
                        newdata[key] = data1.glyphdata.surroundingData[key];
                    }
                }
                d3v3.select(div_id).select("svg").remove();
                data1.glyphdata.surroundingData = newdata
                d3.selectAll(".d3v3-tip").remove()
                glypharcrose(data1, div_id)
                d3.select("#textsLabels").selectAll(".textLabel")
                    .style("opacity",1)
            }else{
                if(highlightflag){
                    highlightflag = false
                }else{
                    highlightflag = true;
                }

                d3.select("#containerfloor1").select("#room" + d.data.id)
                    .attr("fill","red").style("opacity", 0.8)
                //stream
                d3.select("#flowsInFocus").selectAll("path" )
                    .style("opacity", 0.1)
                d3.select("#flowsInFocus").selectAll("#" + d.data.id.toLowerCase())
                    .style("opacity", 1)

                d3.selectAll(".point-detection").style("display","none")
                d3.selectAll(".updownflagRectSensoridfloor"+d.data.id.toLowerCase()).style("display","block")

                d3.select("#textsLabels").selectAll(".textLabel")
                    .style("opacity",0.25)
                // .attr("display","none")
                d3.select("#textsLabels").selectAll(".textLabel")._groups[0].forEach(function(dd){
                    if(dd.innerHTML.toLowerCase() == d.data.id.toLowerCase()){
                        d3.select(dd).style("opacity",1)
                    }
                })

            }


        })

        // .on('mouseout', tip.hide)

    var outerPath = svg.selectAll(".outlineArc")
        .data(pie(data))
        .enter().append("path")
        .attr("fill", "none")
        .attr("stroke", "white") .attr("opacity", 0)
        .attr("class", "outlineArc")
        .attr("d", outlineArc);

    svg.append("circle").attr("cx", 0).attr("cy", 0)
        .attr("r", width * 0.2).attr("fill", "#cecbcb").attr("opacity","0.7")
        .on("click",function(d){
            if(highlightflag){
                highlightflag = false
            }else{
                highlightflag = true;
            }
            d3.select("#containerfloor1").select("#room" + d.data.id)
                .attr("fill",meetinglayoutcolor).style("opacity", 0.1)
            //stream
            d3.select("#flowsInFocus").selectAll("path")
                .style("opacity", 1)
            d3.selectAll(".point-detection").style("display","block")
        })

    svg.append("svg:text")
        .attr("class", "aster-score")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle") // text-align: right
        .text(data1.glyphdata.centerData);
}






var arcsubflag = false
$("#arcsub").click(function(){
    if(!arcsubflag){
        arcsubflag = true
    }else{
        arcsubflag = false
    }


})
