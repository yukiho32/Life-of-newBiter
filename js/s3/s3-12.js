let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
x.club=3;
localStorage.setItem(a,JSON.stringify(x));
var c =
{
    "type": 1,

    "nextpage": "",

    "steps": 3,

    "name": ["学姐","学姐","学姐","学姐"],

    "texts": ["你的表演很精彩",
        "但有点不太适合我们合唱团的风格",
        "很遗憾，我们无法让你加入，但是你的嗓音非常具有特色，我们指导老师对你比较感兴趣，如果你愿意的话，你每次可以来观看我们演出，我们的指导老师也想问问你有没有兴趣让他单独指导你一下，说不定以后就可以加入了呢。",

    ],

    "small": ["none","none","none",],

    "big": ["笑","笑","none",],

    "bigpos": ["middle","middle","middle","middle"],
};