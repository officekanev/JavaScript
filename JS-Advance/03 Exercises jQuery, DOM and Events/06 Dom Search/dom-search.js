function domSearch(selector, caseType) {
    let addControls = $('<div>')
        .addClass('add-controls')
        .append($('<label>').text('Enter text:').append($('<input>')))
        .append($('<a>')
            .addClass('button')
            .css('display', 'inline-block')
            .text('Add')
            .click(function () {
                let elementText = $('label input'); // take text content of the input field
                let newElement = $('<li>')
                    .addClass('list-item')
                    .append($('<a>').addClass('button').text('X').click(function () {// this func add delete button
                        $(this).parent().remove(); // in to created new li element in who we add a-href
                    }))                     //   |--- add text content who we take of the input field
                    .append($('<strong>').text(elementText.val().trim()));

                $('ul.items-list').append(newElement);// add in to UL .items-list
                elementText.val(''); // clear content of the variable
            }));

    let searchControls = $('<div>')
        .addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>')
            .on('input', function () { // this event every time when is clicked is refresh content  'input'
                let needle = $(this).val(); // take content of input fied, who we want to search in to li element
                                            // for macthing
                let items = $('.list-item strong').toArray();// take all li-strong elements
                for (let item of items) {    // iterate all li element
                    let current = $(item);   // take curent li element

                    if (caseType) {
                        if (current.text().indexOf(needle) < 0) { // if no have match with sercing text  , make display none of li element
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    } else {
                        if (current.text().toLowerCase().indexOf(needle.toLowerCase()) < 0) { // check for case sensitive serch
                            current.parent().css('display', 'none')
                        } else {
                            current.parent().css('display', '')
                        }
                    }
                }
            })));

    let resultControls = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));

    $(selector)
        .append(addControls)
        .append(searchControls)
        .append(resultControls);
}




























































