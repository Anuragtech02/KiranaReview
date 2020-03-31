const uname=document.getElementById('username');
const pass=document.getElementById('pass');
const pass_error=document.getElementById('pass_error');
const uname_error=document.getElementById('username_error');
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
function validate(){
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
}