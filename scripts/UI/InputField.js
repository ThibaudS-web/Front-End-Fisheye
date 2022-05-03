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

export default InputField