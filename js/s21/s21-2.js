let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
x.finalchoice=1;
localStorage.setItem(a,JSON.stringify(x));
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
    }, 8000);
}, 500);

var c =
{
    "type": 0,

    "nextpage": "./s21-6.html",

    "steps": 0,

    "name": [],

    "texts": [
    ],

    "small": [],

    "big": [],

    "bigpos": [],
};