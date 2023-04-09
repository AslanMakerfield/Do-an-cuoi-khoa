modalElm.style.display = 'block'

const emailElm = getElementById('email');
const passwordElm = getElementById('passw');
const btnSubmitLoginElm = getElementById('btnLogSubmit');
const errorLoginMessElm = 

btnSubmitLoginElm.addEventListener('click', function() {
    const email = emailElm.value;
    const password = emailElm.value;

    
    const flag = handleLogin(email, password);
});