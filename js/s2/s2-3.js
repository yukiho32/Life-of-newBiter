alert("达成成就：优秀标兵！");
let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
x.achievement[0]=1;
localStorage.setItem(a,JSON.stringify(x));
var c =
{
    "type": 1,

    "nextpage": "./s2-5.html",

    "steps": 2,

    "name": ["白特","白特",],

    "texts": ["哈哈，我那威风的行进想想都帅。","优秀标兵，这大学生活开始得挺顺利嘛。"],

    "small": ["白特","白特"],

    "big": ["none","none"],

    "bigpos": ["none","none"],
};