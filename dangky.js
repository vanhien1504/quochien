function getValue(id){
    return document.getElementById(id).value.trim();
}

function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate(id){
var flag =true;
// 1 username
var username = getValue('username');
if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
    flag = false;
    showError('username', 'Vui lòng kiểm tra lại Username');
}

// 2. password
var password = getValue('password');
var repassword = getValue('repassword');
if (password == '' || password.length < 8 || password != repassword){
    flag = false;
    showError('password', 'Vui lòng kiểm tra lại Password');
}

// 3. Phone
var phone = getValue('phone');
if (phone != '' &&  !/^[0-9]{10}$/.test(phone)){
    flag = false;
    showError('phone', 'Vui lòng kiểm tra lại Phone');
}

// 4. Email
var email = getValue('email');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (!mailformat.test(email)){
    flag = false;

    showError('phone', 'Vui lòng kiểm tra lại Email');
}

return flag;
}