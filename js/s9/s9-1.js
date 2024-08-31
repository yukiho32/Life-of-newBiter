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
    }, 12000);
}, 500);
var c =
{
    "type": 1,

    "nextpage": "",

    "steps": 1,

    "name": ["白特",],

    "texts": ["只能抱希望于这三周的突击训练了",

    ],

    "small": ["白特",],

    "big": ["none"],

    "bigpos": ["middle"],
};