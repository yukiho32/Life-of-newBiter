setTimeout(function() { 
    const loader = document.getElementById('loader');  
    loader.classList.add('active'); 

    setTimeout(function() { 
        loader.style.opacity = 0; 
        setTimeout(function() {  
        loader.style.display = 'none'; 

        const content = document.querySelector('.dialog');  
        content.style.display = 'block'; 

        }, 2000);
    }, 4000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "./s17-3.html",

    "steps": 10,

    "name": ["旁白","张润远","白特","张润远","白特","旁白","白特","旁白","旁白","旁白"],

    "texts": ["比赛当天",
        "加油，就像你平常对我唱的那样就可以了",
        "可我还是紧张，平时那是因为我看到你所以才不紧张，现在不一样",
        "放心，我会去现场坐在一个你能看到的地方，你唱的时候就看向我，就当作和平时一样",
        "那说好了，你一定要来",
        "比赛现场 ，你在后台焦急地扫视着观众席，终于，在正中间评委的后方你找到了要寻找的目标，你这才松了口气",
        "（加油，白特，你不仅仅是一个人在战斗）",
        "到你上台，你盯着是先找好的方向，动情演唱起来，你完全投入其中，仿佛四下无人，眼前只有那个一直为你加油鼓劲的人",
        "你知道，这场比赛你不能输，不仅仅为了向赵文妍证明自己过得很好，更是为了向她证明——你没有看错人",
        "你不知道唱完时台下观众是何反应，你只知道，她在一边欢呼，一边流泪，以至于你是在观众的提醒下才想起致谢下台",
    ],

    "small": ["none","张润远","白特","张润远","白特","none","白特","none","none","none"],

    "big": ["none","闭眼笑","说话","闭眼笑","说话","none","none","none","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};