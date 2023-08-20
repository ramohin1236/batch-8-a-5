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
     console.log(total)

     if(total > 200){
           const makePBtn= document.getElementById('make-p-btn');
           makePBtn.disabled = false
     }
     else{
        makePBtn.disabled= true
     }
 }

//  discount btn


