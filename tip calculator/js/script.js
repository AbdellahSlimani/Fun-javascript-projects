
function formatMoney(value){
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2)
    return "$" + value
}
function formatsplit(value){
    if( value === "1") return value + " person";
    return value + " people";
}
function update(){
    let bill = Number(document.querySelector('#yourBill').value);
    let tipPercent =document.querySelector('#tipInput').value;
    let split = document.querySelector('#splitInput').value;
    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;

    document.getElementById('tipPercent').innerHTML = tipPercent + "%";
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue) ;
    document.getElementById('totalWithTip').innerHTML = formatMoney(bill + tipValue);
    document.getElementById('splitValue').innerHTML = formatsplit(split);
    document.getElementById('billEach').innerHTML = formatMoney(newBillEach);
    document.getElementById('tipEach').innerHTML = formatMoney(tipEach);
}    
let container = document.querySelector('#container');
container.addEventListener('input', update);