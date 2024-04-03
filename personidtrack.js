var divfortrack = d3.select("#containerfloor1").append("sensordotdiv")
    .attr("class", "sensordottooltip")
    .style("opacity", 0).style("height","80px")
var line = d3.line().curve(d3.curveMonotoneX)
    .x(function(d) { return x_scale(d['x']); })
    .y(function(d) { return y_scale(d['y']); })
$( "#cleartracks" ).click(function() {
    d3.selectAll(".persontrack").remove();
    d3.selectAll(".personidtracktexttime").remove();
    d3.selectAll(".personidtrackdot").remove();
    d3.selectAll(".movingcircle").remove();
    d3.selectAll(".moveingtext").remove();
    d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1).attr("stroke", "black")
    d3.selectAll(".personid").attr("r",personiddotoriginer)
        .style("opacity", 1).style("fill", persondotdefaultcolor)
    d3.selectAll(".mergedrect").style("fill", meetinglayoutcolor)
        .attr("stroke", "black").style("stroke-width", 1.5).style("opacity", 0.1)

})

function duringtimecalculate(prop ){


    var pidtrack = {}
    var persontrack = [];//一个人三天的轨迹
    var persontrackformovingdot = [];//一个人的轨迹


    if(allcharacteridtrack.hasOwnProperty(prop)) {
        allcharacteridtrack[prop].sort(comparedown("time"));//对时间排序升序
        var idperson = allcharacteridtrack[prop]

        for(var idcenter in idperson){
            var item  = {}
            var recidcenter = d3.selectAll("."+idperson[idcenter].sensorname)
                ._groups[0][0].attributes.id.nodeValue.split(",")
            item.x = recidcenter[1]//recidcenter对应的是svg的坐标
            item.y = recidcenter[2]
            item.sensorname = idperson[idcenter].sensorid
            item.currenttime = idperson[idcenter].time
            persontrack.push(item);
            persontrackformovingdot.push(item)

            //添加的虚拟点分四种情况
            //一楼
//             //一楼的虚拟扶梯
//             virtualrect(11,1,10110)
//             virtualrect(12,1,10111)
//             virtualrect(11,19,11410)
//             virtualrect(12,19,11411)
            //扶梯1
            var sensoridofaisle = parseInt( idperson[idcenter].sensorid )
            //若是sid  10110-20110/20111

            if(sensoridofaisle == 10110){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 20110){
                        var virtaldata1 = d3.select(".virtualrect"+10110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+20110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    } else if(parseInt(nextsensoridofaisle.sensorid) == 20111){
                        var virtaldata1 = d3.select(".virtualrect"+10110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+20111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }
                }
            }
            //若是sid  20110-10110/10111
            else if(sensoridofaisle == 20110){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 10110){
                        var virtaldata1 = d3.select(".virtualrect"+20110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+10110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)
                    }else if(parseInt(nextsensoridofaisle.sensorid) == 10111){
                        var virtaldata1 = d3.select(".virtualrect"+20110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+10111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }
                }
            }
            //若是sid   10111-20110/20111
            else if(sensoridofaisle == 10111){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 20111){
                        var virtaldata1 = d3.select(".virtualrect"+10111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+20111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }else if(parseInt(nextsensoridofaisle.sensorid) == 20110){
                        var virtaldata1 = d3.select(".virtualrect"+10111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+20110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)
                    }
                }
            }
            //若是sid   20111-10110/10111
            else if(sensoridofaisle == 20111){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 10110){
                        var virtaldata1 = d3.select(".virtualrect"+20111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)


                        var virtaldata2 = d3.select(".virtualrect"+10110)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }else if(parseInt(nextsensoridofaisle.sensorid) == 10111){
                        var virtaldata1 = d3.select(".virtualrect"+20111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)


                        var virtaldata2 = d3.select(".virtualrect"+10111)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }
                }
            }

            //扶梯2
            //若是sid   11410-21410/21411
            else if(sensoridofaisle == 11410){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 21410){
                        var virtaldata1 = d3.select(".virtualrect"+11410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)


                        var virtaldata2 = d3.select(".virtualrect"+21410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)
                    }else if(parseInt(nextsensoridofaisle.sensorid) == 21411){
                        var virtaldata1 = d3.select(".virtualrect"+11410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+21411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)
                    }
                }
            }
            //若是sid   21410-11410/11411
            else if(sensoridofaisle == 21410){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 11410){
                        var virtaldata1 = d3.select(".virtualrect"+21410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+11410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }else if(parseInt(nextsensoridofaisle.sensorid) == 11411){
                        var virtaldata1 = d3.select(".virtualrect"+21410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+11411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }
                }
            }

            //若是sid   11411-21411/21410
            else if(sensoridofaisle == 11411){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 21411){
                        var virtaldata1 = d3.select(".virtualrect"+11411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+21411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }else if(parseInt(nextsensoridofaisle.sensorid) == 21410){
                        var virtaldata1 = d3.select(".virtualrect"+11411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+21410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)
                    }
                }
            }
            //若是sid   21411-11411/11410
            else if(sensoridofaisle == 21411){
                if(parseInt(idcenter)<idperson.length) {  //先确保下一个元素存在
                    var nextsensoridofaisle = idperson[parseInt(idcenter) + 1]
                    if(parseInt(nextsensoridofaisle.sensorid) == 11411){
                        var virtaldata1 = d3.select(".virtualrect"+21411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)

                        var virtaldata2 = d3.select(".virtualrect"+11411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)

                    }else if(parseInt(nextsensoridofaisle.sensorid) == 11410){
                        //////////////////////////pid 18954：在21411-11410路径出错
                        var virtaldata1 = d3.select(".virtualrect"+21411)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot1 = {};
                        itemvirtualdot1.x = virtaldata1[1];
                        itemvirtualdot1.y = virtaldata1[2];
                        itemvirtualdot1.sensorname = idperson[idcenter].sensorid
                        itemvirtualdot1.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.1)
                        persontrackformovingdot.push(itemvirtualdot1)


                        var virtaldata2 = d3.select(".virtualrect"+11410)._groups[0][0].attributes.id.nodeValue.split(",")
                        var  itemvirtualdot2 = {};
                        itemvirtualdot2.x = virtaldata2[1];
                        itemvirtualdot2.y = virtaldata2[2];
                        itemvirtualdot2.sensorname = nextsensoridofaisle.sensorid
                        itemvirtualdot2.currenttime = parseInt(parseInt(idperson[idcenter].time)+0.2)
                        persontrackformovingdot.push(itemvirtualdot2)
                    }
                }
            }
        }
    }else{
        console.log("there has no the personid : " +prop)
    }
    pidtrack.persontrack = persontrack;
    pidtrack.persontrackformovingdot = persontrackformovingdot;



// //简化轨迹信息
//         var remaintime = 20*60;
//         var persontrackmaindot1 = [];//一个人的一楼轨迹
//         var persontrackmaindot2 = [];//一个人的二楼轨迹
//         var duringtimetemp1 = persontrack1[2].currenttime ;
//         persontrack1.forEach(function(d,i) {
//             d.duringtime =   duringtimetemp1 - d.currenttime
//             duringtimetemp1 = d.currenttime
//             if(d.duringtime>remaintime){
//                 persontrackmaindot1.push(d)
//             }
//         })
//         persontrack1[0].duringtime = persontrack2[1].duringtime
//         var duringtimetemp2 = persontrack2[2].currenttime ;
//         persontrack2.forEach(function(d,i) {
//             d.duringtime =   duringtimetemp2 - d.currenttime
//             duringtimetemp2 = d.currenttime
//             if(d.duringtime>remaintime){
//                 persontrackmaindot2.push(d)
//             }
//         })
//         //画主要的点的简化的轨迹
//         persontrack2[0].duringtime = persontrack2[1].duringtime
//         svgfloor1.append('path').attr('d', line(persontrackmaindot1)).style("stroke",color)
//             .style("stroke-width",5)
//             .attr('class', 'persontrack persontrack'+prop).transition().duration(4000)
//         svgfloor1.append('path').attr('d', line(persontrackmaindot2)).style("stroke",color)
//             .style("stroke-width",5)
//             .attr('class', 'persontrack persontrack'+prop ).transition().duration(4000)
    return pidtrack;

}

function personidtrack(prop ,color){
    d3.selectAll(".persontrack").remove();
    d3.selectAll(".personidtracktexttime").remove();
    d3.selectAll(".personidtrackdot").remove();
    d3.selectAll(".movingcircle").remove();
    d3.selectAll(".moveingtext").remove();
    d3.selectAll("#personid"+prop).attr("r",personiddotoselectedr)
        .style("opacity", 1).style("fill", color)

    let pidtracktemp = duringtimecalculate(prop)
    console.log(pidtracktemp)
    let persontrack = pidtracktemp.persontrack
    let persontrackformovingdot = pidtracktemp.persontrackformovingdot.reverse()

        //人的轨迹路线
        // svgfloor1.append('code').text('Line path data: ' + line(datatest));
        // var path = svgfloor1.append('path').attr('d', line(idperson));
        // an equivalent expression
        // var path = svgfloor1.append('path').datum(datatest).attr('d', line);

        function onDragDrop(dragHandler) {
            var drag = d3.drag();
            drag.on("drag", dragHandler)
            return drag;
        }
        function dragmove(d) {
            d3.select(this).attr("transform", function(d) {
                return "translate(" + [d3.event.x, d3.event.y] + ")rotate(" + (-45) + ")";
            })
        }

        // //比较细节点+动态的点

        var pathtemp1 = svgfloor1.append('path').attr('d', line(persontrackformovingdot)).style("stroke",color)
            .attr('class', 'persontrack persontrack'+prop).transition().duration(4000)

        //Point-Along-Path Interpolation动态的点
        var circletemp1 = svgfloor1.append("circle").style("z-index",999)
            .attr("cx",0)
            .attr("cy",0)
            .attr("r",13).attr("class","movingcircle")
            .attr("fill", color).attr("stroke", "black")

        var texttemp1 = svgfloor1.append("text").text(prop)
            .attr("x",0).attr("y",0).style("stroke-width", 3)
            .attr("r",15).style("font-size", 20).style("alignment-baseline", "hanging").style("fill", color)
            .attr("class","moveingtext")

        transition();
        function transition() {
            circletemp1.transition()
                .delay(function(d, i) { return i * 50; })
                .duration(
                    50000
                    // parseInt(persontrack[ 0 ].time)  -  parseInt(persontrack[ persontrack.length-1 ].time)
                )
                .attrTween("transform", translateAlong(pathtemp1.node()))
                .on("end", transition);

            texttemp1.transition()
                .duration(
                    50000
                    // parseInt(persontrack[ 0 ].time)  -  parseInt(persontrack[ persontrack.length-1 ].time)
                )
                .attrTween("transform", translateAlong(pathtemp1.node()))
                .on("end", transition);
        }
        function translateAlong(path) {
            var l = path.getTotalLength() * 2;
            return function(d, i, a) {
                return function(t) {
                    var p = path.getPointAtLength(t * l);
                    return "translate(" + p.x + "," + p.y + ")";
                };
            };
        }

        var duringtimetemp = persontrack[2].currenttime ;
        persontrack.forEach(function(d,i) {
            var tempduringtime = duringtimetemp - d.currenttime
            if(tempduringtime >= 18000  ){//如果天数跳变
                d.duringtime =   0
            }else{
                d.duringtime =   tempduringtime
            }
            duringtimetemp = d.currenttime

        })
        persontrack[0].duringtime = persontrack[1].duringtime


        svgfloor1.selectAll("dot")
            .data(persontrack).enter().append("circle").attr("class","personidtrackdot")
            .attr("id", function(d){
                let dayvalue = getdayvalue( d.currenttime )
                return "personidtrackdotofday"+dayvalue
            })
            .attr("cx",function(d,t){return d.x}).attr("cy",function(d,t){return d.y})
            .attr("r",function(d){
                var duringtime = d.duringtime/(60*10)
                if(duringtime>5) return (duringtime/2).toFixed(0)
                else return 5
            })
            .style("opacity", 1).style("z-index", 500)
            .style("fill", function(d){
                let dayvalue = getdayvalue( d.currenttime )
                return trackcolor[dayvalue-1]
            })
            .on("mouseover", function(d,t) {
                console.log(d)
                let dayvalue = getdayvalue( d.currenttime )
                let timestart = inputdigitaltimeformatout ("2019-07-2"+dayvalue+" 00:00:00",d.currenttime).split(" ")[1];
                let timeend = inputdigitaltimeformatout ("2019-07-2"+dayvalue+" 00:00:00",parseInt(d.currenttime)+d.duringtime).split(" ")[1];
                divfortrack.transition().duration(200)
                    .style("visibility", "visible").style("opacity", 0.9).style("z-index",500);
                divfortrack.html("personid: " + prop// +" time: " + d.currenttime+ "<br/> 逗留时间：" + d.duringtime + "秒"
                    +"<br/>第"+dayvalue+"天 "+timestart+"-"+timeend
                    + "<br/> 逗留时间：" + (d.duringtime/60).toFixed(2) + "分钟"
                )
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");

            })
            .on("mouseout", function(d) {
                divfortrack.transition()
                    .duration(500).style("visibility", "hidden").style("opacity", 0);

            });

        var temp = persontrack[1].currenttime ;
        svgfloor1.selectAll("dot")
            .data(persontrack).enter()
            .append("text")

        //     .text(function(d,t){
        //     var currenttime = temp-d.currenttime;
        //     temp = d.currenttime;
        //     if(t==0){return 0;}
        //     // return prop //+ ":" + currenttime;
        //     return (currenttime/60).toFixed(1);
        // })
            .style("opacity", //显示停留时间
                function(d,t){
                if(d.duringtime>120){return 1}
                else{return 0}
            })
            .attr("class","personidtracktexttime")
            .attr("id",function(d){
                let dayvalue = getdayvalue( d.currenttime )
                return "personidtracktexttimeday"+dayvalue
            })
            .style("font-size", 15)
            .style("alignment-baseline", "ideographic")
            .style("fill", "white")
            .attr("transform", function(d) {
                return "translate(" + [d.x-5, d.y-5] + ")rotate(" + (-45) + ")";
            })
            .call(onDragDrop(dragmove))
    trackselect();

}

function personidtrackclick(prop ,color){

    d3.selectAll("#personid"+prop).attr("r",personiddotoselectedr)
        // .style("opacity", 1).style("fill", color)

    let pidtracktemp = duringtimecalculate(prop)
    let persontrack = pidtracktemp.persontrack
    let persontrackformovingdot = pidtracktemp.persontrackformovingdot.reverse()

    let persontrackday1 = [];//一个人的第一天轨迹
    let persontrackday2 = [];//一个人的轨迹
    let persontrackday3 = [];//一个人第三天的轨迹

    pidtracktemp.persontrackformovingdot.forEach(function(d){
        if(d.currenttime<86400){
            persontrackday1.push(d)
        }else if(d.currenttime>172800){
            persontrackday3.push(d)
        }else{
            persontrackday2.push(d)
        }
    })

    //人的轨迹路线
    // svgfloor1.append('code').text('Line path data: ' + line(datatest));
    // var path = svgfloor1.append('path').attr('d', line(idperson));
    // an equivalent expression
    // var path = svgfloor1.append('path').datum(datatest).attr('d', line);

    function onDragDrop(dragHandler) {
        var drag = d3.drag();
        drag.on("drag", dragHandler)
        return drag;
    }
    function dragmove(d) {
        d3.select(this).attr("transform", function(d) {
            return "translate(" + [d3.event.x, d3.event.y] + ")rotate(" + (-45) + ")";
        })
    }

    // //比较细节点+动态的点

    var pathtemp1 = svgfloor1.append('path').attr('d', line(persontrackformovingdot))
        .style("stroke",color).style("opacity",0)
        .attr('class', 'persontrack111 persontrack'+prop).transition().duration(4000)

    var pathtempday1 = svgfloor1.append('path').attr('d', line(persontrackday1))
        .style("stroke",track3daycolor[0])
        .attr('class', 'persontrack  persontrack'+prop+" persontrackday1").transition().duration(4000)
    var pathtempday2 = svgfloor1.append('path').attr('d', line(persontrackday2))
        .style("stroke",track3daycolor[1])
        .attr('class', 'persontrack persontrack'+prop+" persontrackday2").transition().duration(4000)
    var pathtempday3 = svgfloor1.append('path').attr('d', line(persontrackday3))
        .style("stroke",track3daycolor[2])
        .attr('class', 'persontrack persontrack'+prop+" persontrackday3").transition().duration(4000)

    //Point-Along-Path Interpolation动态的点
    var circletemp1 = svgfloor1.append("rect").style("z-index",999)
        .attr("x",0).attr("y",0) .attr("height",4)
        .attr("width",4).attr("class","movingcircle")
        .attr("fill", color).attr("stroke", "black")

    var texttemp1 = svgfloor1.append("text").text(prop)
        .attr("x",0).attr("y",0).style("stroke-width", 3)
        .attr("r",8).style("font-size", 20).style("alignment-baseline", "hanging").style("fill", color)
        .attr("class","moveingtext")

    transition();
    function transition() {
        circletemp1.transition()
            .delay(function(d, i) { return i * 50; })
            .duration(50000
                // parseInt(persontrack[ 0 ].time)  -  parseInt(persontrack[ persontrack.length-1 ].time)
            )
            .attrTween("transform", translateAlong(pathtemp1.node()))
            .on("end", transition);

        texttemp1.transition()
            .duration(50000
                // parseInt(persontrack[ 0 ].time)  -  parseInt(persontrack[ persontrack.length-1 ].time)
            )
            .attrTween("transform", translateAlong(pathtemp1.node()))
            .on("end", transition);
    }
    function translateAlong(path) {
        var l = path.getTotalLength() * 2;
        return function(d, i, a) {
            return function(t) {
                var p = path.getPointAtLength(t * l);
                return "translate(" + p.x + "," + p.y + ")";
            };
        };
    }


    var duringtimetemp = persontrack[2].currenttime ;
    persontrack.forEach(function(d,i) {
        var tempduringtime = duringtimetemp - d.currenttime
        if(tempduringtime >= 18000  ){//如果天数跳变
            d.duringtime =   0
        }else{
            d.duringtime =   tempduringtime
        }
        duringtimetemp = d.currenttime

    })
    persontrack[0].duringtime = persontrack[1].duringtime


    svgfloor1.selectAll("dot")
        .data(persontrack).enter().append("circle").attr("class","personidtrackdot")
        .attr("id", function(d){
            let dayvalue = getdayvalue( d.currenttime )
            return "personidtrackdotofday"+dayvalue
        })
        .attr("cx",function(d,t){return d.x}).attr("cy",function(d,t){return d.y})
        .style("fill", function(d){
            let dayvalue = getdayvalue( d.currenttime )
            return track3daycolor[dayvalue-1]
        })
        .style("opacity", 0.5).style("z-index", 500)
        .attr("r",function(d){
            var ridius = Math.sqrt(Math.sqrt(d.duringtime))-2;
            if(ridius < 0){return 0;}
            else return ridius
        })
        // .style("opacity",function(d){
        //     if(d.duringtime/60>5) return 1
        //     else return 0;
        // })
        .on("mouseover", function(d,t) {
            let dayvalue = getdayvalue( d.currenttime )
            let timestart = inputdigitaltimeformatout ("2019-07-2"+dayvalue+" 00:00:00",d.currenttime).split(" ")[1];
            let timeend = inputdigitaltimeformatout ("2019-07-2"+dayvalue+" 00:00:00",parseInt(d.currenttime)+d.duringtime).split(" ")[1];
            divfortrack.transition().duration(200)
                .style("visibility", "visible").style("opacity", 0.9).style("z-index",500);
            divfortrack.html("personid: " + prop// +" time: " + d.currenttime+ "<br/> 逗留时间：" + d.duringtime + "秒"
                +"<br/>第"+dayvalue+"天 "+timestart+"-"+timeend
                + "<br/> 逗留时间：" + (d.duringtime/60).toFixed(2) + "分钟"
            )
                .style("left", (d3.event.pageX - 400) + "px")
                .style("top", (d3.event.pageY - 28) + "px");

        })
        .on("mouseout", function(d) {
            divfortrack.transition()
                .duration(500).style("visibility", "hidden").style("opacity", 0);
        });

    var temp = persontrack[1].currenttime ;
    svgfloor1.selectAll("rect")
        .data(persontrack).enter()
        .append("text")
        // .text(function(d,t){
        // var currenttime = temp-d.currenttime;
        // temp = d.currenttime;
        // if(t==0){return 0;}
        // // return prop //+ ":" + currenttime;
        // return (currenttime/60).toFixed(1) ;
        // })
        .style("opacity", //0)显示停留时间
                function(d,t){
                if(d.duringtime>120){return 1}
                else{return 0}
            })
        .attr("class","personidtracktexttime")
        .attr("id",function(d){
            let dayvalue = getdayvalue( d.currenttime )
            return "personidtracktexttimeday"+dayvalue
        })
        .style("font-size", 12)
        .style("alignment-baseline", "ideographic")
        .style("fill", "white")
        .attr("transform", function(d) {
            return "translate(" + [d.x-5, d.y-5] + ")rotate(" + (-45) + ")";
        })
        .call(onDragDrop(dragmove))
    trackselect()
}

function trackselect(){
    let selectvalue = document.getElementById("dayvalue").value;
    if(selectvalue == 0){
        d3.selectAll(".persontrackday1" ).attr("opacity",1)
        d3.selectAll(".persontrackday2" ).attr("opacity",1)
        d3.selectAll(".persontrackday3" ).attr("opacity",1)

        d3.selectAll("#personidtrackdotofday1" ).style("opacity",1)
        d3.selectAll("#personidtrackdotofday2" ).style("opacity",1)
        d3.selectAll("#personidtrackdotofday3" ).style("opacity",1)

        d3.selectAll("#personidtracktexttimeday1" ).style("opacity",1)
        d3.selectAll("#personidtracktexttimeday2" ).style("opacity",1)
        d3.selectAll("#personidtracktexttimeday3" ).style("opacity",1)
    }else if(selectvalue == 1){
        d3.selectAll(".persontrackday1" ).attr("opacity",1)
        d3.selectAll(".persontrackday2" ).attr("opacity",0)
        d3.selectAll(".persontrackday3" ).attr("opacity",0)

        d3.selectAll("#personidtrackdotofday1" ).style("opacity",1)
        d3.selectAll("#personidtrackdotofday2" ).style("opacity",0)
        d3.selectAll("#personidtrackdotofday3" ).style("opacity",0)

        d3.selectAll("#personidtracktexttimeday1" ).style("opacity",1)
        d3.selectAll("#personidtracktexttimeday2" ).style("opacity",0)
        d3.selectAll("#personidtracktexttimeday3" ).style("opacity",0)
    }else if(selectvalue == 2){
        d3.selectAll(".persontrackday1" ).attr("opacity",0)
        d3.selectAll(".persontrackday2" ).attr("opacity",1)
        d3.selectAll(".persontrackday3" ).attr("opacity",0)

        d3.selectAll("#personidtrackdotofday1" ).style("opacity",0)
        d3.selectAll("#personidtrackdotofday2" ).style("opacity",1)
        d3.selectAll("#personidtrackdotofday3" ).style("opacity",0)

        d3.selectAll("#personidtracktexttimeday1" ).style("opacity",0)
        d3.selectAll("#personidtracktexttimeday2" ).style("opacity",1)
        d3.selectAll("#personidtracktexttimeday3" ).style("opacity",0)
    }else if(selectvalue == 3){
        d3.selectAll(".persontrackday1" ).attr("opacity",0)
        d3.selectAll(".persontrackday2" ).attr("opacity",0)
        d3.selectAll(".persontrackday3" ).attr("opacity",1)

        d3.selectAll("#personidtrackdotofday1" ).style("opacity",0)
        d3.selectAll("#personidtrackdotofday2" ).style("opacity",0)
        d3.selectAll("#personidtrackdotofday3" ).style("opacity",1)

        d3.selectAll("#personidtracktexttimeday1" ).style("opacity",0)
        d3.selectAll("#personidtracktexttimeday2" ).style("opacity",0)
        d3.selectAll("#personidtracktexttimeday3" ).style("opacity",1)
    }


}

function severalpersonidtrackclick(prop,color,day){

    d3.selectAll("#personid"+prop).attr("r",personiddotoselectedr)
        .style("opacity", 1).style("fill", color)

    let pidtracktemp = duringtimecalculate(prop)
    let persontrack = pidtracktemp.persontrack
    let persontrackformovingdot = pidtracktemp.persontrackformovingdot.reverse()

    let persontrackday1 = [];//一个人的第一天轨迹
    let persontrackday2 = [];//一个人的轨迹
    let persontrackday3 = [];//一个人第三天的轨迹

    pidtracktemp.persontrackformovingdot.forEach(function(d){
        if(d.currenttime<86400){
            persontrackday1.push(d)
        }else if(d.currenttime>172800){
            persontrackday3.push(d)
        }else{
            persontrackday2.push(d)
        }
    })

    function onDragDrop(dragHandler) {
        var drag = d3.drag();
        drag.on("drag", dragHandler)
        return drag;
    }
    function dragmove(d) {
        d3.select(this).attr("transform", function(d) {
            return "translate(" + [d3.event.x, d3.event.y] + ")rotate(" + (-45) + ")";
        })
    }

    function transition(daypath) {
        circletemp1.transition()
            .delay(function(d, i) { return i * 50; })
            .duration(50000
                // parseInt(persontrack[ 0 ].time)  -  parseInt(persontrack[ persontrack.length-1 ].time)
            )
            .attrTween("transform", translateAlong(daypath.node()))
            .on("end", transition);

        texttemp1.transition()
            .duration(50000
                // parseInt(persontrack[ 0 ].time)  -  parseInt(persontrack[ persontrack.length-1 ].time)
            )
            .attrTween("transform", translateAlong(daypath.node()))
            .on("end", transition);
    }
    function translateAlong(path) {
        var l = path.getTotalLength() * 2;
        return function(d, i, a) {
            return function(t) {
                var p = path.getPointAtLength(t * l);
                return "translate(" + p.x + "," + p.y + ")";
            };
        };
    }



    //Point-Along-Path Interpolation动态的点
    var circletemp1 = svgfloor1.append("rect").style("z-index",999)
        .attr("x",0).attr("y",0).attr("width",8)
        .attr("height",8).attr("class","movingcircle")
        .attr("fill", color).attr("stroke", "black")

    var texttemp1 = svgfloor1.append("text").text(prop)
        .attr("x",0).attr("y",0).style("stroke-width", 3)
        .attr("r",8).style("font-size", 20).style("alignment-baseline", "hanging").style("fill", color)
        .attr("class","moveingtext")

    if(day==1){
        var pathtempday1 = svgfloor1.append('path').attr('d', line(persontrackday1))
            .style("stroke",track3daycolor[0]).style("opacity",1)
            .attr('class', 'persontrack  persontrack'+prop+" persontrackday1")
            .transition().duration(4000)
        transition(pathtempday1);//某一天或者三天的path天path动态
    }else if(day==2){
        var pathtempday2 = svgfloor1.append('path').attr('d', line(persontrackday2))
            .style("stroke",track3daycolor[1]).style("opacity",1)
            .attr('class', 'persontrack persontrack'+prop+" persontrackday2").transition().duration(4000)
        transition(pathtempday2);//某一天或者三天的path天path动态
    }else if(day==3){
        var pathtempday3 = svgfloor1.append('path').attr('d', line(persontrackday3))
            .style("stroke",track3daycolor[2]).style("opacity",1)
            .attr('class', 'persontrack persontrack'+prop+" persontrackday3").transition().duration(4000)
        transition(pathtempday3);//某一天或者三天的path天path动态
    }


    var duringtimetemp = persontrack[2].currenttime ;
    persontrack.forEach(function(d,i) {
        var tempduringtime = duringtimetemp - d.currenttime
        if(tempduringtime >= 18000  ){//如果天数跳变
            d.duringtime =   0
        }else{
            d.duringtime =   tempduringtime
        }
        duringtimetemp = d.currenttime

    })
    persontrack[0].duringtime = persontrack[1].duringtime


    svgfloor1.selectAll("dot")
        .data(persontrack).enter().append("circle").attr("class","personidtrackdot")
        .attr("id", function(d){
            let dayvalue = getdayvalue( d.currenttime )
            return "personidtrackdotofday"+dayvalue
        })
        .attr("cx",function(d,t){return d.x}).attr("cy",function(d,t){return d.y})
        .style("fill", function(d){
            let dayvalue = getdayvalue( d.currenttime )
            return trackcolor[dayvalue-1]
        })
        .style("opacity", 0.5).style("z-index", 500)
        .attr("r",function(d){
            var ridius = Math.sqrt(Math.sqrt(d.duringtime))-2;
            if(ridius < 0){return 0;}
            else return ridius
        })

        .on("mouseover", function(d,t) {
            let dayvalue = getdayvalue( d.currenttime )
            let timestart = inputdigitaltimeformatout ("2019-07-2"+dayvalue+" 00:00:00",d.currenttime).split(" ")[1];
            let timeend = inputdigitaltimeformatout ("2019-07-2"+dayvalue+" 00:00:00",parseInt(d.currenttime)+d.duringtime).split(" ")[1];
            divfortrack.transition().duration(200)
                .style("visibility", "visible").style("opacity", 0.9).style("z-index",500);
            divfortrack.html("personid: " + prop// +" time: " + d.currenttime+ "<br/> 逗留时间：" + d.duringtime + "秒"
                +"<br/>第"+dayvalue+"天 "+timestart+"-"+timeend
                + "<br/> 逗留时间：" + (d.duringtime/60).toFixed(2) + "分钟"
            )
                .style("left", (d3.event.pageX - 400) + "px")
                .style("top", (d3.event.pageY - 28) + "px");

        })
        .on("mouseout", function(d) {
            divfortrack.transition()
                .duration(500).style("visibility", "hidden").style("opacity", 0);
        });

    var temp = persontrack[1].currenttime ;
    svgfloor1.selectAll("dot")
        .data(persontrack).enter()
        .append("text")
        .style("opacity", //0)显示停留时间
            function(d,t){
                if(d.duringtime>120){return 1}
                else{return 0}
            })
        .attr("class","personidtracktexttime")
        .attr("id",function(d){
            let dayvalue = getdayvalue( d.currenttime )
            return "personidtracktexttimeday"+dayvalue
        })
        .style("font-size", 12)
        .style("alignment-baseline", "ideographic")
        .style("fill", "white")
        .attr("transform", function(d) {
            return "translate(" + [d.x-5, d.y-5] + ")rotate(" + (-45) + ")";
        })
        .call(onDragDrop(dragmove))
    trackselect()
}

