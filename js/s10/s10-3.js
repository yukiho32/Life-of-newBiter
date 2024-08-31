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

    "steps": 17,

    "name": ["指导老师","白特","指导老师","白特","指导老师","白特","指导老师","白特","众人","白特","众人","白特","白特","众人","白特","众人","旁白"],

    "texts": ["白特，我看你挺放松的，不紧张吗？",
        "不紧张，老师，我明白紧张也没什么用，还会影响发挥，不如当成一次享受",
        "你能这么想没问题，但一定要重视，不能儿戏",
        "放心吧老师，我知道重要性。老师找我还有其他事吗？",
        "我是看你这么放松，想让你回去活跃活跃气氛，让大家别一直紧绷着。",
        "好的老师，没问题，那我回去了",
        "嗯，去吧",
        "朋友们，大家听我说。我知道大家对此次比赛非常重视，想要为学校拿到一个好名次。但我想问问大家，要想拿到成绩，是不是首先要自身实力过硬。",
        "是，没错",
        "那如果我们拿到了好成绩，是不是说明我们非常优秀",
        "对",
        "那既然大家都想拿奖，那就是认可我们自身的实力，那我们就没必要紧张了",
        "紧张说明对自己的不自信，说明实力还不够，但既然我们都已经做好拿奖的准备，实力这方面我们还需要担心吗？",
        "对啊，我们很强的，好好发挥就好了",
        "那我们一起加个油，然后好好准备就好了",
        "一二三，加油！",
        "轮到你们上场，你们正常发挥，几乎没有失误，得到评委与观众的一致好评，最终也是如愿得奖，大一的社团生活也算是得到完美落幕。",
    ],

    "small": ["none","白特","none","白特","none","白特","none","白特","none","白特","none","白特","白特","none","白特","none","none"],

    "big": ["none","笑","none","说话","none","说话","none","笑","none","笑","none","笑","笑","none","笑","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};