let score = 0;
let target = document.getElementById('target');
let gameArea = document.getElementById('gameArea');
let scoreDisplay = document.getElementById('score');
let timerDisplay = document.getElementById('timer');
let endScreen = document.getElementById('endScreen');
let finalScoreDisplay = document.getElementById('finalScore');
let returnButton = document.getElementById('returnButton');
let targetTimeout = null; 
let moveAnimationFrame = null;
//定时
let gameTimer = 30;      
let timerInterval = null; 

//靶子设置
const targetSize = 50;
const redRadius = targetSize * 0.3 / 2; 

function getRandomPosition() {
    const containerRect = gameArea.getBoundingClientRect();
    const maxX = containerRect.width - targetSize;
    const maxY = containerRect.height - targetSize;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    return { x, y };
}

function createTarget() {
    const { x, y } = getRandomPosition();
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    // 每次生成新靶子时重置 opacity
    target.style.opacity = '1';
    target.style.transform = 'rotateX(0deg)';

    // 移除 'clicked' 类，以便下一次点击能够正常触发动画
    target.classList.remove('clicked');

    // 隐藏靶子直到动画结束
    target.style.display = 'block';

    if (targetTimeout) {
        clearTimeout(targetTimeout);
    }

    if (moveAnimationFrame) {
        cancelAnimationFrame(moveAnimationFrame);
    }

    target.removeEventListener('click', handleTargetClick);

     // 判断是否为静止靶子或移动靶子
    if (Math.random() > 0.5) {
        target.classList.add('moving');
        moveTarget();
    } else {
        target.classList.remove('moving');
        target.style.display = 'block'; 
        targetTimeout = setTimeout(() => {
            target.style.display = 'none';
            createTarget(); 
        }, 2000); 
    }

    target.addEventListener('click', handleTargetClick);
}

function moveTarget() {
    let positionX = parseFloat(target.style.left);
    let positionY = parseFloat(target.style.top);
    const moveSpeed = 0.75; 
    const moveDirection = Math.random() > 0.5 ? 1 : -1; 
    function animate() {
        positionX += moveSpeed * moveDirection;
        const containerRect = gameArea.getBoundingClientRect();

        const targetRect = {
            left: positionX,
            right: positionX + targetSize,
            top: positionY,
            bottom: positionY + targetSize
        };

        if (targetRect.left <= 0 || targetRect.right >= containerRect.width ||
            targetRect.top <= 0 || targetRect.bottom >= containerRect.height) {
            createTarget(); 
            return;
        }

        target.style.left = `${positionX}px`;
        target.style.top = `${positionY}px`;

        moveAnimationFrame = requestAnimationFrame(animate);
    }

    animate();
}

function handleTargetClick(e) {
    target.classList.remove('clicked');

    void target.offsetWidth;

    target.classList.add('clicked');

    // 计算点击位置与靶子中心的距离
    const rect = target.getBoundingClientRect();
    const clickX = e.clientX;
    const clickY = e.clientY;
    const targetCenterX = rect.left + targetSize / 2;
    const targetCenterY = rect.top + targetSize / 2;
    const distanceX = clickX - targetCenterX;
    const distanceY = clickY - targetCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // 判断点击区域并计算分数
    if (distance <= redRadius) {
        score += 10; // 点击红色区域
    } else if (distance <= targetSize / 2) {
        score += 5; // 点击黄色区域
    }

    updateScore();

    // 延迟创建新靶子以确保动画完整播放
    setTimeout(createTarget, 300);
}

function updateScore() {
    scoreDisplay.innerText = `分数: ${score}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        gameTimer--;
        timerDisplay.innerText = `时间: ${gameTimer}`;
        if (gameTimer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

let a=localStorage.getItem('current-username');

function endGame() {
    gameArea.style.display = 'none'; 
    endScreen.style.display = 'flex'; 
    finalScoreDisplay.innerText = `您的最终得分是:${score}分`; 
    localStorage.setItem('shoot_finalScore', score);
    returnButton.href = '../game/scene/gym/game_end.html';
    let userd = localStorage.getItem(a);
    let x = JSON.parse(userd);
    if(score >= 180){
        x.achievement[3] = 1;
        x.mood += 5;
        x.talent += 4;
        alert("达成成就：百步穿杨！")
        localStorage.setItem(a, JSON.stringify(x));
    }
    else if(score < 180 && score >= 100){
        x.mood += 3;
        x.talent += 3;
        localStorage.setItem(a, JSON.stringify(x));
    }
    else if (score < 100 && score > 0) {
        x.mood += 1;
        x.talent += 2;
        localStorage.setItem(a, JSON.stringify(x));
    }
    else if (score <= 0) {
        x.achievement[4]=1;
        alert("达成成就：枪下留人！")
        localStorage.setItem(a, JSON.stringify(x));
    }
}

function initializeGame() {
    endScreen.style.display = 'none'; 
    createTarget();
    startTimer();
}

initializeGame();

gameArea.addEventListener('mousemove', (e) => {
    const containerRect = gameArea.getBoundingClientRect();
    const isInside = e.clientX >= containerRect.left &&
                     e.clientX <= containerRect.right &&
                     e.clientY >= containerRect.top &&
                     e.clientY <= containerRect.bottom;
    
    if (isInside) {
        document.body.style.cursor = 'crosshair'; 
    } else {
        document.body.style.cursor = 'default'; 
    }
});
