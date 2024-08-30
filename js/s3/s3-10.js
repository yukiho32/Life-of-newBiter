let a=localStorage.getItem('current-username');
let userd = localStorage.getItem(a);
let x=JSON.parse(userd);
if(x.talent>=30 && x.communication>=25) nxt="./s3-11.html"
else nxt="./s3-12.html"
var c =
{
    "type": 0,

    "nextpage": nxt,

    "steps": 5,

    "name": ["旁白","学姐","旁白","旁白","旁白"],

    "texts": ["填好信息等待一会后，先前的学姐将你们带到了合唱团的排练室。","大家都知道合唱团不像别的社团一样没有门槛，我们主要是想听一听大家的音色还有音准，不会太难，不用紧张，随便唱几句即可。",
        "随着一个个同学上前试唱，终于还是轮到你了","你鼓起勇气站到台上，深吸一口气，深情而又陶醉地演唱着你精心准备的歌曲——《生日快乐》。","对，你没有听错，你相信，一位优秀的歌者哪怕是如此熟悉而又简单的歌曲也能展现出他的技巧与情感，在场的各位一定会被感动得痛哭流涕。嗯，对，也许吧......"],

    "small": ["none","none","none","none","none"],

    "big": ["none","笑","none","none","none"],

    "bigpos": ["middle","middle","middle","middle","middle"],
};