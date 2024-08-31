alert("达成成就：蒸蒸日上！")
let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
x.club=1;
localStorage.setItem(a,JSON.stringify(x));
var c =
{
    "type": 0,

    "nextpage": '../s4/s4.html',

    "steps": 3,

    "name": ["白特","社长","社长"],

    "texts": ["啊，怎么会这样，我不服，再来一局。","小兄弟，你可别耍赖啊，愿赌服输，乖乖把钱交出来吧","就当是学费了，以后跟着我好好学，我保准让你见识见识我们桌游社的蒸蒸日上！"],

    "small": ["白特","none","none"],

    "big": ["none","社长","none"],

    "bigpos": ["none","middle","middle"],
};