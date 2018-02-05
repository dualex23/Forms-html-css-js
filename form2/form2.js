let $ = (el) => document.getElementById(el); // Посик элементов по ID
let find = (el) => document.forms[0].elements[el]; // Поиск элементов в форме
let validated = false;
// Validation (empty)
let valid = (el) => {
	if (el.value == "") {
		el.classList.add("error")
		return false;
	} else {
		el.classList.add("no-error")
		validated = true;
	}
}
// Проверка правильного заполнения email
let valEm = () => {
		let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
		if (!pattern.test(find("email").value)) {
			alert("Неправильно указан email. Введите по образцу: ivanov.ivan@example.com");
			find("email").classList.add("error");
			return false;
		} else  {return true; }
	}
let valNam =  () => {
  	let pattern = /[a-zA-Z]+/;
  	if (!pattern.test(find("firstName").value) || !pattern.test(find("lastName").value)) {
  		find("firstName").classList.add("error");
  		find("lastName").classList.add("error");
  		alert("Имена введены неправильно");
  		return false;
  	} else  {
  		return true;
  	}
  }

$("btn").addEventListener("click", () => {
	// Проверка на аполненность всех полей
	for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
		let item = document.getElementsByTagName("input")[i].name;
		valid(find(item));
	};
	// Проверка на совпадение паролей
	let p = find("pass");
	let c_p = find("conf_pass");
	if (p.value != c_p.value) {
		c_p.value = "Пароли не совпадают";
		c_p.style.color = "red";
		p.style.backgroundColor = "#fff";
		c_p.style.backgroundColor = "#fff";
		p.style.border = "3px solid red";
		c_p.style.border = "3px solid red";
		return false;
	}
	// Правильно указаны имена и email
	if(!valEm() && !valNam() && !find("terms").checked) {
		alert("Заполните поля правильно!")		
	}
	// Все поля заполнены
	if (validated) {
		alert("Подтвердите пожалуйста регистрацию перейдя по ссылке в почте в письме " + find("email").value);
	}
}, false);

