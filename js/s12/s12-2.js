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

    "nextpage": "../s13/s13.html",

    "steps": 5,

    "name": ["旁白","白特","白特","旁白","白特",],

    "texts": ["当成绩揭晓时，你小心翼翼的点开排名表，一排一排地寻找",
        "没有，这里没有，这页也没有",
        "嘿，终于找到了！",
        "你终于找到了自己的排名，尽管算不上特别优秀，但对于你想选择的软件工程专业还是绰绰有余",
        "接下来的大学生活会是什么样的呢？好期待啊",],

    "small": ["none","白特","白特","none","白特",],

    "big": ["none","none","none","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle",],
};