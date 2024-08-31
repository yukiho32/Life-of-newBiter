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
    }, 8000);
}, 500);
var c =
{
    "type": 1,

    "nextpage": "",

    "steps": 6,

    "name": ["旁白","旁白","旁白","旁白","白特","白特"],

    "texts": ["回到学校，跟随着大一新生一同入校，你能感受到他们身上的活力与期待，你回想着去年的自己是否也是如此激动，如今的你早已平淡下来，比起期待自己能干出些多么令人震惊的事，你更在意的是小学期究竟要完成些什么",
        "小学期时间不算长，一眨眼就过去了，你算是取得了马马虎虎还算不错的成绩吧，虽说不是最好，但至少还看得过去",
        "在此期间，六级成绩也公布出来，过了，和四级差不多，同样是一个不高不低的分数。可你却没有了四级通过时那般喜悦，你只感到一种迷茫，你不知道自己与其他大学生有何区别",
        "同样去考四级，四级过后同样去考六级，那么六级过后呢？似乎总是按照前人的脚步一步一步地前进，并且也没有什么特别优异的成绩。总之就很平稳，对，平稳，你在心里这么想着",
        "一个平凡的大学生，走在一条平稳的道路上，做着平淡的事情，取得平稳的收获，最后，便成为平凡众生的一员",
        "每个人都幻想着自己是故事的主角，斩杀恶龙的勇者，拯救世界的大英雄，可到头来，又有多少人还记得这些理想，又有多少人最后只是将其看作天真幼稚，一笑而过，成为那阅读故事的普通人",
    ],

    "small": ["none","none","none","none","白特","白特"],

    "big": ["none","none","none","none","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle","middle",],
};