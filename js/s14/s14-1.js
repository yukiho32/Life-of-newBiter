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
    }, 8000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "../s15/s15.html",

    "steps": 4,

    "name": ["旁白","旁白","旁白","白特",],

    "texts": ["你们立刻赶往医院，看到了躺在病床上的徐熙浩，可惜他睡着了，你们放下慰问品，低声和他说了几句鼓励的话语后，默默离开了病房",
        "根据他的家人所说，至少还要在医院进行治疗几个月，他们只能在这附近住下，再看看以后的情况",
        "你的内心暗暗产生不满情绪，你知道徐熙浩成绩优异，如果不发生这件事，以后他一定能大于所为，可惜造化弄人，上天偏偏向他开了这么个玩笑",
        "徐熙浩，你一定要挺过去。我和陈继华一定会好好努力，等你康复，就由我们来帮你重新实现梦想",
    ],

    "small": ["none","none","none","白特",],

    "big": ["none","none","none","none"],

    "bigpos": ["middle","middle","middle","middle",],
};