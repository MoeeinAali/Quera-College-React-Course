function createPasswordChecker() {
    let invalidAttemptCount = 0; 
    const validPasswords = [
        "QueraCollegeFront",
        "CollegeFront",
        "QueraCollege"
    ];
    const blockedPassword = "QueraCollegeGolang";

    return function checkPassword(password) {
        if (invalidAttemptCount >= 3) {
            return "Your account has been blocked!";
        }
        
        if (password === null || password === "") {
            return "Password cannot be empty";
        }

        if (password === blockedPassword) {
            return "Your account has been blocked!";
        }

        if (validPasswords.includes(password)) {
            invalidAttemptCount = 0;
            return "Welcome";
        }

        invalidAttemptCount++; 
        return `Your password => "${password}" is wrong!`;
    };
}

module.exports = createPasswordChecker();
