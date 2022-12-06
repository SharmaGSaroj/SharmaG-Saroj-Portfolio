import { SendMail } from "./components/mailer.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



(() => {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Hello Vue!'
            }
        },

        methods: {
            processMailFailure(result) {
                // show a failure message in the UI
                // use this.$refs to connect to the elements on the page and mark any empty fields/inputs with an error class
                // show some errors in the UI here to let the user know the mail attempt was successful
                result = JSON.parse(result.message);
                this.$refs["info-error-box"].innerHTML = result.message;
                this.$refs["info-error-box"].style.display = 'block';
                this.$refs["info-success-box"].style.display = 'none';
                if (result.fields) {
                    result.fields.forEach(element => {
                        this.$refs[element].classList.add("error");
                    });
                }

            },

            processMailSuccess(result) {
                // show a success message in the UI
                this.$refs["info-success-box"].innerHTML = result.message;
                this.$refs["info-success-box"].style.display = 'block';
                this.$refs["info-error-box"].style.display = 'none';
                // show some UI here to let the user know the mail attempt was successful
                this.$refs["btn-submit-contact"].disabled = true;

            },

            resetFields() {
                this.$refs.firstname.classList.remove("error");
                this.$refs.lastname.classList.remove("error");
                this.$refs.email.classList.remove("error");

                this.$refs.message.classList.remove("error");
            },

            processMail(event) {
                this.resetFields();
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
            }
        }
    }).mount('#mail-form')
})();