
var colums = []
d3.csv("data/meeetingnumcount/tenMinutesDay2PositionNomber.csv",function(error,datatemp) {
    var item0 = {};
    item0.variable = "firstAisle";
    item0.value = new Array()
    colums.push(item0)
    var item1 = {};
    item1.variable = "secondAisle";
    item1.value = new Array()
    colums.push(item1)
    var item2 = {};
    item2.variable = "importExport";
    item2.value = new Array()
    colums.push(item2)
    var item3 = {};
    item3.variable = "mainMeeting";
    item3.value = new Array()
    colums.push(item3)
    var item4 = {};
    item4.variable = "confA";
    item4.value =  new Array()
    colums.push(item4)
    var item5 = {};
    item5.variable = "confB";
    item5.value =  new Array()
    colums.push(item5)
    var item6 = {};
    item6.variable = "confC";
    item6.value =  new Array()
    colums.push(item6)
    var item7 = {};
    item7.variable = "confD";
    item7.value =  new Array()
    colums.push(item7)
    var item8 = {};
    item8.variable = "escalator";
    item8.value =  new Array()
    colums.push(item8)
    var item9 = {};
    item9.variable = "exhibition";
    item9.value =  new Array()
    colums.push(item9)
    var item10 = {};
    item10.variable = "poster";
    item10.value =  new Array()
    colums.push(item10)
    var item11 = {};
    item11.variable = "relaxRoom";
    item11.value =  new Array()
    colums.push(item11)
    var item12 = {};
    item12.variable = "restaurant";
    item12.value =  new Array()
    colums.push(item12)
    var item13 = {};
    item13.variable = "room1";
    item13.value =  new Array()
    colums.push(item13)
    var item14 = {};
    item14.variable = "room2";
    item14.value =  new Array()
    colums.push(item14)
    var item15 = {};
    item15.variable = "room3";
    item15.value =  new Array()
    colums.push(item15)
    var item16 = {};
    item16.variable = "room4";
    item16.value =  new Array()
    colums.push(item16)
    var item17 = {};
    item17.variable = "room5";
    item17.value =  new Array()
    colums.push(item17)
    var item18 = {};
    item18.variable = "room6";
    item18.value =  new Array()
    colums.push(item18)
    var item19 = {};
    item19.variable = "serviceRoom";
    item19.value =  new Array()
    colums.push(item19)
    var item20 = {};
    item20.variable = "signDesk";
    item20.value =  new Array()
    colums.push(item20)
    var item21 = {};
    item21.variable = "wc1";
    item21.value =  new Array()
    colums.push(item21)
    var item22 = {};
    item22.variable = "wc2";
    item22.value =  new Array()
    colums.push(item22)
    var item23 = {};
    item23.variable = "wc3";
    item23.value =  new Array()
    colums.push(item23)
    datatemp.forEach(function (d, i) {
        item0.value.push( [d.time , parseInt( d.firstAisle  ) ] )
        item1.value.push( [d.time , parseInt( d.secondAisle ) ] )
        item2.value.push( [d.time , parseInt( d.importExport  ) ] )
        item3.value.push( [d.time , parseInt( d.mainMeeting   ) ] )
        item4.value.push( [d.time , parseInt( d.confA ) ] )
        item5.value.push( [d.time , parseInt( d.confB  ) ] )
        item6.value.push( [d.time , parseInt( d.confC  ) ] )
        item7.value.push( [d.time , parseInt( d.confD  ) ] )
        item8.value.push( [d.time , parseInt( d.escalator  ) ] )
        item9.value.push( [d.time , parseInt( d.exhibition  ) ] )
        item10.value.push( [d.time , parseInt( d.poster  ) ] )
        item11.value.push( [d.time , parseInt( d.relaxRoom  ) ] )
        item12.value.push( [d.time , parseInt( d.restaurant  ) ] )
        item13.value.push( [d.time , parseInt( d.room1 ) ] )
        item14.value.push( [d.time , parseInt( d.room2 ) ] )
        item15.value.push( [d.time , parseInt( d.room3  ) ] )
        item16.value.push( [d.time , parseInt( d.room4 ) ] )
        item17.value.push( [d.time , parseInt( d.room5 ) ] )
        item18.value.push( [d.time , parseInt( d.room6 ) ] )
        item19.value.push( [d.time , parseInt( d.serviceRoom ) ] )
        item20.value.push( [d.time , parseInt( d.signDesk  ) ] )
        item21.value.push( [d.time , parseInt( d.wc1 ) ] )
        item22.value.push( [d.time , parseInt( d.wc2 ) ] )
        item23.value.push( [d.time , parseInt( d.wc3 ) ] )
    })


    var regionvolumeplotchartdata = new Array()
    for(var tt = 0 ; tt <colums.length ; tt++){
        regionvolumebarchart('#cm-menu-content', colums[tt], 32)
    }


    for(var i = 0 ; i <colums.length ; i++){
        var regionname = colums[i].variable
        var regionvalue = colums[i].value
        for(var p = 0 ; p <regionvalue.length; p++){
            if( regionvalue[p][1]!=0 ){
                var item = {
                    date : regionname,
                    id : regionvalue[p][0],
                    value : Math.sqrt(Math.sqrt(regionvalue[p][1]))
                }
                regionvolumeplotchartdata.push( item )
            }

        }
    }

    Chartforregionvolumplot("#regionvolumplotchart" , regionvolumeplotchartdata)
    d3.select("#regionvolumplotchart").style("transform","rotate(90deg)")
        .style("z-index","999")
    d3.select("#chart-distro1").selectAll(".chart-area").selectAll("g.x.axis").selectAll("text").remove();
    d3.select("#chart-distro1").selectAll(".chart-area").selectAll("g.y.axis").selectAll("text").remove();
    d3.select("#chart-distro1").selectAll(".chart-area").selectAll("g.y.axis").selectAll("line").remove();
    // d3.select(".chart-area").selectAll("circle").remove()
    d3.select(".chart-area").attr("height",303).style("translate(-10,-10)")//(12,20)
    d3.select(".chart-options").style("transform","rotate(-90deg)")
        .style("top","555px")
        .style("left","596px")
        .style("min-width",null)
        .style("width","30px")


    d3.select(".chart-wrapper").style("visibility","visible")
    d3.select("#cm-menu-content").selectAll("svg").selectAll(".domain").remove()

    d3.select(".chart-area").selectAll(".box-plot").selectAll("line")
        .style("stroke-width","0.5px").style("stroke","black")
    d3.select(".chart-area").selectAll(".box-plot").selectAll("rect")
        .style("stroke","black").style("stroke-width","0.5px")//.style("fill","white")
    d3.select(".chart-area").selectAll(".box-plot").selectAll("circle")
        .style("stroke","black").style("stroke-width","0.5px").style("fill","white")



})

//每个区域的流量
function regionvolumebarchart(divid, Datatemp , svgpositionheight){
    var sData = Datatemp.value
    var weeks  = []
    var values = []
    sData.forEach(function(d){
        weeks.push(d[0])
        values.push(d[1])
    })
    var someData = sData
    // // Creating new arrays from the data, separating weeks from the numbers
    // var weeks  = Object.keys(sData);
    // var values = Object.values(sData);
    // var someData = Object.keys(sData).map(function(key) {
    //     return [key, sData[key]];
    // });

    // Setting the margin and dimensions of the work area
    var margin = {top: -2, right: 10, bottom: 5, left: 70},
        width = 210 - margin.left - margin.right,
        height = svgpositionheight - margin.top - margin.bottom;
    var sliderwidth = width + margin.left + margin.right - 80
    // Creating the scale variables and setting the ranges
    var xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1),
        yScale = d3.scaleLinear().rangeRound([height, 0]);

    // Adjusting data by assigning domain to the range of the scale
    xScale.domain(weeks)
    yScale.domain([0, d3.max(values)-5])

    // Appending the svg object to the div on the page
    var svg = d3.select(divid).append('svg')
        .attr("class", "volumebarchart" + Datatemp.variable )
        .attr("id", "volumebarchart" + Datatemp.variable )
        .attr('width', width + margin.left + margin.right )
        .attr('height', height + margin.top + margin.bottom)

    $("#volumebarchart" + Datatemp.variable)
        .on("mousedown", function(event){
            var volumebarchartrecttempdiv =  d3.select("body").append("div")
                .attr("class", "volumebarchartrecttemp")
                .style("position","absolute")
                .style("top",event.clientY +"px")
                .style("left",event.clientX+"px")
                .style("opacity", 0.5)
                .style("background","black")
            volumebarchartrecttempdiv.html( Datatemp.variable )

            var flag = d3.selectAll("#regionflagcircle"+Datatemp.variable)._groups[0][0].getAttribute("flag");
            if(flag == "true"){
                d3.selectAll("#regionflagcircle"+Datatemp.variable)
                    .style("fill", "red") .attr("flag",false)
                d3.selectAll("#text" + Datatemp.variable)
                    .style("fill", "red")

                //sliderbar转换位置
                d3.select("#slider" +  Datatemp.variable).attr('transform', translate(sliderwidth-5, 0));
                d3.select("#slidertext" +  Datatemp.variable)
                    .text("1.00")//.attr('transform', translate(x, 0));


            }else{
                d3.selectAll("#regionflagcircle"+Datatemp.variable)
                    .style("fill", "black").attr("flag",true)
                d3.selectAll("#text"+Datatemp.variable)
                    .style("fill", "black")

                //sliderbar转换位置
                d3.select("#slider" +  Datatemp.variable).attr('transform', translate(0, 0));
                d3.select("#slidertext" +  Datatemp.variable)
                    .text("0.00")//.attr('transform', translate(x, 0));


            }

        })
    d3.select("#volumebarchart" + Datatemp.variable).call(d3.drag()
        .on('drag', function(){
            d3.select(".volumebarchartrecttemp")
                .style('left', d3.event.sourceEvent.clientX + "px" )
                .style('top', d3.event.sourceEvent.clientY + "px" );
        })
        .on('end', function(d){
            d3.selectAll(".volumebarchartrecttemp").remove()
        })
    )

    svg.append("text").attr('font-weight', 50).attr("id", "text" + Datatemp.variable)
        .attr('text-anchor', 'left').attr('font-size', '10')
        .attr("x", 20 )
        .attr("y", height + margin.top + margin.bottom -8 )
        .attr("dy", ".35em")
        .text( Datatemp.variable )
        .attr("fill", "black")
    // svg.append("circle").attr('font-weight', 50)
    //     .attr("id", "regionflagcircle" + Datatemp.variable )
    //     .attr("fill", "black" )
    //     .attr("cx", 64 )
    //     .attr("cy", height + margin.top + margin.bottom - 10 )
    //     .attr("r", "4")
    //     .attr("flag",true)


    // Appending the 'group' element to the svg
    // Moving the 'group' element to the top left margin
    var g = svg.append('g')
        .attr('transform', 'translate(' + (-25) + ',' + (-10) + ')');

    //// Appending X axis and formatting the text
    g.append('g')
        .attr('class', 'axisX')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale))
        .selectAll(".tick").remove()
    // .attr('font-weight', 'bold');

    // // Appending Y axis
    // g.append('g')
    //     .attr('class', 'axisY')
    //     .call(d3.axisLeft(yScale).ticks(10));

    // Creating chart
    var chart = g.selectAll('bar')
        .data(someData)
        .enter().append('g')

    // Appending bar chart to the chart
    chart.append('rect')
        .attr('class', 'regionvolumebar')
        .attr('x', function(d) { return xScale(d[0]); })
        .attr('height', function(d) { return height - yScale(d[1]); })
        .attr('y', function(d) { return yScale(d[1]); })
        .attr('width', xScale.bandwidth())
        .attr("fill", meetingroom[Datatemp.variable])

    // // Appending text to each bar chart
    // chart.append('text')
    //     .attr('class', 'barText')
    //     .attr('x', function(d) { return xScale(d[0]) })
    //     .attr('y', function(d) { return yScale(d[1]); })
    //     .attr('dx', xScale.bandwidth()/2)
    //     .attr('dy', 20)
    //     .attr('text-anchor', 'middle')
    //     .text(function(d){ return d[1]; });

    // Adding mouseover and mouseout functions to the chart
    chart.on('mouseover', function(d){
        d3.select(this).attr('opacity', 0.7);

        // svg.append("text") // polygonin Legend Text shadow
        //     .attr("x", function() { return xScale(d[0]) })
        //     .attr("y", function() { return yScale(d[1]) })
        //     .attr("dy", ".91em").attr("class", "timecounrtemp")
        //     .style("font-size", "15px")
        //     .attr("fill", "black")
        //     .text( function(){console.log(d); return d[0]+": " + d[1]})

    })
        .on('mouseout', function(d){
            d3.select(this).attr('opacity', 1)
        })



    // var scaletest = d3.scaleLinear()
    //     .domain([0,1])
    //     .range([0, sliderwidth])
    //     .clamp(true)
    // var sliderxScale = d3.scaleLinear().range([0, sliderwidth]).domain(0,1)

    //draw slider
    var slidersvg = d3.select(divid).append('svg').attr("id", "slidersvg" + Datatemp.variable )
        .attr('width', sliderwidth)
        .attr('height', 25)
        .style("position","absolute")
        .style("left","10px")


    // var slider = slidersvg.append('g')
    //     .attr("class", "slider")
    //     .attr("id", "slider" +  Datatemp.variable)
    //     .call(d3.drag().on('drag', dragged));
    //
    // var rectWidth = 4;
    // var rect = slider.append("rect")
    //     .attr("x", 0)
    //     .attr("y", 18)
    //     .attr("width", rectWidth)
    //     .attr("height", 7);
    //
    //
    // var slidertext = slider.append("text")
    //     .attr("x", 4).attr("y", 18)
    //     .attr("dy", ".91em")
    //     .attr("class", "slidertext")
    //     .attr("id", "slidertext" +  Datatemp.variable)
    //     .style("font-size", "7px")
    //     .attr("fill", "black")
    //     .text("0.00")
    //
    //
    // var line = slider.append("line")
    //     .attr('y2', 20 )
    //     .attr('x2', 2)
    //     .attr('stroke-dasharray', '1,1');
    //
    // function dragged(d) {
    //     var x = Math.min(Math.max(d3.event.x, 0), sliderwidth - 5);
    //     var weight = x /(sliderwidth - 5)
    //     d3.select("#slider" +  Datatemp.variable).attr('transform', translate(x, 0));
    //     d3.select("#slidertext" +  Datatemp.variable)
    //         .text(weight.toFixed(2))//.attr('transform', translate(x, 0));
    // }
    //
    //
    // function translate(x, y) {
    //     return 'translate(' + x + ',' + y + ')';
    // }
}
var regionvolumeplotchart;
function Chartforregionvolumplot(divname ,data){

    var divwidth = document.querySelector(divname).clientWidth - 10
    var divheight = document.querySelector(divname).clientHeight - 20
    regionvolumeplotchart = makeDistroChartforregionvolum({
            data:data,
            xName:'date',
            yName:'value',
            // axisLabels: {xAxis: null, yAxis: 'Values'},
            selector: "#chart-distro1",
            chartSize:{height:divheight, width:divwidth},
            constrainExtremes:true},
        divname
    )

    regionvolumeplotchart.renderBoxPlot();
    regionvolumeplotchart.renderDataPlots();
    regionvolumeplotchart.renderNotchBoxes( {showNotchBox:false} );
    regionvolumeplotchart.renderViolinPlot( {showViolinPlot:false} );
    d3.selectAll("#regionvolumplotchart").selectAll("g.x.axis").remove()

}
function makeDistroChartforregionvolum(settings, divname) {

    var divwidth = document.querySelector(divname).clientWidth
    var divheight = 200
    var divplotchartpersondottooltip = d3.select(divname).append("persondottooltip")
        .attr("class", "plotchartpersondottooltip")
        .style("opacity", 1).style("position","absolute")
        .style("background-color", "#eee")
        .style("box-shadow", "0 0 5px #999999")
        .style("border-width", "3px")
        .style("border-radius", "3px")
        .style("padding", "3px")


    var chart = {};

    // Defaults
    chart.settings = {
        data: null,
        xName: null,
        yName: null,
        selector: null,
        axisLables: null,
        yTicks: 1,
        scale: 'linear',
        chartSize: {width: 600, height: 400},
        margin: {top: -10, right: 0, bottom: 0, left: 0},
        constrainExtremes: false,
        color: trackcolor
    };
    console.log(trackcolor)
    for (var setting in settings) {
        chart.settings[setting] = settings[setting]
    }


    function formatAsFloat(d) {
        if (d % 1 !== 0) {
            return d3v3.format(".2f")(d);
        } else {
            return d3v3.format(".0f")(d);
        }
    }

    function logFormatNumber(d) {
        var x = Math.log(d) / Math.log(10) + 1e-6;
        return Math.abs(x - Math.floor(x)) < 0.6 ? formatAsFloat(d) : "";
    }

    chart.yFormatter = formatAsFloat;

    chart.data = chart.settings.data;

    chart.groupObjs = {}; //The data organized by grouping and sorted as well as any metadata for the groups
    chart.objs = {mainDiv: null, chartDiv: null, g: null, xAxis: null, yAxis: null};
    chart.colorFunct = null;

    /**
     * Takes an array, function, or object mapping and created a color function from it
     * @param {function|[]|object} colorOptions
     * @returns {function} Function to be used to determine chart colors
     */
    function getColorFunct(colorOptions) {
        if (typeof colorOptions == 'function') {
            return colorOptions
        } else if (Array.isArray(colorOptions)) {
            //  If an array is provided, map it to the domain
            var colorMap = {}, cColor = 0;
            for (var cName in chart.groupObjs) {
                colorMap[cName] = colorOptions[cColor];
                cColor = (cColor + 1) % colorOptions.length;
            }
            return function (group) {
                return colorMap[group];
            }
        } else if (typeof colorOptions == 'object') {
            // if an object is provided, assume it maps to  the colors
            return function (group) {
                return colorOptions[group];
            }
        } else {
            return trackcolor;
        }
    }

    /**
     * Takes a percentage as returns the values that correspond to that percentage of the group range witdh
     * @param objWidth Percentage of range band
     * @param gName The bin name to use to get the x shift
     * @returns {{left: null, right: null, middle: null}}
     */
    function getObjWidth(objWidth, gName) {
        var objSize = {left: null, right: null, middle: null};
        var width = chart.xScale.rangeBand() * (objWidth / 100);
        var padding = (chart.xScale.rangeBand() - width) / 2;
        var gShift = chart.xScale(gName);
        objSize.middle = chart.xScale.rangeBand() / 2 + gShift;
        objSize.left = padding + gShift;
        objSize.right = objSize.left + width;
        return objSize;
    }

    /**
     * Adds jitter to the  scatter point plot
     * @param doJitter true or false, add jitter to the point
     * @param width percent of the range band to cover with the jitter
     * @returns {number}
     */
    function addJitter(doJitter, width) {
        if (doJitter !== true || width == 0) {
            return 0
        }
        return Math.floor(Math.random() * width) - width / 2;
    }

    function shallowCopy(oldObj) {
        var newObj = {};
        for (var i in oldObj) {
            if (oldObj.hasOwnProperty(i)) {
                newObj[i] = oldObj[i];
            }
        }
        return newObj;
    }

    /**
     * Closure that creates the tooltip hover function
     * @param groupName Name of the x group
     * @param metrics Object to use to get values for the group
     * @returns {Function} A function that provides the values for the tooltip
     */
    function tooltipHover(groupName, metrics) {
        var tooltipString = "第" + groupName + "天";
        tooltipString += "<br\>Max: " + formatAsFloat(metrics.max, 0.1);
        tooltipString += "<br\>Q3: " + formatAsFloat(metrics.quartile3);
        tooltipString += "<br\>Median: " + formatAsFloat(metrics.median);
        tooltipString += "<br\>Q1: " + formatAsFloat(metrics.quartile1);
        tooltipString += "<br\>Min: " + formatAsFloat(metrics.min);
        return function () {
            chart.objs.tooltip.transition().duration(200).style("opacity", 0.9)
                .style("position","absolute").style("background","white")
            chart.objs.tooltip.html(tooltipString)
        };
    }

    /**
     * Parse the data and calculates base values for the plots
     */
    !function prepareData() {
        function calcMetrics(values) {

            var metrics = { //These are the original non�scaled values
                max: null,
                upperOuterFence: null,
                upperInnerFence: null,
                quartile3: null,
                median: null,
                mean: null,
                iqr: null,
                quartile1: null,
                lowerInnerFence: null,
                lowerOuterFence: null,
                min: null
            };

            metrics.min = d3v3.min(values);
            metrics.quartile1 = d3v3.quantile(values, 0.25);
            metrics.median = d3v3.median(values);
            metrics.mean = d3v3.mean(values);
            metrics.quartile3 = d3v3.quantile(values, 0.75);
            metrics.max = d3v3.max(values);
            metrics.iqr = metrics.quartile3 - metrics.quartile1;

            //The inner fences are the closest value to the IQR without going past it (assumes sorted lists)
            var LIF = metrics.quartile1 - (1.5 * metrics.iqr);
            var UIF = metrics.quartile3 + (1.5 * metrics.iqr);
            for (var i = 0; i <= values.length; i++) {
                if (values[i] < LIF) {
                    continue;
                }
                if (!metrics.lowerInnerFence && values[i] >= LIF) {
                    metrics.lowerInnerFence = values[i];
                    continue;
                }
                if (values[i] > UIF) {
                    metrics.upperInnerFence = values[i - 1];
                    break;
                }
            }


            metrics.lowerOuterFence = metrics.quartile1 - (3 * metrics.iqr);
            metrics.upperOuterFence = metrics.quartile3 + (3 * metrics.iqr);
            if (!metrics.lowerInnerFence) {
                metrics.lowerInnerFence = metrics.min;
            }
            if (!metrics.upperInnerFence) {
                metrics.upperInnerFence = metrics.max;
            }
            return metrics
        }

        var current_x = null;
        var current_y = null;
        var pid = null;
        var current_row;

        // Group the values
        for (current_row = 0; current_row < chart.data.length; current_row++) {
            current_x = chart.data[current_row][chart.settings.xName];
            current_y = chart.data[current_row][chart.settings.yName];
            pid = chart.data[current_row]["id"];

            if (chart.groupObjs.hasOwnProperty(current_x)) {
                chart.groupObjs[current_x].values.push(current_y);
                chart.groupObjs[current_x].pidvalues.push(current_y);
                chart.groupObjs[current_x].pid.push(pid);
            } else {
                chart.groupObjs[current_x] = {};
                chart.groupObjs[current_x].values = [current_y];
                chart.groupObjs[current_x].pidvalues = [current_y];
                chart.groupObjs[current_x].pid = [pid]
            }
        }

        for (var cName in chart.groupObjs) {
            chart.groupObjs[cName].values.sort(d3v3.ascending);
            chart.groupObjs[cName].metrics = {};
            chart.groupObjs[cName].metrics = calcMetrics(chart.groupObjs[cName].values);

        }
    }();

    /**
     * Prepare the chart settings and chart div and svg
     */
    !function prepareSettings() {
        //Set base settings
        chart.margin = chart.settings.margin;
        chart.divWidth = chart.settings.chartSize.width;
        chart.divHeight = chart.settings.chartSize.height;
        chart.width = chart.divWidth - chart.margin.left - chart.margin.right;
        chart.height = chart.divHeight - chart.margin.top - chart.margin.bottom;

        if (chart.settings.axisLabels) {
            chart.xAxisLable = chart.settings.axisLabels.xAxis;
            chart.yAxisLable = chart.settings.axisLabels.yAxis;
        } else {
            chart.xAxisLable = chart.settings.xName;
            chart.yAxisLable = chart.settings.yName;
        }

        if (chart.settings.scale === 'log') {
            chart.yScale = d3v3.scale.log();
            chart.yFormatter = logFormatNumber;
        } else {
            chart.yScale = d3v3.scale.linear();
        }

        if (chart.settings.constrainExtremes === true) {
            var fences = [];
            for (var cName in chart.groupObjs) {
                fences.push(chart.groupObjs[cName].metrics.lowerInnerFence);
                fences.push(chart.groupObjs[cName].metrics.upperInnerFence);
            }
            chart.range = d3v3.extent(fences);

        } else {
            chart.range = d3v3.extent(chart.data, function (d) {return d[chart.settings.yName];});
        }

        chart.colorFunct = getColorFunct(chart.settings.colors);

        // Build Scale functions
        chart.yScale.range([chart.height, 0]).domain(chart.range).nice().clamp(true);
        chart.xScale = d3v3.scale.ordinal().domain(Object.keys(chart.groupObjs)).rangeBands([0, chart.width]);

        //Build Axes Functions
        chart.objs.yAxis = d3v3.svg.axis()
            .scale(chart.yScale)
            .orient("left")
            .tickFormat(chart.yFormatter)
            .outerTickSize(0)
            .innerTickSize(-chart.width + (chart.margin.right + chart.margin.left));
        chart.objs.yAxis.ticks(chart.objs.yAxis.ticks()*chart.settings.yTicks);
        chart.objs.xAxis = d3v3.svg.axis().scale(chart.xScale).orient("bottom").tickSize(5);
    }();

    /**
     * Updates the chart based on the current settings and window size
     * @returns {*}
     */
    chart.update = function () {
        // Update chart size based on view port size
        chart.width = parseInt(chart.objs.chartDiv.style("width"), 10) - (chart.margin.left + chart.margin.right);
        chart.height = parseInt(chart.objs.chartDiv.style("height"), 10) - (chart.margin.top + chart.margin.bottom);

        // Update scale functions
        chart.xScale.rangeBands([0, chart.width]);
        chart.yScale.range([chart.height, 0]);

        // Update the yDomain if the Violin plot clamp is set to -1 meaning it will extend the violins to make nice points
        if (chart.violinPlots && chart.violinPlots.options.show == true && chart.violinPlots.options._yDomainVP != null) {
            chart.yScale.domain(chart.violinPlots.options._yDomainVP).nice().clamp(true);
        } else {
            chart.yScale.domain(chart.range).nice().clamp(true);
        }

        //Update axes
        chart.objs.g.select('.x.axis').attr("transform", "translate(0," + chart.height + ")").call(chart.objs.xAxis)
            .selectAll("text").attr("fill","white")
            .attr("y", 5).attr("x", -5)
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end");
        chart.objs.g.select('.x.axis .label').attr("x", chart.width / 2);
        chart.objs.g.select('.y.axis').call(chart.objs.yAxis.innerTickSize(-chart.width)).attr("fill","white")
        chart.objs.g.select('.y.axis .label').attr("x", -chart.height / 2);
        chart.objs.chartDiv.select('svg').attr("width", chart.width + (chart.margin.left + chart.margin.right)).attr("height", chart.height + (chart.margin.top + chart.margin.bottom));

        return chart;
    };

    /**
     * Prepare the chart html elements
     */
    !function prepareChart() {
        // Build main div and chart div
        chart.objs.mainDiv = d3v3.select(chart.settings.selector)
            .style("max-width", chart.divWidth + "px");
        // Add all the divs to make it centered and responsive


        chart.objs.mainDiv.append("div")
            .attr("class", "inner-wrapper")
            // .style("padding-bottom", (chart.divHeight / chart.divWidth) * 100 + "%")
            .style("padding-bottom",   divheight + "px")
            .style("padding-right",  divwidth + "px")
            .append("div").attr("class", "outer-box")
            .append("div").attr("class", "inner-box");
        // Capture the inner div for the chart (where the chart actually is)
        chart.selector = chart.settings.selector + " .inner-box";
        chart.objs.chartDiv = d3v3.select(chart.selector);
        d3v3.select(window).on('resize.' + chart.selector, chart.update);

        // Create the svg
        chart.objs.g = chart.objs.chartDiv.append("svg")
            .attr("class", "chart-area")
            .append("g")
            .attr("transform", "translate(" + (-5) + "," + chart.margin.top + ")");

        // Create axes
        chart.objs.axes = chart.objs.g.append("g").attr("class", "axis");
        chart.objs.axes.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + chart.height + ")")
            .call(chart.objs.xAxis);
        var g = chart.objs.axes.append("g")
            .attr("class", "y axis")
            .call(chart.objs.yAxis).select(".domain").remove()
            .append("text")     .attr("fill","white")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", -42)
            .attr("x", -chart.height / 2)
            .attr("dy", ".71em")
            .style("text-anchor", "middle")
            .text(chart.yAxisLable)
        // g.call(g => g.select(".domain").remove())
        d3.select(".chart-area g").selectAll(".domain").remove()
        // Create tooltip div
        chart.objs.tooltip = chart.objs.mainDiv.append('div')
        for (var cName in chart.groupObjs) {
            chart.groupObjs[cName].g = chart.objs.g.append("g").attr("class", "group");
            chart.groupObjs[cName].g.on("mouseover", function (event) {
                chart.objs.tooltip
                    .style("display", null).style("z-index","999").attr("class","plotcharttooltip")
                    .style("right", 0 + "px")
                    .style("top", 0 + "px")
                    .style("opacity",0)
                    .style("width","100px").style("height","100px")
                    .style("background-color", "#eee")
                    .style("box-shadow", "0 0 5px #999999")
                    .style("border-width", "3px")
                    .style("border-radius", "3px")
                    .style("padding", "3px")
            }).on("mouseout", function () {
                chart.objs.tooltip.style("display", "none");
            }).on("mousemove", tooltipHover(cName, chart.groupObjs[cName].metrics))
        }
        chart.update();

    }();

    /**
     * Render a violin plot on the current chart
     * @param options
     * @param [options.showViolinPlot=true] True or False, show the violin plot
     * @param [options.resolution=100 default]
     * @param [options.bandwidth=10 default] May need higher bandwidth for larger data sets
     * @param [options.width=50] The max percent of the group rangeBand that the violin can be
     * @param [options.interpolation=''] How to render the violin
     * @param [options.clamp=0 default]
     *   0 = keep data within chart min and max, clamp once data = 0. May extend beyond data set min and max
     *   1 = clamp at min and max of data set. Possibly no tails
     *  -1 = extend chart axis to make room for data to interpolate to 0. May extend axis and data set min and max
     * @param [options.colors=chart default] The color mapping for the violin plot
     * @returns {*} The chart object
     */
    chart.renderViolinPlot = function (options) {
        chart.violinPlots = {};

        var defaultOptions = {
            show: true,
            showViolinPlot: true,
            resolution: 100,
            bandwidth: 20,
            width: 50,
            interpolation: 'cardinal',
            clamp: 1,
            colors: chart.colorFunct,
            _yDomainVP: null // If the Violin plot is set to close all violin plots, it may need to extend the domain, that extended domain is stored here
        };
        chart.violinPlots.options = shallowCopy(defaultOptions);
        for (var option in options) {
            chart.violinPlots.options[option] = options[option]
        }
        var vOpts = chart.violinPlots.options;

        // Create violin plot objects
        for (var cName in chart.groupObjs) {
            chart.groupObjs[cName].violin = {};
            chart.groupObjs[cName].violin.objs = {};
        }

        /**
         * Take a new set of options and redraw the violin
         * @param updateOptions
         */
        chart.violinPlots.change = function (updateOptions) {
            if (updateOptions) {
                for (var key in updateOptions) {
                    vOpts[key] = updateOptions[key]
                }
            }

            for (var cName in chart.groupObjs) {
                chart.groupObjs[cName].violin.objs.g.remove()
            }

            chart.violinPlots.prepareViolin();
            chart.violinPlots.update();
        };

        chart.violinPlots.reset = function () {
            chart.violinPlots.change(defaultOptions)
        };
        chart.violinPlots.show = function (opts) {
            if (opts !== undefined) {
                opts.show = true;
                if (opts.reset) {
                    chart.violinPlots.reset()
                }
            } else {
                opts = {show: true};
            }
            chart.violinPlots.change(opts);

        };

        chart.violinPlots.hide = function (opts) {
            if (opts !== undefined) {
                opts.show = false;
                if (opts.reset) {
                    chart.violinPlots.reset()
                }
            } else {
                opts = {show: false};
            }
            chart.violinPlots.change(opts);

        };

        /**
         * Update the violin obj values
         */
        chart.violinPlots.update = function () {
            var cName, cViolinPlot;

            for (cName in chart.groupObjs) {
                cViolinPlot = chart.groupObjs[cName].violin;

                // Build the violins sideways, so use the yScale for the xScale and make a new yScale
                var xVScale = chart.yScale.copy();


                // Create the Kernel Density Estimator Function
                cViolinPlot.kde = kernelDensityEstimator(eKernel(vOpts.bandwidth), xVScale.ticks(vOpts.resolution));
                cViolinPlot.kdedata = cViolinPlot.kde(chart.groupObjs[cName].values);

                var interpolateMax = chart.groupObjs[cName].metrics.max,
                    interpolateMin = chart.groupObjs[cName].metrics.min;

                if (vOpts.clamp == 0 || vOpts.clamp == -1) { //
                    // When clamp is 0, calculate the min and max that is needed to bring the violin plot to a point
                    // interpolateMax = the Minimum value greater than the max where y = 0
                    interpolateMax = d3v3.min(cViolinPlot.kdedata.filter(function (d) {
                        return (d.x > chart.groupObjs[cName].metrics.max && d.y == 0)
                    }), function (d) {
                        return d.x;
                    });
                    // interpolateMin = the Maximum value less than the min where y = 0
                    interpolateMin = d3v3.max(cViolinPlot.kdedata.filter(function (d) {
                        return (d.x < chart.groupObjs[cName].metrics.min && d.y == 0)
                    }), function (d) {
                        return d.x;
                    });
                    // If clamp is -1 we need to extend the axises so that the violins come to a point
                    if (vOpts.clamp == -1) {
                        kdeTester = eKernelTest(eKernel(vOpts.bandwidth), chart.groupObjs[cName].values);
                        if (!interpolateMax) {
                            var interMaxY = kdeTester(chart.groupObjs[cName].metrics.max);
                            var interMaxX = chart.groupObjs[cName].metrics.max;
                            var count = 25; // Arbitrary limit to make sure we don't get an infinite loop
                            while (count > 0 && interMaxY != 0) {
                                interMaxY = kdeTester(interMaxX);
                                interMaxX += 1;
                                count -= 1;
                            }
                            interpolateMax = interMaxX;
                        }
                        if (!interpolateMin) {
                            var interMinY = kdeTester(chart.groupObjs[cName].metrics.min);
                            var interMinX = chart.groupObjs[cName].metrics.min;
                            var count = 25;  // Arbitrary limit to make sure we don't get an infinite loop
                            while (count > 0 && interMinY != 0) {
                                interMinY = kdeTester(interMinX);
                                interMinX -= 1;
                                count -= 1;
                            }
                            interpolateMin = interMinX;
                        }

                    }
                    // Check to see if the new values are outside the existing chart range
                    //   If they are assign them to the master _yDomainVP
                    if (!vOpts._yDomainVP) vOpts._yDomainVP = chart.range.slice(0);
                    if (interpolateMin && interpolateMin < vOpts._yDomainVP[0]) {
                        vOpts._yDomainVP[0] = interpolateMin;
                    }
                    if (interpolateMax && interpolateMax > vOpts._yDomainVP[1]) {
                        vOpts._yDomainVP[1] = interpolateMax;
                    }


                }


                if (vOpts.showViolinPlot) {
                    chart.update();
                    xVScale = chart.yScale.copy();

                    // Need to recalculate the KDE because the xVScale changed
                    cViolinPlot.kde = kernelDensityEstimator(eKernel(vOpts.bandwidth), xVScale.ticks(vOpts.resolution));
                    cViolinPlot.kdedata = cViolinPlot.kde(chart.groupObjs[cName].values);
                }

                cViolinPlot.kdedata = cViolinPlot.kdedata
                    .filter(function (d) {
                        return (!interpolateMin || d.x >= interpolateMin)
                    })
                    .filter(function (d) {
                        return (!interpolateMax || d.x <= interpolateMax)
                    });
            }
            for (cName in chart.groupObjs) {
                cViolinPlot = chart.groupObjs[cName].violin;

                // Get the violin width
                var objBounds = getObjWidth(vOpts.width, cName);
                var width = (objBounds.right - objBounds.left) / 2;

                var yVScale = d3v3.scale.linear()
                    .range([width, 0])
                    .domain([0, d3v3.max(cViolinPlot.kdedata, function (d) {return d.y;})])
                    .clamp(true);

                var area = d3v3.svg.area()
                    .interpolate(vOpts.interpolation)
                    .x(function (d) {return xVScale(d.x);})
                    .y0(width)
                    .y1(function (d) {return yVScale(d.y);});

                var line = d3v3.svg.line()
                    .interpolate(vOpts.interpolation)
                    .x(function (d) {return xVScale(d.x);})
                    .y(function (d) {return yVScale(d.y)});

                if (cViolinPlot.objs.left.area) {
                    cViolinPlot.objs.left.area
                        .datum(cViolinPlot.kdedata)
                        .attr("d", area);
                    cViolinPlot.objs.left.line
                        .datum(cViolinPlot.kdedata)
                        .attr("d", line);

                    cViolinPlot.objs.right.area
                        .datum(cViolinPlot.kdedata)
                        .attr("d", area);
                    cViolinPlot.objs.right.line
                        .datum(cViolinPlot.kdedata)
                        .attr("d", line);
                }

                // Rotate the violins
                cViolinPlot.objs.left.g.attr("transform", "rotate(90,0,0)   translate(0,-" + objBounds.left + ")  scale(1,-1)");
                cViolinPlot.objs.right.g.attr("transform", "rotate(90,0,0)  translate(0,-" + objBounds.right + ")");
            }
        };

        /**
         * Create the svg elements for the violin plot
         */
        chart.violinPlots.prepareViolin = function () {
            var cName, cViolinPlot;

            if (vOpts.colors) {
                chart.violinPlots.color = getColorFunct(vOpts.colors);
            } else {
                chart.violinPlots.color = chart.colorFunct
            }

            if (vOpts.show == false) {return}

            for (cName in chart.groupObjs) {
                cViolinPlot = chart.groupObjs[cName].violin;

                cViolinPlot.objs.g = chart.groupObjs[cName].g.append("g").attr("class", "violin-plot");
                cViolinPlot.objs.left = {area: null, line: null, g: null};
                cViolinPlot.objs.right = {area: null, line: null, g: null};

                cViolinPlot.objs.left.g = cViolinPlot.objs.g.append("g");
                cViolinPlot.objs.right.g = cViolinPlot.objs.g.append("g");

                if (vOpts.showViolinPlot !== false) {
                    //Area
                    cViolinPlot.objs.left.area = cViolinPlot.objs.left.g.append("path")
                        .attr("class", "area")
                        .style("fill", chart.violinPlots.color(cName));
                    cViolinPlot.objs.right.area = cViolinPlot.objs.right.g.append("path")
                        .attr("class", "area")
                        .style("fill", chart.violinPlots.color(cName));

                    //Lines
                    cViolinPlot.objs.left.line = cViolinPlot.objs.left.g.append("path")
                        .attr("class", "line")
                        .attr("fill", 'none')
                        .style("stroke", chart.violinPlots.color(cName));
                    cViolinPlot.objs.right.line = cViolinPlot.objs.right.g.append("path")
                        .attr("class", "line")
                        .attr("fill", 'none')
                        .style("stroke", chart.violinPlots.color(cName));
                }

            }

        };


        function kernelDensityEstimator(kernel, x) {
            return function (sample) {
                return x.map(function (x) {
                    return {x:x, y:d3v3.mean(sample, function (v) {return kernel(x - v);})};
                });
            };
        }

        function eKernel(scale) {
            return function (u) {
                return Math.abs(u /= scale) <= 1 ? .75 * (1 - u * u) / scale : 0;
            };
        }

        // Used to find the roots for adjusting violin axis
        // Given an array, find the value for a single point, even if it is not in the domain
        function eKernelTest(kernel, array) {
            return function (testX) {
                return d3v3.mean(array, function (v) {return kernel(testX - v);})
            }
        }

        chart.violinPlots.prepareViolin();

        d3v3.select(window).on('resize.' + chart.selector + '.violinPlot', chart.violinPlots.update);
        chart.violinPlots.update();
        d3.select(".chart-area g").selectAll(".domain").remove()
        return chart;
    };

    /**
     * Render a box plot on the current chart
     * @param options
     * @param [options.show=true] Toggle the whole plot on and off
     * @param [options.showBox=true] Show the box part of the box plot
     * @param [options.showWhiskers=true] Show the whiskers
     * @param [options.showMedian=true] Show the median line
     * @param [options.showMean=false] Show the mean line
     * @param [options.medianCSize=3] The size of the circle on the median
     * @param [options.showOutliers=true] Plot outliers
     * @param [options.boxwidth=30] The max percent of the group rangeBand that the box can be
     * @param [options.lineWidth=boxWidth] The max percent of the group rangeBand that the line can be
     * @param [options.outlierScatter=false] Spread out the outliers so they don't all overlap (in development)
     * @param [options.outlierCSize=2] Size of the outliers
     * @param [options.colors=chart default] The color mapping for the box plot
     * @returns {*} The chart object
     */
    chart.renderBoxPlot = function (options) {
        chart.boxPlots = {};

        // Defaults
        var defaultOptions = {
            show: true,
            showBox: true,
            showWhiskers: true,
            showMedian: true,
            showMean: false,
            medianCSize: 1.5,
            showOutliers: true,
            boxWidth: 30,
            lineWidth: null,
            scatterOutliers: false,
            outlierCSize: 2.5,
            colors: chart.colorFunct
        };
        chart.boxPlots.options = shallowCopy(defaultOptions);
        for (var option in options) {
            chart.boxPlots.options[option] = options[option]
        }
        var bOpts = chart.boxPlots.options;

        //Create box plot objects
        for (var cName in chart.groupObjs) {
            chart.groupObjs[cName].boxPlot = {};
            chart.groupObjs[cName].boxPlot.objs = {};
        }


        /**
         * Calculates all the outlier points for each group
         */
        !function calcAllOutliers() {

            /**
             * Create lists of the outliers for each content group
             * @param cGroup The object to modify
             * @return null Modifies the object in place
             */
            function calcOutliers(cGroup) {
                var cExtremes = [];
                var cOutliers = [];
                var cOut, idx;
                for (idx = 0; idx <= cGroup.values.length; idx++) {
                    cOut = {value: cGroup.values[idx]};

                    if (cOut.value < cGroup.metrics.lowerInnerFence) {
                        if (cOut.value < cGroup.metrics.lowerOuterFence) {
                            cExtremes.push(cOut);
                        } else {
                            cOutliers.push(cOut);
                        }
                    } else if (cOut.value > cGroup.metrics.upperInnerFence) {
                        if (cOut.value > cGroup.metrics.upperOuterFence) {
                            cExtremes.push(cOut);
                        } else {
                            cOutliers.push(cOut);
                        }
                    }
                }
                cGroup.boxPlot.objs.outliers = cOutliers;
                cGroup.boxPlot.objs.extremes = cExtremes;
            }

            for (var cName in chart.groupObjs) {
                calcOutliers(chart.groupObjs[cName]);
            }
        }();

        /**
         * Take updated options and redraw the box plot
         * @param updateOptions
         */
        chart.boxPlots.change = function (updateOptions) {
            if (updateOptions) {
                for (var key in updateOptions) {
                    bOpts[key] = updateOptions[key]
                }
            }

            for (var cName in chart.groupObjs) {
                chart.groupObjs[cName].boxPlot.objs.g.remove()
            }
            chart.boxPlots.prepareBoxPlot();
            chart.boxPlots.update()
            d3.select(".chart-area g").selectAll(".domain").remove()
        };

        chart.boxPlots.reset = function () {
            chart.boxPlots.change(defaultOptions)
        };
        chart.boxPlots.show = function (opts) {
            if (opts !== undefined) {
                opts.show = true;
                if (opts.reset) {
                    chart.boxPlots.reset()
                }
            } else {
                opts = {show: true};
            }
            chart.boxPlots.change(opts)

        };
        chart.boxPlots.hide = function (opts) {
            if (opts !== undefined) {
                opts.show = false;
                if (opts.reset) {
                    chart.boxPlots.reset()
                }
            } else {
                opts = {show: false};
            }
            chart.boxPlots.change(opts)
        };

        /**
         * Update the box plot obj values
         */
        chart.boxPlots.update = function () {
            var cName, cBoxPlot;

            for (cName in chart.groupObjs) {
                cBoxPlot = chart.groupObjs[cName].boxPlot;

                // Get the box width
                var objBounds = getObjWidth(bOpts.boxWidth, cName);
                var width = (objBounds.right - objBounds.left);

                var sMetrics = {}; //temp var for scaled (plottable) metric values
                for (var attr in chart.groupObjs[cName].metrics) {
                    sMetrics[attr] = null;
                    sMetrics[attr] = chart.yScale(chart.groupObjs[cName].metrics[attr]);
                }

                // Box
                if (cBoxPlot.objs.box) {
                    cBoxPlot.objs.box
                        .attr("x", objBounds.left)
                        .attr('width', width)
                        .attr("y", sMetrics.quartile3)
                        .attr("rx", 1)
                        .attr("ry", 1)
                        .attr("height", -sMetrics.quartile3 + sMetrics.quartile1)
                }

                // Lines
                var lineBounds = null;
                if (bOpts.lineWidth) {
                    lineBounds = getObjWidth(bOpts.lineWidth, cName)
                } else {
                    lineBounds = objBounds
                }
                // --Whiskers

                // if (cBoxPlot.objs.upperWhisker) {
                //     cBoxPlot.objs.upperWhisker.fence
                //         .attr("x1", lineBounds.left)
                //         .attr("x2", lineBounds.right)
                //         .attr('y1', sMetrics.max)
                //         .attr("y2", sMetrics.max);
                //     cBoxPlot.objs.upperWhisker.line
                //         .attr("x1", lineBounds.middle)
                //         .attr("x2", lineBounds.middle)
                //         .attr('y1', sMetrics.quartile3)
                //         .attr("y2", sMetrics.max);
                //
                //     cBoxPlot.objs.lowerWhisker.fence
                //         .attr("x1", lineBounds.left)
                //         .attr("x2", lineBounds.right)
                //         .attr('y1', sMetrics.min)
                //         .attr("y2", sMetrics.min);
                //     cBoxPlot.objs.lowerWhisker.line
                //         .attr("x1", lineBounds.middle)
                //         .attr("x2", lineBounds.middle)
                //         .attr('y1', sMetrics.quartile1)
                //         .attr("y2", sMetrics.min);
                // }


                // off outliers
                // --Whiskers
                if (cBoxPlot.objs.upperWhisker) {
                    cBoxPlot.objs.upperWhisker.fence
                        .attr("x1", lineBounds.left)
                        .attr("x2", lineBounds.right)
                        .attr('y1', sMetrics.upperInnerFence)
                        .attr("y2", sMetrics.upperInnerFence);
                    cBoxPlot.objs.upperWhisker.line
                        .attr("x1", lineBounds.middle)
                        .attr("x2", lineBounds.middle)
                        .attr('y1', sMetrics.quartile3)
                        .attr("y2", sMetrics.upperInnerFence);

                    cBoxPlot.objs.lowerWhisker.fence
                        .attr("x1", lineBounds.left)
                        .attr("x2", lineBounds.right)
                        .attr('y1', sMetrics.lowerInnerFence)
                        .attr("y2", sMetrics.lowerInnerFence);
                    cBoxPlot.objs.lowerWhisker.line
                        .attr("x1", lineBounds.middle)
                        .attr("x2", lineBounds.middle)
                        .attr('y1', sMetrics.quartile1)
                        .attr("y2", sMetrics.lowerInnerFence);
                }

                // --Median
                if (cBoxPlot.objs.median) {
                    cBoxPlot.objs.median.line
                        .attr("x1", lineBounds.left)
                        .attr("x2", lineBounds.right)
                        .attr('y1', sMetrics.median)
                        .attr("y2", sMetrics.median);
                    cBoxPlot.objs.median.circle
                        .attr("cx", lineBounds.middle)
                        .attr("cy", sMetrics.median)
                }

                // --Mean
                if (cBoxPlot.objs.mean) {
                    cBoxPlot.objs.mean.line
                        .attr("x1", lineBounds.left)
                        .attr("x2", lineBounds.right)
                        .attr('y1', sMetrics.mean)
                        .attr("y2", sMetrics.mean);
                    cBoxPlot.objs.mean.circle
                        .attr("cx", lineBounds.middle)
                        .attr("cy", sMetrics.mean);
                }

                // Outliers

                var pt;
                if (cBoxPlot.objs.outliers) {
                    for (pt in cBoxPlot.objs.outliers) {
                        cBoxPlot.objs.outliers[pt].point
                            .attr("cx", objBounds.middle + addJitter(bOpts.scatterOutliers, width))
                            .attr("cy", chart.yScale(cBoxPlot.objs.outliers[pt].value));
                    }
                }
                if (cBoxPlot.objs.extremes) {
                    for (pt in cBoxPlot.objs.extremes) {
                        cBoxPlot.objs.extremes[pt].point
                            .attr("cx", objBounds.middle + addJitter(bOpts.scatterOutliers, width))
                            .attr("cy", chart.yScale(cBoxPlot.objs.extremes[pt].value));
                    }
                }
            }
        };

        /**
         * Create the svg elements for the box plot
         */
        chart.boxPlots.prepareBoxPlot = function () {
            var cName, cBoxPlot;

            if (bOpts.colors) {
                chart.boxPlots.colorFunct = getColorFunct(bOpts.colors);
            } else {
                chart.boxPlots.colorFunct = chart.colorFunct
            }

            if (bOpts.show == false) {
                return
            }

            for (cName in chart.groupObjs) {
                cBoxPlot = chart.groupObjs[cName].boxPlot;

                cBoxPlot.objs.g = chart.groupObjs[cName].g.append("g").attr("class", "box-plot");

                //Plot Box (default show)
                if (bOpts.showBox) {
                    cBoxPlot.objs.box = cBoxPlot.objs.g.append("rect")
                        .attr("class", "box")
                        .style("fill", chart.boxPlots.colorFunct(cName))
                        .style("stroke", chart.boxPlots.colorFunct(cName));
                    //A stroke is added to the box with the group color, it is
                    // hidden by default and can be shown through css with stroke-width
                }

                //Plot Median (default show)
                if (bOpts.showMedian) {
                    cBoxPlot.objs.median = {line: null, circle: null};
                    cBoxPlot.objs.median.line = cBoxPlot.objs.g.append("line")
                        .attr("class", "median")
                    cBoxPlot.objs.median.circle = cBoxPlot.objs.g.append("circle")
                        .attr("class", "median")
                        .attr('r', bOpts.medianCSize)
                        .style("fill", chart.boxPlots.colorFunct(cName))

                }

                // Plot Mean (default no plot)
                if (bOpts.showMean) {
                    cBoxPlot.objs.mean = {line: null, circle: null};
                    cBoxPlot.objs.mean.line = cBoxPlot.objs.g.append("line")
                        .attr("class", "mean")
                        .attr("id",function(d){return "pid"});
                    cBoxPlot.objs.mean.circle = cBoxPlot.objs.g.append("circle")
                        .attr("class", "mean")
                        .attr('r', bOpts.medianCSize)
                        .style("fill", chart.boxPlots.colorFunct(cName))
                }

                // Plot Whiskers (default show)
                if (bOpts.showWhiskers) {
                    cBoxPlot.objs.upperWhisker = {fence: null, line: null};
                    cBoxPlot.objs.lowerWhisker = {fence: null, line: null};
                    cBoxPlot.objs.upperWhisker.fence = cBoxPlot.objs.g.append("line")
                        .attr("class", "upper whisker")
                        .style("stroke", chart.boxPlots.colorFunct(cName));
                    cBoxPlot.objs.upperWhisker.line = cBoxPlot.objs.g.append("line")
                        .attr("class", "upper whisker")
                        .style("stroke", chart.boxPlots.colorFunct(cName));

                    cBoxPlot.objs.lowerWhisker.fence = cBoxPlot.objs.g.append("line")
                        .attr("class", "lower whisker")
                        .style("stroke", chart.boxPlots.colorFunct(cName));
                    cBoxPlot.objs.lowerWhisker.line = cBoxPlot.objs.g.append("line")
                        .attr("class", "lower whisker")
                        .style("stroke", chart.boxPlots.colorFunct(cName));
                }

                // Plot outliers (default show)
                if (bOpts.showOutliers) {
                    if (!cBoxPlot.objs.outliers) calcAllOutliers();
                    var pt;
                    if (cBoxPlot.objs.outliers.length) {
                        var outDiv = cBoxPlot.objs.g.append("g").attr("class", "boxplot outliers");
                        for (pt in cBoxPlot.objs.outliers) {
                            cBoxPlot.objs.outliers[pt].point = outDiv.append("circle")
                                .attr("class", "outlier")
                                .attr('r', bOpts.outlierCSize)
                                // .style("fill", "white")
                                .style("fill", chart.boxPlots.colorFunct(cName))
                        }
                    }

                    if (cBoxPlot.objs.extremes.length) {
                        var extDiv = cBoxPlot.objs.g.append("g").attr("class", "boxplot outliersextremes");
                        for (pt in cBoxPlot.objs.extremes) {
                            cBoxPlot.objs.extremes[pt].point = extDiv.append("circle")
                                .attr("class", "outliersextremes")
                                .attr('r', bOpts.outlierCSize)
                                // .style("fill", "white")
                                .style("fill", chart.boxPlots.colorFunct(cName))
                        }
                    }
                }


            }
        };
        chart.boxPlots.prepareBoxPlot();

        d3v3.select(window).on('resize.' + chart.selector + '.boxPlot', chart.boxPlots.update);
        chart.boxPlots.update();
        return chart;

    };

    /**
     * Render a notched box on the current chart
     * @param options
     * @param [options.show=true] Toggle the whole plot on and off
     * @param [options.showNotchBox=true] Show the notch box
     * @param [options.showLines=false] Show lines at the confidence intervals
     * @param [options.boxWidth=35] The width of the widest part of the box
     * @param [options.medianWidth=20] The width of the narrowist part of the box
     * @param [options.lineWidth=50] The width of the confidence interval lines
     * @param [options.notchStyle=null] null=traditional style, 'box' cuts out the whole notch in right angles
     * @param [options.colors=chart default] The color mapping for the notch boxes
     * @returns {*} The chart object
     */
    chart.renderNotchBoxes = function (options) {
        chart.notchBoxes = {};

        //Defaults
        var defaultOptions = {
            show: true,
            showNotchBox: true,
            showLines: false,
            boxWidth: 35,
            medianWidth: 20,
            lineWidth: 50,
            notchStyle: null,
            colors: null
        };
        chart.notchBoxes.options = shallowCopy(defaultOptions);
        for (var option in options) {
            chart.notchBoxes.options[option] = options[option]
        }
        var nOpts = chart.notchBoxes.options;

        //Create notch objects
        for (var cName in chart.groupObjs) {
            chart.groupObjs[cName].notchBox = {};
            chart.groupObjs[cName].notchBox.objs = {};
        }

        /**
         * Makes the svg path string for a notched box
         * @param cNotch Current notch box object
         * @param notchBounds objBound object
         * @returns {string} A string in the proper format for a svg polygon
         */
        function makeNotchBox(cNotch, notchBounds) {
            var scaledValues = [];
            if (nOpts.notchStyle == 'box') {
                scaledValues = [
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.quartile1)],
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.lowerNotch)],
                    [notchBounds.medianLeft, chart.yScale(cNotch.metrics.lowerNotch)],
                    [notchBounds.medianLeft, chart.yScale(cNotch.metrics.median)],
                    [notchBounds.medianLeft, chart.yScale(cNotch.metrics.upperNotch)],
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.upperNotch)],
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.quartile3)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.quartile3)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.upperNotch)],
                    [notchBounds.medianRight, chart.yScale(cNotch.metrics.upperNotch)],
                    [notchBounds.medianRight, chart.yScale(cNotch.metrics.median)],
                    [notchBounds.medianRight, chart.yScale(cNotch.metrics.lowerNotch)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.lowerNotch)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.quartile1)]
                ];
            } else {
                scaledValues = [
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.quartile1)],
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.lowerNotch)],
                    [notchBounds.medianLeft, chart.yScale(cNotch.metrics.median)],
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.upperNotch)],
                    [notchBounds.boxLeft, chart.yScale(cNotch.metrics.quartile3)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.quartile3)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.upperNotch)],
                    [notchBounds.medianRight, chart.yScale(cNotch.metrics.median)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.lowerNotch)],
                    [notchBounds.boxRight, chart.yScale(cNotch.metrics.quartile1)]
                ];
            }
            return scaledValues.map(function (d) {
                return [d[0], d[1]].join(",");
            }).join(" ");
        }

        /**
         * Calculate the confidence intervals
         */
        !function calcNotches() {
            var cNotch, modifier;
            for (var cName in chart.groupObjs) {
                cNotch = chart.groupObjs[cName];
                modifier = (1.57 * (cNotch.metrics.iqr / Math.sqrt(cNotch.values.length)));
                cNotch.metrics.upperNotch = cNotch.metrics.median + modifier;
                cNotch.metrics.lowerNotch = cNotch.metrics.median - modifier;
            }
        }();

        /**
         * Take a new set of options and redraw the notch boxes
         * @param updateOptions
         */
        chart.notchBoxes.change = function (updateOptions) {
            if (updateOptions) {
                for (var key in updateOptions) {
                    nOpts[key] = updateOptions[key]
                }
            }

            for (var cName in chart.groupObjs) {
                chart.groupObjs[cName].notchBox.objs.g.remove()
            }
            chart.notchBoxes.prepareNotchBoxes();
            chart.notchBoxes.update();
        };

        chart.notchBoxes.reset = function () {
            chart.notchBoxes.change(defaultOptions)
        };
        chart.notchBoxes.show = function (opts) {
            if (opts !== undefined) {
                opts.show = true;
                if (opts.reset) {
                    chart.notchBoxes.reset()
                }
            } else {
                opts = {show: true};
            }
            chart.notchBoxes.change(opts)
        };
        chart.notchBoxes.hide = function (opts) {
            if (opts !== undefined) {
                opts.show = false;
                if (opts.reset) {
                    chart.notchBoxes.reset()
                }
            } else {
                opts = {show: false};
            }
            chart.notchBoxes.change(opts)
        };

        /**
         * Update the notch box obj values
         */
        chart.notchBoxes.update = function () {
            var cName, cGroup;

            for (cName in chart.groupObjs) {
                cGroup = chart.groupObjs[cName];

                // Get the box size
                var boxBounds = getObjWidth(nOpts.boxWidth, cName);
                var medianBounds = getObjWidth(nOpts.medianWidth, cName);

                var notchBounds = {
                    boxLeft: boxBounds.left,
                    boxRight: boxBounds.right,
                    middle: boxBounds.middle,
                    medianLeft: medianBounds.left,
                    medianRight: medianBounds.right
                };

                // Notch Box
                if (cGroup.notchBox.objs.notch) {
                    cGroup.notchBox.objs.notch
                        .attr("points", makeNotchBox(cGroup, notchBounds));
                }
                if (cGroup.notchBox.objs.upperLine) {
                    var lineBounds = null;
                    if (nOpts.lineWidth) {
                        lineBounds = getObjWidth(nOpts.lineWidth, cName)
                    } else {
                        lineBounds = objBounds
                    }

                    var confidenceLines = {
                        upper: chart.yScale(cGroup.metrics.upperNotch),
                        lower: chart.yScale(cGroup.metrics.lowerNotch)
                    };
                    cGroup.notchBox.objs.upperLine
                        .attr("x1", lineBounds.left)
                        .attr("x2", lineBounds.right)
                        .attr('y1', confidenceLines.upper)
                        .attr("y2", confidenceLines.upper);
                    cGroup.notchBox.objs.lowerLine
                        .attr("x1", lineBounds.left)
                        .attr("x2", lineBounds.right)
                        .attr('y1', confidenceLines.lower)
                        .attr("y2", confidenceLines.lower);
                }
            }
        };

        /**
         * Create the svg elements for the notch boxes
         */
        chart.notchBoxes.prepareNotchBoxes = function () {
            var cName, cNotch;

            if (nOpts && nOpts.colors) {
                chart.notchBoxes.colorFunct = getColorFunct(nOpts.colors);
            } else {
                chart.notchBoxes.colorFunct = chart.colorFunct
            }

            if (nOpts.show == false) {
                return
            }

            for (cName in chart.groupObjs) {
                cNotch = chart.groupObjs[cName].notchBox;

                cNotch.objs.g = chart.groupObjs[cName].g.append("g").attr("class", "notch-plot");

                // Plot Box (default show)
                if (nOpts.showNotchBox) {
                    cNotch.objs.notch = cNotch.objs.g.append("polygon")
                        .attr("class", "notch")
                        .style("fill", chart.notchBoxes.colorFunct(cName))
                        .style("stroke", chart.notchBoxes.colorFunct(cName));
                    //A stroke is added to the notch with the group color, it is
                    // hidden by default and can be shown through css with stroke-width
                }

                //Plot Confidence Lines (default hide)
                if (nOpts.showLines) {
                    cNotch.objs.upperLine = cNotch.objs.g.append("line")
                        .attr("class", "upper confidence line")
                        .style("stroke", chart.notchBoxes.colorFunct(cName));

                    cNotch.objs.lowerLine = cNotch.objs.g.append("line")
                        .attr("class", "lower confidence line")
                        .style("stroke", chart.notchBoxes.colorFunct(cName));
                }
            }
        };
        chart.notchBoxes.prepareNotchBoxes();

        d3v3.select(window).on('resize.' + chart.selector + '.notchBox', chart.notchBoxes.update);
        chart.notchBoxes.update();
        return chart;
    };

    /**
     * Render a raw data in various forms
     * @param options
     * @param [options.show=true] Toggle the whole plot on and off
     * @param [options.showPlot=false] True or false, show points
     * @param [options.plotType='none'] Options: no scatter = (false or 'none'); scatter points= (true or [amount=% of width (default=10)]); beeswarm points = ('beeswarm')
     * @param [options.pointSize=6] Diameter of the circle in pizels (not the radius)
     * @param [options.showLines=['median']] Can equal any of the metrics lines
     * @param [options.showbeanLines=false] Options: no lines = false
     * @param [options.beanWidth=20] % width
     * @param [options.colors=chart default]
     * @returns {*} The chart object
     *
     */
    chart.renderDataPlots = function (options) {
        chart.dataPlots = {};


        //Defaults
        var defaultOptions = {
            show: true,
            showPlot: false,
            plotType: 'none',
            pointSize: 6,
            showLines: true,//['median'],
            showBeanLines: false,
            beanWidth: 20,
            colors: null
        };
        chart.dataPlots.options = shallowCopy(defaultOptions);
        for (var option in options) {
            chart.dataPlots.options[option] = options[option]
        }
        var dOpts = chart.dataPlots.options;

        //Create notch objects
        for (var cName in chart.groupObjs) {
            chart.groupObjs[cName].dataPlots = {};
            chart.groupObjs[cName].dataPlots.objs = {};
        }
        // The lines don't fit into a group bucket so they live under the dataPlot object
        chart.dataPlots.objs = {};

        /**
         * Take updated options and redraw the data plots
         * @param updateOptions
         */
        chart.dataPlots.change = function (updateOptions) {
            if (updateOptions) {
                for (var key in updateOptions) {
                    dOpts[key] = updateOptions[key]
                }
            }

            chart.dataPlots.objs.g.remove();
            for (var cName in chart.groupObjs) {
                chart.groupObjs[cName].dataPlots.objs.g.remove()
            }
            chart.dataPlots.preparePlots();
            chart.dataPlots.update()
        };

        chart.dataPlots.reset = function () {
            chart.dataPlots.change(defaultOptions)
        };
        chart.dataPlots.show = function (opts) {
            if (opts !== undefined) {
                opts.show = true;
                if (opts.reset) {
                    chart.dataPlots.reset()
                }
            } else {
                opts = {show: true};
            }
            chart.dataPlots.change(opts)
        };
        chart.dataPlots.hide = function (opts) {
            if (opts !== undefined) {
                opts.show = false;
                if (opts.reset) {
                    chart.dataPlots.reset()
                }
            } else {
                opts = {show: false};
            }
            chart.dataPlots.change(opts)
        };

        /**
         * Update the data plot obj values
         */
        chart.dataPlots.update = function () {
            var cName, cGroup, cPlot;

            // Metrics lines
            if (chart.dataPlots.objs.g) {
                var halfBand = chart.xScale.rangeBand() / 2; // find the middle of each band
                for (var cMetric in chart.dataPlots.objs.lines) {
                    chart.dataPlots.objs.lines[cMetric].line
                        .x(function (d) {
                            return chart.xScale(d.x) + halfBand
                        });
                    chart.dataPlots.objs.lines[cMetric].g
                        .datum(chart.dataPlots.objs.lines[cMetric].values)
                        .attr('d', chart.dataPlots.objs.lines[cMetric].line);
                }
            }


            for (cName in chart.groupObjs) {
                cGroup = chart.groupObjs[cName];
                cPlot = cGroup.dataPlots;

                if (cPlot.objs.points) {
                    if (dOpts.plotType == 'beeswarm') {
                        var swarmBounds = getObjWidth(100, cName);
                        var yPtScale = chart.yScale.copy()
                            .range([Math.floor(chart.yScale.range()[0] / dOpts.pointSize), 0])
                            .interpolate(d3v3.interpolateRound)
                            .domain(chart.yScale.domain());
                        var maxWidth = Math.floor(chart.xScale.rangeBand() / dOpts.pointSize);
                        var ptsObj = {};
                        var cYBucket = null;
                        //  Bucket points
                        for (var pt = 0; pt < cGroup.values.length; pt++) {
                            cYBucket = yPtScale(cGroup.values[pt]);
                            if (ptsObj.hasOwnProperty(cYBucket) !== true) {
                                ptsObj[cYBucket] = [];
                            }
                            ptsObj[cYBucket].push(cPlot.objs.points.pts[pt]
                                .attr("cx", swarmBounds.middle)
                                .attr("cy", yPtScale(cGroup.values[pt]) * dOpts.pointSize));
                        }
                        //  Plot buckets
                        var rightMax = Math.min(swarmBounds.right - dOpts.pointSize);
                        for (var row in ptsObj) {
                            var leftMin = swarmBounds.left + (Math.max((maxWidth - ptsObj[row].length) / 2, 0) * dOpts.pointSize);
                            var col = 0;
                            for (pt in ptsObj[row]) {
                                ptsObj[row][pt].attr("cx", Math.min(leftMin + col * dOpts.pointSize, rightMax) + dOpts.pointSize / 2);
                                col++
                            }
                        }
                    } else { // For scatter points and points with no scatter
                        var plotBounds = null,
                            scatterWidth = 0,
                            width = 0;
                        if (dOpts.plotType == 'scatter' || typeof dOpts.plotType == 'number') {
                            //Default scatter percentage is 20% of box width
                            scatterWidth = typeof dOpts.plotType == 'number' ? dOpts.plotType : 20;
                        }

                        plotBounds = getObjWidth(scatterWidth, cName);
                        width = plotBounds.right - plotBounds.left;

                        //scatter在这里

                        var day = "day1"
                        if(cGroup.values.length.length == 3565){}
                        else if(cGroup.values.length == 4433){day = "day2"}
                        else if(cGroup.values.length == 2929){day = "day3"}

                        for (var pt = 0; pt < cGroup.values.length; pt++) {
                            var index = cGroup.pidvalues.indexOf(cGroup.values[pt])
                            var pid = cGroup.pid[index]  //这是对value排过序的

                            cPlot.objs.points.pts[pt]
                                .attr("id",function(){return "plotscatterpid" + day + pid})
                                .attr("cx", plotBounds.middle + addJitter(true, width))
                                .attr("cy", chart.yScale(cGroup.values[pt]))
                        }
                    }
                }


                if (cPlot.objs.bean) {
                    var beanBounds = getObjWidth(dOpts.beanWidth, cName);
                    for (var pt = 0; pt < cGroup.values.length; pt++) {
                        cPlot.objs.bean.lines[pt]
                            .attr("x1", beanBounds.left)
                            .attr("x2", beanBounds.right)
                            .attr('y1', chart.yScale(cGroup.values[pt]))
                            .attr("y2", chart.yScale(cGroup.values[pt]));
                    }
                }
            }
        };

        /**
         * Create the svg elements for the data plots
         */
        chart.dataPlots.preparePlots = function () {
            var cName, cPlot;

            if (dOpts && dOpts.colors) {
                chart.dataPlots.colorFunct = getColorFunct(dOpts.colors);
            } else {
                chart.dataPlots.colorFunct = chart.colorFunct
            }

            if (dOpts.show == false) {
                return
            }

            // Metrics lines
            chart.dataPlots.objs.g = chart.objs.g.append("g").attr("class", "metrics-lines");
            if (dOpts.showLines && dOpts.showLines.length > 0) {
                chart.dataPlots.objs.lines = {};
                var cMetric;
                for (var line in dOpts.showLines) {
                    cMetric = dOpts.showLines[line];
                    chart.dataPlots.objs.lines[cMetric] = {};
                    chart.dataPlots.objs.lines[cMetric].values = [];
                    for (var cGroup in chart.groupObjs) {
                        chart.dataPlots.objs.lines[cMetric].values.push({
                            x: cGroup,
                            y: chart.groupObjs[cGroup].metrics[cMetric]
                        })
                    }
                    chart.dataPlots.objs.lines[cMetric].line = d3v3.svg.line()
                        .interpolate("cardinal")
                        .y(function (d) {
                            return chart.yScale(d.y)
                        });
                    chart.dataPlots.objs.lines[cMetric].g = chart.dataPlots.objs.g.append("path")
                        .attr("class", "line " + cMetric)
                        .attr("data-metric", cMetric)
                        .style("fill", 'none')
                        .style("stroke", chart.colorFunct(cMetric));
                }

            }


            var po = 0 ;
            for (cName in chart.groupObjs) {

                cPlot = chart.groupObjs[cName].dataPlots;
                cPlot.objs.g = chart.groupObjs[cName].g.append("g").attr("class", "data-plot");

                // Points Plot
                if (dOpts.showPlot) {
                    cPlot.objs.points = {g: null, pts: []};
                    cPlot.objs.points.g = cPlot.objs.g.append("g").attr("class", "points-plot");
                    console.log(chart.groupObjs[cName].values.length)
                    for (var pt = 0; pt < chart.groupObjs[cName].values.length; pt++) {
                        cPlot.objs.points.pts.push(cPlot.objs.points.g.append("circle")
                            .attr("class", "point")
                            .attr('r', dOpts.pointSize / 2)// Options is diameter, r takes radius so divide by 2
                            .style("fill", trackcolor[po])
                            .on("click",function(d){console.log(chart.groupObjs[cName])})
                        )

                    }
                }


                // Bean lines
                if (dOpts.showBeanLines) {
                    cPlot.objs.bean = {g: null, lines: []};
                    cPlot.objs.bean.g = cPlot.objs.g.append("g").attr("class", "bean-plot");
                    for (var pt = 0; pt < chart.groupObjs[cName].values.length; pt++) {
                        cPlot.objs.bean.lines.push(cPlot.objs.bean.g.append("line")
                            .attr("class", "bean line")
                            .style("stroke-width", '0.5')
                            .style("stroke", trackcolor[po]));
                    }
                }
                po++;
            }
        };
        chart.dataPlots.preparePlots();

        d3v3.select(window).on('resize.' + chart.selector + '.dataPlot', chart.dataPlots.update);
        chart.dataPlots.update();
        return chart;
    };

    return chart;
}