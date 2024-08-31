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

    "nextpage": "./s8-2.html",

    "steps": 11,

    "name": ["陈继华","旁白","陈继华","陈继华","陈继华","白特","陈继华","陈继华","陈继华","陈继华","白特"],

    "texts": ["约我出来有什么事吗",
        "你向陈继华讲述了你与赵文妍之间的故事和你的想法，他若有所思",
        "你的意思是，赵文妍是你高中同学，你从高中的时候就喜欢她但没有表示出来，你以为上了大学就会把她忘掉",
        "但你发现做不到，就当你打算去跟她接触时，你发现疑似有男朋友，于是你避免产生误会就来问我怎么办",
        "很简单啊，就像你最开始想的，直接去找她不就行了",
        "可她已经有男朋友了啊",
        "谁说女生有男朋友了就不能有其他男生去找她",
        "况且你不是说你从来就没向她表达过类似是情感吗，人家见你说不定只会有一种老友重逢的喜悦，就你往其他方面去想，难不成就因为她有男朋友，你们连朋友都做不成了吗",
        "你们分开有大半年了，这时候你突然跑过去向她表白才显得奇怪呢，慢慢从朋友做起，把你们之间的情谊逐渐恢复到往日的程度再说",
        "退一万步讲，她亲口说她有男朋友了吗，这不都是你自己在那瞎想出来的吗，说不定只是玩的好的朋友，但你要是就此没有了行动，那我确定以后你的想法的确就会成真",
        "你说的对，哪怕不在一起，这段友情我也不想就因为这断掉，我这就去联系她",

    ],

    "small": ["陈继华","none","陈继华","陈继华","陈继华","白特","陈继华","陈继华","陈继华","陈继华","白特",],

    "big": ["无表情","none","说话","说话","说话","生气","说话","说话","说话","笑","无表情"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle"],
};