
let nowUser=localStorage.getItem('current-username');
function ChangeNum(v1,v2,v3,v4,v5,v6,v7){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.intelligence+=v1;//智力
    x.communication+=v2;//交际
    x.mood+=v3;//心情
    x.physical+=v4;//体能
    x.talent+=v5;//才艺
    x.nowround += v6;//当前回合
    if (x.nowround % 4 == 0){
        x.money += 1500 + v7
    }
    else {
        x.money += v7;
    }
    //alert(x);
    localStorage.setItem(nowUser,JSON.stringify(x));
}

function Talkto(x){
    $("#chair").hide();
    $("#student").hide();
    $("#teacher").hide();
    $("#Talkto"+x).fadeIn();
}

function Back(){
    $("#chair").fadeIn();
    $("#student").fadeIn();
    $("#teacher").fadeIn();
    $(".selection_box").hide();
}
function goto(apage) {
    $("body").fadeOut(200, function () { window.location.replace(apage); })
};