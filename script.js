


function countdownClock() {

    /* Set starting time, end time and timer difference for countdown*/

    let timerStart = new Date().getTime();
    let timerEnd = new Date("Feb 22, 2020 18:00:00").getTime();
    let timerDifference = timerEnd - timerStart;
    console.log(timerDifference);

    /* Hours/Minutes/Seconds rounded down to even number to divide time difference by  
    milliseconds*/

    let hours = Math.floor(timerDifference / 3600000);     //milliseconds per hour
    let milliseconds = hours * 3600000;
    timerDifference = timerDifference - milliseconds;   //Remaining time in hours - milliseconds
  
    let minutes = Math.floor(timerDifference / 60000);      //milliseconds per minute
    milliseconds = minutes * 60000;                        
    timerDifference = timerDifference - milliseconds;        //Remaining time in minutes - milliseconds
  

    let seconds = Math.floor(timerDifference / 1000);           //milliseconds per second
  

    /*If statements that set the tens digit in Hours/Seconds/Minutes to 0 if less that 10 */
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    /* If statement to print to the clock "Times Up!"" when the clock hits zero" */
    if (timerDifference <= new Date) {
      document.getElementById("countdownClock").innerHTML = "Times Up!";
    } else {
        document.getElementById("countdownClock").innerHTML = hours + ":" + minutes + ":" + seconds + " ";
    }

} setInterval(countdownClock, 1000); /* Sets interval to 1000 milliseconds which is 1 second,
    so the timer is counting down every second. */
