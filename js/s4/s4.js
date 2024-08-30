const displayDuration = 2000; 
const fadeOutDuration = 2000;

setTimeout(function() { 
    const loader = document.getElementById('loader');  
    loader.classList.add('active'); 

    setTimeout(function() { 
        loader.style.opacity = 0; 
        setTimeout(function() {  
        loader.style.display = 'none'; 

        const content = document.querySelector('.dialog');  
        content.style.display = 'block'; 

        }, fadeOutDuration);  
    }, displayDuration);
}, 500);
var c =
{
    "type": 1,

    "nextpage": "./s4-1.html",

    "steps": 3,

    "name": ["旁白","白特","白特"],

    "texts": ["请大家抓紧报名四级考试",
        "糟了，忘了还有这茬",
        "怎么办怎么办，这高考完以后我英语水平就像瀑布一样哗哗往下降，这还能考过吗。不对，再拖下去以后不是落得更多吗，得趁还没全忘赶紧考过 。",
    ],

    "small": ["none","none","none"],

    "big": ["none","none","none"],

    "bigpos": ["middle","middle","middle"],
};
