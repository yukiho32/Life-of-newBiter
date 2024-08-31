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
    }, 5000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "../s11/s11.html",

    "steps": 15,

    "name": ["白特","社长","白特","众人","社长","社长","白特","社长","众人","社长","众人","社长","白特","旁白","旁白"],

    "texts": ["不是社长，平时你不也没干什么事吗，怎么突然想找个接班人了？你在那又不用干啥活，慌什么",
        "你这是什么话，我难道没有为我们桌游社贡献力量吗？我为桌游社做出的贡献，可比你们想象的还要重大",
        "对对对，社长最伟大了。那这样伟大的社长，怎么会突然想退位呢？您这么优秀，我们哪有本事来接替您啊",
        "对啊，社长，非您不可啊",
        "行了行了，哪有像你们这样捧杀的啊。",
        "好吧我说实话，最近我任务太多了，这学期结束我还要去准备考研的事，实在是拿不出精力放到这边了。就体谅体谅我，放过我吧",
        "好吧，那你说怎么选",
        "我们既然是桌游社，那当然得靠桌游来一决胜负了",
        "这不公平啊，每个人擅长的桌游又不一样，有的桌游还是团队游戏，怎么决胜负啊",
        "这我当然考虑到了，所以我们选取一个大家都会且容易分出胜负的项目，那就是——斗地主！",
        "啊！斗地主？！",
        "哎呀，我好不容易才想到这个大家都会的，不然你们说应该干嘛",
        "好吧好吧，就这样吧",
        "虽然你对自己的技术非常自信，但奈何运气也是重要的一部分，你倒在了去往半决赛的最后一步路上",
        "经过决赛的角逐，最终新社长由一位初露头角的女孩担任，你不得不佩服，谁说女子不如男。但愿桌游社之后能够继续蒸蒸日上吧",
    ],

    "small": ["白特","none","白特","none","none","none","白特","none","none","none","none","none","白特","none","none"],

    "big": ["说话","社长","笑","none","社长","社长","说话","社长","none","社长","none","社长","笑","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};