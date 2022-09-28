<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/keyframe.css">
    <link rel="stylesheet" href="./css/jquery.fullPage.css">
    <link rel="stylesheet" href="./css/star.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="./js/jquery.fullPage.js"></script>
    <script defer src="./js/scroll.js"></script>
    <script defer src="./js/main.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
    <!-- <script defer src="./js/scrolloverflow.min.js"></script> -->
</head>

<body>
    <!-- header -->
    <!-- 1536, 864  -->
    <header id="header">
        <nav class="menu">
            <h1 class="menu__logo">KIMJUNHWAN PORTFOLIO</h1>
            <!-- <div id="underline"></div> -->
            <ul class="menu__nav">
                <li data-menuanchor="section1">
                    <h2><a href="#section1">Hello, Frontend</a></h2>
                </li>
                <li data-menuanchor="section2"><a href="#section2">About me</a></li>
                <li data-menuanchor="section3"><a href="#section3">Site</a></li>
                <li data-menuanchor="section4"><a href="#section4">CSS</a></li>
                <li data-menuanchor="section5"><a href="#section5">Contact</a></li>
            </ul>
        </nav>
    </header>
    <!-- wrap -->
    <div id="wrap">
        <!-- STAR ANIMATION -->
        <div class="bg-animation">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='stars4'></div>
        </div><!-- / STAR ANIMATION -->
        <!-- main -->
        <div id="main" class="section">
            <div class="mbox">
                <div class="mbox__text">
                    <div class="mbox__text__size">
                        <p id="dynamic" class="l-text"></p>
                    </div>
                </div>
            </div>
            <div class="scroll-downs">
                <div class="mousey">
                    <div class="scroller"></div>
                </div>
                <p>Scroll Down!</p>
            </div>
        </div>
        <!-- introduce -->
        <div id="introduce" class="section">
            <div class="introduce__box">
                <div class="introduce__box-left">
                    <div class="introduce__box-mtitle">
                        <p>About me</p>
                    </div>
                    <div class="introduce__box-title">
                        <h1>
                            LET ME<br />
                            INTROUDUCE<br />
                            MYSELF.<br />
                        </h1>
                    </div>
                    <div class="introduce__box-text">
                        <p>
                            안녕하세요. 호기심이나 궁금한 게 있으면 알게 될 때까지 <br />
                            파고드는 신입 프론트엔드 개발자 김준환입니다. 노력만으<br />
                            론 부족한 실력을 흥미라는 도움을 받아 포기하지 않으며<br />
                            발전하겠습니다. 언제나 새로운 것을 받아들이면서 발 빠<br />
                            르게 트렌드를 캐치하고 구성원에게 도움이 되는 프론트<br />
                            엔드 개발자가 되겠습니다.<br />
                        </p>
                    </div>
                </div>
                <div class="introduce__image">
                    <div class="introduce__image-me"></div>
                    <div class="introduce__image-pet"></div>
                </div>
            </div>
        </div>
        <!-- contents -->
        <section id="contents" class="section">
            <div class="contents__wrap">
                <div class="site">
                    <ul>
                        <li>
                            <a href="https://megabox1.netlify.app/">
                                <img src="image/site01.png" alt="메가박스">
                                <p class="explain">메가박스(html반응형)</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://salady.netlify.app/">
                                <img src="image/site02.png" alt="샐러디">
                                <p class="explain">샐러디(React)</p>
                            </a>
                        </li>
                        <li><a href="#">empty</a></li>
                        <li><a href="#">empty</a></li>
                        <li><a href="#">empty</a></li>
                        <li><a href="#">empty</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- css animation -->
        <div id="animation" class="section">
            <div class="a-nav">
                <ul class="a-tab-menu">
                    <li><a href="#tabs-1">Block</a></li>
                    <li><a href="#tabs-2">Line</a></li>
                    <li><a href="#tabs-3">Loading</a></li>
                    <li><a href="#tabs-4">Bounce</a></li>
                    <li><a href="#tabs-5">Cube</a></li>
                    <li><a href="#tabs-6">Wave</a></li>
                </ul>
                <span class="highlight"></span>
            </div>
            <div class="a-tab-content">
                <div class="tabs-1">
                    <div class="tabs-1__c">
                        <div class="wrapper">
                            <div class="box-wrap">
                                <div class="box one"></div>
                                <div class="box two"></div>
                                <div class="box three"></div>
                                <div class="box four"></div>
                                <div class="box five"></div>
                                <div class="box six"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabs-2">
                    <div class="tabs-2__c">
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="tabs-3">
                    <div class="tabs-3__c">
                        <div class="loading">
                            <div class="circle-f"></div>
                            <div class="circle-s"></div>
                        </div>
                        <div class="loading2">
                            <div class="circle-f"></div>
                            <div class="circle-s"></div>
                        </div>
                    </div>
                </div>
                <div class="tabs-4">
                    <div class="tabs-4__c">
                        <div id="ball"></div>
                        <div id="shadow"></div>
                    </div>
                </div>
                <div class="tabs-5">
                    <div class="tabs-5__c">
                        <div class="cube">
                            <div class="face front"></div>
                            <div class="face back"></div>
                            <div class="face left"></div>
                            <div class="face right"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>
                </div>
                <div class="tabs-6">
                    <div class="tabs-6__c">
                        <div class="circles">
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                            <div class="row">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact -->
        <section id="contact" class="section">
            <div class="container">
                <div class="c__wrap">
                    <div class="c__text">
                        <div class="c__text-verticle">
                            <span class="first-t"></span>
                            <span class="second-t"></span>
                        </div>
                    </div>
                    <div class="c__box">
                        <div class="c__box__text">
                            <label class="label">
                                <h3>Contact Me</h3>
                                <input type="text" name="name" placeholder="이름" class="input">
                                <input type="text" name="email" placeholder="이메일" class="input">
                                <input type="text" name="phone" placeholder="전화번호(생략가능)" class="input">
                                <textarea name="message" rows="5" placeholder="내용을 입력해주세요." class="textarea"></textarea>
                                <input type="button" name="submit" value="메일 보내기" class="send"/>
                            </label>
                        </div>
                        <div class="link">
                            <a href="mailto:namsan7777@naver.com" target="_blank"><i class="ri-mail-line"></i></a>
                            <a href="https://github.com/junani4" target="_blank"><i class="ri-github-fill"></i></a>
                            <a href="https://blog.naver.com/namsan7777" target="_blank"><i class="ri-layout-5-line"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>





</body>

</html>
