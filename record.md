背景介绍//
CICSC(China Intelligence Cyber Security Conference)（虚构）
是一个智能网络安全领域的全国性学术大会，会议旨在增进学界，商界，
及社会人士之间的交流与合作，推动该领域的发展创新。本次会议为期三天，
包括学术研讨、成果展览、黑客大赛三大组成部分，设置数据安全、物联网安全、
移动安全、隐私保护、智能场馆、及智能安全技术创新六大研讨主题。
会议期间有多位资深专家和商业大咖带来精彩的主旨报告、经验分享与成果展示，
同时还邀请了许多参展单位和媒体记者。本次会议参会人员规模在5000人左右。
为了加强会场管理，也为了呼应“智能场馆安全运营”的会议主题，
本次会议采用了无线传感器技术获取参会人员的实时位置信息。
参会人员在进入会场时需要佩戴电子胸牌，胸牌内置信号发射器并绑定其个人信息。
会场内布置的无线传感器可以实时接收并记录其覆盖范围内的信号发射器发出的信号。
采集的传感器数据可用于实时检测会场人群分布情况，
便于会场管理人员及时合理地调动资源，处理各种突发状况，为会议各项议题的顺利进行保驾护航。
会议组委会临时成立了一个数据分析小组，负责分析这些传感器数据，
协助组委会管理会场，响应和处理各类应急事件。假设您是数据分析小组成员，
请您设计并实现一套数据可视分析解决方案，完成组委会交代的数据分析任务。

（1）请您通过分析数据，推测会议期间主会场和各分会场的日程安排。（建议参赛者回答此题文字不多于800字，图片不多于5张）
（2）请您分析会议期间会场内的人员类型，总结各类型人员的移动规律。（建议参赛者回答此题文字不多于1000字，图片不多于10张）
（3）请您找出至少5个会议期间值得关注的异常事件。（建议参赛者回答此题文字不多于1000字，图片不多于10张）
（4）您认为这次会议在组织和管理方面有哪些不足？（建议参赛者回答此题文字不多于500字，图片不多于3张）

第一题：请您通过分析数据，推测会议期间主会场和各分会场的日程安排。
参考：http://www.xdef.org.cn/2018/agenda.html    http://www.china-forensic.com/ccfc/


http://www.csig.org.cn/igal9/      http://research.cbs.chula.ac.th/pvis2019/program.aspx

    第一天：8: 00 - 8: 30 签到
            8: 30 - 9: 00 主会场开幕式
            9：00 - 9：40  主会场专题
            9：40 - 9：50  休息（10分钟，此时主会场人数减少，厕所人数增加（有111人在厕所1，所以第4题建议））
            9：50 - 10：30 主会场专题
            10：30 - 11：00  休息（20分钟，此时主会场人数减少，厕所人数增加（有374人在厕所1，所以第4题建议）
            11：00 - 12：00 主会场集体报告

            （中午12：50 - 13：50relaxroom人多）

            13: 30 -  14: 10 签到
            14：10 -  17:20  分会场ABCD
                             分会场A  14：10 - 14：50 开会             分会场BCD  14：10 - 16：00 开会
                                      14：50 - 15：00 休息（10分钟）
                                      14：00 - 16：10 开会
                                      16：10 - 16：30 休息（20分钟）              16：00 - 16：30 休息（30分钟）
                                      16：30 - 17：20 开会                        16：30 - 17：20 开会
            15: 30 - 15:40   休息
            15: 40 - 15:40   海报
            （下午：16：10 - 17：10 relaxroom人多）
    第二天：8: 30 - 9: 00  签到
            9：00 - 10：30 主会场集体开会
            10：30 - 11：00 休息
            11：00 - 12：10 主会场集体开会（待定，有可能会议结束了，但是堵在门口,可以作为第4题的建议）
            （中午12：50 - 13：50relaxroom人多）
            14：10 -  17:20  分会场ABCD
                             分会场A  14：10 - 14：50 开会             分会场BCD  14：00 - 16：00 开会
                                      14：50 - 15：00 休息（10分钟）
                                      14：00 - 16：10 开会
                                      16：10 - 16：30 休息（20分钟）              16：00 - 16：30 休息（30分钟）
                                      16：30 - 17：20 开会                        16：30 - 17：20 开会
            （下午：16：00 - 16：30 relaxroom人多）
     第三天：8: 30 - 9: 00  签到
             9：00 - 10：30 主会场集体开会
             10：30 - 11：00 休息
             11：00 - 12：00 主会场开会
             分会场A：10：50 - 11：20分会场会议
             分会场B：9：50 - 10：50分会场会议
             分会场C：9：40 - 10：50分会场会议
             分会场D：无



第二题：请您分析会议期间会场内的人员类型，总结各类型人员的移动规律。
7:10之前的人：
早上来的比较早先去room6,然后这部分人分别有的长时间呆在签到处10196，11462，13300，15367，12856
有的呆在服务台15800，有的呆在sid10019出口11396，16111
        酒店工作人员：
            秩序维持者:
            清洁人员:早上到达的时间比较早，一般在楼梯走道厕所处呆的时间比较多。
            餐厅工作人员:        9：00之前到会议场地,9：00左右到达并长时间呆在room5      例如16045和11619应该是厨师
                                 9：00之前到会议场地,9：00左右到达并长时间呆在room5，并在room1，room3之间频繁移动。  例如16817供应茶歇

        参会者：
            主办方：  签到处、出口、入口、服务台、电梯处,下午提前到分会场布置的（11496，18185）：
                                 7：30左右到达会议场地，先去room6集合再到达各自管辖区域
            媒体记者：           第1天8：30之前到达会场，第2，3天9：00左右到达会场，并且在主会场开会期间移动频繁,中午会在休闲区休息（比如是11553，而10955待定，因为早上去了二楼，中午没有在餐厅用餐）
            资深专家和商业大咖： 第1天8：30之前到达会场，第2，3天9：00之前到达会场，主要呆在主会场，
                                    并会出现在主讲台（14461在8：45的移动因子或活动因子比较高，去了room2然后在讲台上）
            主持人：
            参展单位：           第1天8：30之前到达会场，第2，3天9：00左右到达会场。下午14：00到达分会场，并长时间在分会场的主讲台。中午在餐厅用餐
                                （比如18811在第一天14：02在D分会场；10463在第一天14：02在分会场C；14257在分会场B；16099在分会场A）。
                                 分别去了分会场A，比如10019，12726，13563，16099先去了room2再去分会场的sid10201,
                                                            17782，18185...很多是sid10301
                                 分别去了分会场B，比如10427, 14257, 16700再去分会场sid10401
                                 
       注：第一天：在分会场D主讲台sid为10801位置有10705（应该是服务人员，去了room6），18062，18811，12019，sid为10901的是18811，18607
              18062在第一天下午去了海报区，然后长时间待在分会场D的主讲台，第二天早上就带你以前来到会场在room2呆了会去了主会场，下午去了趟分会场C，第三天先去了主会场再去了分会场A
              18811在第一天上午九点以前来到会场上午在主会场前排，然后下午先去了分会场D呆了两个小时又去了分会场C,第二天也是上午一直呆在主会场，下午去了趟分会场A
              12019在第一天上午九点以前到达会场，随后在主会场呆了一上午，下午先去了分会场B呆了一个多小时，随后去了分会场D.第二天上午在主会场，下午去了分会场B
              18607在第一天上午在主会场呆了一上午，下午先去了分会场B,后去了分会场D.第二天上午在主会场呆了一上午，下去在分会场B呆了近两个小时
          第二天：在分会场D主讲台sid为10801位置有15387（应该是服务人员），12442，16837 在sid为11169，12726
              12442在第二天上午在主会场呆了一上午，下午去了分会场D呆了两个小时，随后去了分行会场A,第三天先去了先去了主会场后去了分会场A.
              16837在第一天在主会场。第二天早上在主会场，下午先去了分会场B再去了分会场D
              11169在第一天只去了主会场，第二天上午去了主会场，下午去了分会场D呆了两个小时，随后去了分会场D.
              12726在第一天                                                     

参会人员类型轨迹分类：
    1，参加一整天会议的学者或参会人员：上午先去主会场参加主会场的会议，
        中场休息去room3休息或者茶歇(或者去趟厕所)，然后继续去主会场听会议，
        中午会去restrant吃午饭，吃完饭去relaxroom休息，然后下午根据自己的需求去分会场听会议，
        中场休息去room1茶歇或者休息，然后继续分会场的会议。
    2，会场的负责签到的志愿者：早上首先去一趟room6，然后就去签到处中午的时候去一趟room6（猜测room6有可能是志愿者或者服务人员午休吃饭的地方），下午继续在签到处呆着。
    3，酒店负责午餐的后厨人员：上午在room5里面呆着，然后中午去一趟restrant然后子啊五在room5（猜测room5有可能是后厨人员主备午餐的地方）。
    4，参展商：有可能参展商的可能就下去去分会场宣讲一下。
    5.只参加下午场的会议的人就去分会场听一下会议。
    6.媒体记者有可能是在主会场带着拍照记录。例如12324



第三题：请您找出至少5个会议期间值得关注的异常事件。
     1.有些人一整天只在会场呆半个小时，在走道里晃一圈就走了。
     2.第二天下午4：30左右休闲区人忽然增加到一千多人.
     3.传感器的原始数据的数目是470，图片上的是多了23+8个
     4.第二天时间68017秒到71469秒没有数据。
     


第四题：您认为这次会议在组织和管理方面有哪些不足？
    1. 厕所2在10：40左右有374个人进入，此时厕所1只有80多人进入，一楼明显人数落差太大，有可能是没有标识提示厕所位置
    2.有些人进入会场都不需要经过签到处，建议签到处安排在所有人进入必经之路上，以免非会议人员进入扰乱秩序


传感器的原始数据的数目是470，图片上的是多了23+8个

containerfloor1,和containerfloor2：

class,id,作用
.layoutrect或.RectSensoridfloorfloor1\d_\d_\d,     "center,\d,\d",    最小的方框rect,即每个sensor的检测范围
(点击方框有hover, 并且会将所有经过该rect的人的路径显示出来)
.sensors,    RectSensoridfloor1_00_19,    sensor的名字
.mergedrect,    "rect " +classname ,    大的方框的范围即会场
.persontrack,    无,    人的轨迹path
.personidtracktexttime,   无,    人的轨迹的时间文字
.personidtrackdot,   无,    人的轨迹的点dot circle

persondotdiv：



上午会议开始 8：00 ---- 9 ：00；
下午会以开始14：00 ---- 14：30；
第一天的下午15：00----15：30有一场报告结束，17：30最后一场活动结束


场馆： room6 酒店工作人员休息就餐的地方


人员类型：酒店服务人员，清洁人员，会议服务志愿者，媒体记者，资深专家，商业大咖，参赛人员，学生，参展商
可能出现的异常：盗取数据（非正常时间出现在会场的人员。出去游玩。应该属于开会的期间没有数据，就可能是停电了。所有的非会议事件都属于一场，例如团体打篮球）
管理和组织不足：场内拥堵，厕所和餐厅不够用，
主题：设置数据安全、物联网安全、移动安全、隐私保护、智能场馆、及智能安全技术创新




建议：
我觉得啊，会场的位置可以提出建议，比如从主会场出来的人大部分直接去了海报去的人流量较多，
那么海报去和主会场的位置安排的近一些
找出开幕式的主持人，开幕式这个时间带你的人都在干嘛

当每个人的分类标签出来之后，可以做这样的分析，选择人员类型，比如工作人员在某个时间带你的分布情况，有利于管理


不足之处：只提供午餐，晚餐不提供
         厕所2在10：40左右有374个人进入，此时厕所1只有80多人进入，一楼明显人数落差太大
         签到处应该是每个人都会经过的，但是有些人会不经过签到处直接进入会场（例如ID为11260），有可能会导致一些鱼龙混杂的人进入威胁会场安全秩序，所以签到处的位置安排的不合理。


志愿者（服务人员）：轨迹路线基本是在签到处和服务台之间移动

异常情况：有些人在会场一天只呆了半个小时左右的时间，而且指在走廊主会场楼梯什么的地方走了一圈就离开了。例如ID为10248，11741，18734等。
         第一天下午主会场没有会议但16111在里面呆了一下午，





参会人员类型轨迹分类：
    1，参加一整天会议的学者或参会人员：上午先去主会场参加主会场的会议，中场休息去room3休息或者茶歇(或者去趟厕所)，然后继续去主会场听会议，中午会去restrant吃午饭，吃完饭去relaxroom休息，然后下午根据自己的需求去分会场听会议，中场休息去room1茶歇或者休息，然后继续分会场的会议。
    2，会场的负责签到的志愿者：早上首先去一趟room6，然后就去签到处中午的时候去一趟room6（猜测room6有可能是志愿者或者服务人员午休吃饭的地方），下午继续在签到处呆着。
    3，酒店负责午餐的后厨人员：上午在room5里面呆着，然后中午去一趟restrant然后子啊五在room5（猜测room5有可能是后厨人员主备午餐的地方）。
    4，参展商：有可能参展商的可能就下去去分会场宣讲一下。
    
    
    
签到处（三天）：12602  14678  15801 11251  11876 15152 10164 11532 10196 15367 15408 16065 14819 
14825 15670  13300  17054  18367  10345  14859  都在room6中休息

服务台（三天）：15800 13322 10638 10762   在room6中休息

进出口站台：16290   18059  11143  18689  18123  1116  11462  12856   13339   13982   19027 
  12573   16111  19627  11396  15095  12206  12426   19682 18347  
每个进出口两人，ABCD分会场口一人

扶梯处：17516 11778

分会场A服务人员：11496  18185
分会场B服务人员：10309 13578
分会场C服务人员：14255 11383
分会场D服务人员：10705
主会场：17773 11991  19479  16615 12805  13485 12169 18574 12611

展厅工作人员;16310  13890    13460  14863  19617  11026


第一天在room2不去其他会场：12177  11537  14854  19048  13698  14044 16028
第二天在room2不去其他会场：16435  16598  10572 11962

游手好闲：16649 13850 14904 12530
14278
16569
18700
19405
12827
17582
13818
15779

12508
12732
17219



分会场C：10463,12320,17306,10463,10633第一天下午去了分会场C和room2
        11221,10996,19886,15893第二天去了C和room2
         16652,17306第三天去了C和room2



d3.select("#persondotsvg").selectAll(".personid").style("fill","red").style("opacity",1)
