//const container = document.querySelector('.container');
//const loginLink = document.querySelector('.login-link');
///const registerLink = document.querySelector('.register-link');

//registerLink.addEventListener('click', ()=> {
 //   mainBody.classList.add('active');
//});

//loginLink.addEventListener('click', ()=> {
 //   mainBody.classList.remove('active');
//});

const link = document.querySelector('.link');
const create = document.querySelector('.create');
const container = document.querySelector('.container');

link.addEventListener('click', ()=> {
    container.classList.add('active');
});

create.addEventListener('click', ()=> {
    container.classList.remove('active');
});





 

//create.onclick = function() {
  //  container.classList.remove('signupForm');

//}

//= function() {
  //  container.classList.add(signupForm);
//}