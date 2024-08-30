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
    }, 12000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "./s6-2.html",

    "steps": 2,

    "name": ["旁白","旁白"],

    "texts": ["冬天的北京没有想象中那样寒风凛冽，反而有种凋零的死寂","期末考试就这么一晃而过，你已经不记得第一场考试距离最后一场经过了多久，看着南方很难见到的空枝条，总有种说不上的空虚留在心中，你总觉得，这些考试就像这里的树一样，总归是少了点什么"
    ],

    "small": ["none","none"],

    "big": ["none","none"],

    "bigpos": ["middle","middle"],
};
