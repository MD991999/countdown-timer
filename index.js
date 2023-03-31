const daysdisplay=document.getElementById('days')
const hoursdisplay=document.getElementById('hours')
const minutesdisplay=document.getElementById('minutes')
const secondsdisplay=document.getElementById('seconds')
// "14 February 2023"
const targetdate=new Date("06 April 2023").getTime()
console.log(targetdate);

function countdown(){
    currenttime=new Date().getTime()
    // const valentinetime=new Date(valentinesday)
    totalseconds=(targetdate-currenttime)/1000
    console.log(totalseconds);
    const days=Math.floor(totalseconds/3600/24)
    console.log(days);

    const hours=Math.floor(totalseconds/3600)%24
    console.log(hours);
    const minutes=Math.floor(totalseconds/60)%60
    console.log(minutes);
    const seconds=Math.floor(totalseconds)%60
    console.log(seconds);
    
    
    daysdisplay.innerHTML=days;
    hoursdisplay.innerHTML =formatTime(hours) ;
    minutesdisplay.innerHTML=formatTime(minutes);
    secondsdisplay.innerHTML=formatTime(seconds);
    hoursdisplay.innerHTML.style="font-size:100px color:white"
    function formatTime(time){
        return time<10?`0${time}`:time;
    }
}
countdown();
setInterval(countdown,1000);
