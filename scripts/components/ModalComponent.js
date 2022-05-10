import SliderMediasFactory from "../factories/SliderMediasFactory.js"
import InputField from "../UI/InputField.js"

class ModalComponent {

    displayMediaSlider(modal, mediaList, selectedMediaId) {
        modal.style.display = 'block'
        
        const modalContent = modal.querySelector("#lightbox-img-container figure")
        const sliderItems = mediaList.map((media) => {
            return new SliderMediasFactory().getContent(media)
        })

        let selectedIndex = mediaList.findIndex(media => media.id === selectedMediaId)

        modalContent.innerHTML = sliderItems[selectedIndex]

        const rightArrow = modal.querySelector('#modal-right-btn')
        const leftArrow = modal.querySelector('#modal-left-btn')

        function moveLeft() {
            selectedIndex--

            if (selectedIndex < 0) {
                selectedIndex = mediaList.length - 1
            }

            modalContent.innerHTML = sliderItems[selectedIndex]
        }

        function moveRight() {
            selectedIndex++

            if (selectedIndex >= mediaList.length) {
                selectedIndex = 0
            }

            modalContent.innerHTML = sliderItems[selectedIndex]
        }

        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case "ArrowLeft":
                    moveLeft();
                    break;
                case "ArrowRight":
                    moveRight()
                    break;
            }
        })

        leftArrow.addEventListener('click', moveLeft)
        rightArrow.addEventListener('click', moveRight)

        const closeModalBtn = modal.querySelector('#lightbox-close')
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none'
        })
    }

    displayContact(modal, photographName) {
        modal.style.display = 'block'
        const form = modal.querySelector("form")
        const submitBtn = modal.querySelector("#submit-btn")

        //Display the name of photographer on the modal contact
        const name = modal.querySelector('#modal-photograph-name')
        name.innerHTML = photographName

        const closeModalContact = modal.querySelector('#contact_close')

        const firstNameField = new InputField(form.firstName, 'Veuillez saisir votre prénom', modal.querySelector('#error-firstName'), (input) => {
            return input.value.length > 0
        })

        const lastNameField = new InputField(form.lastName, 'Veuillez saisir votre nom', modal.querySelector('#error-lastName'), (input) => {
            return input.value.length > 0
        })

        const emailField = new InputField(form.email, 'Veuillez saisir une adresse mail valide', modal.querySelector('#error-email'), (input) => {
            let regexp = new RegExp(
                "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$")
            return regexp.test(input.value)
        })

        const messageField = new InputField(form.message, 'Veuillez saisir votre message', modal.querySelector('#error-message'), (input) => {
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

                modal.style.display = 'none'

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

        closeModalContact.addEventListener('click', () => {
            modal.style.display = 'none'
        })
    }
}

export default ModalComponent