function startApp() {

    sessionStorage.clear();

    showHideMenuLinks();

    showView('viewHome');

    // // Bind the navigation menu links  THIS IS ALL MEN with concret event
     $("#linkHome").click(showHomeView);
     $("#linkLogin").click(showLoginView);
     $("#linkRegister").click(showRegisterView);
     $("#linkListAds").click(listAdvert);
     $("#linkCreateAd").click(showFormCreateAdverts);
     $("#linkLogout").click(logoutUser);


    // // Bind-връзвам the form submit buttons
     $("#buttonLoginUser").click(loginUser);
     $("#buttonRegisterUser").click(registerUser);
     $("#buttonCreateAd").click(createNewAdvertisements);
     $("#buttonEditAd").click(editAdvertss);


    $('#infoBox', '#errorBox').click(function () {
        $(this).fadeOut();
    });

    $(document).on({   // show hide box LOAD ...
        ajaxStart: function () {$('#loadingBox').show();},

        ajaxStop: function () {$('#loadingBox').fadeOut();}
    });
}