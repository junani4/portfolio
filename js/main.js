'use strict';

let target = document.querySelector("#dynamic");
let stringArr = ["Kim Jun Hwan", "Hello, Front-End", "PORTFOLIO",
    "Please Enjoy!", "Web Publisher"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

// 리셋 후 출력
function randomString() {
    let stringArr = ["Kim Jun Hwan", "Hello, Front-End", "PORTFOLIO",
        "Please Enjoy!", "Web Publisher"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// 한글자씩 출력 효과
function dynamic(randomArr) {

    if (randomArr.length > 0) {
        target.textContent += randomArr.shift(); // 첫 문자
        setTimeout(() => { //반복
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomString());

//커서 효과
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);

//탭 메뉴
const tabMenu = document.querySelectorAll('.a-tab-menu li');
const tabContent = document.querySelectorAll('.a-tab-content > div');
const highLight = document.querySelector('.highlight');

tabMenu.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        showContent(index);
        moveHighLight(index);
    });
});

function showContent(num) {
    tabContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
}

function moveHighLight(num) {
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;
    highLight.style.left = newLeft + 'px';
    highLight.style.width = newWidth + 'px';
}

// 텍스트 애니메이션
const pTag1 = document.querySelector('.first-t')
const pTag2 = document.querySelector('.second-t')


const textArr1 = 'Contact Me Contact Me Contact Me Contact Me Contact Me'.split(' ')
const textArr2 = 'Thank You Thank You Thank You Thank You Thank You Thank You Thank You'.split(' ')


let count1 = 0
let count2 = 0

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)


function initTexts(element, textArray) {
    textArray.push(...textArray)

    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollHeight / 2) {
        element.style.transform = `translateY(0)`
        count = 0
    }

    element.style.transform = `translateY(${direction * count}px)`

    return count
}



function animate() {
    count1++
    count2++


    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, -1.5)


    window.requestAnimationFrame(animate)
}

animate();

$(document).ready(function () {
    emailjs.init("5DIqMUCzqDd-De-Qs");
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    $('input[name=submit]').click(function () {

        var templateParams = {
            //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $('input[name=name]').val(),
            phone: $('input[name=phone]').val(),
            email: $('input[name=email]').val(),
            message: $('textarea[name=message]').val()
        };


        emailjs.send('gmail', 'template_tu9jb9b', templateParams)
            //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
            .then(function (response) {
                alert('SUCCESS!', response.status, response.text);
            }, function (error) {
                alert('FAILED...', error);
            });
    });

});