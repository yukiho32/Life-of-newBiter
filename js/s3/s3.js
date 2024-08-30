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
}, 1000);

var c =
{
    "type": 0,

    "nextpage": "./s3-1.html",

    "steps": 3,

    "name": ["白特","白特","白特"],

    "texts": ["听说还有三周就社团招新了","我暂时对桌游社和合唱团感兴趣","找个时间了解一下吧"],

    "small": ["白特","白特","白特"],

    "big": ["none","none","none"],

    "bigpos": ["none","none","none"],
};
