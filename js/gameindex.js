function toMap(){
    location.href = './map.html';
}

let nowUser=localStorage.getItem('current-username');
window.onload = function(){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    document.getElementById("intelligence").innerHTML="智力："+x.intelligence;
    document.getElementById("communication").innerHTML="交际："+x.communication;
    document.getElementById("mood").innerHTML="心情："+x.mood;
    document.getElementById("talent").innerHTML="才华："+x.talent;
    document.getElementById("physical").innerHTML = "体能：" + x.physical;
    document.getElementById("money").innerHTML="零花钱："+x.money;
    document.getElementById("nowround").innerHTML="当前回合："+x.nowround;
    document.getElementById("1").style.width=x.intelligence*2+'%';
    document.getElementById("2").style.width=x.communication*2+'%';
    document.getElementById("3").style.width=x.mood*2+'%';
    document.getElementById("4").style.width=x.talent*2+'%';
    document.getElementById("5").style.width=x.physical*2+'%';
    document.getElementById("6").style.width=x.nowround/20*100+'%';
    if(x.nowround === 2){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s2/s2-1.html'); });
    }
    if(x.nowround === 6){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s3/s3-2.html'); });
    }
    if(x.nowround === 10){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s4/s4-2.html'); });
    }
    if(x.nowround === 15){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s5/s5-1.html'); });
    }
    if(x.nowround === 19){
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s6/s6.html'); });
    }
    if(x.nowround === 20){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s6/s6-1.html'); });
    }
}

function Save(){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.saveround=x.nowround;
    x.i=x.intelligence;
    x.c=x.communication;
    x.m=x.mood;
    x.p=x.physical;
    x.t = x.talent;
    x.mo = x.money;
    localStorage.setItem(nowUser,JSON.stringify(x));
    alert("保存成功！")
}