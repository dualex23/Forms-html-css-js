window.addEventListener("load", function() {

	var sign = document.getElementById("sign"),
		login = document.getElementById("login"),
		signForm = document.forms.signIn.style.display;

	sign.addEventListener("click", function() {
		for (var i = 0; i < document.forms.length; i++) {
			document.forms[i].display = "none";
		}
		login.classList.remove("active");
		this.classList.add("active");
		document.forms.signIn.style.display = "none";
		document.forms.forgotPass.style.display = "none";
		document.forms.signUp.style.display = "block";
		document.getElementById("container-wrapper").style.backgroundImage = "url(images/geran-de-klerk-136351.png)";
		
	}, false);

	login.addEventListener("click", function() {
		for (var i = 0; i < document.forms.length; i++) {
			document.forms[i].display = "none";
		}
		sign.classList.remove("active");
		this.classList.add("active");
		document.forms.signUp.style.display = "none";
		document.forms.forgotPass.style.display = "none";
		document.forms.signIn.style.display = "block";
		document.getElementById("container-wrapper").style.backgroundImage = "url(images/pedro-lastra-157071.png)";
	}, false);

}, false);
