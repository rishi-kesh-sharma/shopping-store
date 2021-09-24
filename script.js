

//data related to shopping materials


const data=[
    {
    id:"1",
    title:"queen panel bed",
    price:"$12.99",
    url:"./images/product-1.jpeg",
    rating:"1"
    },
    {
    id:"2",
    title:"table",
    price:"$12.99",
    url:"./images/product-2.jpeg",
    rating:"4"
    },
     
    {
    id:"3",
    title:"single panel bed",
    price:"$12.99",
    url:"./images/product-3.jpeg",
    rating:"3"
    },
    {
    id:"4",
    title:"twin panel bed",
    price:"$22.99",
    url:"./images/product-4.jpeg",
    rating:"5"
    },
    {
    id:"5",
    title:"fridge",
    price:"$88.99",
    url:"./images/product-5.jpeg",
    rating:"3"
    },
    {
    id:"6",
    title:"dresser",
    price:"$32.99",
    url:"./images/product-6.jpeg",
    rating:"5"
    },
    {
    id:"7",
    title:"couch",
    price:"$45.99",
    url:"./images/product-7.jpeg",
    rating:"4"
    },
    {
    id:"8",
    title:"table",
    price:"$33.99",
    url:"./images/product-8.jpeg",
    rating:"3"
    }
];


// top declaratons


const topProductsArray=[];
var itemCount=0;
const itemCountElement=document.querySelector(".count");
var totalAmount=0;
     
const navItems=document.querySelector(".nav-items");
const hamburger=document.querySelector(".hamburger");
const login=document.querySelector(".login");
const loginModal=document.querySelector(".login-modal");
const removeModal=document.querySelector(".remove-modal");
const body=document.querySelector("body"); 
const productItems=document.querySelectorAll(".product");
const topProducts=document.querySelector(".top-products");
const sliders=document.querySelectorAll(".sliders i");
console.log(sliders);
 const cart=document.querySelector(".cart");
 const cartIcon=document.querySelector(".cart-icon");

// hamburger event listening

 hamburger.addEventListener("click",()=>{
    navItems.classList.toggle("show"); 
})


//login event listening


login.addEventListener("click",()=>{
 loginModal.classList.toggle("show-login-modal");
 body.classList.toggle("body-background-blur");

})

// remove login modal event listening


removeModal.addEventListener("click",()=>{
    loginModal.classList.toggle("show-login-modal");
    body.classList.toggle("body-background-blur");
});






// product items all elements creation and dispalying



productItems.forEach((productItem,index)=>{
const image=productItem.querySelector("img");
image.src=data[index].url;
const name=productItem.querySelector(".name");
name.innerHTML=data[index].title;
const price=productItem.querySelector(".price");
price.innerHTML=data[index].price;
const rating=productItem.querySelector(".rating");
const productLabel=document.createElement("div");
productLabel.classList.add("product-label");
const labelText="Add To Cart";
const labelTextNode=document.createTextNode(labelText);
productLabel.appendChild(labelTextNode);
productItem.appendChild(productLabel);
if(Number(data[index].rating>3)){
topProductsArray.push(data[index]);
 
 

}

//for loop for rating
 for(var i=0;i<5;i++){
     var icon=document.createElement("i");
     icon.setAttribute("class","fas fa-star");
     rating.appendChild(icon);
     if(i>=Number(data[index].rating)){
         icon.style.color="white";
         continue;
     }
     icon.style.color="rgb(175, 145, 12)";
 }
})  




//top products array and rendering


 topProductsArray.forEach((item,index)=>{
     var topProductImage=document.createElement("img");
     topProductImage.src=item.url;
     topProducts.appendChild(topProductImage);
     topProductImage.classList.add("top-product");
     
 
 })


//  top product accesing


var x=document.querySelectorAll(".top-product"); 
x.forEach((item,index)=>{
     
    item.style.position="absolute";
    var width=item.getBoundingClientRect().width; 
    item.style.left=`${index*width}px`;
});

var productWidth=topProducts.getBoundingClientRect().width;
    
  const topProductSlide=()=>{
      
 productWidth=topProducts.getBoundingClientRect().width;
    sliders.forEach((slider)=>{ 
        slider.addEventListener("click",(e)=>{
    
             
            if(e.target.classList.contains("fa-greater-than"))
            {
               
                x.forEach((item,index,array)=>{  
                    leftPositionString=item.style.left;
                    leftPositionNumber=Number(leftPositionString.slice(0,-2));
                    leftPositionNumber+=productWidth;
                    leftPositionNumber=leftPositionNumber.toFixed(0);
                    leftPositionString=`${leftPositionNumber}px`;
                    item.style.left=leftPositionString;
                    if(leftPositionNumber>array.length*productWidth)
                    {
                        item.style.left=`0px`;
                    }
                    // console.log(item.style.left); 
                })
            }

                else{  
                    x.forEach((item,index,array)=>{  
                        leftPositionString=item.style.left;
                        leftPositionNumber=Number(leftPositionString.slice(0,-2));
                        leftPositionNumber-=productWidth;
                        leftPositionNumber=leftPositionNumber.toFixed(0);
                        leftPositionString=`${leftPositionNumber}px`;
                        item.style.left=leftPositionString;
                        if(leftPositionNumber<-(array.length*productWidth))
                        {
                            item.style.left=`0px`;
                        }
                        // console.log(item.style.left); 
                    })

                }
            
        })
    });
    
  }
  setTimeout(()=>{
      setInterval(()=>{
        x.forEach((item,index,array)=>{  
            leftPositionString=item.style.left;
            leftPositionNumber=Number(leftPositionString.slice(0,-2));
            leftPositionNumber+=productWidth;
            leftPositionNumber=leftPositionNumber.toFixed(0);
            leftPositionString=`${leftPositionNumber}px`;
            item.style.left=leftPositionString;
            if(leftPositionNumber>array.length*productWidth)
            {
                item.style.left=`0px`;
            } 
        })
      },5000)
  },1000)

  
window.resize=  topProductSlide();





//cart icon event listening


cartIcon.addEventListener("click",()=>{
    cart.classList.toggle("show-cart");
    body.classList.toggle("body-background-blur");
})



// label elements accesing

const label=document.querySelectorAll(".product-label");


//product items looping

//functionalizing the labels


productItems.forEach((item)=>{
    const label=item.querySelector(".product-label");
    item.addEventListener("mouseover",(e)=>{
       label.classList.add("show-label");  
    })
    item.addEventListener("mouseout",()=>{
        label.classList.remove("show-label");
    }) 
})

// accesing table


const table=document.querySelector(".cart table");


//looping label 

label.forEach((item)=>{

    // listening event on each labels
    
    item.addEventListener("click",(e)=>{ 
          itemCount=itemCount+1;
          itemCountElement.innerHTML=itemCount;
          const tableRow=document.createElement("tr");
          const tableCell1=document.createElement("td");
          const tableCell2=document.createElement("td");
          const itemNameElement=item.parentNode.querySelector(".name");
        const itemName=itemNameElement.innerHTML;
        const itemNameTextNode=document.createTextNode(itemName);
        tableCell1.appendChild(itemNameTextNode);
        const itemPriceElement=item.parentNode.querySelector(".price");
       var itemPrice=itemPriceElement.innerHTML;
        const itemPriceTextNode=document.createTextNode(itemPrice);
        tableCell2.appendChild(itemPriceTextNode);
        const removeIcon=document.createElement("i");
        removeIcon.classList.add("far");
        removeIcon.classList.add("fa-window-close");
        tableCell2.appendChild(removeIcon);
        tableRow.appendChild(tableCell1);
        tableRow.appendChild(tableCell2)
        table.appendChild(tableRow);
        itemPriceNumber=Number(itemPrice.slice(1,-1));
        totalAmount+=itemPriceNumber;
        totalAmount= Number(totalAmount.toFixed(2));
        totalAmountTextSpan.innerHTML= `$ ${totalAmount}`;
        
         
         


    
        // remove icon event listener


        removeIcon.addEventListener("click",()=>{
            itemCount=itemCount-1;
            itemCountElement.innerHTML=itemCount;
            itemPrice=removeIcon.parentNode.innerText;
            itemPriceNumber=Number(itemPrice.slice(1,-1));
            totalAmount-= itemPriceNumber; 
            totalAmount=Number(totalAmount.toFixed(2));
            totalAmountTextSpan.innerHTML= `$ ${totalAmount}`;
            removeIcon.parentNode.parentNode.parentNode.removeChild(tableRow);
          
        })
    })
    
    }) 


    // creating and appending total section to the cart



    const totalSection=document.createElement("div");
    const totalTextSpan=document.createElement("span");
    const totalAmountTextSpan=document.createElement("span");
    const totalText="total";
    const totalTextNode=document.createTextNode(totalText);
    totalTextSpan.appendChild(totalTextNode);
    totalSection.appendChild(totalTextSpan);
    totalSection.appendChild(totalAmountTextSpan);
    totalSection.classList.add("total-section");
    cart.appendChild(totalSection);
       






























    