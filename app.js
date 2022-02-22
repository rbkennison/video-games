// Make a clock
// use java script methods: get hours, get minutes, get seconds; document.get element by id
// make a main function for all the logic. want assigns results into separate variables and then add them together
//in html you will want to import the java script file me

function currentTime() {
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sec = date.getSeconds();
    let session = 'AM';

    if (hr == 0){
        hr = 12;
    }
    if (hr > 12) {
        hr -= 12;
        session = 'PM';
    }

    hr = (hr < 10) ? '0' + hr : hr;
    mn = (mn <10) ? '0' + mn : mn;
    sec = (sec < 10) ? '0' + sec : sec;

    let time = hr + ':' + mn + ':' + sec + ':' + session;

    document.getElementById("MyClockDisplay").innerText = time;
    let t = setTimeout(function (){ currentTime() }, 1000);
}
currentTime();

