function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
const form = document.querySelector("form")
const submitBtn = document.querySelector("#submit-btn")

class InputField {
    constructor(input, errorMessage, errorContainer, validationFunction) {
        this.input = input
        this.errorMessage = errorMessage
        this.errorContainer = errorContainer
        this.validationFunction = validationFunction
    }

    validate() {
        let valid = this.validationFunction(this.input)
        if (valid) {
            this.errorContainer.textContent = ""
            this.input.classList.remove('input-error')
        } else {
            this.errorContainer.textContent = this.errorMessage
            this.input.classList.add('input-error')
        }
        return valid
    }
}

const firstNameField = new InputField(form.firstName, 'Veuillez saisir votre prénom', document.querySelector('#error-firstName'), (input) => {
    return input.value.length > 0
})

const lastNameField = new InputField(form.lastName, 'Veuillez saisir votre nom', document.querySelector('#error-lastName'), (input) => {
    return input.value.length > 0
})

const emailField = new InputField(form.email, 'Veuillez saisir une adresse mail valide', document.querySelector('#error-email'), (input) => {
    let regexp = new RegExp(
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$")
    return regexp.test(input.value)
})

const messageField = new InputField(form.message, 'Veuillez saisir votre message', document.querySelector('#error-message'), (input) => {
    return input.value.length > 0
})

const FIELDS = [firstNameField, lastNameField, emailField, messageField]

const formValidation = (event) => {
    event.preventDefault()

    let formValue = {
        firstname: firstNameField.input.value,
        lastname: lastNameField.input.value,
        email: emailField.input.value,
        message: messageField.input.value
    }

    let validForm = true
    //Iteration to verify that each field is valid
    FIELDS.forEach((field) => {
        validForm = field.validate() && validForm
    })

    if (validForm) {

        console.log("Successful validation!", formValue)

        FIELDS.forEach((field) => {
            field.input.value = ''
        })

        closeModal()

    } else {

        throw 'Validation Failed! '

    }
}

form.firstName.addEventListener('change', function () {
    firstNameField.validate()
})

form.lastName.addEventListener('change', function () {
    lastNameField.validate()
})

form.email.addEventListener('change', function () {
    emailField.validate()
})

form.message.addEventListener('change', function () {
    messageField.validate()
})

submitBtn.addEventListener('click', formValidation)
