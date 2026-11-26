
let getResult = () => {
    let _mark = document.getElementById("mark").value;

    console.log(_mark);


    let result = "";

    if (_mark > 90) {
        result = "A+";
    }
    else if (_mark >= 70) {
        result = "A";
    }
    else if (_mark >= 50) {
        result = "B+";

    }
    else {
        result = "U";
    }

    console.log(result);
    window.alert(result);
}

