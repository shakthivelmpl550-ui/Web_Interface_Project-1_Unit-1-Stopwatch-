let hour = 0;
let minute = 0;
let second = 0;

let timer;

function start()
{
    clearInterval(timer);

    timer = setInterval(run,1000);
}

function run()
{
    second++;

    if(second==60)
    {
        second=0;
        minute++;
    }

    if(minute==60)
    {
        minute=0;
        hour++;
    }

    let h=hour;
    let m=minute;
    let s=second;

    if(hour<10)
    {
        h="0"+hour;
    }

    if(minute<10)
    {
        m="0"+minute;
    }

    if(second<10)
    {
        s="0"+second;
    }

    document.getElementById("time").innerHTML=h+" : "+m+" : "+s;

}

function stop()
{
    clearInterval(timer);
}

function reset()
{
    clearInterval(timer);

    hour=0;
    minute=0;
    second=0;

    document.getElementById("time").innerHTML="00 : 00 : 00";

    document.getElementById("list").innerHTML="";
}

function lap()
{
    let value=document.getElementById("time").innerHTML;

    let item=document.createElement("li");

    item.innerHTML=value;

    document.getElementById("list").appendChild(item);
}
