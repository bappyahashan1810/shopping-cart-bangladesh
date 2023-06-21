function getElementValueById(ElementId) {
    const productPrice = document.getElementById(ElementId);
    const previousProductPriceString = productPrice.innerText;
    const previousProductPrice = parseFloat(previousProductPriceString);
    return previousProductPrice;
}
function setTheValue(ElementId, value) {
    const setElement = document.getElementById(ElementId);
    setElement.innerText = value;
}


function updateCalculateSubTotal() {
    const totalPhonePrice = getElementValueById('phn-price');
    const totalCasePrice = getElementValueById('case-price');
    const subTotal = document.getElementById('sub-total');
    const newSubTotal = totalPhonePrice + totalCasePrice;
    subTotal.innerText = newSubTotal;
    const tax = (newSubTotal * .1).toFixed(2);
    setTheValue('tax-id', tax);
    const finalTotal = newSubTotal + tax;
    setTheValue('final-total', finalTotal)
}
