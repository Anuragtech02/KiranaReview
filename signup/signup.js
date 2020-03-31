const name=document.getElementById('name');
const uname=document.getElementById('username');
const pass=document.getElementById('pass');
const email=document.getElementById('email');
const name_error=document.getElementById('name_error');
const pass_error=document.getElementById('pass_error');
const uname_error=document.getElementById('username_error');
const email_error=document.getElementById('email_error');
function name_validation(){
    const name_reg=/\d/;
    if(name.value.length > 0){
        if(name_reg.test(name.value)){
            name_error.textContent="Name cannot have any digits";
            return false;
        }
        else if(!name_reg.test(name.value)){
            name_error.textContent="";
            return true;
        }
    }
}
function username_validation(size){
    if(uname.value.length > 0){
        if(uname.value.length <=size){
            uname_error.textContent="Username should contain atleast 4 characters";
            return false;
        }
        else if(uname.value.length >size){
            uname_error.textContent="";
            return true;
        }
    }
}
function pass_validation(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if (false == enoughRegex.test(pass.value)) {
        pass_error.innerHTML = 'More Characters';
        } else if (strongRegex.test(pass.value)) {
        pass_error.innerHTML = '<span style="color:green">Strong!</span>';
        } else if (mediumRegex.test(pass.value)) {
        pass_error.innerHTML = '<span style="color:yellow">Medium!</span>';
        } else { 
        pass_error.innerHTML = '<span style="color:red">Weak!</span>';
        }
}
function email_validation(){
    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.length > 0){
        if(!emailformat.test(email.value)){
            email_error.textContent="Email format not correct";
            return false;
        }
        else{
            email_error.textContent="";
            return true;
        }
    }
}
function validate(){
    if(name.value==""){
        name_error.textContent="Name is required";
        name.focus();
        return false;
    }
    if(uname.value==""){
        uname_error.textContent="Username is required";
        uname.focus();
        return false;
    }
    if(pass.value==""){
        pass_error.textContent="Password is required";
        pass.focus();
        return false;
    }
    if(email.value==""){
        email_error.textContent="Email is required";
        email.focus();
        return false;
    }
}
