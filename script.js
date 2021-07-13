var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

var workHours = [];

var m = moment();

//console.log(m.hour());

$(".time-block").each(function() {
    
    var hr = $(this).attr("data-time");

    //console.log(hr);
    
        if(Number(hr) === m.hour()) {
            $(this).find(".textArea").addClass("present");
        } else if (Number(hr) < m.hour()) {
            $(this).find(".textArea").addClass("past");
        } else {
            $(this).find(".textArea").addClass("future");
        }
});
var userInput = {};
    if (localStorage.getItem("userInput")) {
        userInput = JSON.parse(localStorage.getItem("userInput"));
    } else {
        userInput = {
            "9": {time: "9", value: ""},
            "10": {time: "10", value: ""},
            "11": {time: "11", value: ""},
            "12": {time: "12", value: ""},
            "13": {time: "13", value: ""},
            "14": {time: "14", value: ""},
            "15": {time: "15", value: ""},
            "16": {time: "16", value: ""},
            "17": {time: "17", value: ""},
        };
    }



$(".time-block").each(function() {
    $(this).find(".textArea").val(userInput[$(this).attr("data-time")].value);
});

//console.log("hi");

$(".saveBtn").on('click', function(event) {
    var hourOD = $(this).closest(".time-block").attr("data-time");

    //console.log(hourOD);

    var textInput = $(this).closest(".time-block").find(".textArea").val();
    
    //console.log(textInput);

    userInput[hourOD].value = textInput;
    localStorage.setItem("userInput", JSON.stringify(userInput));
});


$("#clearBtn").on("click", function(){
    var newSave = {
        "9": {time: "9", value: ""},
        "10": {time: "10", value: ""},
        "11": {time: "11", value: ""},
        "12": {time: "12", value: ""},
        "13": {time: "13", value: ""},
        "14": {time: "14", value: ""},
        "15": {time: "15", value: ""},
        "16": {time: "16", value: ""},
        "17": {time: "17", value: ""},
    };
    localStorage.setItem("userInput", JSON.stringify(newSave));
    //console.log(JSON.parse(localStorage.getItem("userInput")));

    $(".time-block").each(function() {
        $(this).find(".textArea").val(newSave[$(this).attr("data-time")].value);
    });
});

