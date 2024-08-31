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
    "type": 1,

    "nextpage": "",

    "steps": 0,

    "name": [],

    "texts": [
    ],

    "small": [],

    "big": [],

    "bigpos": [],
};