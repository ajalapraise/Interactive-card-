const cardHolderName = document.querySelector("#cardholder-name")
const cardHolderNumber = document.querySelector("#cardholder-number")
const year = document.querySelector("#year")
const month = document.querySelector("#month")
const cvc = document.querySelector("#cvc")
const formCont = document.querySelector('.card-details')

const nameDisplay = document.querySelector('.nameDisplay')
const numberDisplay = document.querySelector('.numberDisplay')
const monthDisplay = document.querySelector('.monthDisplay')
const yearDisplay = document.querySelector('.yearDisplay')
const cvcDisplay = document.querySelector('.cvcDisplay')

const submitButton = document.querySelector(".submit-btn")
const continueButton = document.querySelector('.continue');


function addName() {
    if (cardHolderName.value.match(/^[A-Za-z\s]+$/)) {
        nameDisplay.innerHTML = cardHolderName.value;
        return true
    } else {
        nameDisplay.innerHTML = '--------'
        cardHolderName.style.borderColor = "red"
        return false

    }
}

function addNumber() {
    if (cardHolderNumber.value.match(/^\d+/) && cardHolderNumber.value.length === 16) {
        numberDisplay.innerHTML = cardHolderNumber.value.match(/.{1,4}/g).join(' ');
        document.querySelector('.numberError').style.display = 'none'
        return true
    } else {
        numberDisplay.innerHTML = '0000 0000 0000 0000'
        cardHolderNumber.style.borderColor = "red"
        document.querySelector('.numberError').style.display = 'flex'
        return false

    }
}

function addMonth() {
    if (month.value.match(/^\d+/) && month.value.length === 2) {
        monthDisplay.innerHTML = month.value;
        document.querySelector('.monthYearError').style.display = 'none'
        return true
    } else {
        monthDisplay.innerHTML = '00'
        month.style.borderColor = "red"
        document.querySelector('.monthYearError').style.display = 'flex'
        return false

    }
}

function addYear() {
    if (year.value.match(/^\d+/) && year.value.length === 2) {
        yearDisplay.innerHTML = year.value;
        document.querySelector('.monthYearError').style.display = 'none'
        return true
    } else {
        yearDisplay.innerHTML = '00'
        year.style.borderColor = "red"
        document.querySelector('.monthYearError').style.display = 'flex'
        return false

    }
}

function addCvc() {
    if (cvc.value.match(/^\d+/) && cvc.value.length === 3) {
        cvcDisplay.innerHTML = cvc.value;
        document.querySelector('.cvcError').style.display = 'none'
        return true
    } else {
        cvcDisplay.innerHTML = '000'
        cvc.style.borderColor = "red"
        document.querySelector('.cvcError').style.display = 'flex'
        return false

    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (addName() === true &&
        addNumber() === true &&
        addMonth() === true &&
        addYear() === true &&
        addCvc() === true) {
        addName()
        addNumber()
        addMonth()
        addYear()
        addCvc()

        formCont.style.display = 'none'
        document.querySelector('.center').style.display = 'flex'

    } else {
        addName()
        addNumber()
        addMonth()
        addYear()
        addCvc()
    }

})

continueButton.addEventListener('click', (e) => {
    e.preventDefault()
    formCont.style.display = 'flex'
    document.querySelector('.center').style.display = 'none'

    cardHolderName.value = ''
    cardHolderNumber.value = ''
    month.value = ''
    year.value = ''
    cvc.value = ''

    nameDisplay.innerHTML = 'Jane Appleseed'
    numberDisplay.innerHTML = '0000 0000 0000 0000'
    monthDisplay.innerHTML = '00'
    yearDisplay.innerHTML = '00'
    cvcDisplay.innerHTML = '000'

    document.querySelector('.numberError').style.display = 'none'
    document.querySelector('.monthYearError').style.display = 'none'
    document.querySelector('.cvcError').style.display = 'none'

    cardHolderName.style.borderColor = "#600594"
    cardHolderNumber.style.borderColor = "#600594"
    month.style.borderColor = "#600594"
    year.style.borderColor = "#600594"
    cvc.style.borderColor = "#600594"



})

