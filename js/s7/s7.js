const displayDuration = 3000; 
const fadeOutDuration = 3000;

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
    "type": 1,

    "nextpage": "./s7-1.html",

    "steps": 2,

    "name": ["白特","旁白"],

    "texts": ["嗯，我决定了",
        "走下飞机，坐上地铁，踏进校园，你努力使自己尽快想起上学期的种种往事，好让自己快速地重新融入其中",
    ],

    "small": ["白特","none"],

    "big": ["none","none"],

    "bigpos": ["middle","middle"],
};
