let message;

const finalScore = localStorage.getItem('shoot_finalScore');


if (finalScore >= 180) {
    message = "正中靶心";
} else if (finalScore >= 100) {
    message = "今天打得不错！";
} else if (finalScore > 0) {
    message = "今天状态不佳，好几枪都脱靶了。";
} else {
    message = "今天状态不佳，一枪也没打中。";
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

