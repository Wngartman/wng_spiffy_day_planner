// I want to have a daily date on the page
$("#currentDay").text(moment().format("MMM Do YY"));

// I want the colors to change with the time
var currentTime = moment().format('H');

var rowEl =  document.getElementsByClassName('row')

console.log(rowEl)

var rowHour = $('.').children()

console.log(rowHour)
function setRowColor(element, color) {
    element.style.backgroundColor = color;
  }

if(rowHour == currentTime){
    console.log(currentTime)
    setRowColor(rowEl, "#ff6961");
} else if ((rowHour > rowHour)){
    setRowColor(rowEl, "#d3d3d3")
} else {
    setRowColor(rowEl, "#77dd77")
}
    



// I want to save to local storage

// Add an alert msg "I just saved to local storage"
