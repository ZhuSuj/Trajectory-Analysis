// d3.csv('data/chordtestdata.csv', function(error, data) {
//     var mpr = chordMpr(data);
//     mpr
//         .addValuesToMap('root')
//         .addValuesToMap('node')
//         .setFilter(function(row, a, b) {
//             return (row.root === a.name && row.node === b.name)
//         })
//         .setAccessor(function(recs, a, b) {
//             if (!recs[0]) return 0;
//             return +recs[0].count;
//         });
//     drawChords(mpr.getMatrix(), mpr.getMap());
// });
//
// function drawChords(matrix, mmap) {
//
//     var w = document.querySelector('#chorddiagram').clientWidth - 50
//     var h = document.querySelector('#chorddiagram').clientHeight - 50;
//
//     // var w = 980,
//     //     h = 800,
//     var r1 = h / 2,
//         r0 = r1 - 110;
//
//     var chord = d3.chord()
//         .padAngle(0.05)
//         .sortSubgroups(d3.descending)
//         .sortChords(d3.descending);
//
//     var arc = d3.arc()
//         .innerRadius(r0)
//         .outerRadius(r0 + 20);
//
//     var ribbon = d3.ribbon()
//         .radius(r0);
//
//     var svg = d3.select("#chorddiagram").append("svg:svg")
//         .attr("width", w)
//         .attr("height", h)
//         .append("svg:g")
//         .attr("id", "circle")
//         .attr("transform", "translate(" + (w / 2+20) + "," + (h / 2+20) + ")")
//         .datum(chord(matrix));
//
//     svg.append("circle")
//         .attr("r", r0 + 20);
//
//     var mapReader = chordRdr(matrix, mmap);
//
//
//     var g = svg.selectAll("g.group")
//         .data(function(chords) {
//             return chords.groups;
//         })
//         .enter().append("svg:g")
//         .attr("class", "group chordhover").on("id",function(d){return mapReader(d).gname})
//         .on("mouseover",function(d){
//             d3.selectAll("path.chord ").style("opacity", 0)
//             d3.selectAll("#chord"+mapReader(d).gname).style("opacity", 1)
//         })
//         .on("mouseout",function(d){
//             d3.selectAll("path.chord ").style("opacity", 1)
//         })
//
//     g.append("svg:path")
//         .style("stroke", "grey")
//         .style("fill", function(d) {
//             return mapReader(d).gdata;
//         })
//         .attr("d", arc)
//
//     var colors = d3.scaleOrdinal(d3.schemeCategory20c);
//
//     g.append("svg:text")
//         .each(function(d) {
//             d.angle = (d.startAngle + d.endAngle) / 2;
//         })
//         .attr("dy", ".35em")
//         .style("font-family", "helvetica, arial, sans-serif")
//         .style("font-size", "9px")
//         .attr("text-anchor", function(d) {
//             return d.angle > Math.PI ? "end" : null;
//         })
//         .attr("transform", function(d) {
//             return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" +
//                 "translate(" + (r0 + 26) + ")" +
//                 (d.angle > Math.PI ? "rotate(180)" : "");
//         })
//         .text(function(d) {return mapReader(d).gname;})
//         .attr("fill",function(d, i) {return colors(i)})
//
//     var chordPaths = svg.selectAll("path.chord")
//         .data(function(chords) { return chords;  })
//         .enter().append("svg:path")
//         .attr("class", "chord").attr("id",function(d){return "chord"+mapReader(d.source).gname})
//         .style("stroke", "grey").attr("opacity",0.5)
//         .style("fill", function(d, i) {return colors(i)})
//         .attr("d", ribbon.radius(r0))
//         .on("click",function(d){console.log(mapReader(d))})
//
// }