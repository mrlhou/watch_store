let bars = document.querySelector(".bars");
let listPage = document.querySelector(".list-page");
bars.onclick = function () {
  this.classList.toggle("slide");
  listPage.classList.toggle("slide");
};
let imgsElments = document.querySelectorAll(".landing-content .box .img");

imgsElments.forEach((imgEl) => {
  imgEl.onclick = function () {
    if (this.classList.contains("buy")) {
      imgEl.classList.remove("buy");
    }
    imgsElments.forEach((imgEl) => imgEl.classList.remove("buy"));
    this.classList.add("buy");
  };
});

let descSaleSectionSpans = document.querySelectorAll(".sale .desc span");
let descSaleSectionP = document.querySelectorAll(".desc p");

descSaleSectionSpans.forEach((span, index) => {
  span.onclick = function () {
    descSaleSectionSpans.forEach((span) => span.classList.remove("active"));
    descSaleSectionP.forEach((p) => p.classList.remove("active"));
    this.classList.add("active");
    descSaleSectionP[index].classList.add("active");
  };
});

// Product Object
let products = [
  { title: "Omega Planet Ocean", price: "90" },
  { title: "luxury", price: "180" },
  { title: "wristwatch", price: "79" },
];

let productSection = document.querySelector(".new-product .content");

for (let i = 0; i < products.length; i++) {
  // Create Elements
  let box = document.createElement("div");
  let imgDiv = document.createElement("div");
  let img = document.createElement("img");
  let titleDiv = document.createElement("h3");
  let titleTxt = document.createTextNode(`${products[i].title}`);
  let price = document.createElement("span");
  let priceTxt = document.createTextNode(`$${products[i].price}`);
  // Add Classes
  box.className = "box";
  imgDiv.className = "img";
  img.src = `imgs/watch_${i + 1}.jpg`;
  img.className = "tr-4s";
  titleDiv.className = "title txt-cap";
  price.className = "price";
  // Add To Page
  imgDiv.appendChild(img);
  box.appendChild(imgDiv);
  titleDiv.appendChild(titleTxt);
  box.appendChild(titleDiv);
  price.appendChild(priceTxt);
  box.appendChild(price);
  // Notes For Stars
  if (i !== 1) {
    let rating = document.createElement("ul");
    rating.className = "rating";
    for (let i = 0; i < 5; i++) {
      let stars = document.createElement("i");
      stars.className = "fa-solid fa-star";
      rating.appendChild(stars);
    }
    box.appendChild(rating);
  }
  productSection.appendChild(box);
}

// Add Date
let dateSpan = document.querySelector(".date");
let date = new Date().getFullYear();
dateSpan.innerHTML = date;
