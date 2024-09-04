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
    for(var i=0;i<17;i++){
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
            if(i === 12) document.getElementsByClassName("achievement-details")[i].innerHTML="...字面意思";
            if(i === 13) document.getElementsByClassName("achievement-details")[i].innerHTML="最终心情>=80<br>进入大学，再也没有了高中时令人窒息的压力，你认识了很多志同道合的好朋友，做了许多自己喜欢的事，度过了两年愉快、难忘的青春时光";
            if(i === 14) document.getElementsByClassName("achievement-details")[i].innerHTML="最终智力&体力>=140<br>你一直知道，进入大学之后也不能懈怠，这两年，你一直努力学习，同时坚持锻炼，保证有充足的精力来进行每天的学习<br>功夫不负有心人，大二结束后，你成绩在整个专业名列前茅，只要大三继续保持，应该能够成功保研，继续深造";
            if(i === 15) document.getElementsByClassName("achievement-details")[i].innerHTML="最终才艺>=140&交际>90<br>进入大学以来，除了学习专业知识之外，你对许多其他领域的知识也都有所涉猎，另外你的性格也十分阳光开朗、善于交际，这些特质使你在大学人缘十分不错，同学、老师都很喜欢你";
            if(i === 16) document.getElementsByClassName("achievement-details")[i].innerHTML="最终金钱>=8000<br>其实爸爸妈妈每个月给的生活费也不算特别高，但你每天除了吃饭，偶尔添置一些必要的生活用品之外，几乎没有其他的开销了。两年过去，你已然有了自己的第一笔积蓄";
        }
    }
}

function toStartGame(){
    location.href = "./startgame.html";
}