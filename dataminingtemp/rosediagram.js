// // {value:1046, name:'参加12天'},
// // {value:161, name:'参加13天'},
// // {value:639, name:'参加23天'},
// // {value:1913, name:'参加123天'},
// // {value:444, name:'参加第1天'},
// // {value:836, name:'参加第2天'},
// // {value:217, name:'参加第3天'}
// function rosediagram(){
//     var dom = document.getElementById("divrosediagram");
//     var myChart = echarts.init(dom);
//     var app = {};
//     option = null;
//     option = {
//         onclick:function(){
//             alert("this is myTool2");
//         },
//         color:[
//             '#be64a1', '#9291ff',  '#6462dc','#d48265', '#91c7ae','#749f83',
//             '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3',
//             '#c23531','#2f4554', '#61a0a8', '#EC407A',
//             '#aa5555', '#9f7664', '#5d7e68', '#2e3e32',  '#6a4625', '#5a4c49','#6996b3',
//             '#4e65b7', '#067aa8', '#9e4f00', '#9CCC65','#d0c88a', '#383434', '#222d47',
//             '#493154', '#253c4a',
//         ],
//         tooltip : {
//             trigger: 'item',
//             position: 'right',
//             formatter: "{a} <br/>{b} : {c} ({d}%)"
//         },
//         legend: {
//             orient: "vertical",
//             inactiveColor:"#5b5b5b",//未选中时文本的颜色
//             selected:{
//                 '第1天人数':true,'第2天人数':true,
//                 '第3天人数':true,
//                 // '第1和第2天':true,'第1和第3天':true,
//                 // '第2和第3天':true,'3天':true,
//                 // '第1天':true,'第2天':true,'第3天':true,
//             },
//             // data: webkitDep.categories.name,
//             icon: 'circle',
//             textStyle: {//图例文字的样式
//                 color: '#eaf5ff',
//                 fontSize:"12",
//             },
//             top:'8%',
//             left:'1%',
//             // bottom:'10%',
//             itemWidth:5,//图例的宽度
//             itemHeight:5,//图例的高度
//         },
//
//         // toolbox: {
//         //     show : true,
//         //     feature : {
//         //         mark : {show: true},
//         //         dataView : {show: true, readOnly: false},
//         //         magicType : {
//         //             show: true,
//         //             type: ['pie', 'funnel']
//         //         },
//         //         restore : {show: true},
//         //         saveAsImage : {show: true}
//         //     }
//         // },
//         calculable : true,
//         graphic:{
//             type:'text',
//             left:'center',
//             top:'center',
//             style:{
//                 text:'参会人数',
//                 textAlign:'center',
//                 fill:'white',
//                 width:15,
//                 height:15
//             }
//         },
//         series : [
//             {
//                 name:'参加会议',
//                 type:'pie',
//                 radius : [40, 90],
//                 center : ['50%', '50%'],
//                 roseType : 'radius',
//                 label: {
//                     normal: {show: false},
//                     emphasis: {show: false}
//                 },
//                 lableLine: {
//                     normal: {show: false},
//                     emphasis: {show: false}
//                 },
//                 data:[
//                     {value:3564, name:'第1天'},
//                     {value:4434, name:'第2天'},
//                     {value:2930, name:'第3天'}
//                     // {value:1046, name:'参加第1和第2天'},
//                     // {value:836, name:'参加第2天'},
//                     // {value:639, name:'参加第2和第3天'},
//                     // {value:444, name:'参加第1天'},
//                     // {value:217, name:'参加第3天'},
//                     // {value:161, name:'参加第1和第3天'},
//                     // {value:1913, name:'参加三天'}
//                 ]
//             },
//
//         ]
//     };
//     ;
//     if (option && typeof option === "object") {
//         myChart.setOption(option, true);
//     }
//
// }
// rosediagram()
//
//
