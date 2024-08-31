alert("达成成就：天籁之音");
let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
x.club=2;
localStorage.setItem(a,JSON.stringify(x));
var c =
{
    "type": 1,

    "nextpage": "",

    "steps": 1,

    "name": ["学姐"],

    "texts": ["恭喜你，无论是你的嗓音还是你的情感，都非常合适，一首如此简单的歌曲竟能演绎出如此水平，真是令人惊讶，欢迎加入合唱团！",],

    "small": ["none",],

    "big": ["笑",],

    "bigpos": ["middle",],
};