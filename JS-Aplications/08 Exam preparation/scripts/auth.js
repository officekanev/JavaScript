const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_ByGg8dG7x";
const kinveyAppSecret = "c0e58a503a7e4209b387fc64a76cdf5b";
const kinveyAppAuthHeaders = { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)};

function loginUser(event) {

    let userData = {
        username: $('#formLogin input[name=username]').val(),
        password: $('#formLogin input[name=passwd]').val()
    };

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: kinveyAppAuthHeaders,
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: loginUserSuccess,
        error: handleAjaxError
    });

    function loginUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        $('#viewLogin').hide();
        let gretting = 'Hello user !!!    ' + userInfo.username;
        $('#loggedInUser').text(gretting);
        $('#loggedInUser').show();
        showView('viewAds');
        showInfo('Login successful.');
    }
}



function saveAuthInSession(userInfo) {
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
    $('#loggedInUser').text("Welcome, " + userInfo.username);// span with TEXT WELCOM ....
}

function registerUser(event) {

    let userData = {
        username: $('#formRegister input[name=username]').val(),
        password: $('#formRegister input[name=passwd]').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
        headers: kinveyAppAuthHeaders,
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: registerUserSuccess,
        error: handleAjaxError
    });

    function registerUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        $('#viewRegister').hide();
        showView('viewAds');
        let gretting = 'Hello user !!!     ' + userInfo.username;
        $('#loggedInUser').text(gretting);
        $('#loggedInUser').show();
        showInfo('User registration successful.');
    }
}

function logoutUser() {

    sessionStorage.clear();// clear current sesion
    //$('#formLogin').text('');// !!! DO_NOT USE THIS TO CLER FORMS
    showView('viewHome'); // <section id="viewHome">  <h1>Welcome</h1> .....
    showHideMenuLinks();
    $('#loggedInUser').text('');
    $('#loggedInUser').hide();
    showInfo('Log - Out successful');
}
