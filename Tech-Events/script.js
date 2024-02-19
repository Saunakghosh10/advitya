// function init(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }

// init()

// // curson

// let crsr = document.querySelector('.cursor');
// let main = document.querySelector('.main');

// main.addEventListener('mousemove', function(dets){

//     // let diff = details.clientY - dets.getBoundingClientRect().top;
//     crsr.style.left = dets.clientX  + 25 +"px"
//     crsr.style.top = dets.clientY + 25 +"px"
// });

// Assuming your cards have the class 'card-inner'
const cards = document.querySelectorAll(".card-inner");

// Function to handle the click event
function toggleCardFlip() {
  this.classList.toggle("is-flipped");
}

// Add click event listener to each card
cards.forEach(function (card) {
  card.addEventListener("click", toggleCardFlip);
});

// locomotive js

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// mouse Follower

// const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");
// const Page3 = document.querySelector("#page3");

// window.addEventListener("mousemove", (e) => {
//   const posX = e.clientX;
//   const posY = e.clientY;

//   cursorDot.style.left = `${posX}px`;
//   cursorDot.style.top = `${posY}px`;

//   cursorOutline.style.left = `${posX}px`;
//   cursorOutline.style.top = `${posY}px`;

//   cursorOutline.animate(
//     {
//       left: `${posX}px`,
//       top: `${posY}px`,
//     },
//     { duration: 500, fill: "forwards" }
//   );
// });

function text() {
  var tl = gsap.timeline();
  // tl.to(".bounding-elem2", {
  //   y: 0,
  //   ease:  Expo.easeInOut,
  //   duration: 2,
  //   stagger: .2
  // });
  tl.to(".bounding-elem1", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
    color: "black",
  });
}

const cardsDesc = document.querySelectorAll(".card-desc-p");

function toggleCard(card) {
  card.classList.toggle('expanded');
}

cardsDesc.forEach(function(card) {
  card.addEventListener('click', function() {
    toggleCard(card);
  });
});

text();

mouseFollower();
