const wrapper = document.querySelector(".slideWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 24999,
    colors: [
      {
        code: "black",
        img: "./imgs/air.png",
      },
      {
        code: "darkblue",
        img: "./imgs/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 14999,
    colors: [
      {
        code: "lightgray",
        img: "./imgs/jordan.png",
      },
      {
        code: "green",
        img: "./imgs/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 19999,
    colors: [
      {
        code: "lightgray",
        img: "./imgs/blazer.png",
      },
      {
        code: "green",
        img: "./imgs/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 9999,
    colors: [
      {
        code: "black",
        img: "./imgs/crater.png",
      },
      {
        code: "lightgray",
        img: "./imgs/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 14999,
    colors: [
      {
        code: "gray",
        img: "./imgs/hippie.png",
      },
      {
        code: "black",
        img: "./imgs/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


// Changing Product Color
currentProductColors.forEach((color, index) => {
  color.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


//Size of shoe selection.
currentProductSizes.forEach((size, index) =>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size) => {
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

productButton.addEventListener("click", () =>{
  payment.style.display = "flex"
})

close.addEventListener("click", () =>{
  payment.style.display = "none"
})