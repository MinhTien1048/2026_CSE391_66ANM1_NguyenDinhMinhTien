const prices={
Ao:150000,
Quan:200000,
Giay:500000
};

const form=document.getElementById("orderForm");

function showError(id,msg){
document.getElementById(id+"Error").textContent=msg;
}

function clearError(id){
document.getElementById(id+"Error").textContent="";
}
function validateProduct(){

const value=document.getElementById("product").value;

if(value===""){
showError("product","Vui lòng chọn sản phẩm");
return false;
}

clearError("product");
return true;

}
function validateQuantity(){

const value=Number(document.getElementById("quantity").value);

if(!Number.isInteger(value) || value<1 || value>99){

showError("quantity","Số lượng từ 1 đến 99");
return false;

}

clearError("quantity");
return true;

}
function validateDelivery(){

const value=document.getElementById("delivery").value;

if(!value){
showError("delivery","Chọn ngày giao");
return false;
}

const today=new Date();
const selected=new Date(value);

today.setHours(0,0,0,0);

const max=new Date();
max.setDate(today.getDate()+30);

if(selected<today || selected>max){

showError("delivery","Ngày phải trong 30 ngày tới");
return false;

}

clearError("delivery");
return true;

}
function validateAddress(){

const value=document.getElementById("address").value.trim();

if(value.length<10){

showError("address","Địa chỉ ≥ 10 ký tự");
return false;

}

clearError("address");
return true;

}
function validateNote(){

const value=document.getElementById("note").value;

if(value.length>200){

showError("note","Tối đa 200 ký tự");
return false;

}

clearError("note");
return true;

}
function validatePay(){

const pay=document.querySelector('input[name="pay"]:checked');

if(!pay){

showError("pay","Chọn phương thức thanh toán");
return false;

}

clearError("pay");
return true;

}
const note=document.getElementById("note");
const counter=document.getElementById("noteCounter");

note.addEventListener("input",function(){

const len=this.value.length;

counter.textContent=len+"/200";

if(len>200){
counter.style.color="red";
}else{
counter.style.color="gray";
}

});
function updateTotal(){

const product=document.getElementById("product").value;
const qty=Number(document.getElementById("quantity").value);

if(!product || !qty) return;

const total=prices[product]*qty;

document.getElementById("totalPrice").textContent=
total.toLocaleString("vi-VN");

}

document.getElementById("product").addEventListener("change",updateTotal);
document.getElementById("quantity").addEventListener("input",updateTotal);
function showConfirm(){

const product=document.getElementById("product").value;
const qty=document.getElementById("quantity").value;
const date=document.getElementById("delivery").value;

const total=prices[product]*qty;

document.getElementById("orderSummary").innerHTML=
`
Sản phẩm: ${product}<br>
Số lượng: ${qty}<br>
Ngày giao: ${date}<br>
Tổng tiền: ${total.toLocaleString("vi-VN")} VND
`;

document.getElementById("confirmBox").style.display="block";

}
document.getElementById("confirmBtn").onclick=function(){

document.getElementById("confirmBox").style.display="none";

document.getElementById("successMsg").textContent=
"Đặt hàng thành công 🎉";

form.style.display="none";

};

document.getElementById("cancelBtn").onclick=function(){

document.getElementById("confirmBox").style.display="none";

};
document.getElementById("product").addEventListener("blur",validateProduct);
document.getElementById("quantity").addEventListener("blur",validateQuantity);
document.getElementById("delivery").addEventListener("blur",validateDelivery);
document.getElementById("address").addEventListener("blur",validateAddress);
document.getElementById("note").addEventListener("blur",validateNote);
document.querySelectorAll("input,textarea,select").forEach(el=>{

el.addEventListener("input",function(){

const id=this.id;
if(id) clearError(id);

});

});