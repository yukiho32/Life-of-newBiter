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
    }, 2000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "../gameindex.html",

    "steps": 3,

    "name": ["张润远","白特","旁白"],

    "texts": [
        "已经到了，那我从这边进去了，学长再见！",
        "再见，注意安全",
        "道别后，一人走回寝室，走在楼梯上翻看着女孩的照片，你突然觉得与那么多人相比，你真的很幸运",
    ],

    "small": ["张润远","白特","none",
    ],

    "big": ["微笑","笑","none",
    ],

    "bigpos": ["middle","middle","middle",
    ],
};