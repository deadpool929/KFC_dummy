gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
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

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

let tl = gsap.timeline();
tl.from(".nav-1, .nav-2-1 h3 ,.nav-2-2", {
  y: -100,
  duration: 0.1,
  delay: 0.2,
  stagger: 0.3,
});
tl.from(" .leftside h1,.leftside p,.leftside button", {
  x: -100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.5,
});

tl.from(".rightside img", {
  scale: 0,
  opacity: 0,
  delay: 0.2,
  duration: 0.5,
});
