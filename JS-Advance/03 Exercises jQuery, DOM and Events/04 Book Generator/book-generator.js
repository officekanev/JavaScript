(function bookGenerator() {
    let i = 1;
    return function createBook(selector, titleToAdd, authorToAdd, isbnToAdd){
        let container = $(selector);
        let fragment = document.createDocumentFragment();

        let book = $('<div></div>');
        book.attr('id', 'book' + i);
        book.css('border', '2px solid blue');

        let title = $('<p></p>');
        title.addClass('title');
        title.text(titleToAdd);

        let author = $('<p></p>');
        author.addClass('author');
        author.text(authorToAdd);

        let isbn = $('<p></p>');
        isbn.addClass('isbn');
        isbn.text(isbnToAdd);

        let selectButton = $('<button>Select</button>');
        selectButton.on(function () {
            book.css('border', '2px solid blue');
        });

        let deselectButton = $('<button>Deselect</button>');
        deselectButton.on(function () {
            book.css('border', 'none');
        });

        title.appendTo(book);
        author.appendTo(book);
        isbn.appendTo(book);
        selectButton.appendTo(book);
        deselectButton.appendTo(book);

        book.appendTo(fragment);
        container.append(fragment);

        i++;
    }
}())





// (function bookGenerator() {
//     let i = 1;
//     return function createBook(selector, titleToAdd, authorToAdd, isbnToAdd){
//         let container = $(selector);
//         let fragment = document.createDocumentFragment();
//
//         let book = $('<div></div>');
//         book.attr('id', 'book' + i);
//         book.css('border', '2px solid blue');
//
//         let title = $('<p></p>');
//         title.addClass('title');
//         title.text(titleToAdd);
//
//         let author = $('<p></p>');
//         author.addClass('author');
//         author.text(authorToAdd);
//
//         let isbn = $('<p></p>');
//         isbn.addClass('isbn');
//         isbn.text(isbnToAdd);
//
//         let selectButton = $('<button>Select</button>');
//         selectButton.on(function () {
//             book.css('border', '2px solid blue');
//         });
//
//         let deselectButton = $('<button>Deselect</button>');
//         deselectButton.on(function () {
//             book.css('border', 'none');
//         });
//
//         title.appendTo(book);
//         author.appendTo(book);
//         isbn.appendTo(book);
//         selectButton.appendTo(book);
//         deselectButton.appendTo(book);
//
//         book.appendTo(fragment);
//         container.append(fragment);
//
//         i++;
//     }
// }())


















(function bookGenerator() {                       // zero point
    let id = 1;

      return function createBook(selector, bookName, bookAuthor, isbn) {

        let container = $('selector');
        let fragment = document.createDocumentFragment();

        let newDiv = $('<div></div>');
            newDiv.attr('id', 'book' + id);
            newDiv.css('border', '2px solid blue');

        let titleP = $('<p></p>');
          titleP.addClass('title');
          titleP.text(bookName);

        let autorP = $('<p></p>');
          autorP.addClass('author');
          autorP.text(bookAuthor);

        let isbnP = $('<p></p>');
          isbnP.addClass('isbn');
          isbnP.text(isbn);

        let btnSelect = $('<button>Select</button>');
          btnSelect.on(function () {
              book.css('border', '2px solid blue');
          });

        let btnDelect = $('<button>Delect</button>');
           btnDelect.on(function () {
               book.css('border', 'none');
           });

        titleP.appendTo(newDiv);
        autorP.appendTo(newDiv);
        isbnP.appendTo(newDiv);
        btnSelect.appendTo(newDiv);
        btnDelect.appendTo(newDiv);

        newDiv.appendTo(fragment);
        container.append(fragment);

          id++;
    }

}())

//createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);