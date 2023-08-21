
let total = 0;
function addItem(target){
    const itemName = target.childNodes[3].childNodes[3].innerText;
    itemsCountSet("itemsCountSet", itemName)

    const itemPrice = parseFloat(target.childNodes[3].childNodes[5].innerText.split(" ")[0]);
    total = total + itemPrice;
    setOutput("total", total.toFixed(2));
    setOutput("grand-total", total.toFixed(2));
    
    
    if(total > 0){
        
        const purchaseBtn = document.getElementById("purchaseBtn");
        purchaseBtn.disabled = false;
    }
    if(total >= 200){
        const applyBtn = document.getElementById("applyBtn");
        applyBtn.disabled = false;
        applyBtn.onclick = myCupon;
    }
    
};

document.getElementById("reset-page").addEventListener("click", function(){
    const itemsCountSet = document.getElementById("itemsCountSet");
    const total = document.getElementById("total");
    const grandTotal = document.getElementById("grand-total");
    const discount = document.getElementById("myCupon");
    const purchaseBtn = document.getElementById("purchaseBtn");
    
    itemsCountSet.innerHTML = "";
    total.innerText = 0;
    discount.innerText = 0;
    grandTotal.innerText = 0;
    console.log(applyBtn)
    purchaseBtn.disabled = true
})
