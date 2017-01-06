function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea></textarea>');
    let buttonIncrement = $('<button>increment</button>');
    let buttonAdd = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disable', true);
    buttonIncrement.addClass('btn');
    buttonIncrement.attr('id', 'incrementBtn');
    buttonIncrement.text('Increment');
    buttonAdd.addClass('btn');
    buttonAdd.attr('id', 'addBtn');
    buttonAdd.val('Add');
    list.addClass('results');

    textArea.appendTo(fragment);
    buttonIncrement.appendTo(fragment);
    buttonAdd.appendTo(fragment);
    list.appendTo(fragment);

    buttonIncrement.on('click', function (event) {
        let value = parseInt(textArea.val());
        textArea.val(++value);
    });

    buttonAdd.on('click', function (event) {
        let newLi = $('<li>');
       let value = parseInt(textArea.val());
        newLi.text(value);
        list.append(newLi);
    });


    container.append(fragment);
}

























































