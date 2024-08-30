
var count = c.steps;//总点击次数
var pagename = c.nextpage;
var page_type = c.type;//场景类型：0为自动跳转，1为分支选择，2为结局决定
var click = 0;//当前点击次数

let nowUser=localStorage.getItem('current-username');
//显示对话函数
function next_text() {
    $("#texts").hide();
    $("#name").hide();
    if (c.name[click] != "旁白") {
        document.getElementById("name").innerHTML = "【" + c.name[click] + "】";
    }
    else {
        document.getElementById("name").innerHTML = "<br>";
    }
    document.getElementById("texts").innerHTML = c.texts[click];
    $("#texts").fadeIn();
    $("#name").fadeIn();
    return;
}

function _ChangeNum(v1,v2,v3,v4,v5){
    let userd = localStorage.getItem(nowUser);
    let x=JSON.parse(userd);
    x.intelligence+=v1;//智力
    x.communication+=v2;//交际
    x.mood+=v3;//心情
    x.physical+=v4;//体能
    x.talent+=v5;//才艺
    //alert(x);
    localStorage.setItem(nowUser,JSON.stringify(x));
}

//显示小立绘

function next_small() {
    if (click == 0) {
        if (c.small[click] != "none") {
            document.getElementById("small_pic").src = "../../image/qq人/" + c.small[click] + ".png";
            $("#small_pic").fadeIn();
        }
        else {
            document.getElementById("small_pic").src = "../../image/qq人/" + "tm" + ".png";
        }
    }
    else {
        if (c.small[click - 1] != c.small[click]) {
            $("#small_pic").hide();
            if (c.small[click] == "none") {
                document.getElementById("small_pic").src = "../../image/qq人/" + "tm" + ".png";
            }
            else {
                document.getElementById("small_pic").src = "../../image/qq人/" + c.small[click] + ".png";
            }
            $("#small_pic").fadeIn();
        }
    }
    return;
}

//显示大立绘
function next_big() {
    if (click == 0) {
        if (c.big[click] != "none") {
            document.getElementById(c.bigpos[click]).src = "../../image/character/" + c.name[click] + "/" + c.big[click]+ ".png";
            $(c.bigpos[click]).fadeIn();
        }
    }
    else {
        if (c.bigpos[click - 1] != c.bigpos[click ] || c.big[click-1] != c.big[click] || c.name[click-1] != c.name[click]) {
            $(c.bigpos[click - 1]).hide();
            if (c.big[click] == "none") {
                document.getElementById(c.bigpos[click]).src = "../../image/qq人/tm.png";
            }
            else {
                document.getElementById(c.bigpos[click]).src = "../../image/character/" + c.name[click] + "/" + c.big[click]+ ".png";
            }
            $(c.bigpos[click]).fadeIn();
        }
    }
    return;
}

//跳转指定页面
function goto(apage) {
    $("body").fadeOut(200, function () { window.location.replace(apage); })
};

//总控函数
function next_move(ending) {
    //如果当前未到该页面结束，执行一系列动画
    if (click < count) {
        next_text();
        next_small();
        next_big();
        click++;
    }
    else {//本页面已结束
        switch (page_type) {
            case 0://自动跳转
                goto(pagename);
                break;
            case 1://分支选择框出现
                $("#selection_box").fadeIn();
                break;
            case 2:
                $("#_selection_box").fadeIn();
                break;
        }
    }
};

//保存函数
/*
function Save(section = '0', page = '0') {
    var GameAddress = '../主体/sites/' + window.location.href.split('/sites/')[1]; // 更新了页面保存逻辑，可以减少出错的概率
    var GameName = window.localStorage.temp_gamename; // 可以再少改一个参数，减少出错率
    var index = window.localStorage.userid;
    if (index == -1 || index == undefined) {
        alert("未能确定当前用户状态，保存失败")
        return;
    }
    var array = JSON.parse(window.localStorage.userArr);
    array[index].GameName = GameName;
    array[index].GameAddress = GameAddress;
    window.localStorage.userArr = JSON.stringify(array);
    alert(GameName + "保存成功");
}
*/
//返回主页


// config 和 save 菜单
/*
window.onload = function () {
    var array = JSON.parse(window.localStorage.userArr);
    var index = window.localStorage.userid;
    document.getElementById("config_h1").innerHTML = array[index].username;
    document.getElementById("save_h1").innerHTML = array[index].username;
    var ach = 0;
    if (array[index].achi1 == 1) ach++;
    if (array[index].achi2 == 1) ach++;
    if (array[index].achi3 == 1) ach++;
    if (array[index].achi4 == 1) ach++;
    if (array[index].achi5 == 1) ach++;
    if (array[index].achi6 == 1) ach++;
    if (array[index].achi7 == 2) ach++;
    if (array[index].achi1 + array[index].achi2 + array[index].achi3 + array[index].achi4 == 4) ach++;
    document.getElementById("achievement_").innerHTML = ach + "/8";
}

function CV() {
    var value1 = document.getElementById("volume").value;
    var percent = value1 / 100;
    window.localStorage.nowvolume = percent;
}
*/

/*
function MusicPlayer() {//对话框音效
    var music = document.getElementById("music");
    music.play();
    music.loop = false;
    music.preload = true;
    music.volume = 1;
}
function MusicPlayer2() {//选择分支音效
    var music = document.getElementById("music2");
    music.play();
    music.loop = false;
    music.preload = true;
    music.volume = 1;
}
*/
// menu菜单界面
function Config() {
    document.getElementById('config').classList.toggle('active');
}
function Save_(section, page) {
    var gamename = '场景' + section + '第' + page + '页';
    document.getElementById("process_").innerHTML = gamename;
    document.getElementById('save').classList.toggle('active');
    window.localStorage.temp_gamename = gamename;
}
function _Save_() { // 返回按钮，不用改参数了（偷懒）
    document.getElementById('save').classList.toggle('active');
}


