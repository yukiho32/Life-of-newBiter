function toAchievements(){
    location.href = "./Achievements.html";
}
function toAboutUs(){
    location.href = "./AboutUs.html";
}
let nowUser=localStorage.getItem('current-username');
function StartGame(){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.intelligence=20;
    x.communication=20;
    x.mood=20;
    x.talent=20;
    x.nowround=0;
    x.physical = 20;
    x.money = 100;
    x.club=0;
    x.finalchoice=0;
    localStorage.setItem(nowUser,JSON.stringify(x));
    location.href = "./game/s1/s1.html"
    
}

function continuegame(){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.nowround=x.saveround;
    x.intelligence=x.i;
    x.communication=x.c;
    x.mood=x.m;
    x.physical=x.p;
    x.talent = x.t;
    x.club=x.cl;
    x.fc=x.finalchoice;
    x.zb=x.zaoba;
    localStorage.setItem(nowUser,JSON.stringify(x));
    location.href = "./game/gameindex.html";
    
}