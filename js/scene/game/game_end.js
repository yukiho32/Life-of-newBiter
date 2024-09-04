let message;

const finalScore = localStorage.getItem('pacman_finalScore');


if (finalScore >= 3000) {
    message = "哇，竟然打通关了！";
}
else if (finalScore >= 2000) {
    message = "好好玩啊！";
}
else {
    message = "嘶，好难！";
}

var c =
{
    "type": 0,

    "nextpage": "../../gameindex.html",

    "steps": 1,

    "name": ["白特"],

    "texts": [message],

    "small": ["白特"],

    "big": ["none"],

    "bigpos": ["middle"]
};

