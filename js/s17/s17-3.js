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

    "nextpage": "./s17-4.html",

    "steps": 12,

    "name": ["张润远","旁白","白特","张润远","白特","张润远","白特","白特","旁白","白特","旁白","张润远"],

    "texts": ["嗯，你来了",
        "张润远连忙擦去眼泪笑着对你说",
        "嗯，第二名，我做到了，多亏了你的帮助",
        "没什么，主要还是因为你厉害，我没帮上什么忙",
        "怎么能这么说呢，没有你我恐怕连舞台都站不上去。可我明明得奖了，还以为能让你高兴，为什么你还哭了呢？",
        "没有，你得奖我很高兴，我只是觉得，以后就再也不能像之前一样听你对着我唱歌了",
        "你知道吗，为什么我会选择那首歌，为什么我会唱得那么投入",
        "因为，那就是我想在舞台上唱给你听的，要是你想听，我能天天唱给你听",
        "你伸出手，将张润远紧紧抱在了怀里，你能感受到女孩的泪水滴滴落在你的身上。你想把那句从未说出口的话说给她听",
        "润远，你能做我女朋友吗？",
        "女孩泣不成声，在许久之后终于平静下来，她看着你，坚定地发出了一声短小而精湛的——",
        "嗯",
    ],

    "small": ["none","none","none","none","none","none","none","none","none","none","none","none",],

    "big": ["微笑","none","笑","闭眼笑","笑","黑脸","笑","笑","none","笑","none","说话"],

    "bigpos": ["middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle",],
};