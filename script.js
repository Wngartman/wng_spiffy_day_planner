// I want to have a daily date on the page
$("#currentDay").text(moment().format("MMM Do YY"));

// I want the colors to change with the time
var currentTime = moment().format('H');


var checkTime = function () {

    $('.hour').each(function () {
        var time = parseInt($(this).attr('id'))
        if (currentTime < time) {
            $(this).addClass("past");
        } else if (currentTime > time) {
            $(this).removeClass("past")
            $(this).addClass("future");
        } else {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present");
        }
    })

}

function renderTextArea() {
    let timeRows = $('.row');
    timeRows.each(function (i) {
        let rowText = $(this).children('textarea');
        let storedText = JSON.parse(localStorage.getItem('row ' + i))
        rowText.val(storedText);
    })}

$('.saveButton').on('click', function () {
    let textArea = $(this).siblings('textarea').val();
    let rowId = $(this).parent().attr('id');
    let textValue = textArea;
    console.log("Epic")
    console.log(textArea)
    console.log(rowId)
    localStorage.setItem('row' + rowId, JSON.stringify(textValue));
    renderTextArea();

})

checkTime();
// I want to save to local storage

// Add an alert msg "I just saved to local storage"
