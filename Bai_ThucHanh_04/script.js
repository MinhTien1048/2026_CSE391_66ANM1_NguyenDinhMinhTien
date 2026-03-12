const form = document.getElementById("registerForm");

function showError(fieldId,message){
document.getElementById(fieldId+"Error").textContent = message;
}

function clearError(fieldId){
document.getElementById(fieldId+"Error").textContent = "";
}


function validateFullname(){

const value = document.getElementById("fullname").value.trim();
const regex = /^[A-Za-zÀ-ỹ\s]{3,}$/;

if(value===""){
showError("fullname","Không được để trống");
return false;
}

if(!regex.test(value)){
showError("fullname","Ít nhất 3 ký tự, chỉ chữ và khoảng trắng");
return false;
}

clearError("fullname");
return true;

}


function validateEmail(){

const value=document.getElementById("email").value.trim();
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(value===""){
showError("email","Email không được trống");
return false;
}

if(!regex.test(value)){
showError("email","Email không đúng định dạng");
return false;
}

clearError("email");
return true;

}


function validatePhone(){

const value=document.getElementById("phone").value.trim();
const regex=/^0\d{9}$/;

if(value===""){
showError("phone","SĐT không được trống");
return false;
}

if(!regex.test(value)){
showError("phone","SĐT phải 10 số và bắt đầu bằng 0");
return false;
}

clearError("phone");
return true;

}


function validatePassword(){

const value=document.getElementById("password").value;
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if(value===""){
showError("password","Mật khẩu không được trống");
return false;
}

if(!regex.test(value)){
showError("password","≥8 ký tự, có hoa, thường và số");
return false;
}

clearError("password");
return true;

}


function validateConfirmPassword(){

const pass=document.getElementById("password").value;
const confirm=document.getElementById("confirmPassword").value;

if(confirm!==pass){
showError("confirmPassword","Mật khẩu không khớp");
return false;
}

clearError("confirmPassword");
return true;

}


function validateGender(){

const gender=document.querySelector('input[name="gender"]:checked');

if(!gender){
showError("gender","Vui lòng chọn giới tính");
return false;
}

clearError("gender");
return true;

}


function validateTerms(){

const checked=document.getElementById("terms").checked;

if(!checked){
showError("terms","Bạn phải đồng ý điều khoản");
return false;
}

clearError("terms");
return true;

}


form.addEventListener("submit",function(e){

e.preventDefault();

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirmPassword() &
validateGender() &
validateTerms();

if(valid){

form.style.display="none";

const name=document.getElementById("fullname").value;

document.getElementById("successMessage").textContent=
"Đăng ký thành công! 🎉 Xin chào "+name;

}

});