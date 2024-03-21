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
