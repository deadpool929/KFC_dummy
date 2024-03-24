gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  tablet: { smooth: true },

  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
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
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
let tl = gsap.timeline();

tl.from(".loader img", {
  scale: 0,
  duration: 2,
});
tl.to(".loader", {
  y: -1500,
  duration: 0.5,
});

tl.from(".page1 .nav .nav-1,.page1 .nav-2-1 h3 ,.page1 .nav-2-2", {
  y: -100,
  duration: 0.1,
  delay: 0.2,
  stagger: 0.3,
});
tl.from(
  ".page1 .section .leftside h1,.page1 .leftside p,.page1 .leftside button",
  {
    x: -100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.5,
  }
);

tl.from(".page1 .section .rightside", {
  scale: 0,

  duration: 0.5,
  delay: 0.2,
});

gsap.from(".page2 .page-2-1 .card ", {
  opacity: 0,

  delay: 0.2,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",

    start: "top 30%",
  },
});
gsap.from(".page2 .page-2-2 .card-2 ", {
  opacity: 0,

  delay: 0.2,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",

    start: "top 20%",
  },
});

gsap.from(".page3 h1 ", {
  scale: 0,
  opacity: 0,
  delay: 0.2,
  duration: 1,

  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",

    start: "top 30%",
  },
});

gsap.from(".page3 p", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,

  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",

    start: "top 20%",
  },
});
