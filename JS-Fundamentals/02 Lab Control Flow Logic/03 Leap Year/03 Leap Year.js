function checkForLeapYear(year) {
   if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log('yes')
   }else {
       console.log('no')
   }
}

checkForLeapYear('1999');
checkForLeapYear('2000');
checkForLeapYear('1900');
checkForLeapYear('2016');