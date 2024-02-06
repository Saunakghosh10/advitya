
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
// background: linear-gradient(60deg, #000000, #090803, #1b180b, #2e2a13, #484218, #675e1d, #897e22, #ac9d25, #ccbb27, #e6d328, #f8e428, #ffea28);
const colors = [
  "#000000",
  "#090803",
  "#1b180b",
  "#2e2a13",
  "#484218",
  "#675e1d",
  "#897e22",
  "#ac9d25",
  "#ccbb27",
  "#e6d328",
  "#f8e428",
  "#ffea28",
  "#ffea28",
  "#ac265e",
  "#9c155f",
  "#ffea28",
  "#830060",
  "#ffea28",
  "#680060",
  "#ffea28",
  "#48005f",
  "#ffea28"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// Function to initialize Locomotive Scroll for smooth scrolling

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


function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);
}

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#mainh"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#mainh", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#mainh").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

  // Initialize Locomotive Scroll
  locoscroll();

// Function for custom cursor effect
// function cursoreffect() {
//   var page1Content = document.querySelector("#page1-content");
//   var cursor1 = document.querySelector("#cursor1");

//   page1Content.addEventListener("mousemove", function (dets) {
//     gsap.to(cursor1, {
//       x: dets.x,
//       y: dets.y,
//     });
//   });

//   page1Content.addEventListener("mousemove", function (dets) {
//     gsap.to(cursor1, {
//       scale: 1,
//       opacity: 1,
//     });
//   });

//   page1Content.addEventListener("mouseleave", function (dets) {
//     gsap.to(cursor1, {
//       scale: 0,
//       opacity: 0,
//     });
//   });
// }

// cursoreffect();

// Function for animations on page 2
function page2Animation() {
  gsap.from(".elem h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#mainh",
      start: "top 37%",
      end: "top 40%",
      scrub: 2,
    },
  });
}

// Run animations for page 2
page2Animation();

// Timeline for loader animation and page transition
var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -10,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader", {
  opacity: 0,
});

tl.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.4,
});

tl.to("#loader", {
  display: "none",
});

// Animation using GSAP for scrolling effects
