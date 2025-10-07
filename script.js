document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById("ex2_text");
    const outputElement = document.getElementById('ex2_content');

    if (inputElement && outputElement) {
        inputElement.addEventListener("input", validatePhoneNumber);
    }

    function validatePhoneNumber() {
        const phoneNumber = inputElement.value;

        if (phoneNumber.length === 0) {
            outputElement.textContent = "";
            return;
        }

        // warunek 1
        if (/[a-zA-Z]/.test(phoneNumber)) {
            outputElement.textContent = "Numer nie może zawierać liter";
            return;
        }

        //warunek 2
        if (/[^0-9]/.test(phoneNumber)) {
            outputElement.textContent = "Numer nie może zawierać znaków specjalnych";
            return;
        }

        //warunek 3
        if (phoneNumber.length !== 9) {
            outputElement.textContent = "Długość numeru musi być równa 9";
            return;
        }

        //warunek 4
        outputElement.textContent = "Numer telefonu jest poprawny";
    }
});
