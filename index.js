clock_fn = () => {
let t = new Date();
let h = () =>{
    let h = t.getHours();
    if(h>=10){
        return h;
    } else{
        return ("0"+h);
    }
}
let m = () =>{
    let m = t.getMinutes();
    if(m>=10){
        return m;
    } else{
        return ("0"+ m);
    }
}
let s = () =>{
    let s = t.getSeconds();
    if(s>=10){
        return s;
    } else{
        return ("0"+s);
    }
}

// console.log();
let AmPm = () =>{
    if(h()>=12){
        return "PM";
    }else{
        return "AM";
    }
}
document.getElementById("hours").innerHTML= h() + "\n hours";
document.getElementById("minutes").innerHTML= m() + "\n minute";
document.getElementById("seconds").innerHTML= s()+ "\n second";
document.getElementById("ampm").innerHTML= AmPm();
}
setInterval(clock_fn,1000);

// This is all for clock dependency;
values = () =>{
    let morning = document.getElementById("morning").value;
    let noon = document.getElementById("noon").value;
    let eve = document.getElementById("eve").value;
    let night = document.getElementById("night").value;
    return [morning,noon,eve,night];
}
document.getElementById("morning").addEventListener("change",values);
// document.getElementById("noon").addEventListener("change",values);
// document.getElementById("eve").addEventListener("change",values);
// document.getElementById("night").addEventListener("change",values);

console.log(values([0]));
