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


const myCupon = function(){
    const total = document.getElementById("total");
    const applyBtn = document.getElementById("applyBtn");
    const cuponInput = document.getElementById("cuponInput");
    const cupon = cuponInput.value;

    if(cupon === "SELL200"){
        // 20% discount and show discount valu and grand total and hide disable button
        const discountValue = parseFloat(total.innerText) * 0.2;
        const grandTotalValue = parseFloat(total.innerText) - discountValue;
        setOutput("myCupon", discountValue.toFixed(2));
        setOutput("grand-total", grandTotalValue.toFixed(2));
        cuponInput.value = "";
        applyBtn.disabled = true;
    }else{      
        // show error message and hide disable button
        alert("Invalid Cupon Code");

    }
    
}