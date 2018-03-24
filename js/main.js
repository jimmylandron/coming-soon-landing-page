const countdown = document.querySelector('.countdown');

// Set launch date in milliseconds.
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

// Update every second
const intvl = setInterval(function(){
    // Get today's date and time in milliseconds.
    const now = new Date().getTime();

    // Get time from now till launch date.
    const timeTill = launchDate - now;

    //console.log(timeTill);

    // Time Calculations.
    const days = Math.floor(timeTill / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeTill % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeTill % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeTill % (1000 * 60)) / 1000);

    // Display results.
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>
    `;

    // Has launch date passed?
    if(timeTill < 0){
        // stop countdown.
        clearInterval(intvl);
        // style and output text.
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000)
