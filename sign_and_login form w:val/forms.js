window.addEventListener("load", function() {

	/* SIGN form */
	function sf(elem) {return document.forms["sign"].elements[elem];}
	/* LOGIN form*/
	function lf(elem) {return document.forms["login"].elements[elem];}
	/* fin elem by ID - $*/
	function $(elem) {return document.getElementById(elem);}
	/* Sign or login (tabs) */
	$("myForm").addEventListener("click", function(e) {
		var loginBtn = signBtn.nextElementSibling;
		if (e.target == signBtn) {
			loginBtn.classList.remove("active");
			e.target.classList.add("active");
			sendButton[0].innerText = "Get Started";
			isSign = true;
		} else if (e.target == loginBtn) {
			signBtn.classList.remove("active");
			e.target.classList.add("active");
			sendButton[1].innerText = "Login";
			isSign = false;
		}
	}, false);
	// Validation Functions
  function validateNames() {
  	var pattern = /[a-zA-Z]+/;
  	if (!pattern.test(sf("firstName").value) || !pattern.test(sf("lastName").value)) {
  		sf("firstName").classList.add("isError");
  		sf("lastName").classList.add("isError");
  		alert("Имена введены неправильно");
  		return false;
  	} else  {
  		return true;
  	}
  }
	function validateEmail() {
		var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
		if (!pattern.test(sf("email").value)) {
			alert("Неправильно указан email. Введите по образцу: ivanov.ivan@example.com");
			sf("email").classList.add("isError");
			return false;
		} else  {return true; }
	}
	function validatePass() {
		if (sf("password").value != "" && sf("confirmed_password").value != "" && sf("password").value == sf("confirmed_password").value) {
			return true;
		} else {
			alert("Пароли не совпадают");
			sf("password").classList.add("isError");
			sf("confirmed_password").classList.add("isError");
			return false;
		}
	}
	// submit
	function send() {
		// когда выбрана регистрация
		if (isSign) {
			if (validateNames() && validateEmail() &&  validatePass()) {
				alert("Письмо для подтверждения отправлено на почту");
				store();
			}
		} else {
			var returnObj = JSON.parse(window.localStorage.getItem("auth"));
			console.log(returnObj.login);
			if (returnObj.login != lf("login").value && 
					returnObj.pass != lf("pass").value) {
				alert("Неправильные логин или пароль");
				return false;
			} else {
				alert("Welcome");
			}
		}
	};
	// Запись в localstorage
	function store() {
		var auth = {};
		auth.login = sf("email").value;
		auth.pass = sf("confirmed_password").value;
		window.localStorage.setItem("auth", JSON.stringify(auth));
	}

	/* -----------------------------------------------------------------*/

	var signBtn = $("sign"),
			sendButton = document.querySelectorAll(".start"),
			isSign = true;
	// Вызов события по клику на submit
	for (var i = 0; i < sendButton.length; i++) {
		sendButton[i].addEventListener("click", send, false);
	}

}, false); /* end of window onload*/
