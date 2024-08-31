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

    "steps": 4,

    "name": ["白特","白特","众人","旁白",],

    "texts": ["大家听我说，不要这样，我们只是暂时离开了，不代表我们以后都不能再回来",
        "等以后大家想这了，完全可以一起回来看看，我相信桌游社不会拒绝我们。这里应该承载我们最快乐的时光，所以，请不要把离别的哀伤也停留在这里，我们好好享受这最后一次的乐趣，以快乐作结，这样我们回想它时，才不会感到难过。我说得对不对啊，大家！",
        "对！我们嗨起来！",
        "离开桌游社，你明白，接下来硬核的生活终于 要开始了",
    ],

    "small": ["白特","白特","none","none",],

    "big": ["none","none","none","none",],

    "bigpos": ["middle","middle","middle","middle",],
};