//导入一个字符串
const string = `.skin *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.skin *::before,.skin *::after{box-sizing: border-box;}
.skin{
    background-color: #ffe600;
    position: relative;
    height: 100vh;
}
.nose{
    border: 10px solid black;
    border-color:black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 142px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg)
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    /* 左右放向中心为基准、上下为下为基准 */
    transform-origin:50% 100%;
    animation: wave .3s infinite;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;   
    top: -16px;
    left: -10px;
    border-radius:10px 10px 0 0;
    background-color:black;
}
.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    display: block;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{

    width: 200px;
    height: 180px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 170px;
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
}
.mouth .up .lip{
    background-color:#ffe600;
    border: 3px solid black ;
    height: 30px;
    width: 100px;
    border-top:none;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px; 
    border-right:none;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0px 0 50px 0px;
    border-left:none;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    width: 7px;
    height: 30px;
    display: block;
    position: absolute;
    bottom: 1px;
    background-color: #ffe600;
}
.mouth .up .lip.left::before{
    right: -5px;
}
.mouth .up .lip.right::before{
    left:-5px;
}
.mouth .down{
    height: 200px;
    position: absolute;
    top:0px;
    width: 100%;
    overflow: hidden;
    
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -75px;
    border-radius:100px/350px;
    background-color:#9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    background-color:#ff485f;
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: -40px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    border-radius: 50%;
    background-color: red;
}
.face >img{
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
}
.face.left{
   transform: translateX(-150px); 
}
.face.left > img{
    transform:rotateY(180deg) ;
    transform-origin: 0 0;
}
.face.right{
    transform: translateX(150px); 
 }`
export default string;