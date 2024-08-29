let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
nxt="";
if(x.communication>=20 && x.intelligence>=25) nxt="./s3-7.html";
else nxt="./s3-8.html";
var c =
{
    "type": 0,

    "nextpage": nxt,

    "steps": 3,

    "name": ["旁白","旁白","旁白"],

    "texts": ["你与社长随即开始了一场大战","你紧盯着牌面，脑海中构思着各种各样的可能性，因为你想赢，这不仅仅是决定金钱的关系，更是面子的问题","若是当众击败社长，那我岂不是在桌游社里倍有面子，等等，说不定我就是下任会长呢，嘻嘻"],

    "small": ["none","none","none"],

    "big": ["none","none","none"],

    "bigpos": ["middle","middle","middle"],
};