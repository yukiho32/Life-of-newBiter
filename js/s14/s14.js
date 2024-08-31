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
    }, 7000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "../gameindex.html",

    "steps": 11,

    "name": ["旁白","白特","陈继华","白特","陈继华","白特","陈继华","陈继华","白特","陈继华","旁白"],

    "texts": ["你急忙询问陈继华具体情况，对方约你出门见面详谈。你着急地赶到约定地点，陈继华也在那等候多时了",
        "到底怎么回事？生什么病了？怎么说病倒就病倒啊？",
        "我听他家里人说假期就发觉有些不对，去看过医生，这次回学校没多久就发作了，好像是急性白血病",
        "怎么会这样，以前也没见他有不正常啊",
        "所以说是急性的嘛。昨天在课上病倒，被紧急送到医院去救治，现在应该还在医院里吧",
        "在哪家医院，我去看他",
        "欸欸欸，算了算了，别冲动",
        "我问过他家里人，但他们不肯告诉我，说不想因为徐熙浩让我们操心影响我们。况且现在徐熙浩肯定在进行各种治疗，我们去了可能也见不到他，还可能给他家里人添麻烦。我和他家里人一直保持联系，有什么情况我及时和你联系，等过几天病情稳定下来了，我们再一起去。",
        "行吧，那你可一定要和我说",
        "放心吧，徐熙浩也是我的好兄弟，我和你一样担心他呢",
        "此后的几天时间里，你与陈继华时刻关注着徐熙浩的情况，也等待着去看望他的时间，也不知究竟要过多久",
    ],

    "small": ["none","白特","陈继华","白特","陈继华","白特","陈继华","陈继华","白特","陈继华","none"],

    "big": ["none","黑脸","黑脸","说话","无表情","说话","无表情","无表情","说话","笑","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};