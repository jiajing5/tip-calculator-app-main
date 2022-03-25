const pVbtns = document.querySelectorAll('.pv');
const tipamount = document.getElementById('tipamount');
const bill = document.getElementById('bill');
const people = document.getElementById('people');
const billwarning = document.getElementById('billwarning')
const custom = document.getElementById('custom');
const peoplewarning = document.getElementById('peoplewarning');
const total = document.getElementById('total');
const resetBtn = document.getElementById('resetBtn');

function calTipAmount( ) {
  tipamount.innerHTML = "$" + ((bill.value * this.value) / people.value).toFixed(2);
  billWarning();
}
function billWarning(){
  if(bill.value <= "0") {
    bill.style.borderColor = 'red';
    billwarning.style.display = 'block';
  } else {
    bill.style.borderColor = 'lightGreen';
    billwarning.style.display = 'none';
  }
}
for(let i=0 ; i<pVbtns.length ; i++){
    pVbtns[i].addEventListener('click', calTipAmount);
}

function customValue() {
  tipamount.innerHTML = "$" + ((bill.value * (custom.value / 100)) / people.value).toFixed(2);
  billWarning();
}
custom.addEventListener('click', customValue);

function totalHandler() {
  if(people.value <= "0") {
    people.style.borderColor = 'red';
    peoplewarning.style.display = 'block';
    total.innerHTML ='$0.00';
    tipamount.innerHTML ='$0.00';
  } else {
    people.style.borderColor = 'lightGreen';
    peoplewarning.style.display = 'none';
    total.innerHTML = "$" + ((bill.value/people.value)+Number(tipamount.innerHTML.slice(1))).toFixed(2);
  }
  billWarning();
}
document.addEventListener("change", totalHandler);

function resetHandler() {
    bill.value = 0;
    people.value = 1;
    total.innerHTML = '$0.00';
    tipamount.innerHTML = '$0.00';
    custom.value = '';
}
resetBtn.addEventListener("click", resetHandler);
