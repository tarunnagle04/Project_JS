clock_fn = () => {
    let t = new Date();
    let h = () => {
        let h = t.getHours();
        if (h >= 10) {
            if(h>12){
                h = h - 12;
                return ("0"+h);
            }
        } else {
            return ("0" + h);
        }
    }
    let m = () => {
        let m = t.getMinutes();
        if (m >= 10) {
            return m;
        } else {
            return ("0" + m);
        }
    }
    let s = () => {
        let s = t.getSeconds();
        if (s >= 10) {
            return s;
        } else {
            return ("0" + s);
        }
    }

    // console.log();
    let AmPm = () => {
        if (h() >= 12) {
            return "PM";
        } else {
            return "AM";
        }
    }
    document.getElementById("hours").innerHTML = h() + "<br> hours";
    document.getElementById("minutes").innerHTML = m() + "<br> minutes";
    document.getElementById("seconds").innerHTML = s() + "<br> seconds";
    document.getElementById("ampm").innerHTML = AmPm();

    // forImage updation stuff
    let hoho = t.getHours();
    if (hoho > 0 && hoho < 12) {
        document.getElementById("component").src = "Component.jpg";
        document.getElementById("breakfasT").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("Good").innerText = "GOOD MORNING!! WAKE UP !!";
    } else if (hoho >= 12 && hoho < 16) {
        document.getElementById("component").src = "lunch.jpg";
        document.getElementById("breakfasT").innerText = "LET'S HAVE SOME LUNCH !!";
        document.getElementById("Good").innerText = "GOOD AFTERNOON!! GO GET SOME SLEEP";
    } else if (hoho >= 16 && hoho < 20) {
        document.getElementById("component").src = "evening.png";
        document.getElementById("breakfasT").innerText = "STOP YAWNING, GET SOME TEA.. \n IT'S JUST EVENING";
        document.getElementById("Good").innerText = "GOOD EVENING!!";
    } else if (hoho >= 20) {
        document.getElementById("component").src = "night.jpg";
        document.getElementById("breakfasT").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("Good").innerText = "GOOD NIGHT !!";
    }
}
setInterval(clock_fn, 1000);

// This is all for clock dependency;

values = () => {
    let morning = document.getElementById("morning").value;
    let noon = document.getElementById("noon").value;
    let eve = document.getElementById("eve").value;
    let night = document.getElementById("night").value;
    document.getElementById("SCHED").innerHTML = `Wake Up Time : ${morning} <br> Lunch Time : ${noon} <br> Nap Time : ${eve} <br> Night Time : ${night}`
}

hoverFunction1 = () => {
    document.getElementById("SET").innerText = "LET'S PARTY ";
}
hoverFunction2 = () => {
    document.getElementById("SET").innerText = "Set Alarm";
}