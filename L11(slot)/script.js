

let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let StartBtn = document.getElementById('StartBtn')
let inpSpeed = document.getElementById('inpSpeed')
let values = [ '😃', '😇', '🤑', '😂', '😎', '🤑', '😡']

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    
    }, 1000 / newSpeed)
}

let itSpeed
let itCount
let speedVal;
let time;


console.log(animationId)
inpSpeed.onchange = function (ev) {
    // document.documentElement => this is ":root" of css
    document.documentElement.style.setProperty('--speed', ev.target.value)
    console.log('speed changed to',ev.target.value)
    speedVal=Number(ev.target.value)
    itSpeed =(1 / speedVal);
    itcount = Number(getComputedStyle(document.documentElement).getPropertyValue('--iterationCount'));
    time=itSpeed*itcount;
    console.log('Time ',time)
    updateAnimation(ev.target.value)
}
StartBtn.onclick=function (){
    value1.style.animationPlayState="running"
    value2.style.animationPlayState="running"
    value3.style.animationPlayState="running"
    console.log(animationId)

    setTimeout(()=>{
     clearInterval(animationId)
    },time*1000)

    setTimeout(()=>{
    if(value1.textContent === value2.textContent && value1.textContent === value3.textContent)
    {
        alert('You Win 🤑')
    }

    else{

        alert('You Lose 😭')
    }
},time*1000+1000)
}
