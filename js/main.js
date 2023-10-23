
function totalPrice(priceId){

const priceText = document.getElementById(priceId);
const priceString = priceText.textContent;
const price = parseFloat(priceString);

const lastTotalPriceText = document.getElementById("Total-price");
const lastTotalPriceString = lastTotalPriceText.textContent;
const lastTotalPrice = parseFloat(lastTotalPriceString);

const newTotalPrice = lastTotalPrice + price;
const totalPrice = newTotalPrice.toFixed(2);

lastTotalPriceText.textContent = totalPrice ;

const purchaseButton = document.getElementById("purchase-button");
if (newTotalPrice > 0){

    purchaseButton.removeAttribute('disabled');

};

const applyBtn = document.getElementById("apply-btn");
if (newTotalPrice >= 200){

    applyBtn.removeAttribute('disabled');

}

return newTotalPrice;

}


function cardTitleName(cardTitleName){

    const cardTitleText = document.getElementById(cardTitleName);
    const cardTitleString = cardTitleText.textContent;
   
   addCartEntry(cardTitleString); 
   

}

// add to cart

function addCartEntry(cardTitle){
    
 const cardEntry = document.getElementById('card-entry');

 const countCart = cardEntry.childElementCount; 

 const paragraph = document.createElement('p');
 paragraph.classList.add('my-4', 'text-2xl', 'font-medium', 'text-center', 'lg:text-left');
 paragraph.innerHTML = `${countCart + 1}.  ${cardTitle}`;
 cardEntry.appendChild(paragraph);

}





 const applyBtn = document.getElementById("apply-btn").addEventListener('click', function(){

    const codeText = document.getElementById("code-field");
    const codeString = codeText.value;

    const lastTotalPriceText = document.getElementById("Total-price");
    const lastTotalPriceString = lastTotalPriceText.textContent;
    const newTotalPrice = parseFloat(lastTotalPriceString);

    const discountPriceText = document.getElementById("discount-price");

    const discountTotalPriceText = document.getElementById("discount-total-price");
   
    const percentage = 20 / 100;
   
    if (codeString === "SELL200"){

        const discountPrice = (newTotalPrice * percentage).toFixed(2);
        
        discountPriceText.textContent = discountPrice ;

        const remainingPrice = (newTotalPrice - discountPrice).toFixed(2);
        
        discountTotalPriceText.textContent = remainingPrice;
    }
    else{

        alert('Please Insert Valid Coupon');

    }


}) 

