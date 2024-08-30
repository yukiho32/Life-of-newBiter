let a=localStorage.getItem('current-username');
let b = localStorage.getItem(a);
let x=JSON.parse(b);
let nxt='';
if(x.physical>=30) nxt="./s2-3.html";
else if(x.physical>=20) nxt="./s2-2.html";
else nxt="./s2-4.html";


var c =
{
    "type": 0,

    "nextpage": nxt,

    "steps": 2,

    "name": ["教官","教官"],

    "texts": ["同学们，恭喜大家顺利完成军训。","感谢大家的配合，这期间可能我对大家比较严格，还请大家多多见谅，希望大家以后的大学生活能够一帆风顺！",],

    "small": ["none", "none",],

    "big": ["教官", "教官", ],

    "bigpos": ["middle", "middle",]
};
