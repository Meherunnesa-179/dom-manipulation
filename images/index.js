const div1 = document.getElementById('first');
const img = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
div1.addEventListener('click',function(){
    img.src = "images/1.jpg";
    desc.innerText = 
    " First-Choose a shipping service that suit your needs with FedEx. Whether you need a courier for next day delivery, if it's heavy or lightweight – you'll find a"
    
    price.innerText = "650"

});

const div2 = document.getElementById('second');
div2.addEventListener('click',function(){
    img.src = "images/2.jpg";
    desc.innerText = 
    " First-Choose a shipping service that suit your needs with FedEx. Whether you need a courier for next day delivery, if it's heavy or lightweight – you'll find a"
    
    price.innerText = "550"

});

const div3 = document.getElementById('third');
div3.addEventListener('click',function(){
    img.src = "images/3.jpg";
    desc.innerText = 
    " First-Choose a shipping service that suit your needs with FedEx. Whether you need a courier for next day delivery, if it's heavy or lightweight – you'll find a"
    
    price.innerText = "350"

});
//free shipping
const free = document.getElementById('free');
const shippingField = document.getElementById('shipping');
free.addEventListener("click",function(){
    shippingField.innerText = "5"
    updateTotal();
});
const express = document.getElementById('express');
express.addEventListener('click',function(){
    shippingField.innerText = "30"
    updateTotal();
});
//update total
const total = document.getElementById('total');
function updateTotal(){
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}