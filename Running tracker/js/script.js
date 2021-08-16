let entries = [];
function weeklyGoal() {
    goal = Number(document.getElementById('weeklyEntry').value);
    document.querySelector('#target').innerText = goal;
    return goal;
}
const entriesWrapper = document.querySelector("#entries");
function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    const listItem = document.createElement("li");
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);
    entriesWrapper.appendChild(listItem);
}
function reducer(total, currentValue) {
    return total + currentValue ;
}
function calcTotal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue
}
function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}
function weeklyHigh(){
    const high = Math.max(...entries)
    document.getElementById('high').innerText = high.toFixed(1);
}
function calcGoal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    if(completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(rgb(4, 210, 247) ${completedPercent}% 10%, #2d3740 ${completedPercent}% 10%)`;
}

function handleSubmit(event){
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value)
    if (!entry) return;
    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyHigh();
    calcGoal();
}
const form = document
.querySelector('form')
.addEventListener("submit", handleSubmit);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }