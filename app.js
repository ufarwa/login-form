let x= document.getElementById('login')
        let y= document.getElementById('register')
        let z= document.getElementById('btn')

        function register(){
            x.style.left = "-400px"
            y.style.left="50px"
            z.style.left="110px"
        }

        function login(){
            x.style.left = "50px"
            y.style.left="450px"
            z.style.left="0px"
        }

        let userId= document.getElementById('User-Id')
        let pasword= document.getElementById('Password')
        function submit(){
        console.log(userId.value)
        console.log(pasword.value)
        userId.value =""
        pasword.value =""

        }


        function togglePasswordVisibility() {
            const passwordField = document.getElementById("Password");
            const toggleIcon = document.querySelector(".toggle-password i");
        
            if (passwordField.type === "password") {
                passwordField.type = "text";
                toggleIcon.classList.remove("fa-eye");
                toggleIcon.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                toggleIcon.classList.remove("fa-eye-slash");
                toggleIcon.classList.add("fa-eye");
            }
        }
        


        document.querySelector("#Password").addEventListener("input", function () {
            const password = this.value;
        
            const hasUpperCase = /[A-Z]/.test(password);
            const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
            const hasNumber = /\d/.test(password);
        
            const passwordIsValid = hasUpperCase && hasSpecialCharacter && hasNumber;
        
            if (passwordIsValid) {
                // document.getElementById("passValidity").innerHTML = "Valid Password";
                this.setCustomValidity("");
                
                console.log("Successful");
            } else {
                this.setCustomValidity("Password must contain at least 1 capital letter, 1 special character, and 1 number.");
                // document.getElementById("passValidity").innerHTML = "Password must contain at least 1 capital letter, 1 special character, and 1 number.";
                console.log("Not successful");
            }
        });






      