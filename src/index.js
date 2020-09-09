//Testimonial
//buttons
const prev = document.getElementById("prev-test");
const next = document.getElementById("next-test");
//DOM elements
const name = document.getElementById("testimonial-name"),
  locations = document.getElementById("testimonial-location"),
  avatar = document.getElementById("testimonial-avatar"),
  paragraph = document.getElementById("testimonial-paragraph"),
  testimonialBox = document.getElementById("test-info"),
  circ1 = document.getElementById("circ1"),
  circ2 = document.getElementById("circ2");

const testimonialCircs = [circ1, circ2];

const testimonials = [
  {
    name: "William Thomson",
    location: "Tauranga, New Zealand",
    avartar: "imgs/testimonials/WT.jpg",
    p:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur eligendi temporibus, adipisci doloresaliquid aut sed maxime. Voluptas laborum tempore cupiditate",
  },
  {
    name: "John Doe",
    location: "Auckland, New Zealand",
    avartar: "imgs/testimonials/WT",
    p:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur eligendi temporibus, adipisci doloresaliquid aut sed maxime. Voluptas laborum tempore cupiditate",
  },
];

const clearCirc = () => {
  testimonialCircs[count].classList.remove("fas");
  testimonialCircs[count].classList.add("far");
};

const addCirc = () => {
  testimonialCircs[count].classList.remove("far");
  testimonialCircs[count].classList.add("fas");
};

let count = 0;
const updateTestimonial = () => {
  name.textContent = testimonials[count].name;
  locations.textContent = testimonials[count].location;
  avatar.src = testimonials[count].avatar;
  paragraph.textContent = testimonials[count].paragraph;
};
const fade = () => {
  testimonialBox.style.opacity = 0;
  setTimeout(() => {
    testimonialBox.style.opacity = 1;
  }, 500);
};
prev.addEventListener("click", () => {
  fade();
  clearCirc();
  count--;

  if (count < 0) {
    count = testimonials.length - 1;
  }
  addCirc();
  setTimeout(() => {
    updateTestimonial();
  }, 500);
});

next.addEventListener("click", () => {
  fade();
  clearCirc();
  count++;
  if (count > testimonials.length - 1) {
    count = 0;
  }
  addCirc();
  setTimeout(() => {
    updateTestimonial();
  }, 500);
});

// //side-nav
// const menuBtn = document.querySelector(".pop-menu"),
//   sideNav = document.querySelector(".side-nav"),
//   closeBtn = document.getElementById("close-btn"),
//   sideList = document.getElementById("side-list");

// menuBtn.addEventListener("click", () => {
//   sideNav.style.width = "200px";
//   closeBtn.style.display = "block";
//   setTimeout(() => {
//     sideList.style.opacity = "1";
//   }, 300);
// });

// closeBtn.addEventListener("click", () => {
//   sideNav.style.width = "0";
//   closeBtn.style.display = "none";
//   sideList.style.opacity = "0";
// });
