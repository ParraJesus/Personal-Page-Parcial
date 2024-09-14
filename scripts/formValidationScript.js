const form = document.getElementById("form");
const name = document.getElementById("nombre");
const email = document.getElementById("correo");
const tel = document.getElementById("tel");
const message = document.getElementById("mensaje");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) 
    {
        alert("El formulario se ha enviado correctamente.");
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (name.value.trim() === "") 
    {
        setErrorFor(name, "El nombre es obligatorio");
        isValid = false;
    } 
    else 
    {
        setSuccessFor(name);
    }
    if (email.value.trim() === "")
    {
        setErrorFor(email, "El correo electrónico es obligatorio");
        isValid = false;
    } 
    else if (!isEmail(email.value.trim())) 
    {
        setErrorFor(email, "El correo electrónico no es válido");
        isValid = false;
    } 
    else
    {
        setSuccessFor(email);
    }
    if (tel.value.trim() === "") {
        setErrorFor(tel, "El teléfono es obligatorio");
        isValid = false;
    } else if (!isColombianPhone(tel.value.trim())) {
        setErrorFor(tel, "El teléfono no es válido para Colombia");
        isValid = false;
    } else {
        setSuccessFor(tel);
    }
    if (message.value.trim() === "")
    {
        setErrorFor(message, "El mensaje es obligatorio");
        isValid = false;
    }
    else
    {
        setSuccessFor(message);
    }
    return isValid;
}

function setErrorFor(input, message) 
{
    
    alert(input.name + " " + message);
}

function setSuccessFor(input) 
{
    const formControl = input.parentNode;
}

function isEmail(email) 
{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function isColombianPhone(phone) {
    const regex = /^(3\d{9}|\d{7,10})$/;
    return regex.test(phone.trim());
}