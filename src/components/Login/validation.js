var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var PASSWORD_REGEX = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;

export default function validation(inputs) {
    const errors = {}

    if(!EMAIL_REGEX.test(inputs.username)){
        errors.username = 'Must use a valid email'
    } 
    else if (!inputs.username) errors.username = 'user must be an email'
    else if (inputs.username.length > 35) errors.username = 'username can not be larger than 35 characters'
    else if(!PASSWORD_REGEX.test(inputs.password)) {
        errors.password = 'La contraseña debe tener una longitud de entre 6 y 10 caracteres, y al menos un número, una mayúscula y una minúscula'
    } 

    return errors
}