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
    }, 5000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "../s12/s12.html",

    "steps": 9,

    "name": ["白特","徐熙浩","白特","徐熙浩","白特","徐熙浩","白特","徐熙浩","旁白",],

    "texts": ["嗨，我们一个考场欸，陈继华呢？他在哪个考场",
        "他呀，压根就没报名",
        "啊，为什么，他四级不是过了吗？",
        "四级他是擦边过的，他说六级肯定没戏，没必要浪费钱了",
        "哎，还以为经过上次他会下定决心好好学英语了呢",
        "那还是算了，现在这样就已经够了，至少他英语课会听课了，这已经是足够大的进步了",
        "那好吧，加油，一定能考过的",
        "嗯，一起成功",
        "考试结束，阅读与写作没有你想象中那么难，你甚至觉得比四级考试还要顺手一点，只不过听力，还是一如既往的听不懂啊",
    ],

    "small": ["白特","徐熙浩","白特","徐熙浩","白特","徐熙浩","白特","徐熙浩","none",],

    "big": ["笑","说话","说话","说话","闭眼","笑","笑","笑","none",],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};