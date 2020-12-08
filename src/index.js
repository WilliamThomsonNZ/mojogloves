//Testimonial
//buttons
const prev = document.getElementById("prev-test");
const next = document.getElementById("next-test");
//DOM elements
const name = document.getElementById("testimonial-name"),
  locations = document.getElementById("testimonial-location"),
  paragraph = document.getElementById("testimonial-paragraph"),
  testimonialBox = document.getElementById("test-info"),
  circ1 = document.getElementById("circ1"),
  circ2 = document.getElementById("circ2"),
  videoBtn = document.getElementById("videoBtn"),
  videoModal = document.getElementById("video-modal");

const testimonialCircs = [circ1, circ2];

const testimonials = [
  {
    name: "Tira",
    location: "Taupo, New Zealand",
    p:
      " When Megan first showed me her mojogloves I thought Wow, they look really cool. I bought them straight away for my 9 year old son to help him with his typing & school work on his chromebook :) After practising with the gloves he feels way more confident typing without looking at the keyboard as much now. Thanks Megan - well designed product and great for kids!",
  },
  // {
  //   name: "John Doe",
  //   location: "Auckland, New Zealand",
  //   p:
  //     " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur eligendi temporibus, adipisci doloresaliquid aut sed maxime. Voluptas laborum tempore cupiditate",
  // },
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
  paragraph.textContent = testimonials[count].p;
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

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  (async () => {
    const form = document.getElementById("contactBtn");
    form.innerHTML = "<img src='imgs/loading3.svg'/>";
    await emailjs.sendForm("mojogloves", "ContactForm", "#contact-form");
    form.innerHTML = "&#10003;";
    setTimeout(() => {
      form.innerHTML = "Submit";
    }, 2500);
  })()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  event.target.reset();
});

const showVideo = () => {
  videoModal.style.display = "flex";
};

const hideModal = (e) => {
  if (!e.target.classList.contains("video-container")) {
    videoModal.style.display = "none";
  }
};
videoModal.addEventListener("click", hideModal);
videoBtn.addEventListener("click", showVideo);
