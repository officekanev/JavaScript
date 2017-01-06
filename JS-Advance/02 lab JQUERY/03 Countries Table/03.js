function initializeTable() {
    // |-- when click link <td><a href="#" id="createLink">[Create]</a>
    // |   invoke function -| who take content of the input field
    $('#createLink').click(createCountry); //

    addCountryToTable("Bulgaria", "Sofia"); // invoke function addCountryToTable who is create
    addCountryToTable("Germany", "Berlin"); //  three default table rows
    addCountryToTable("Russia", "Moscow");


    function createCountry() {
        let country = $('#newCountryText').val(); // take country Name
        let capital = $('#newCapitalText').val(); // take country Capital - Stolicata
        addCountryToTable(country, capital, true); // invoke function addCountryToTable

        $('#newCountryText').val(''); // clear input fields after we take content of him
        $('#newCapitalText').val(''); // for new input

        fixRowLinks(); // invoke function who check in hwo rol is find in moment this row
           // & dependence of the row position add button [Up] or remove him  & button [Down]
    }

    function addCountryToTable(country, capital) {
        let row = $('<tr>') //  create element  <tr>
            .append($('<td>').text(country)) // create element <td> & paste text content of him
            .append($('<td>').text(capital))// -- // --
            .append($('<td>') //  in to <tr> add created new two <td>
            .append($("<a href='#'>[Up]</a>").click(moveRowUp))// add link button [Up] who invoke function  moveRowUp()
            .append(' ')// add space distance
            .append($("<a href='#'>[Down]</a>").click(moveRowDown))// add link button [Down] who invoke function  moveRowDown()
            .append(" ")
            .append($("<a href='#'>[Delete]</a>").click(deleteRow)));// add link button [Delete] who invoke function  deleteRow()
            row.css('display', 'none'); //  for this moment by defaulth we make display of this new created row - none
            $('#countriesTable').append(row); // append all filled row in to the defaulth table <table id="countriesTable">
            row.fadeIn(); //  slowly
    }

    function moveRowUp() {
                //   |-- this is button [Up] who is find into <tr> , .parent()- catch <tr>
        let row = $(this).parent().parent(); // & . parent() again catch  <table id="countriesTable">
        //    |-- invoke function fadeOut who slowly insert this row before row who is find up him
        row.fadeOut(function () {
            row.insertBefore(row.prev()); // insert before  .prev() - row
            row.fadeIn();
            fixRowLinks();
        });
    }
    
    function moveRowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });

    }
    
    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.remove();
            fixRowLinks();
        });

    }
    
    function fixRowLinks() {
        // Show all links in the table
        $('#countriesTable a').css('display', 'inline');

        // Hide-skriva [Up] link in first table data row
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        // Hide-skriva the [Down] link in the last table row
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');

    }
}










































































































