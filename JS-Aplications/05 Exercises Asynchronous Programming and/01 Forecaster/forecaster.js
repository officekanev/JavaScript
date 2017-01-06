function attachEvents() {
     const weatherParentDiv = $('#forecast');
     const classLabel = $('#current');
     const parentDivForNextThreeDay = $('#upcoming');
     const requestUrl = 'https://judgetests.firebaseio.com';

    $('#submit').click(function () {
        executeRequest();
    });

    function executeRequest() {
        $.get({
            method: 'GET',
            url: requestUrl + '/locations.json',
        })
            .then(returnCode)
            .catch(displayError);

        function returnCode(data) {
            let inputCode = $('#location').val();
            let cityName = '';

            if(inputCode != ''){

                for(let sity of data) {
                    if(sity.name == inputCode){
                        cityName = sity.code;
                        createRequest(cityName);
                        break;
                    }
                }
            }
        }
    }

    function createRequest(inputCode) {

        let requestTodayWeather = $.ajax({
            method: 'GET',
            url: requestUrl + '/forecast/today/' + inputCode +'.json'
        });

        let requestNextThreeDays = $.ajax({
            method: 'GET',
            url: requestUrl + `/forecast/upcoming/${inputCode}.json`
        });

        Promise.all([requestTodayWeather, requestNextThreeDays])
            .then(fillDataInBodyDocument)
    }

    function fillDataInBodyDocument([todayWeather, nextThreeDaysWeather]) {
        let time = todayWeather.forecast.condition;
        let minTemperature = todayWeather.forecast.low;
        let maxTemperature = todayWeather.forecast.high;
        let newtime = takeWeatherSimbols(time);
        let SpanCondit = $('<span>').text(newtime)
            .addClass('condition symbol');

        classLabel.append(SpanCondit);

        let spanCity = $('<span>').text(todayWeather.name)
            .addClass('forecast-data');
        let temperature = `${minTemperature}°/${maxTemperature}°`;
        let spanTemperature = $('<span>').text(temperature)
            .addClass('forecast-data');
        let weatrher = $('<span>').text(time)
            .addClass('forecast-data');

        let spanCondition = $('<span>').addClass('condition');
        spanCondition.append(spanCity);
        spanCondition.append(spanTemperature);
        spanCondition.append(weatrher);
        classLabel.append(spanCondition);
        weatherParentDiv.css('display', 'block');

        createnextThreeDaysWeather(nextThreeDaysWeather)
    }

    function createnextThreeDaysWeather(nextThreeDaysWeather) {
        let array = [];
        let firstObj = nextThreeDaysWeather.forecast[0];
        let sec = nextThreeDaysWeather.forecast[1];
        let three = nextThreeDaysWeather.forecast[2];
        array.push(firstObj);
        array.push(sec);
        array.push(three);

        for(let currentDay of array){
            let condition = currentDay['condition'];
            let low = currentDay['low'];
            let high = currentDay['high'];
            let newCondition = takeWeatherSimbols(condition);
            let temperature = `${low}°/${high}°`;
            let spanSighn = $('<span>').text(newCondition).addClass('symbol');
            let spantemperature = $('<span>').text(temperature).addClass('forecast-data');
            let spanweather = $('<span>').text(condition).addClass('forecast-data');
            let upcoming = $('<span>').addClass('upcoming');
            upcoming.append(spanSighn);
            upcoming.append(spantemperature);
            upcoming.append(spanweather);

            parentDivForNextThreeDay.append(upcoming);
        }
    }

    function takeWeatherSimbols(weather) {

        switch (weather){
            case 'Sunny': return '☀';
                break;
            case 'Partly sunny': return '⛅';
                break;
            case 'Overcast': return '☁';
                break;
            case 'Rain': return '☂';
                break;
            case 'Degrees': return '°';
                break;
        }
    }

    function displayError() {
        weatherParentDiv.show();
        weatherParentDiv.text('Error');
    }
}




// function attachEvents() {
//     const apiUrl = 'https://judgetests.firebaseio.com';
//     const weatherContainer = $('#forecast');
//     const todayWeather = $('#current');
//     const upcomingWeather = $('#upcoming');
//
//     $('#submit').on('click', getLocationCode);
//
//     function getLocationCode() {
//         let locationName = $('#location').val().trim();
//         if (locationName !== '') {
//             $.get({
//                 url: apiUrl + '/locations.json'
//             })
//                 .then(function (data) {
//                     let locationCode = data.filter(e => e.name === locationName)[0].code;
//                     if (locationCode) {
//                         getLocationReport(locationCode);
//                     }
//                 })
//                 .catch(renderError);
//         }
//     }
//
//     function getLocationReport(code) {
//         let currentConditions = $.get({
//             url: apiUrl + '/forecast/today/' + code + '.json'
//         });
//
//         let threeDaysConditions = $.get({
//             url: apiUrl + '/forecast/upcoming/' + code + '.json'
//         });
//
//         Promise.all([currentConditions, threeDaysConditions])
//             .then(processConditions)
//             .catch(renderError);
//     }
//
//     function processConditions([today, threeDays]) {
//         weatherContainer.show();
//         renderTodayWeather(today);
//         renderThreeDaysWeather(threeDays);
//     }
//
//     function renderTodayWeather(data) {
//         todayWeather.find('.label').nextAll().remove();
//         todayWeather
//             .append($('<span>')
//                 .addClass('condition symbol')
//                 .html(getWeatherIcon(data.forecast.condition)))
//             .append($('<span>')
//                 .addClass('condition')
//                 .append($('<span>')
//                     .addClass('forecast-data')
//                     .text(data.name))
//                 .append($('<span>')
//                     .addClass('forecast-data')
//                     .html(`${data.forecast.low}&#176;/${data.forecast.high}&#176;`))
//                 .append($('<span>')
//                     .addClass('forecast-data')
//                     .text(data.forecast.condition)));
//     }
//
//     function renderThreeDaysWeather(data) {
//         upcomingWeather.find('.label').nextAll().remove();
//
//         for (let condition of data.forecast) {
//             appendWeather(upcomingWeather, condition);
//         }
//     }
//
//     function appendWeather(container, stats) {
//         container
//             .append($('<span>')
//                 .addClass('upcomming')
//                 .append($('<span>')
//                     .addClass('symbol')
//                     .html(getWeatherIcon(stats.condition)))
//                 .append($('<span>')
//                     .addClass('forecast-data')
//                     .html(`${stats.low}&#176;/${stats.high}&#176;`))
//                 .append($('<span>')
//                     .addClass('forecast-data')
//                     .text(stats.condition))
//             );
//     }
//
//     function getWeatherIcon(condition) {
//         return {
//             'Sunny': '&#x2600;',
//             'Partly sunny': '&#x26C5;',
//             'Overcast': '&#x2601;',
//             'Rain': '&#x2614;'
//         }[condition];
//     }
//
//     function renderError() {
//         weatherContainer.show();
//         weatherContainer.text('Error'); // or append ?
//     }
// }




