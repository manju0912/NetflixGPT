
export const checkValidData = (name, email, password) => {
    const isNameValid = /^[A-Za-z ]{3,30}$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email);
    const isPasswordValid = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,15})$/.test(password);

    const errors = {};

    if (!isNameValid){
        errors.name = "Name is not valid!";
    } 
    if (!isEmailValid){
        errors.email = "Email is not valid!";
    }
    if (!isPasswordValid){
        errors.password = "Password is not valid!";
    }

    return errors;
    
}