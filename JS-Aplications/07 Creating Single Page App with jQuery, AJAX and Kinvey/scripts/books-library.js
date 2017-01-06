function startApp() {

    // Clear user auth data
    sessionStorage.clear(); // sesion stor for the login current user

    showHideMenuLinks(); // show og hide given buttons of the nav

    showView('viewHome'); // show Text div
    
    // Bind the navigation menu links  THIS IS ALL MENU_NAV BUTTONS  !!!! Here conect given button with concret event
    $("#linkHome").click(showHomeView); //  <a href="#" id="linkHome">Home</a>     & invoke appropriate function
    $("#linkLogin").click(showLoginView); //  <a href="#" id="linkLogout">Logout</a>
    $("#linkRegister").click(showRegisterView);// <a href="#" id="linkRegister">Register</a>
    $("#linkListBooks").click(listBooks);
    $("#linkCreateBook").click(showCreateBookView);
    $("#linkLogout").click(logoutUser);


    // Bind-връзвам the form submit buttons
    $("#formLogin").submit(loginUser); // <form id="formLogin"> when press btn SUBMIT invoke func 'loginUser'
    $("#formRegister").submit(registerUser);// ....
    $("#buttonCreateBook").click(createBook);
    $("#buttonEditBook").click(editBook);

    // Bind-връзвам the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function() { // <section id="infoBox">Info</section> <section id="errorBox">Error</section>
        $(this).fadeOut();// this  shows colored divs who when execute given operation  & is hide by def         00
    });

    // Attach AJAX "loading" event listener
    $(document).on({ //                           <section id="loadingBox">Loading ...</section>
        ajaxStart: function() { $("#loadingBox").show() }, // show or hidd loading link of menu-bar       01
        ajaxStop: function() { $("#loadingBox").hide() } // LOADIG-blue,INFO-green, ERROR - red
    });

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_rJmEGtVzx";
    const kinveyAppSecret = "5fec063561cf43fc8d2bdf20a22626a5";
    const kinveyAppAuthHeaders = { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };


    function showHideMenuLinks() {

        $('#menu a').hide(); // hide all a LINK OF THE MENU                                              02
        if(sessionStorage.getItem('authToken')){// show hide menu elements

            $("#linkHome").show();   // when user is login
            $("#linkListBooks").show();
            $("#linkCreateBook").show();
            $("#linkLogout").show();
        }else {
                                    // when user  is not logen
            $("#linkHome").show();
            $("#linkLogin").show();
            $("#linkRegister").show();
        }
    }
    
    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();// hide all menu element
        $('#' + viewName).show(); //  show only  this link who we is says
    }
    
    function showHomeView() {
        showView('viewHome')// show text
    }

    function loginUser(event) {
        event.preventDefault();// отменя случай, ако той е прекратен, което означава, че действието по подразбиране,
           let userData = {       // което принадлежи на събитието няма да се случи.
            username: $('#formLogin input[name=username]').val(),// take data of input field
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
            saveAuthInSession(userInfo);// save data who is give for the request & created current sesion
            showHideMenuLinks(); // show  or hide given button of the screen
            listBooks(); // func who clead old section book and create him again
            showInfo('Login successful.');
        }
    }

    function showLoginView() {// when press login is show any buttons & hiden another of menu bar          03
        showView('viewLogin'); // show login form
        $('#formLogin').trigger('reset');// clean all form to new fiill
    }

    function showRegisterView() { //  show register form
        $('#formRegister').trigger('reset'); //clear content of the field in   formRegister
        showView('viewRegister');
    }

    function getKinveyUserAuthHeaders() { //                                                                          | 1
        return {                          // return request with sessionStorage of the curent user Id
            'Authorization' : 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }

    function listBooks() {
        $('#books').empty();   //  clear old book content of the HTML
        showView('viewBooks'); // <section id="viewBooks"> in who is paste all books content
        
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
            headers: getKinveyUserAuthHeaders(),// refresh --- sessionStorage     INVOKE                             | 0
            success: loadBooksSuccess,// 
            error: handleAjaxError
        });
        
        function loadBooksSuccess(books) { // after ajax is sucsess we need to print result under csreen
            let table = $(` // create same TABLE with t-head cection
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </table>`);

            for(let book of books) {
               // console.dir(books)
                let tr = $('<tr>'); // create TR                                                               ||   0
                displayTableRow(tr, book); //    invoke function & give tr & data cor same book                ||   1
                tr.appendTo(table);

            }
            $('#books').append(table);
        }
        
        function displayTableRow(tr, book) {                         //                                        ||   2
            let links = [];
            //book._acl.creator == sessionStorage.getItem('userId') -check
            // book creator id ==  sessionStorage- id  of the user who is log in this session is
            // same author of this post
            if(book._acl.creator == sessionStorage.getItem('userId')){
                let deleteLink = $("<a href='#'>[Delete]</a>")  // create  link who is paste in <th>Actions</th>
                    .click(function () { deleteBookById(book._id)});
                let editLink = $("<a href='#'>[Edit]</a>") //        ----
                    .click(function () { loadBookForEdit(book._id)});
                links.push(deleteLink); // make distance between two links
                links.push(' ');
                links.push(editLink);
            }
            tr.append(
                $('<td>').text(book.title), // append text content in different TD sections
                $('<td>').text(book.author),
                $('<td>').text(book.description),
                $('<td>').append(links)
            );
        }
    }

    function deleteBookById(bookId) {
        $.ajax({         //                     make request
            method: "DELETE",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),// refresh --- sessionStorage
            success: deleteBooksSuccess,//
            error: handleAjaxError
        });
        
        function deleteBooksSuccess() {
            showInfo('Book deleted.'); //  show mesage
            listBooks();            // invoke function who delete old book section and create him again with new DATA
        }
    }

    function showCreateBookView() {
        $('#formCreateBook').trigger('reset'); // clear form
        showView('viewCreateBook');//  show form who need to fill of the user to create new book
    }
    
    function logoutUser() {
        
        sessionStorage.clear();// clear current sesion who is created with input user
        $('#loggedInUser').text('');// paste welcom text & name of user of the menu - navigation
        showView('viewHome'); // <section id="viewHome">  <h1>Welcome</h1> .....
        showHideMenuLinks();// this function hide or show  part of the menu buttons
        showInfo('Logout successful'); // SAY TEXT LOGIN SUCSSES
    }

    function registerUser(event) { // method for send request to  registration
        event.preventDefault();
        let userData = {
            username: $('#formRegister input[name=username]').val(), // take content of the input field
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,//{ 'Authorization': "Basic " + btoa make code64
            data: JSON.stringify(userData),
            contentType: 'application/json',
            success: registerUserSuccess,
            error: handleAjaxError
        });
        
        function registerUserSuccess(userInfo) {
            saveAuthInSession(userInfo); // save authonticaton code for curretn REST
            showHideMenuLinks(); //   change buttons in to menu
            listBooks();// create again all section books
            showInfo('User registration successful.'); // SHOW GREEN DIV WITH THIS TEXT of the screen
        }
    }

    // keep authontication id code for creatett current SESION
    // when we login with user & PW recieve current authontication- sesion number
    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);// take aut code who recive when make rewues _kmd of the POSTMAN
        sessionStorage.setItem('userId', userInfo._id);
        $('#loggedInUser').text("Welcome, " + userInfo.username);// this is span with TEXT WELCOM ....
    }
    
    function showInfo(message) {  //  THIS FUNC SHOW GREEN , RED & BLUE window
        $('#infoBox').text(message); // here paste text
        $('#infoBox').show();          // show div
        setTimeout(function() {     //  after 3 sec hide same div
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);// if recieve unrecognized-непознат message to Error
        if (response.readyState === 0)// if internet is not conected return 0
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description) // else show msg who recive of responce-requesty
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function createBook() {

        let bookData = {
            title: $('#formCreateBook input[name=title]').val(), // take text content of the input fields   >  00
            author: $('#formCreateBook input[name=author]').val(),
            description: $('#formCreateBook textarea[name=descr]').val()
        };

        $.ajax({         //            make request with this  dat who is take                              >  01
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
            headers: getKinveyUserAuthHeaders(),// refresh --- sessionStorage
            data: bookData,
            success: createBookSuccess,//
            error: handleAjaxError
        });

        function createBookSuccess() {
            showInfo('Book created.');
            listBooks();//reload-create book content again
        }
    }

    function loadBookForEdit(bookId) { // alold to change-update  data  for given book who is create this user
        $.ajax({
            method: "GET",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/books/" + bookId,// this reques + concret id-bookId return define book who we serch
            headers: getKinveyUserAuthHeaders(),        // to change him contant                                        01
            success: loadBookForEditSuccess,
            error: handleAjaxError
        });

        // after we make search book we change here him content in the same SERVER BASE
        function loadBookForEditSuccess(book) { //                                                                       02
            $('#formEditBook input[name=id]').val(book._id);
            $('#formEditBook input[name=title]').val(book.title);
            $('#formEditBook input[name=author]').val(book.author);
            $('#formEditBook textarea[name=descr]').val(book.description);
            showView('viewEditBook');//show hiden part of navigation
        }
    }
    
    function editBook() {  // replace content-data of consistin book with extended data
        let bookData = {
            title: $('#formEditBook input[name=title]').val(), // create object who take changed text content of the field
            author: $('#formEditBook input[name=author]').val(),
            description: $('#formEditBook textarea[name=descr]').val()
        };

        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books/" +
            $('#formEditBook input[name=id]').val(), // this section is HIDDEN he represent 3 input field name
                                                     //
            headers: getKinveyUserAuthHeaders(), // return new auth
            data: bookData, // object with title,author & description
            success: createBookSuccess,//
            error: handleAjaxError
        });

        function createBookSuccess() {
            showInfo('Book edit.'); // show text sucsses
            listBooks();//invoke function who create all book content again
        }
    }
}







































































































































