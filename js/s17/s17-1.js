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

    "nextpage": "./s17-1.html",

    "steps": 9,

    "name": ["张润远","白特","张润远","白特","张润远","旁白","张润远","白特","张润远",],

    "texts": ["你竟然报了歌手比赛，没想到你竟然会唱歌",
        "和大家一起唱还行，我不怕失误，但真要一个人唱我还是不行，会紧张的",
        "那你干嘛报名啊？",
        "有一些特殊原因，不得不报，而且必须要拿到一个好名次，所以才来找你帮助嘛",
        "好吧，看来是有些我不应知道的故事。那你先给我唱一段吧，看看效果怎样",
        "你唱起自己最熟悉的一段，虽然不算难听，但你从张润远的表情中看出，还达不到胜出的地步",
        "你主要还是紧张导致气息不稳定，音调音色都还不错，这样吧，每天早上7点半我们在这集合，你每天唱一首歌给我听，然后再去上课，看看之后你还会不会紧张",
        "那岂不是还得你每天都起那么早吗",
        "没事的，反正我五天早八，不影响",
    ],

    "small": ["张润远","白特","张润远","白特","张润远","none","张润远","白特","张润远"],

    "big": ["说话","脸红","说话","说话","无表情","none","说话","说话","微笑",],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};