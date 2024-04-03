
showadaymatrix(1);
function showdynamicmatrix(){
    let dayvalue = document.getElementById("dayvalue").value
    if(dayvalue!=0){
        showadaymatrix(dayvalue)
    }
}

function showadaymatrix(dayvalue){
    d3.selectAll("#svg-matrixcalendar").remove()
    var colums = []
    d3.csv("data/meeetingnumcount/tenMinutesDay"+dayvalue+"PositionNomber.csv",function(error,datatemp){
        datatemp.forEach(function(d,i){

            var item0 = {} ;   item0.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item0.variable = "confA";item0.value = parseInt(d.confA);  colums.push(item0)
            var item1 = {} ;   item1.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item1.variable = "confB";item1.value = parseInt(d.confB);  colums.push(item1)
            var item2 = {} ;   item2.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item2.variable = "confC";item2.value = parseInt(d.confC);  colums.push(item2)
            var item3 = {} ;   item3.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item3.variable = "confD";item3.value = parseInt(d.confD); colums.push(item3)
            var item4 = {} ;   item4.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item4.variable = "signDesk";item4.value = parseInt(d.signDesk); colums.push(item4)
            var item5 = {} ;   item5.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item5.variable = "poster";item5.value = parseInt(d.poster); colums.push(item5)
            var item6 = {} ;   item6.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item6.variable = "wc1";item6.value = parseInt(d.wc1); colums.push(item6)
            var item7 = {} ;   item7.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item7.variable = "wc2";item7.value = parseInt(d.wc2); colums.push(item7)
            var item8 = {} ;   item8.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item8.variable = "wc3";item8.value = parseInt(d.wc3); colums.push(item8)
            var item9 = {} ;   item9.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item9.variable = "room1";item9.value = parseInt(d.room1); colums.push(item9)
            var item10 = {} ;   item10.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item10.variable = "room2";item10.value = parseInt(d.room2); colums.push(item10)
            var item11 = {} ;   item11.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item11.variable = "room3";item11.value = parseInt(d.room3); colums.push(item11)
            var item12 = {} ;   item12.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item12.variable = "room4";item12.value = parseInt(d.room4); colums.push(item12)
            var item13 = {} ;   item13.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item13.variable = "room5";item13.value = parseInt(d.room5); colums.push(item13)
            var item14 = {} ;   item14.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item14.variable = "room6";item14.value = parseInt(d.room6); colums.push(item14)
            var item15 = {} ;   item15.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item15.variable = "exhibition";item15.value = parseInt(d.exhibition); colums.push(item15)
            var item16 = {} ;   item16.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item16.variable = "mainMeeting";item16.value = parseInt(d.mainMeeting); colums.push(item16)
            var item17 = {} ;   item17.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item17.variable = "restaurant";item17.value = parseInt(d.restaurant); colums.push(item17)
            var item18 = {} ;   item18.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item18.variable = "relaxRoom";item18.value = parseInt(d.relaxRoom); colums.push(item18)
            var item19 = {} ;   item19.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item19.variable = "escalator";item19.value = parseInt(d.escalator); colums.push(item19)
            var item20 = {} ;   item20.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item20.variable = "importExport";item20.value = parseInt(d.importExport); colums.push(item20)
            var item21 = {} ;   item21.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item21.variable = "secondAisle";item21.value = parseInt(d.secondAisle); colums.push(item21)
            var item22 = {} ;   item22.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item22.variable = "firstAisle";item22.value = parseInt(d.firstAisle); colums.push(item22)
            var item23 = {} ;   item23.group = d.time.split(":")[0]+":"+d.time.split(":")[1];  item23.variable = "serviceRoom";item23.value = parseInt(d.serviceRoom); colums.push(item23)
        })

        var data = colums;


        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 25, bottom: 30, left: 20},
            width = document.querySelector('#matrixcalendar').clientWidth - 40
            height = document.querySelector('#matrixcalendar').clientHeight - 20

        // append the svg object to the body of the page
        var svg = d3.select("#matrixcalendar")
            .append("svg").attr("id","svg-matrixcalendar")
            .attr("left", "0px")
            .attr("position", "absolute")
            .attr("width", width + 300)
            .attr("height", height+20 ).append("g")
            .attr("transform", "translate(" + (margin.left-15) + "," + margin.top + ")")

        //Read the data


        // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
        var myGroups = d3.map(data, function(d){return d.group;}).keys()
        var myVars = d3.map(data, function(d){return d.variable;}).keys()

        var x = d3.scaleTime().range([0,width]).domain([new Date("2019/7/21 07:00:00"),
            new Date("2019/7/21 18:00:00")]);

        var xAxis = d3.axisBottom()
            .scale(x).ticks(15);

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

        // Build X scales and axis:
        var x = d3.scaleBand()
            .range([ 0, width ])
            .domain(myGroups)
            .padding(0.05)
        svg.append("g").attr("class", "axisWhite matrixaxistext")
            .style("font-size", 12)
            .style("font", "red").style("background", "blue")
            .attr("transform", "translate(3,-10)")
            .call(xAxis.tickFormat(locale.format("%H:%M")),function(){})
            .select(".domain").remove()



        // Build Y scales and axis:
        var y = d3.scaleBand()
            .range([ height, 10 ])
            .domain(myVars)
            .padding(0.05);
        svg.append("g").attr("transform", "translate(605,3)")
            .style("font-size", 8).attr("class", "axisWhite matrixaxistext")
            .call(d3.axisLeft(y).tickSize(0)).attr("id","matrixaxis")
            .select(".domain").remove()

            // .selectAll("text").remove()
        // d3.selectAll("g#matrixaxis").selectAll("g").remove();
        // Build color scale
        var myColor = d3.scaleSequential()
            .interpolator(d3.interpolateInferno)
            .domain([1,100])

        // create a tooltip
        var tooltipmatrix = d3.select("#matrixcalendar")
            .append("div")
            .style("opacity", 0)
            .style("width", "200px")
            .attr("class", "tooltipmatrix")
            .style("background-color", "#eee")
            .style("box-shadow", "0 0 5px #999999")
            .style("border-width", "3px")
            .style("border-radius", "3px")
            .style("padding", "3px")
            .style("position","absolute")

        // Three function that change the tooltip when user hover / move / leave a cell

        // add the squares
        svg.selectAll()
            .data(data, function(d) {return d.group+':'+d.variable;})
            .enter()
            .append("rect").attr("class",function(d,i){
            return "matrixrect "+ "matrixrect" +i
        })
            .attr("id",function(d){
            return "matrixrecttime" + d.group+"meeting" + d.variable

        })
            .attr("x", function(d) { return x(d.group) })
            .attr("y", function(d) { return y(d.variable) })
            .attr("rx", 10).attr("ry", 4)
            .attr("width", x.bandwidth() )
            .attr("height", y.bandwidth() )
            .style("fill", "#d1ff0c" ).style("stroke-width", 4).style("stroke", "none")
            .style("opacity", function(d){ return d.value/2000})
            .on("mouseover", function(d) {
                let day = document.getElementById("dayvalue").value;
                let formattime = "第"+ day +"天 "+d.group
                if(day == 0 ){
                    formattime = "第1天 "+d.group
                }

                tooltipmatrix.html(" " +formattime +"</br>"
                          + d.variable+":  " + d.value)
                    .style("opacity", 1).style("left", (d3.event.layerX) + 10 + "px")
                    .style("top", function(){
                        return (d3.event.layerY) - 100 + "px"
                    })
                d3.select(this).style("fill", "red" ).style("opacity", 1)
                d3.selectAll("#"+d.variable).style("fill","yellow").style("opacity", 1)

                let aa = this.getAttribute("id")
                if((aa == "matrixrecttime7:30meetingroom6"||aa == "matrixrecttime7:20meetingroom6") && (day == 0||day == 1)){
                    d3.select(".matrixrect62").style("opacity",0.1)
                    d3.select(".matrixrect86").style("opacity",0.3)
                }

            })
            .on("mouseout", function(d) {
                tooltipmatrix.style("opacity", 0)
                d3.select(this).style("fill", "#d1ff0c" )
                    .style("opacity", d.value/2000)
                d3.selectAll("#"+d.variable).style("fill","white").style("opacity", 0.2)

                let aa = this.getAttribute("id")
                let day = document.getElementById("dayvalue").value;
                if((aa == "matrixrecttime7:30meetingroom6"||aa == "matrixrecttime7:20meetingroom6") && (day == 0||day == 1)){

                    d3.select(".matrixrect62").style("opacity",0.1)
                    d3.select(".matrixrect86").style("opacity",0.3)
                }
            })
            .on("click", function(d){
                // // selectedheatmap(d.group,d.variable);//输入时间和展厅
                let formattime = "2019/7/2"+(parseInt(document.getElementById("dayvalue").value)+1)+" "+d.group+":00"
                // d3.selectAll(".layoutrect").style("fill","white").style("opacity",0.1)

                let aa = this.getAttribute("id")
                console.log(aa)
                let day = document.getElementById("dayvalue").value;
                if((aa == "matrixrecttime7:30meetingroom6"||aa == "matrixrecttime7:20meetingroom6") && (day == 0||day == 1)){
                    d3.select(".matrixrect62").style("opacity",0.1)
                    d3.select(".matrixrect86").style("opacity",0.3)
                }
                givetimereturnheamap(formattime);
                playfair(alldaydatamapforplayfire[d.variable],"#playfireformeeting",d.variable)
            })
    })

}