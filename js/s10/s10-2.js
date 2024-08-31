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

    "nextpage": "../gameindex.html",

    "steps": 2,

    "name": ["指导老师","众人",],

    "texts": ["这是我们训练这么久以来第一次外出比赛，希望大家好好重视，这次不仅仅是代表我们合唱团，也代表了学校，绝不能给学校丢脸，知道了吗？",
        "明白！",
    ],

    "small": ["none","none",],

    "big": ["none","none",],

    "bigpos": ["middle","middle"],
};