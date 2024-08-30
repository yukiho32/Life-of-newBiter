const displayDuration = 2000; 
const fadeOutDuration = 2000;

setTimeout(function() { 
    const loader = document.getElementById('loader');  
    loader.classList.add('active'); 

    setTimeout(function() { 
        loader.style.opacity = 0; 
        setTimeout(function() {  
        loader.style.display = 'none'; 

        const content = document.querySelector('.dialog');  
        content.style.display = 'block'; 

        }, fadeOutDuration);  
    }, displayDuration);
}, 500);
var c =
{
    "type": 0,

    "nextpage": "../gameindex.html",

    "steps": 0,

    "name": [],

    "texts": [],

    "small": [],

    "big": [],

    "bigpos": [],
};