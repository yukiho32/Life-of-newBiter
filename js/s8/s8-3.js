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
    "type": 1,

    "nextpage": "./s8-4.html",

    "steps": 1,

    "name": ["旁白"],

    "texts": ["你来到北湖，发现赵文妍已经在岸边等待",
    ],

    "small": ["none"],

    "big": ["none",],

    "bigpos": ["middle",],
};