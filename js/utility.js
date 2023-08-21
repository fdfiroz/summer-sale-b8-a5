function itemsCountSet(id, itemName){
    const itemsCount = document.getElementById(id);
    const newItem = document.createElement("p");
    const count = itemsCount.childElementCount
    newItem.innerText = count + 1 + ". " + itemName;
    itemsCount.appendChild(newItem);
}

function setOutput(id, value){
    const output = document.getElementById(id);
    output.innerText = value;
  }

const reset = function(){
    const itemsCountSet = document.getElementById("itemsCountSet");
    const total = document.getElementById("total");
    const grandTotal = document.getElementById("grand-total");
    const discount = document.getElementById("myCupon");
    const modal = document.getElementById("my_modal_5");
    
    itemsCountSet.innerHTML = "";
    total.innerText = 0;
    discount.innerText = 0;
    grandTotal.innerText = 0;
    applyBtn.disabled = true
    const purchaseBtn = document.getElementById("purchaseBtn");
    purchaseBtn.disabled = true
    modal.showModal()
}
const myCupon = function(){
    const total = document.getElementById("total");
    const applyBtn = document.getElementById("applyBtn");
    const cuponImput = document.getElementById("cuponImput");
    const cupon = cuponImput.value;
    if(cupon == "SELL200"){
        // 20% discount and show discount valu and grand total and hide disable button
        const discountValue = parseFloat(total.innerText) * 0.2;
        const grandTotalValue = parseFloat(total.innerText) - discountValue;
        setOutput("myCupon", discountValue.toFixed(2));
        setOutput("grand-total", grandTotalValue.toFixed(2));
        cuponImput.value = "";
        applyBtn.disabled = true;
    }else{      
        // show error message and hide disable button
        alert("Invalid Cupon Code");

    }
    
}