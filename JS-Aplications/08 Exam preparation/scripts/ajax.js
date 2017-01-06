function getKinveyUserAuthHeaders() {
    return {
        'Authorization' : 'Kinvey ' + sessionStorage.getItem('authToken')
    }
}

function createNewAdvertisements() {

    let adrevtsData = {
        title: $('#formCreateAd input[name=title]').val(),
        description: $('#formCreateAd textarea[name=description]').val(),
        publisher: $('#formCreateAd input[name=publisher]').val(),
        dateofPublishing: new Date($('#formCreateAd input[name=datePublished]').val()),
        price: parseFloat($('#formCreateAd input[name=price]').val()).toFixed(2),
        image: $('#formCreateAd input[name=image]').val(),
    };

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/prodavavach",
        headers: getKinveyUserAuthHeaders(),
        data: adrevtsData,
        success: createNewAdverts,
        error: handleAjaxError
    });

    function createNewAdverts() {
        listAdvert();
        showInfo('Advertisements is created successfully.');
    }
}

function listAdvert() {
    $('#ads').empty();   //  clear old book content of the HTML
    showView('viewAds');

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/prodavavach",
        headers: getKinveyUserAuthHeaders(),
        success: loadadvertsSuccess,
        error: handleAjaxError
    });

    function loadadvertsSuccess(adverts) {
        let table = $(` 
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Publisher</th>
                    <th>DatePublisher</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </table>`);

        for(let adver of adverts) {
            // console.dir(adverts)
            let tr = $('<tr>');
            displayTableRow(tr, adver);
            tr.appendTo(table);

        }
        $('#ads').append(table);
    }

    function displayTableRow(tr, adver) {
        let links = [];

        let readmore = $("<a href='#'>[Read More]</a>")
            .click(function () { showMoreDetails(adver)});
        links.push(readmore);
        links.push(' ');

        if(adver._acl.creator == sessionStorage.getItem('userId')){
            let deleteLink = $("<a href='#'>[Delete]</a>")
                .click(function () { deleteAdvertsById(adver._id)});
            let editLink = $("<a href='#'>[Edit]</a>")
                .click(function () { takeCurrentContentOfTheAdvertissements(adver._id)});
            links.push(deleteLink);
            links.push(' ');
            links.push(editLink);
        }
        tr.append(
            $('<td>').text(adver.title),
            $('<td>').text(adver.description),
            $('<td>').text(adver.publisher),
            $('<td>').text(adver.dateofPublishing),
            $('<td>').text(adver.price),
            $('<td>').text(adver.image),
            $('<td>').append(links)
        );
    }
}

function showMoreDetails(adverts) {

    $.ajax({
        method: "GET",
        url: kinveyAdUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/prodavavach/" + adverts._id,
        headers: getKinveyUserAuthHeaders() ,
        success: displayAdvertsSuccess,
        error: handleAjaxError
    });

    $('#viewDetailsAd').empty(); // <section id="viewDetailsAd"></section>

    function displayAdvertsSuccess(advert) {
        let html = $('<div>');
        html.append(
            $('<img>').attr('src', advert.image),
            $('<br>'),
            $('<label>').text('Price: '),
            $('<h1>').text(advert.price),
            $('<label>').text('Title: '),
            $('<h1>').text(advert.title),
            $('<label>').text('Description: '),
            $('<h1>').text(advert.description),
            $('<label>').text('Publisher: '),
            $('<h1>').text(advert.publisher),
            $('<label>').text('Date: '),
            $('<h1>').text(advert.dateofPublishing)
        );
            html.appendTo($('#viewDetailsAd'));
            showView('viewDetailsAd');
    }
}

function takeCurrentContentOfTheAdvertissements(adverId) {
    $.ajax({
        method: "GET",
        url: kinveyBookUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/prodavavach/" + adverId,
        headers: getKinveyUserAuthHeaders(),
        success: fillDataOfTheEditFormField,
        error: handleAjaxError
    });

            // here we change  content in the same SERVER BASE for this Adverts
    function fillDataOfTheEditFormField(currentAdverts) {
        $('#formEditAd input[name=id]').val(currentAdverts._id);
        $('#formEditAd input[name=title]').val(currentAdverts.title);
        $('#formEditAd textarea[name=description]').val(currentAdverts.description);
        $('#formEditAd input[name=publisher]').val(currentAdverts.publisher);
        $('#formEditAd input[name=datePublished]').val(currentAdverts.dateofPublishing);
        $('#formEditAd input[name=price]').val(currentAdverts.price);
        $('#formEditAd input[name=image]').val(currentAdverts.image);
        showView('viewEditAd');
    }
}

function editAdvertss() {

    let advertData = {
        title: $('#formEditAd input[name=title]').val(),
        description: $('#formEditAd textarea[name=description]').val(),
        publisher: $('#formEditAd input[name=publisher]').val(),
        dateofPublishing: $('#formEditAd input[name=datePublished]').val(),
        price: $('#formEditAd input[name=price]').val(),
        image: $('#formEditAd input[name=image]').val()
    };

    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" +
        kinveyAppKey + "/prodavavach/" + $('#formEditAd input[name=id]').val(),
        headers: getKinveyUserAuthHeaders(),
        data: advertData,
        success: updateDataSuccess,
        error: handleAjaxError
    });

    function updateDataSuccess() {
        listAdvert();
        showInfo('Advertisements is success edit.');
    }
}

function deleteAdvertsById(bookId) {
    $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/prodavavach/" + bookId,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdvertsSuccess,
        error: handleAjaxError
    });

    function deleteAdvertsSuccess() {
        listAdvert();
        showInfo('Advertisements has deleted successfully.');
    }
}






























