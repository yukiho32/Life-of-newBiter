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

    "nextpage": "./s8-1.html",

    "steps": 2,

    "name": ["白特","旁白"],

    "texts": ["是她，要不要找她聊聊？",
        "可当你抬起头时，你猛地发现在赵文妍身边竟然还跟着一个男生，看着两人有说有笑的样子，不禁让你怀疑起来",
    ],

    "small": ["白特","none"],

    "big": ["none","none",],

    "bigpos": ["middle","middle"],
};