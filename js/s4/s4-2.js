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

    "steps": 2,

    "name": ["一阵男声","另一阵男声",],

    "texts": ["都努力这么久了，就再多坚持一下吧，我帮你，这真的没你想象中那么难",
        "不难不难，是，对你们这种成绩好的人来说的确不难，但我真的做不到啊",
    ],

    "small": ["none","none",],

    "big": ["none","none",],

    "bigpos": ["middle","middle",],
};
