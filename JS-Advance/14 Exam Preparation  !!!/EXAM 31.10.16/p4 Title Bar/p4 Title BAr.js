class TitleBar { // by condition of the task we need to return class
    constructor(title) { // of condition he said we recive in to c-tor paramether one variable who is represen navigation
        this.title = title;// save him in to local variable
        this.menu = []; // create arr in who we save every  menues who we reciev, we keep him in to kind - jquery elements
        this.menuHTML = {};// create empty object, who is keep all menue with every elements
    }

    addLink(href, name) {// recivr href- hiperlink & name
        this.menu.push($(`<a class="menu-link" href="${href}">${name}</a>`));// create element using jquery, and push him in to
    }                                               // local variable 'menu'

    appendTo(selector) { // function appendTo recive selector 
        $(selector).append(this.generate());//in to this selector with jquery append zakachame in to rezult of the function  generate()                                       01
    }

    generate() {  // create variable html , with jquery create all menu, of given position replace with recuired elements                                                                                  00
        let html = $(`<header class="header">
  <div class="header-row">
    <a class="button">&#9776;</a>
    <span class="title">${this.title}</span>
  </div>
  <div class="drawer">
    <nav class="menu">
    </nav>
  </div>
</header>`);
        this.menuHTML = html.find('.menu'); // find only element with class menu
        for(let item of this.menu){ // iterate array with colected menu
            this.menuHTML.append(item); // add every menu in to object document .menuHTML = {};
        }

        let button = html.find('.button');// in to new filed document find & catch elements with class-button

        button.click(this.toggle.bind(this));// in to him we hang - закачам click-event who is invoke function  toggle()

        return html;  // return finaly  filed document
    }

    toggle() {
        //let menu = $('header').find('.menu');// in to <header class="header" find  navigation <nav class="menu">

        let menu = this.menuHTML.parent();   // catch menu of the menuHTML document & change display of this same element

        if(menu.css('display') == 'none'){// check if the display of nav is none , we make him 'block'
            menu.css('display','block');
        }else{
            menu.css('display','none');//and back-обратно if is 'block' we make him 'none'
        }
    }
}
