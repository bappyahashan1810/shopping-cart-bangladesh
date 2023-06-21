function updatePhoneNumber(IsIncrease) {
    const phoneField = document.getElementById('phn-field');
    const previousPhoneNumberString = phoneField.value;
    const previousPhoneNumber = parseInt(previousPhoneNumberString);
    let newPhoneNumber;
    if (IsIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(totalPhoneNumber) {
    const PhonePrice = document.getElementById('phn-price');
    const newPhonePrice = totalPhoneNumber * 1219;
    PhonePrice.innerText = newPhonePrice;

}

document.getElementById('btn-phn-plus').addEventListener('click', function () {

    const totalPhoneNumber = updatePhoneNumber(true);

    updatePhonePrice(totalPhoneNumber);
    updateCalculateSubTotal();


})
document.getElementById('btn-phn-minus').addEventListener('click', function () {

    const totalPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(totalPhoneNumber);
    updateCalculateSubTotal();


})

