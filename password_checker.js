function CheckPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak";
    }
    if (!/\d/.test(password)) {
            return "Weak"; 
    }
    if (!/[a-z]/.test(password)) {
                return "Weak";
    }
                if (!/[A-Z]/.test(password)) {
                    return "Weak";
    }
    return "Strong";
}
console.log(CheckPasswordStrength(password: hdjdiwej));

