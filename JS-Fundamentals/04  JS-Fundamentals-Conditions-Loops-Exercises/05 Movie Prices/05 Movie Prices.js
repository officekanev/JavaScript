function movieTicketPrice([moviename, day]) {

    moviename = moviename.toLowerCase();
    day = day.toLowerCase();

    switch (day) {
        case 'monday' :
            if(moviename == 'the godfather'){
                console.log('12');
            }else if(moviename == "schindler's list"){
                console.log('8.50');
            }else if(moviename == "casablanca"){
                console.log('8');
            }else if(moviename == "the wizard of oz"){
                console.log('10');
            }else {
                console.log('error');
            }
            break;
        case 'tuesday' :
            if(moviename == 'the godfather'){
                console.log('10');
            }else if(moviename == "schindler's list"){
                console.log('8.50');
            }else if(moviename == "casablanca"){
                console.log('8');
            }else if(moviename == "the wizard of oz"){
                console.log('10');
            }else {
                console.log('error');
            }
            break;
        case 'wednesday' :
            if(moviename == 'the godfather'){
                console.log('15');
            }else if(moviename == "schindler's list"){
                console.log('8.50');
            }else if(moviename == "casablanca"){
                console.log('8');
            }else if(moviename == "the wizard of oz"){
                console.log('10');
            }else {
                console.log('error');
            }
            break;
        case 'thursday' :
            if(moviename == 'the godfather'){
                console.log('12.50');
            }else if(moviename == "schindler's list"){
                console.log('8.50');
            }else if(moviename == "casablanca"){
                console.log('8');
            }else if(moviename == "the wizard of oz"){
                console.log('10');
            }else {
                console.log('error');
            }
            break;
        case 'friday' :
            if(moviename == 'the godfather'){
                console.log('15');
            }else if(moviename == "schindler's list"){
                console.log('8.50');
            }else if(moviename == "casablanca"){
                console.log('8');
            }else if(moviename == "the wizard of oz"){
                console.log('10');
            }else {
                console.log('error');
            }
            break;
        case 'saturday' :
            if(moviename == 'the godfather'){
                console.log('25');
            }else if(moviename == "schindler's list"){
                console.log('15');
            }else if(moviename == "casablanca"){
                console.log('10');
            }else if(moviename == "the wizard of oz"){
                console.log('15');
            }else {
                console.log('error');
            }
            break;
        case 'sunday' :
            if(moviename == 'the godfather'){
                console.log('30');
            }else if(moviename == "schindler's list"){
                console.log('15');
            }else if(moviename == "casablanca"){
                console.log('10');
            }else if(moviename == "the wizard of oz"){
                console.log('15');
            }else {
                console.log('error');
            }
            break;
        default: console.log('error');
                    break;
    }
}

movieTicketPrice(['The Godfather', 'Friday']);
movieTicketPrice(['casablanca', 'sunday']);
movieTicketPrice(["Schindler's LIST", 'monday']);
movieTicketPrice(['SoftUni', 'Nineday']);
