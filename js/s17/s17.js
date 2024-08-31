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

    "nextpage": "./s17-1.html",

    "steps": 10,

    "name": ["赵文妍","白特","赵文妍","白特","赵文妍","白特","赵文妍","白特","赵文妍","旁白"],

    "texts": ["白特，好久不见了",
        "赵文妍，没，没想到在这遇到了你。最近怎么样？",
        "还能怎样，老样子呗",
        "你来这有什么事吗？",
        "我男朋友准备参加学校的那个歌手比赛，我过来给他送饭",
        "哦，哦，歌手比赛啊",
        "怎么，你不会不知道吧",
        "怎么可能，我，我还报名了呢！",
        "哦，是吗，看不出来你还有这天赋啊，那到时候赛场上见喽，加油",
        "赵文妍笑着离开了，只留下你一人呆呆地站在原地，你知道，泼出去的水已经收不回来了，这个比赛，你是必须去参加了",
    ],

    "small": ["赵文妍","白特","赵文妍","白特","赵文妍","白特","赵文妍","白特","赵文妍","none"],

    "big": ["说话","脸红","说话","说话","无表情","脸红","说话","脸红","汗颜","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};