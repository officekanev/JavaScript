function convertCradToDegreece([grads]) {

    let degrees = Number(grads) * 0.9;
    let result = degrees % 360;
    if(result < 0){
        console.log(360 + result);
    }else {
        console.log( result);
    }

}

convertCradToDegreece([100]);
convertCradToDegreece([400]);
convertCradToDegreece([850]);
convertCradToDegreece([-50]);
