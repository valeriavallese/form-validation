


/*------------FORM---------------*/

const form = document.getElementById('form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const city = document.getElementById('city');
const address = document.getElementById('address');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nameValue = name.value.trim();
    const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	
	
	if(nameValue === '') {
		setErrorFor(name, 'name is required');
	} else {
		setSuccessFor(name);
	}
    if(lastnameValue === '') {
		setErrorFor(lastname, 'last name is required');
	} else {
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email is required');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Phone is required');
	} else {
		setSuccessFor(phone);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password is required');
	} else {
		setSuccessFor(password);
	}
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/*per inserire solo numeri*/
 phone.setAttribute("type","number"); 

 
/*per inserire 8 caratteri contenenti un numero, un carattere speciale, una lettera min e maiusc*/
function checkpw() {
	var password = document.getElementById("password").value;
	var errorMessage = document.getElementById("error");
	var errorDetail = "";
	try {
	  if (password.length < 8) {
		errorDetail += "<br /> Password too short.";
	  }
	  if (/[A-Z]/g.test(password) == false) {
		errorDetail +=
		  "<br /> Password should include at least one capital letter.";
	  }
	  if (/\d/g.test(password) == false) {
		errorDetail += "<br /> Password should include at least one digit.";
	  }
	  
	  throw errorDetail;
	} catch (err) {
	  errorMessage.innerHTML = err;
	}
  }
  

/*alert*/

$(document).ready(function() {
	$(".submit").click(function() {
		$(".submit")
		  .transition({
			animation: "fly left",
			interval: 4000,
			duration: 2000
		  });
	  });
	});