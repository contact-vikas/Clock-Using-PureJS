var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

setInterval(() => {
    let date=new Date();
    htime = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);
