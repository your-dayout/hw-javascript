function CheckPasswordStrength(password) {
    if (password.length < 8) {
        return "Weak";
    }
    if (!/\d/.test(password)) {
            return "Weak"; 
    }
    if (!/[a-zA-Z]/.test(password)) {
                return "Weak";
    }
    return "Strong";
}
console.log(CheckPasswordStrength("password"));
console.log(CheckPasswordStrength("Password"));
console.log(CheckPasswordStrength("Password123"));
console.log(CheckPasswordStrength("Password123!"));

