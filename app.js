const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");

const products = [

    {
        id: 1,
        title: "Printed T-Shirt",
        price: 499,
        colors: [
            {
                code: "black",
                img :"./img/printedTShirtImg1.png",
            },

            {
                code: "#B99976",
                img: "./img/printedTShirtImg2.png",
            },
        ],
    },

    {
        id: 2,
        title: "Plain T-Shirt",
        price: 599,
        colors:[
            {
                code: "orange",
                img: "./img/plainTShirtImg2.png",
            },

            {
                code: "#987554",
                img: "./img/plainTShirtImg3.png",
            },

        ],
    },

    {
        id: 3,
        title: "Oversized T-Shirt",
        price: 699,
        colors:[
            {
                code: "#F8C8DC",
                img: "./img/oversizedTShirt.png",
            },

            {
                code: "#000080",
                img: "./img/oversizedImg2.png",
            },

        ],
    },

    {
        id: 4,
        title: "Classic Fit T-Shirt",
        price: 799,
        colors:[
            {
                code: "white",
                img: "./img/classicFitTShirt.png",
            },

            {
                code: "#AFE1AF",
                img: "./img/classicFitTShirtImg2.png",
            },

        ],
    },

    {
        id: 5,
        title: "Shirt",
        price: 899,
        colors:[
            {
                code: "black",
                img: "./img/shirt.png",
            },

            {
                code: "#097969",
                img: "./img/shirtImg2.png",
            },

        ],
    },
];


let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    // change the current slide
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // choose current  product
    choosenProduct = products[index]

    // change text of current product

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    
    currentProductColors.forEach((color, index) =>{
           color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });    
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click" , ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{

    size.addEventListener("click",()=>{

        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
       size.style.backgroundColor = "black";
       size.style.color = "white";
      });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click" ,()=>{
   payment.style.display="flex" 
})

close.addEventListener("click" , ()=>{
    payment.style.display="none"
})