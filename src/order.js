// //Product image carousel
const productImgs = [
  {
    img: "../imgs/showcase.jpg",
    alt: "typing on laptop with mojogloves on",
  },
  {
    img: "../imgs/product2.jpg",
    alt: "mojogloves and teaching aid",
  },
  {
    img: "../imgs/step3.jpg",
    alt: "typing with mojogloves and teaching aid",
  },
  {
    img: "../imgs/step2.jpg",
    alt: "laptop with teaching aid on the screen",
  },
];

const orderCircs = [
  document.getElementById("circ1"),
  document.getElementById("circ2"),
  document.getElementById("circ3"),
  document.getElementById("circ4"),
];

const clearCirc = () => {
  orderCircs[count].classList.remove("fas");
  orderCircs[count].classList.add("far");
};

const addCirc = () => {
  orderCircs[count].classList.remove("far");
  orderCircs[count].classList.add("fas");
};

const nextBtn = document.getElementById("next-product"),
  prevBtn = document.getElementById("prev-product"),
  img = document.getElementById("product-img"),
  orderNowBtn = document.getElementById("order-now-btn"),
  orderModal = document.getElementById("order-modal"),
  reviewBtn = document.getElementById("review-modal-btn"),
  reviewModal = document.getElementById("review-modal"),
  reviewClose = document.getElementById("review-close");

let count = 0;

const updateImg = () => {
  img.src = productImgs[count].img;
  img.alt = productImgs[count].alt;
};

prevBtn.addEventListener("click", () => {
  clearCirc();
  count--;

  if (count < 0) {
    count = productImgs.length - 1;
  }

  addCirc();
  updateImg();
});

nextBtn.addEventListener("click", () => {
  clearCirc();
  count++;

  if (count > productImgs.length - 1) {
    count = 0;
  }
  addCirc();
  updateImg();
});
//Order now modal
orderNowBtn.addEventListener("click", () => {
  orderModal.style.display = "block";
});

closeOrder.addEventListener("click", () => {
  orderModal.style.display = "none";
});
//review modal
reviewBtn.addEventListener("click", () => {
  reviewModal.style.display = "block";
});

reviewClose.addEventListener("click", () => {
  reviewModal.style.display = "none";
});

//Sticky modal button

window.addEventListener("scroll", () => {
  const modal = document.querySelector(".review-modal"),
    reviews = document.querySelector(".reviews");
  modal.classList.toggle("sticky-modal", window.scrollY > 330);
  reviews.classList.toggle("review-padding", window.scrollY > 330);
});
