let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
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