function attachEvents() {
    const appId = 'kid_rk0KOc2Wx';
    const apiBaseUrl = `https://baas.kinvey.com/appdata/${appId}/`;
    const userName = 'peter';
    const password = 'p';
    const authorizationHeader = {Authorization: 'Basic ' + btoa(`${userName}:${password}`)};

    bindEvents(); //  invoke functions who catch click events                                                           00

    function loadPosts() {//                                                                                            02
        $.get({          // send get  to take all posts
            url: apiBaseUrl + 'posts',
            headers: authorizationHeader
        })
            .then(fillDropDownMenu)
            .catch(renderError);
    }

    function fillDropDownMenu(posts) { //                                                                               03
        let menu = $('#posts');
        menu.empty();
        for (let post of posts) { // extract post title & _id  & put him in drop-down <select id="posts"></select>
            menu.append(createOptionItem(post.title, post._id));
        }
    }

    function loadPostDetails() { //                                                                                     04
        let postId = $('#posts').val(); // Take id  of selected <option> element of  <select id="posts"></select>
        let getPostDetails = $.get({ // make Post  'getPostDetails'
            url: apiBaseUrl + 'posts/' + postId,
            headers: authorizationHeader
        });

        let getComments = $.get({ // make Post  'getComments'
            url: apiBaseUrl + `comments/?query={"post_id":"${postId}"}`,// with /?query={"post_id":"${selectedPostId}"}`
            headers: authorizationHeader                        //  we take only concret comentar who ne serch with this Id
        });

        Promise.all([getPostDetails, getComments])// when & 2-wo Request is execute
            .then(function ([posts, comments]) { // we invoke & pass data in to function renderPost                    05
                renderPost(posts);
                renderComments(comments);
            })
            .catch(renderError);
    }

    function renderPost(postData) {//                                                                                  06
        $('#post-title').text(postData.title);
        $('#post-body').text(postData.body);
    }

    function renderComments(comments) { //                                                                             07
        let commentsList = $('#post-comments');
        commentsList.empty();
        for (let comment of comments) {
            commentsList.append(createListItem(comment.text));
        }
    }

    function renderError(error) {
        let errorContainer = $('<div>')
            .text(`Error: ${error.status} (${error.statusText})`)
            .hide();
        $('body')
            .prepend(errorContainer);

        errorContainer.slideDown(function () {
            setTimeout(function () {
                errorContainer.slideUp(function () {
                    errorContainer.remove();
                });
            }, 1000);
        });
    }

    function createOptionItem(text, value) {  // create option element
        return $('<option>')
            .attr('value', value)
            .text(text);
    }

    function createListItem(text) { // create list element
        return $('<li>')
            .text(text);
    }

    function bindEvents() { //                                                                                          01
        $('#btnLoadPosts').on('click', loadPosts); // loadPosts catch click events  of btn loadPosts
        $('#btnViewPost').on('click', loadPostDetails); // catch selected <option> element of drop down menu option
    }
}
