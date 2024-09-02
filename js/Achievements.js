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
    for(var i=0;i<3;i++){
        if(x.achievement[i] === 1){
            let s=document.getElementsByClassName("achievement-title")[i].innerHTML;
            document.getElementById(i.toString()).style.backgroundColor = "yellow";
            document.getElementsByClassName("achievement-title")[i].innerHTML = s+"    （已达成）";
        }
    }
}

function toStartGame(){
    location.href = "./startgame.html";
}