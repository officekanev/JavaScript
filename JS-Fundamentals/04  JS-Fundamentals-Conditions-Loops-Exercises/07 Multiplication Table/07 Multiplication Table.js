function multiplicationTable([lineNumber]) {

    let table = '<table border="1">\n';

    for (let row = 0; row <= lineNumber ; row++) {
        table += '\t<tr>';
        for (let col = 0; col <= lineNumber; col++) {
            if (row == 0) {
                if (col == 0) {
                    table += '<th>x</th>';
                } else {
                    table += `<th>${col}</th>`;
                }
            } else {
                if (col == 0) {
                    table += `<th>${row}</th>`;
                } else {
                    table += `<td>${row * col}</td>`;
                }
            }

        }

        table += `<tr>\n`
    }

    table += `</table>`;
    console.log(table)
}

multiplicationTable([5]);
