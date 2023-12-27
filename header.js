// Function to initialize Locomotive Scroll for smooth scrolling
function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

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
}

// Initialize Locomotive Scroll
locoscroll();

// Function for custom cursor effect
function cursoreffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor1 = document.querySelector("#cursor1");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor1, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor1, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor1, {
      scale: 0,
      opacity: 0,
    });
  });
}

// Apply custom cursor effect
cursoreffect();

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
