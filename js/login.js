function bgmstart(){
    let audio = document.getElementById('loginbgm');
    audio.play();
}
function toRegister(){
    let a=document.getElementById('loginpage');
    a.style.display="none"
    let b=document.getElementById('registerpage');
    b.style.display="block"
}
function toLogin(){
    let a=document.getElementById('registerpage');
    a.style.display="none"
    let b=document.getElementById('loginpage');
    b.style.display="block"
}
function Login(){
    let u = document.getElementById('username').value;
    let p = document.getElementById('password').value;
    if (u === "" || p === "") {
        alert("请输入您的用户名或密码！");
    }
    else {
        if (u in localStorage) {
            const userd = localStorage.getItem(u);
            let password = JSON.parse(userd).password;
            if (p === password) {
                alert("登录成功！");
                document.getElementById('username').value = "";
                document.getElementById('password').value = "";
                localStorage.setItem("current-username", u);
                window.open('./startgame.html','_self');
            }
            else {
                alert("密码错误");
                document.getElementById('password').value = "";
            }
        } 
        else {
            alert("用户不存在，请先注册！");
        }
    }
}
function Register(){
    let u = document.getElementById('RegisterUsername').value;
    let p1 = document.getElementById('RegisterPassword1').value;
    let p2 = document.getElementById('RegisterPassword2').value;
    if (u === "" || p1 === "" || p2 === "") {
        alert("请输入您的用户名或密码！");
    } 
    else {
        if (u in localStorage) {
            alert("用户命已存在");
            document.getElementById('RegisterUsername').value = "";
            document.getElementById('RegisterPassword1').value = "";
            document.getElementById('RegisterPassword2').value = "";
        } 
        else if (p1 !== p2) {
            alert("两次密码并不一致");
        }
        else {
            var userdata = {
                password:p1,
                intelligence:20,
                i:20,
                communication:20,
                c:20,
                mood:20,
                m:20,
                physical:20,
                p:20,
                talent:20,
                t: 20,
                money: 100,
                mo:100,
                nowround:0,
                saveround:0,
                club:0,
                cl:0,
                finalchoice:0,
                fc:0,
            }
            localStorage.setItem(u,JSON.stringify(userdata));
            alert("注册成功！");
            toLogin();
        }
    }
}