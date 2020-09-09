// //buttons
// const prev = document.getElementById("prev-test");
// const next = document.getElementById("next-test");
// //DOM elements
// const name = document.getElementById("testimonial-name"),
//   location = document.getElementById("testimonial-location"),
//   avatar = document.getElementById("testimonial-avatar"),
//   paragraph = document.getElementById("testimonial-paragraph");

// const testimonials = [
//   {
//     name: "William Thomson",
//     location: "Tauranga, New Zealand",
//     avartar: "imgs/testimonials/WT.jpg",
//     p:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur eligendi temporibus, adipisci doloresaliquid aut sed maxime. Voluptas laborum tempore cupiditate",
//   },
//   {
//     name: "John Doe",
//     location: "Tauranga, New Zealand",
//     avartar: "imgs/testimonials/WT",
//     p:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur eligendi temporibus, adipisci doloresaliquid aut sed maxime. Voluptas laborum tempore cupiditate",
//   },
// ];

// let count = 0;
// const updateTestimonial = () => {
//   name.textContent = testimonials[count].name;
//   location.textContent = testimonials[count].location;
//   avatar.src = testimonials[count].avatar;
//   paragraph.textContent = testimonials[count].paragraph;
// };

// prev.addEventListener("click", () => {
//   count--;
//   if (count < 0) {
//     count = testimonials.length - 1;
//   }
//   updateTestimonial();
// });

// next.addEventListener("click", () => {
//   count++;
//   if (count > testimonials.length - 1) {
//     count = 0;
//   }
//   updateTestimonial();
// });
