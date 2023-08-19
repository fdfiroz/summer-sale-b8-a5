
let total = 0;
function addItem(target){
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const itemPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    

    total = total + parseFloat(itemPrice);
    setOutput("total", total.toFixed(2));
    setOutput("grand-total", total.toFixed(2));
    itemsCountSet("itemsCountSet", itemName)
    if(total > 0){
        const purchaseBtn = document.getElementById("purchaseBtn");
        purchaseBtn.disabled = false;
        purchaseBtn.onclick = reset;
    }
    if(total >= 200){
        const applyBtn = document.getElementById("applyBtn");
        applyBtn.disabled = false;
        applyBtn.onclick = myCupon;
    }
    
};

