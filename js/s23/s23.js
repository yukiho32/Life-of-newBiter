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

    "nextpage": "./s23-1.html",

    "steps": 1,

    "name": ["陈继华",],

    "texts": ["白特，你快到老地方来，徐熙浩要回来了！",
        
    ],

    "small": ["陈继华"],

    "big": ["笑"],

    "bigpos": ["middle",],
};