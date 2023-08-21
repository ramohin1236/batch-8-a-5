let total =0;



function handleSameFunction(id){
    const idCatch= document.getElementById(id)
    const findInner= idCatch.innerText;
    const convertNumber= parseFloat(findInner)
 
    return convertNumber
}

function handleButtonClick(target){
     const nameDiv = document.getElementById("name-div")

     const itemNamee = target.childNodes[1].childNodes[3].childNodes[3].innerText;
     const ol =document.createElement('ol')
     const li =document.createElement('li')
     li.innerText = ol;
     ol.innerText= itemNamee;
     nameDiv.appendChild(ol)
     

     const itemName = target.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
     total = parseFloat(total) + parseFloat(itemName);
     document.getElementById('total-price').innerText =total;
    //  const finalTotal=document.getElementById('final-price')
    //  finalTotal.innerText=total;
    //  console.log(finalTotal)
    //  console.log(total)
     const makePBtn= document.getElementById('make-p-btn');
     
     if(total > 200){
        
           makePBtn.disabled = false
     }
     else{
        makePBtn.disabled= true
     }
    
   
return total
 }
 
//  discount btn
      
            const totalPriceElement = document.getElementById("final-price");
            const discountInputField = document.getElementById("discount-input");
          const discountButton = document.getElementById("discount-btn");
         const discountPrice= document.getElementById("discoun-price")
 
         
        function disCountBtn() {
            const discountCode =discountInputField.value; 
          

            if (total>200 & discountCode === "SELL200") {
                discountButton.disabled = false;
              
                discountInputField.value= "";
                
                
                
                const displayFinal= document.getElementById("discoun-price")
                const text= displayFinal.innerText;
                const convtNumber= parseFloat(text);
                const totalAmount = total+ convtNumber;
                const discount =( totalAmount* 0.2).toFixed(2);
                const numberDiscountTotal = parseFloat(discount)
                
                displayFinal.innerText= numberDiscountTotal
                // -------------
                
                const finalTotal=document.getElementById('final-price');
                const finalText= finalTotal.innerText;
                // const finalNumber= parseFloat(finalText);
                const netTotal = total - numberDiscountTotal;
                finalTotal.innerText= netTotal
                // console.log(netTotal)

              
            } 
            else {
                discountButton.disabled = true;
            

            }

        }


        function makePurchase(){
            console.log('click')
        }

        function goHome(){
            const totalPrice =document.getElementById("total-price")
            const discountPrice =document.getElementById("discoun-price")
            const finalPrice =document.getElementById("final-price")
            const nameDiv = document.getElementById("name-div")
            const makePBtn = document.getElementById("make-p-btn")

            totalPrice.innerText="00";
            discountPrice.innerText="00";
            finalPrice.innerText="00";
            nameDiv.innerText="";

           makePBtn.disabled = true;
 
        }



        discountInputField.addEventListener("input", disCountBtn);
        discountButton.addEventListener('click', applyDiscount)
