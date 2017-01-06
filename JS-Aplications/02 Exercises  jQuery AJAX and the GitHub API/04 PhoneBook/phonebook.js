function attachEvents() {   /// 100 vdonchev
    const apiUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let phoneBook = $('#phonebook');

    $('#btnLoad').on('click', loadPhoneNumbers);
    $('#btnCreate').on('click', addNewPhoneNumber);

    function loadPhoneNumbers() {
        $.ajax({
            method: 'GET',
            url: apiUrl + '.json',
            success: renderPhoneNumbers
        });
    }

    function renderPhoneNumbers(data) {
        phoneBook.empty();
        let keys = Object.keys(data);
        for (let key of keys) {
            let number = data[key];
            let li = $('<li>')
                .text(`${number.person}: ${number.phone} `)
                .append($('<button>')
                    .text('[Delete]')
                    .on('click', () => deleteEntry(key)));

            $('#phonebook').append(li);
        }
    }

    function deleteEntry(id) {
        $.ajax({
            method: 'DELETE',
            url: apiUrl + '/' + id + '.json',
            success: loadPhoneNumbers
        })
    }

    function addNewPhoneNumber() {
        let person = $('#person').val().trim();
        let phone = $('#phone').val().trim();

        if (person != '' && phone != '') {
            $.ajax({
                method: 'POST',
                data: JSON.stringify({
                    person, phone
                }),
                url: apiUrl + '.json',
                success: function () {
                    $('#person').val('');
                    $('#phone').val('');

                    loadPhoneNumbers();
                }
            })
        }
    }
}





// function attachEvents() {    // moe 33
//
//     $('#btnLoad').click(loadContacts);
//     $('#btnCreate').click(createContact);
//     let baceServiceUrl = "https://phonebook-nakov.firebaseio.com/phonebook";
//
//     function loadContacts() {
//         $.ajax({
//             method: 'GET',
//             url: baceServiceUrl + ".json"
//         }).done(displayContacts)
//     }
//
//     function displayContacts(phoneBook) {
//         $('#phonebook').empty();
//         let keys = Object.keys(phoneBook);
//         for (let key of keys) {
//             let contact = phoneBook[key];
//             let li = $('<li>').text(contact.person + ':' + contact.phone + ' ');
//             $('#phonebook').append(li);
//             li.append($('<a href="#">[Delete]</a>')).click(function () {
//                 deleteContact(key);
//             });
//         }
//     }
//
//     function deleteContact(key) {
//         $.ajax({
//             method: 'DELETE',
//             url: baceServiceUrl + "/" + key + ".json"
//         })
//             .then(loadContacts);
//     }
//
//     function createContact() {
//
//             let person =  $('#person').val();
//             let phone = $('#phone').val();
//
//         if(person != '' && phone !='')
//             $.ajax({
//                 method: 'POST',
//                 data: JSON.stringify({
//                     person, phone
//                 }),
//                 url: baceServiceUrl + '.json'
//             })
//             .then(loadContacts);
//             $('#person').val('');
//             $('#phone').val('');
//     }
// }
