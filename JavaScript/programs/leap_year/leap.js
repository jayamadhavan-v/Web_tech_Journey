let getresult = () => {

    let year = Number(document.getElementById("year").value);
    console.log(year);

    let _result = "";
    console.log(_result);


    if (year % 100 == 0) {
        _result = year % 400 == 0 ? "leap year" : "not a leap year";
    }
    else {
        _result = year % 4 == 0 ? "leap year" : "not a leap year";
    }
    console.log(_result);
    
    window.alert(_result);
    
}

console.log("sdfghjk");
