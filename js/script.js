
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

// alert function
const sendData = (usernameValue, sRate, count) => {
    if(sRate === count){
        alert('registration successful')
        swal("Welcome!" + usernameValue,"Registration Successful", "success");
        // location.href = `demo.html?username=${usernameValue}`
    }
}
// final test 
const successMsg = (usernameValue) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length -1;

    for( var i = 0 ; i<formCon.length; i++){
       if(formCon[i].className === "form-control success") {
        var sRate = 0 + i;
        sendData(usernameValue, sRate, count);
       } else {
        return false;
       }
    }
}
// alert function end

function checkInputs() {
    //get the value from input
    const usernameValue =username.value.trim();
    const emailValue =email.value.trim();
    const phoneValue =phone.value.trim();
    const passwordValue =password.value.trim();
    const cpasswordValue =cpassword.value.trim();


    // main function for username
    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }

    // main function for email
    if(emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
        // add success class
        setSuccessFor(email);
    }

    // validate your phone
    if(phoneValue === "") {
        setErrorFor(phone, 'Phone Number cannot be blank');
    }
    else if (phoneValue.length != 11){
        setErrorFor(phone, 'Not a valid Phone Number');
    }
    else  {
        setSuccessFor(phone);
    }

     // main function for password
     if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
     // main function for cpassword
     if(cpasswordValue === '') {
		setErrorFor(cpassword, 'Password2 cannot be blank');
	} else if(passwordValue !== cpasswordValue) {
		setErrorFor(cpassword, 'Passwords does not match');
	} else{
		setSuccessFor(cpassword);
	}
        successMsg(usernameValue)
}

// main function 2 

function setErrorFor(input, massage) {
    const formControl = input.parentElement; // .form-control
    const small  = formControl.querySelector('small');

    // add error massage inside small tag
    small.innerText = massage;

    // add error class
    formControl.className = 'form-control error';

}

// main function 3 

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control

     // add success class
     formControl.className = 'form-control success';
}


// extra email function

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

