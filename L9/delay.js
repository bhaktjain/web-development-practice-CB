let btnWait=document.getElementById('btnWait')
let btnCount=document.getElementById('btnCount')
let divStatus=document.getElementById('divStatus')
let divVal=document.getElementById('divVal')

let count=0
btnCount.onclick= function(){
    count++
    console.log('count',count)
    divVal.textContent=count
}
btnWait.onclick= function(){
    divStatus.textContent="waiting"
    console.log('waiting')
    setTimeout(()=>{
        divStatus.textContent="done"
        console.log('done')

    },5000)
}


