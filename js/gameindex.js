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
    document.getElementById("6").style.width=x.nowround/80*100+'%';
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
    if(x.nowround === 23){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s8/s8.html'); });
    }
    if(x.nowround === 25){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s8/s8-3.html'); });
    }
    if(x.nowround === 28){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s9/s9-1.html'); });
    }
    if(x.nowround === 31){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        if(x.club === 1){
            $("body").fadeOut(200, function () { window.location.replace('./s10/s10.html'); });
        }
        if(x.club === 2){
            $("body").fadeOut(200, function () { window.location.replace('./s10/s10-1.html'); });
        }
        if(x.club === 3){
            $("body").fadeOut(200, function () { window.location.replace('./s10/s10-2.html'); });
        }
    }
    if(x.nowround === 34 && (x.club === 2 || x.club === 3)){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s10/s10-3.html'); });
    }
    if(x.nowround === 36){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s11/s11-1.html'); });
    }
    if(x.nowround === 41){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s12/s12-1.html'); });
    }
    if(x.nowround === 45){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s14/s14-1.html'); });
    }
    if(x.nowround === 47){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s15/s15-2.html'); });
    }
    if(x.nowround === 51){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s17/s17.html'); });
    }
    if(x.nowround === 55){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s17/s17-2.html'); });
    }
    if(x.nowround === 60){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s18/s18-1.html'); });
    }
    if(x.nowround === 65){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s20/s20.html'); });
    }
    if(x.nowround === 68){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s21/s21.html'); });
    }
    if(x.nowround === 70){
        x.nowround+=1;
        localStorage.setItem(nowUser,JSON.stringify(x));
        $("body").fadeOut(200, function () { window.location.replace('./s21/s21-1.html'); });
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
    x.cl=x.club;
    localStorage.setItem(nowUser,JSON.stringify(x));
    alert("保存成功！")
}