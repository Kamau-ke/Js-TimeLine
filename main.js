const timeline_events=document.querySelectorAll("ul li");
function showTime(e){
    e.setAttribute('done', 'true')
    e.querySelector('.timeline-point').style.background="blue"
    e.querySelector('.date').style.opacity="100%"
    e.querySelector('p').style.opacity="100%"

}

function hideTime(e){
    e.removeAttribute('done');
    e.querySelector('.timeline-point').style.background="rgb(228, 228, 228)";
    e.querySelector('.date').style.opacity="0%"
    e.querySelector('p').style.opacity="0%"
    e.querySelector('p').style.transform="translateY(-10px)";
}

timeline_events.forEach((li, index) => {
    
    li.addEventListener("click", ()=>{

        if(li.getAttribute('done')){
            timelineProgress(index)
            line.style.width=`${(index /timeline_events.length) *100}%`

            timeline_events.forEach((ev, idx) =>{
                if(idx >= index){
                    hideTime(ev)
                }
            })

        }
        else{
            timelineProgress(index +1)
            line.style.width=`${((index +   1 ) /timeline_events.length) * 100}%`;
            timeline_events.forEach((ev, idx) =>{
                if(idx <= index){
                    showTime(ev)
                }
            })
        }
    })
})

var doit;
window.addEventListener('resize', ()=>{
    clearTimeout(doit)
    doit=setTimeout(resizeEnd, 1200);
})

function resizeEnd(){
    i=0;
    slowLoop()
}