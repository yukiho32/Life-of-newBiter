let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
var audio = document.getElementById("ach");
if(x.mood >= 80){
    x.achievement[13]=1;
    localStorage.setItem(a,JSON.stringify(x));
    audio.play();
    audio.addEventListener('ended', function() {
        alert("达成成就：青春记忆！");
    });
}
if(x.intelligence >= 140 && x.physical >= 140){
    x.achievement[14]=1;
    localStorage.setItem(a,JSON.stringify(x));
    audio.play();
    audio.addEventListener('ended', function() {
        alert("达成成就：名列前茅！");
    });
    
}
if(x.talent >= 140 && x.communication >= 90){
    x.achievement[15]=1;
    localStorage.setItem(a,JSON.stringify(x));
    audio.play();
    audio.addEventListener('ended', function() {
        alert("达成成就：广结善缘！");
    });
    
}
if(x.money >= 8000){
    x.achievement[16]=1;
    localStorage.setItem(a,JSON.stringify(x));
    audio.play();
    audio.addEventListener('ended', function() {
        alert("达成成就：攒钱小能手！");
    });
    
}
nxt="";
nxt="./s24-"+(x.finalchoice+1)+".html"
setTimeout(function() { 
    const loader = document.getElementById('loader');  
    loader.classList.add('active'); 

    setTimeout(function() { 
        loader.style.opacity = 0; 
        setTimeout(function() {  
        loader.style.display = 'none'; 

        const content = document.querySelector('.dialog');  
        content.style.display = 'block'; 

        }, 2000);
    }, 4000);
}, 500);
var c =
{
    "type": 0,

    "nextpage": nxt,

    "steps": 0,

    "name": [],

    "texts": [],

    "small": [],

    "big": [],

    "bigpos": [],
};