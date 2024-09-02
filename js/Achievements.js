function toggleDetails(item) {
    const details = item.querySelector('.achievement-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    }
    else {
        details.style.display = 'none';
    }
}
let a=localStorage.getItem('current-username');
window.onload = function(){
    let userd = localStorage.getItem(a);
    let x=JSON.parse(userd);
    for(var i=0;i<12;i++){
        if(x.achievement[i] === 1){
            let s=document.getElementsByClassName("achievement-title")[i].innerHTML;
            document.getElementById(i.toString()).style.backgroundColor = "yellow";
            document.getElementsByClassName("achievement-title")[i].innerHTML = s+"    （已达成）";
            if(i === 2) document.getElementsByClassName("achievement-details")[i].innerHTML="唱歌感动学姐";
            if(i === 3) document.getElementsByClassName("achievement-details")[i].innerHTML="在射击游戏中首次获得180分及以上";
            if(i === 4) document.getElementsByClassName("achievement-details")[i].innerHTML="在射击游戏中首次获得0分";
            if(i === 5) document.getElementsByClassName("achievement-details")[i].innerHTML="在吃豆人游戏中首次吃完场上所有豆";
            if(i === 6) document.getElementsByClassName("achievement-details")[i].innerHTML="在大一开学前两个选择中均选择自信一项";
            if(i === 7) document.getElementsByClassName("achievement-details")[i].innerHTML="累计五次选择上早八";
            if(i === 8) document.getElementsByClassName("achievement-details")[i].innerHTML="解锁唱歌结局";
            if(i === 9) document.getElementsByClassName("achievement-details")[i].innerHTML="解锁夏令营结局";
            if(i === 10) document.getElementsByClassName("achievement-details")[i].innerHTML="解锁实习结局";
            if(i === 11) document.getElementsByClassName("achievement-details")[i].innerHTML="解锁躺平结局";
        }
    }
}

function toStartGame(){
    location.href = "./startgame.html";
}