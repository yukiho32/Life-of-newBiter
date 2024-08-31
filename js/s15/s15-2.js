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
    }, 6000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "./s15-3.html",

    "steps": 12,

    "name": ["白特","负责人","负责人","旁白","张润远","白特","张润远","白特","张润远","白特","张润远","旁白",],

    "texts": ["就这么点人吗？",
        "这次我们去的组织不大，就在居民楼里，他们把一套房分成四个隔间，免费供给那些在附近医院治疗的外地家庭",
        "里面的小孩最小的才4岁，最大的也才刚到读二年级的年龄。今天大家也不用做什么，陪他们做一顿特别的晚餐就好了，主要是让小孩子们参与进来",
        "由于剩余四人都是专业志愿者团队的成员，相对而言，你还是与学妹有更多的话题可聊，自然而然地，你们走在一起。",
        "学长你好，我叫张润远，是特立书院的新生",
        "你好啊，我叫白特，睿信书院软件工程专业。你挺厉害啊，能考进特立书院",
        "其实也不是很厉害了，也有点运气因素",
        "那你怎么想到来参加志愿活动？你们不挺忙的吗？",
        "忙是挺忙的，但还不至于忙到周末都完全没有时间。主要是我平时就挺喜欢帮助别人，在网上看到有这么多可怜的小朋友，就想来帮帮他们，那学长你呢？",
        "我有个朋友因为患病最后休学，我挺能理解这个群体的困难，我帮助不了我的朋友，那我就帮助那些我能帮助的人吧",
        "挺好的，你的朋友知道了一定也会为你感到欣慰的",
        "走了一小段路，你们进入小区，终于到达目的地",
    ],

    "small": ["白特","none","none","none","张润远","白特","张润远","白特","张润远","白特","张润远","none",],

    "big": ["无表情","none","none","none","微笑","说话","闭眼笑","笑","说话","无表情","闭眼笑","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};