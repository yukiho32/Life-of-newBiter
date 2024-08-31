let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
nxt = "";
if(x.physical>=40) nxt='./s9-3.html';
else nxt='./s9-4.html';
var c =
{
    "type": 0,

    "nextpage": nxt,

    "steps": 5,

    "name": ["裁判","枪声","旁白","旁白","旁白"],

    "texts": ["各就各位，预备——",
        "嘭！",
        "还没等到大脑反应，你的双腿便条件反射般飞奔出去",
        "当你反应过来时，你已跑完第一圈，虽然你已感受到些许的难受，但耳边掠过的清脆风声，将过往的幕幕场景重新冲入你的脑海",
        "你知道，此刻你的朋友正在观众台上关注着你，你不能让他们失望，也许，她也在某个角落看着现场，你想拿到一个理想的成绩，作为离别礼物，赠给她，也赠给你自己",
    ],

    "small": ["none","none","none","none","none"],

    "big": ["none","none","none","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle",],
};