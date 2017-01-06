function attachEvents() {   // 100

    $('#submit').click(uploadData);
    $('#refresh').click(refreshData);
    const serverUrl = "https://ajax-simple-demos.firebaseio.com/messenger";
    let textAreaContent = $('#messages');

    function uploadData() {
           let userName = $('#author').val();
           let useMesage = $('#content').val();

        if(useMesage != '' && userName != ''){
            let timestamp = Date.now();

            $.ajax({
                method: "POST",
                data: JSON.stringify ({
                    author: userName,
                    content: useMesage,
                    timestamp
                }),
                url: serverUrl + '.json',
                success: function () {
                    $('#author').val('');
                    $('#content').val('');
                }
            });
        }
    }

    function refreshData() {
        $.ajax({
            method: 'GET',
            url: serverUrl + '.json',
            success: sortDataByIncomeTime
        });
    }

    function sortDataByIncomeTime(allDataMessages) {
        textAreaContent.val('');
       // let allObjects = [...Object.keys(allDataMessages)];
        let allObjects = Object.keys(allDataMessages)
            .sort((firstTime, secondTime) => allDataMessages[firstTime].timeStamp - allDataMessages[secondTime].timestamp)
            .map(data => allDataMessages[data]);

        for (let msg of allObjects) {
            textAreaContent.val(textAreaContent.val() + `${msg.author}: ${msg.content}\n`);
            textAreaContent.text(textAreaContent.text() + `${msg.author}: ${msg.content}\n`); // JUDGE WTF?????
        }
    }
}



// function attachEvents() {   // 100   AVTORSKO
//     const apiUrl = 'https://ajax-simple-demos.firebaseio.com/messenger';
//     let messagesArea = $('#messages');
//
//     $('#refresh').on('click', function () {
//         getMessages();
//     });
//
//     $('#submit').on('click', function () {
//         addNewMessage();
//     });
//
//     function addNewMessage() {
//         let author = $('#author').val().trim();
//         let content = $('#content').val().trim();
//         if (author != '' && content != '') {
//             let timestamp = Date.now();
//             $.ajax({
//                 method: 'POST',
//                 data: JSON.stringify({
//                     author,
//                     content,
//                     timestamp
//                 }),
//                 url: apiUrl + '.json',
//                 success: function () {
//                     $('#content').val('');
//                     getMessages();
//                 }
//             });
//         }
//     }
//
//     function getMessages() {
//         $.ajax({
//             method: 'GET',
//             url: apiUrl + '.json',
//             success: renderMessages
//         })
//     }
//
//     function renderMessages(messages) {
//         messagesArea.val('');
//         let sortedMessages = [...Object.keys(messages)]
//             .sort((mA, mB) => messages[mA].timestamp - messages[mB].timestamp)
//             .map(m => messages[m]);
//
//         for (let msg of sortedMessages) {
//             messagesArea.val(messagesArea.val() + `${msg.author}: ${msg.content}\n`);
//             messagesArea.text(messagesArea.text() + `${msg.author}: ${msg.content}\n`); // JUDGE WTF?????
//         }
//     }
// }