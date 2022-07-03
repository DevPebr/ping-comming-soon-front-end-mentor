
function validateEmail(emailInput) {
    emailInput = document.querySelector('input[name="email"]').value;
    let warn = document.querySelector('.warn');
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let email = document.getElementById('email');
    warn.style.display='none';


    if(reg.test(emailInput) && warn.style.display=='block') {
        warn.style.display='none';
        return true;
    }

    else if(reg.test(emailInput) && warn.style.display=='none') {}
    
    else {
        warn.style.display='block';
        // return false;
    }
}
