
function displayForm(formId){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

function register(){
    const username = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-pass").value;

    if(!username){
        alert("username is empty!")
        return;
    }

    if(!email){
        alert("username is empty!")
        return;
    }

    if(!password){
        alert("username is empty!")
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.some(user => user.email == email );
    if(exist){
        alert("user already exist");
        displayForm("login-form");
        return;
    }

    users.push({username, email, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration success");

    displayForm("login-form");

    username = document.getElementById("register-name").value;
    email = document.getElementById("register-email").value;
    password = document.getElementById("register-pass").value;
}

function login(){
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-pass").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const fount = users.find(user => user.email == email && user.password == password);

    if(email == 'admin@quiz.com' && password =='admin123'){
        window.location.href = './pages/dashbord.html';
    }else if(fount){
        localStorage.setItem("loggedIn", email);
        window.location.href = './pages/home.html';
    }else{
        alert("Invalid credentials");
    }
}