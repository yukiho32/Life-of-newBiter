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

    "nextpage": "../s9/s9.html",

    "steps": 6,

    "name": ["陈继华","白特","陈继华","旁白","陈继华","旁白"],

    "texts": ["就这样结束了？你还能不能再烂一点，明明是一场令人感动的再回会，你偏偏搞成不欢而散，你到底在想什么啊？",
        "我也不想啊",
        "唉，算了，我不管了，这下怕你们连朋友都做不了了",
        "你感到一种莫名的伤感从心头涌出，你抓紧转过头去",
        "哥们，算了吧，也别太沮丧，都已经这样了，想开点，找点事情转一下注意力吧，总会有更适合的",
        "这场风波在两位当事人的沉默中渐渐消散，你不知道以后该怎么面对赵文妍，甚至不确定以后还能不能再相见，你试图寻找到一个突破僵局的抓手，指引你走出这片泥泞，于是，你将目光放在了三周后的运动会上",
    ],

    "small": ["陈继华","白特","陈继华","none","陈继华","none"],

    "big": ["黑脸","无表情","黑脸","none","无表情","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle",],
};