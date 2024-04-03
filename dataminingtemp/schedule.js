//
// var schedule = new Array();
// var datascheduleconvert = new Array();
//
// var interval = 15*60*1000;
// d3.csv("data/alldayposition.csv",function(error,csvdataraw){
//
//     // var csvdata = csvdataraw.sort(comparedateformat("datetime"))
//     var csvdata = csvdataraw
//     var timestart = "2019-07-21 07:00:00"
//     var timestarttemp = new Date(timestart);
//
//     var timeendtemp = new Date(timestart);
//     timeendtemp.setTime(timestarttemp.getTime()+interval);
//
//     var personcount = 0
//     //day1 0------689754
//     //day2 689755------689755+865277
//     //day3 689755+865277------689755+865277+324454
//
//
//
//     var categorynum=new category(0,0,0,0,0,0,0,0,0,0,
//         0,0,0,0,0,0,0,0,0,0,      0,0,0,0,0,);
//     for(var i = 0 ; i <csvdata.length; i++){
//
//         var record = csvdata[i];
//         var ttemp = new Date(csvdata[i].datetime)
//         var t = ttemp.getTime()
//         var t1 = timestarttemp.getTime()
//         var t2 = timeendtemp.getTime()
//         if(t >= t1 && t < t2){
//             personcount++
//             switch (record.position.replace( /\s/ig, '')) {
//                 case 'confA':
//                     categorynum.confA ++;
//                     break;
//                 case 'confB':
//                     categorynum.confB++;
//                     break;
//                 case 'confC':
//                     categorynum.confC++;
//                     break;
//                 case 'confD':
//                     categorynum.confD++;
//                     break;
//                 case 'signDesk':
//                     categorynum.signDesk++;
//                     break;
//                 case 'poster':
//                     categorynum.poster++;
//                     break;
//                 case 'wc1':
//                     categorynum.wc1++;
//                     break;
//                 case 'wc2':
//                     categorynum.wc2++;
//                     break;
//                 case 'wc3':
//                     categorynum.wc3++;
//                     break;
//                 case 'room1':
//                     categorynum.room1++;
//                     break;
//
//                 case 'room2':
//                     categorynum.room2++;
//                     break;
//                 case 'room3':
//                     categorynum.room3++;
//                     break;
//                 case 'room4':
//                     categorynum.room4++;
//                     break;
//                 case 'room5':
//                     categorynum.room5++;
//                     break;
//                 case 'room6':
//                     categorynum.room6++;
//                     break;
//                 case 'exhibition':
//                     categorynum.exhibition++;
//                     break;
//                 case 'mainMeeting':
//                     categorynum.mainMeeting++;
//                     break;
//                 case 'serviceRoom':
//                     categorynum.serviceRoom++;
//                     break;
//                 case 'restaurant':
//                     categorynum.restaurant++;
//                     break;
//                 case 'relaxRoom':
//                     categorynum.relaxRoom++;
//                     break;
//
//                 case 'escalator':
//                     categorynum.escalator++;
//                     break;
//                 case 'importExport':
//                     categorynum.importExport++;
//                     break;
//                 case 'secondAisle':
//                     categorynum.secondAisle;
//                     break;
//                 case 'firstAisle':
//                     categorynum.firstAisle++;
//                     break;
//
//                 default:
//
//             }
//
//         }else{
//
//             var newDate = new Date();  //实例化一个Date对象
//             newDate.setTime(t1);
//             categorynum.time = timeformat(newDate)
//             schedule.push(categorynum);
//
//             personcount = 0
//             categorynum=new category(0, 0,0,0,0,0,0,0,0,0,0,
//                 0,0,0,0,0,0,0,0,0,0,      0,0,0,0);
//
//             timestarttemp.setTime(timestarttemp.getTime()+interval);
//             timeendtemp.setTime(timeendtemp.getTime()+interval);
//
//         }
//     }
//
//
//
//
//     schedule.forEach(function(d ){
//
//         var sumtemp = d.confA + d.confB +  d.confC +  d.confD +  d.signDesk +  d.poster +
//             d.wc1 +  d.wc2 +  d.wc3 +  d.room1 +
//             d.room2 +  d.room3 +  d. room4 +  d. room5 +  d. room6 +
//             d.exhibition +  d. mainMeeting +  d.serviceRoom+  d. restaurant +  d. relaxRoom +
//             d.escalator +  d.importExport +  d.secondAisle +  d. firstAisle+1;
//
//
//         var item0 = {} ;item0.key = "confA";item0.value = d.confA/ sumtemp;item0.date = d.time ;datascheduleconvert.push(item0)
//         var item1 = {} ;item1.key = "confB";item1.value = d.confB/ sumtemp;item1.date = d.time ;datascheduleconvert.push(item1)
//         var item2 = {} ;item2.key = "confC";item2.value = d.confC/ sumtemp;item2.date = d.time ;datascheduleconvert.push(item2)
//         var item3 = {} ;item3.key = "confD";item3.value = d.confD/ sumtemp;item3.date = d.time ;datascheduleconvert.push(item3)
//         var item4 = {} ;item4.key = "signDesk";item4.value = d.signDesk/ sumtemp;item4.date = d.time ;datascheduleconvert.push(item4)
//         var item5 = {} ;item5.key = "poster";item5.value = d.poster/ sumtemp;item5.date = d.time ;datascheduleconvert.push(item5)
//         var item6 = {} ;item6.key = "wc1";item6.value = d.wc1/ sumtemp;item6.date = d.time ;datascheduleconvert.push(item6)
//         var item7 = {} ;item7.key = "wc2";item7.value = d.wc2/ sumtemp;item7.date = d.time ;datascheduleconvert.push(item7)
//         var item8 = {} ;item8.key = "wc3";item8.value = d.wc3/ sumtemp;item8.date = d.time ;datascheduleconvert.push(item8)
//         var item9 = {} ;item9.key = "room1";item9.value = d.room1/ sumtemp;item9.date = d.time ;datascheduleconvert.push(item9)
//         var item10 = {} ;item10.key = "room2";item10.value = d.room2/ sumtemp;item10.date = d.time ;datascheduleconvert.push(item10)
//         var item11 = {} ;item11.key = "room3";item11.value = d.room3/ sumtemp;item11.date = d.time ;datascheduleconvert.push(item11)
//         var item12 = {} ;item12.key = "room4";item12.value = d.room4/ sumtemp;item12.date = d.time ;datascheduleconvert.push(item12)
//         var item13 = {} ;item13.key = "room5";item13.value = d.room5/ sumtemp;item13.date = d.time ;datascheduleconvert.push(item13)
//         var item14 = {} ;item14.key = "room6";item14.value = d.room6/ sumtemp;item14.date = d.time ;datascheduleconvert.push(item14)
//         var item15 = {} ;item15.key = "exhibition";item15.value = d.exhibition/ sumtemp;item15.date = d.time ;datascheduleconvert.push(item15)
//         var item16 = {} ;item16.key = "mainMeeting";item16.value = d.mainMeeting/ sumtemp;item16.date = d.time ;datascheduleconvert.push(item16)
//         var item17 = {} ;item17.key = "restaurant";item17.value = d.restaurant/ sumtemp;item17.date = d.time ;datascheduleconvert.push(item17)
//         var item18 = {} ;item18.key = "relaxRoom";item18.value = d.relaxRoom/ sumtemp;item18.date = d.time ;datascheduleconvert.push(item18)
//         var item19 = {} ;item19.key = "escalator";item19.value = d.escalator/ sumtemp;item19.date = d.time ;datascheduleconvert.push(item19)
//         var item20 = {} ;item20.key = "importExport";item20.value = d.importExport/ sumtemp;item20.date = d.time ;datascheduleconvert.push(item20)
//         var item21 = {} ;item21.key = "secondAisle";item21.value = d.secondAisle/ sumtemp;item21.date = d.time ;datascheduleconvert.push(item21)
//         var item22 = {} ;item22.key = "firstAisle";item22.value = d.firstAisle/ sumtemp;item22.date = d.time ;datascheduleconvert.push(item22)
//         var item23 = {} ;item22.key = "serviceRoom";item23.value = d.serviceRoom/ sumtemp;item23.date = d.time ;datascheduleconvert.push(item23)
//
//         // var ss = ""
//         // for(var i = 0 ; i<categoryname.length ; i++){
//         //     ss = ss+
//         //
//         //     "var item"+i+" = {} ;"+
//         //     "item"+i+".key = "+'"'+categoryname[i]+'";'+
//         //     "item"+i+".value = d."+ categoryname[i]+"/ sumtemp;"+
//         //      "item"+i+".date = d.time.substring(0,19);"+
//         //     "datascheduleconvert.push(item"+i+")\n"
//         //
//         //
//         // }
//
//
//     })
//
//     // console.log(datascheduleconvert);
//     streamgraph(datascheduleconvert, "orange");
//
// })
//
// function category(time,
//                   confA,confB,confC,confD,escalator,exhibition,firstAisle, importExport,mainMeeting,
//                   poster, relaxRoom, restaurant, room1, room2, room3, room4, room5, room6,
//                   secondAisle,serviceRoom,signDesk,wc1, wc2, wc3,
//
//                    ){
//     var timetemp = time
//     var confAtemp = confA
//     var confBtemp = confB
//     var confCtemp = confC
//     var confDtemp = confD
//     var escalatortemp = escalator
//     var signDesktemp = signDesk
//     var postertemp =poster
//     var wc1temp =wc1
//     var wc2temp =wc2
//     var wc3temp =wc3
//     var room1temp =room1
//     var room2temp =room2
//     var room3temp =room3
//     var room4temp =room4
//     var room5temp =room5
//     var room6temp =room6
//     var exhibitiontemp =exhibition
//     var mainMeetingtemp =mainMeeting
//     var serviceRoomtemp =serviceRoom
//     var restauranttemp =restaurant
//     var relaxRoomtemp =relaxRoom
//     var importExporttemp =importExport
//     var secondAisletemp =secondAisle
//     var firstAisletemp = firstAisle
//     var sumtemp = confAtemp + confBtemp + confCtemp + confDtemp + signDesktemp + postertemp +  wc1temp + wc2temp + wc3temp + room1temp +
//         room2temp + room3temp +  room4temp +  room5temp +  room6temp +  exhibitiontemp +  mainMeetingtemp + serviceRoomtemp+  restauranttemp +  relaxRoomtemp +
//         escalatortemp + importExporttemp + secondAisletemp +  firstAisletemp;
//
//     this.time=timetemp;
//     this.confA=confAtemp;
//     this.confB=confBtemp;
//     this.confC=confCtemp;
//     this. confD = confDtemp
//     this. escalator = escalator
//     this. signDesk  = signDesktemp
//     this. poster  =postertemp
//     this. wc1  =wc1temp
//     this. wc2  =wc2temp
//     this. wc3  =wc3temp
//     this. room1  =room1temp
//     this. room2  =room2temp
//     this. room3  =room3temp
//     this. room4  =room4temp
//     this. room5  =room5temp
//     this. room6  =room6temp
//     this. exhibition  =exhibitiontemp
//     this. mainMeeting  =mainMeetingtemp
//     this. serviceRoom  =serviceRoomtemp
//     this. restaurant  =restauranttemp
//     this. relaxRoom  =relaxRoomtemp
//     this. escalator  =escalatortemp
//     this. importExport  =importExporttemp
//     this. secondAisle  =secondAisletemp
//     this. firstAisle  = firstAisletemp
//     this. sum  = sumtemp
//
//
//     // this.confApercentagepercentage = confAtemp / sumtemp ;
//     // this.confBpercentage = confBtemp / sumtemp ;
//     // this.confCpercentage = confCtemp / sumtemp ;
//     // this. confDpercentage =  confDtemp / sumtemp ;
//     // this. confDpercentage =  confDtemp / sumtemp ;
//     //
//     // this. signDeskpercentage =  signDesktemp / sumtemp ;
//     // this. posterpercentage = postertemp / sumtemp ;
//     // this. wc1percentage = wc1temp / sumtemp ;
//     // this. wc2percentage = wc2temp / sumtemp ;
//     // this. wc3percentage = wc3temp / sumtemp ;
//     // this. room1percentage = room1temp / sumtemp
//     // this. room2percentage = room2temp / sumtemp
//     // this. room3percentage = room3temp / sumtemp
//     // this. room4percentage = room4temp / sumtemp
//     // this. room5percentage = room5temp / sumtemp
//     // this. room6percentage = room6temp / sumtemp
//     // this. exhibitionpercentage = exhibitiontemp / sumtemp
//     // this. mainMeetingpercentage = mainMeetingtemp / sumtemp
//     // this. serviceRoompercentage = serviceRoomtemp / sumtemp
//     // this. restaurantpercentage = restauranttemp / sumtemp
//     // this. relaxRoompercentage = relaxRoomtemp / sumtemp
//     // this. escalatorpercentage = escalatortemp / sumtemp
//     // this. importExportpercentage = importExporttemp / sumtemp
//     // this. secondAislepercentage = secondAisletemp / sumtemp
//     // this. firstAislepercentage =  firstAisletemp / sumtemp
//
//     this.toString=function(){
//         return confAtemp+" "+confBtemp + confCtemp;
//     }
// }
//
//
