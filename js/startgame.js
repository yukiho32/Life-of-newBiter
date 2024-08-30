function toAchievements(){
    location.href = "./Achievements.html";
}
function toAboutUs(){
    location.href = "./AboutUs.html";
}
function StartGame(){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.intelligence=20;
    x.communication=20;
    x.mood=20;
    x.talent=20;
    x.nowround=0;
    x.physical=20;
    location.href = "./game/s1/s1.html"
}
let nowUser=localStorage.getItem('current-username');
function continuegame(){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.nowround=x.saveround;
    x.intelligence=x.i;
    x.communication=x.c;
    x.mood=x.m;
    x.physical=x.p;
    x.talent=x.t;
    location.href = "./game/gameindex.html";
    localStorage.setItem(nowUser,JSON.stringify(x));
}