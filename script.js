function convert(){
    var number = parseFloat( document.getElementById('number').value );
    var numA = parseInt(number);
    var tempA = document.getElementById('selectTemp1').value;
    var tempB = document.getElementById('selectTemp2').value;

    if( isNaN(number) ){
        number = parseFloat( 0 );
    }

    switch(tempA){
        case "ºC":
            numA = number + 273.15;
            break;

        case "ºF":
            numA = (number - 32) * (5/9) + (273.15);
            break;

        case "R":
            numA = number * (5/9);
            break;

        default:
            numA = number;
            break;
    }

    switch(tempB){
        case "ºC":
            numA = numA - 273.15;
            break;

        case "ºF":
            numA = (numA - 273.15) * (9/5) + 32;
            break;

        case "R":
            numA = numA * (9/5);
            break;
    }

    numA = numA.toFixed(4);

    document.getElementById('c1r1').innerHTML = number + " " + tempA;
    document.getElementById('c3r1').innerHTML = numA + " " + tempB;

    if( (tempB == "ºC" && numA < -273.15) || (tempB == "ºF" && numA < -459.67) || ( (tempB == "K" || tempB == "R") && numA < 0)){
        document.getElementById('alrt').innerHTML = "Temperature cannot be reached in real life.";
        document.getElementById('alrt').style.color = "#f44336";
    }else{
        document.getElementById('alrt').innerHTML = "";
    }
}