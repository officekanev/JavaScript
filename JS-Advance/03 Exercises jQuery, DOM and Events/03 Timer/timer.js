function timer() {
   let time = 0;
    let intervalID;
    let startTimer = $('#start-timer');
    let stopTimer = $('#stop-timer');

    startTimer.on('click', function () {
                             // ????
        if(!$('#timer').attr('data-started')){
            if(time == 0){
                time = -1;
            }
            incrementTime();
            intervalID = setInterval(incrementTime, 1000);
        }

        $('#timer').attr('data-started', 'true')
    });


    stopTimer.on('click', function () {
        //????
        clearInterval(intervalID);
        $('#timer').removeAttr('data-started');
    });

    function incrementTime(){
        time++;
        $('#hours').text(("0" + (Math.trunc(time / 3600)% 24)).slice(-2));
        $('#minutes').text(("0" + (Math.trunc(time / 60) % 60)).slice(-2));
        $('#seconds').text(("0" + (time % 60)).slice(-2))
    }
}
