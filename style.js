const hour = document.getElementById('Hr');
const minute = document.getElementById('Mn');
const second = document.getElementById('Sec');
setInterval(()=>
{
    let date=new Date();
    let hr=date.getHours()*30;
    let min=date.getMinutes()*6;
    let sec=date.getSeconds()*6;

    hour.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
    minute.style.transform=`rotateZ(${min}deg)`;
    second.style.transform=`rotateZ(${sec}deg)`;
})
