gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Tell ScrollTrigger to use proxy methods for "#main"
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and update LocomotiveScroll on window updates
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Page 1 Animation
function page1Animation() {
  var tl = gsap.timeline();
  scroller:"main",
  tl.from("#header #navbar", { y: -200, duration: 1 });
  tl.from("#main #page1 .span span", { x: -1500, duration: 1 }, 0);
  tl.from("#main #page1 #home-logo", { x: 1500, duration: 1 }, 0);
  tl.from("#main #page1 .span h4", { opacity: 0 });
  tl.from("#main #page1 .span #btns", { scale: 0, scrub: 1 }, 1);

  // Mouse Magnet effect on navbar items
  const headings = document.querySelectorAll('#nav-headings h4');
  headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
      gsap.to(heading, { scale: 1.2, duration: 0.3, ease: 'power1.out' });
    });
    heading.addEventListener('mouseleave', () => {
      gsap.to(heading, { scale: 1, duration: 0.3, ease: 'power1.out' });
    });
  });
}

// Page 2 Animation with ScrollTrigger
function page2Animation() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller:"#main",
      start: "top 80%",
      end: "top 30%",
      scrub: true,
      onEnter: () => gsap.fromTo("#page2", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 }),
      onLeave: () => gsap.to("#page2", { opacity: 0, y: 100, duration: 0.5 }),
      onEnterBack: () => gsap.fromTo("#page2", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 }),
      onLeaveBack: () => gsap.to("#page2", { opacity: 0, y: 100, duration: 0.5 })
    }
  });
}

// Page 3 Animation with ScrollTrigger
function page3Animation() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      scroller:"#main",
      stagger:1,
      onEnter: () => gsap.fromTo("#page3", { opacity: 0, y: -400 }, { opacity: 1, y: 0, duration: 2 }),
      onLeave: () => gsap.to("#page3", { opacity: 0, y: 400, duration: 2 }),
      onEnterBack: () => gsap.fromTo("#page3", { opacity: 0, y: -400 }, { opacity: 1, y: 0, duration: 2 }),
      onLeaveBack: () => gsap.to("#page3", { opacity: 0, y: 400, duration: 2 })
    }
  });
}

// Page 4 Animation with ScrollTrigger
function page4Animation() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      scroller:"#main",
      stagger:1,
      onEnter: () => gsap.fromTo("#page4", { opacity: 0, x: 400 }, { opacity: 1, x: 0, duration: 1 }),
      onLeave: () => gsap.to("#page4", { opacity: 0, x: 100, duration: 1 }),
      onEnterBack: () => gsap.fromTo("#page4", { opacity: 0, x: 400 }, { opacity: 1, x: 0, duration: 1 }),
      onLeaveBack: () => gsap.to("#page4", { opacity: 0, x: 100, duration: 1 })
    }
  });
}

// Page 5 Animation with ScrollTrigger
function page5Animation() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      scroller:"#main",
      onEnter: () => {
        gsap.fromTo(".container2", { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 1 });
        gsap.fromTo(".span2", { opacity: 0, x: 400 }, { opacity: 1, x: 0, duration: 1 });
      },
      onLeave: () => {
        gsap.to(".container2", { opacity: 0, x: -100, duration: 1 });
        gsap.to(".span2", { opacity: 0, x: 100, duration: 1 });
      },
      onEnterBack: () => {
        gsap.fromTo(".container2", { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 1 });
        gsap.fromTo(".span2", { opacity: 0, x: 400 }, { opacity: 1, x: 0, duration: 1 });
      },
      onLeaveBack: () => {
        gsap.to(".container2", { opacity: 0, x: -100, duration: 1 });
        gsap.to(".span2", { opacity: 0, x: 100, duration: 1 });
      }
    }
  });
}

// Page 6 Slider Initialization
function page6Slider() {
  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      initialSlide: 1,
      autoplay: { delay: 1000, disableOnInteraction: false },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    });
  });
}

// Initialize Animations and Slider
page5Animation();
page1Animation();
page2Animation();
page3Animation();
page4Animation();
page6Slider();
