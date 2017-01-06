function showView(viewName) {
    // Hide all views and show the selected view only
    $('main > section').hide();
    $('#' + viewName).show();
}

function showHomeView() {
    showView('viewHome')// show text
}

function showHideMenuLinks() {

    $('#menu a').hide();
    if(sessionStorage.getItem('authToken')){

        $("#linkHome").show();   // when user is login
        $("#linkListAds").show();
        $("#linkCreateAd").show();
        $("#linkLogout").show();
    }else {
        // when user  is not logen
        $("#linkHome").show();
        $("#linkLogin").show();
        $("#linkRegister").show();
    }
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() { //  show register form
    $('#formRegister').trigger('reset');
    showView('viewRegister');
}

function showFormCreateAdverts() {
    $('#viewCreateAd').trigger('reset'); // clear form
    showView('viewCreateAd');//  show form create new advert
}
