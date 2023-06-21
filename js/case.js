
function updateCaseNumber(IsIncrease) {
    const caseField = document.getElementById('case-field');
    const previousCaseNumberString = caseField.value;
    const previousCaseNumber = parseInt(previousCaseNumberString);
    let newCaseNumber;
    if (IsIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(CaseNumber) {
    const casePrice = document.getElementById('case-price');
    const newCasePrice = CaseNumber * 59;
    casePrice.innerText = newCasePrice;

}




document.getElementById('btn-case-plus').addEventListener('click', function () {
    const totalCaseNumber = updateCaseNumber(true);
    updateCasePrice(totalCaseNumber);
    updateCalculateSubTotal();



})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const totalCaseNumber = updateCaseNumber(false);
    updateCasePrice(totalCaseNumber);
    updateCalculateSubTotal();



})