function loadStudents() {
    const appKey = 'kid_BJXTsSi-e';
    const username = 'guest';
    const password = 'guest';
    const basicUrl = `https://baas.kinvey.com/appdata/${appKey}/students`;

    let authHeaders = {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Content-Type': 'application/json'
    };

    let table = $('#result');
    function loadStudents() {
        let tr = table.find("tr:not(:first-child)");
        tr.remove();
        $.ajax({
            headers: authHeaders,
            method: 'GET',
            url: basicUrl,
            success: function(list) {
                showListStudents(list);
            },
            //error: showError
        });

        function showListStudents(list) {
            list = list.sort((a, b) => {return a.ID - b.ID});

            let Parentable = $('#results');
            for(let student of list){
                let tableRow = $('<tr>');
                let id = $('<td>').text(student.ID);
                let firstName = $('<td>').text(student.FirstName);
                let lasttName = $('<td>').text(student.LastName);
                let facultyNumber = $('<td>').text(student.FacultyNumber);
                let grade = $('<td>').text(student.Grade);
                tableRow.append(id).append(firstName).append(lasttName).append(facultyNumber).append(grade);
                Parentable.append(tableRow);
            }
        }
    }

    loadStudents();

    // function showError() {
    //     console.log("somthing is wrong stupid Idiot");
    // }

    $('#addBtn').click(createNewStudent);

    function createNewStudent() {
        let idd = $('#studentID').val();
        idd = Number(idd);
        let firstnam = $('#firstname').val();
        let lastnam = $('#lastname').val();
        let facultNum = $('#facultynumber').val();
        let gradde = $('#grade').val();
        gradde = Number(gradde);

        if(idd !='' && idd != undefined && firstnam != '' &&
            lastnam != '' && facultNum != undefined && gradde != '' && gradde != undefined){

            let newStudent = {
                ID: idd,
                FirstName: firstnam,
                LastName: lastnam,
                FacultyNumber: facultNum,
                Grade: gradde
            };

            $.ajax({
                uri: basicUrl,
                method: 'POST',
                headers: authHeaders,
                data: JSON.stringify(newStudent)
            }).then(loadStudents)
        }

        $('#studentID').val('');
        $('#firstname').val('');
        $('#lastname').val('');
        $('#facultynumber').val('');
        $('#grade').val('');
    }
}
