
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".benefit");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1), // move through all cards
  ease: "none",
  scrollTrigger: {
    trigger: ".benefits-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1), // snap to each card
    end: () => "+=" + document.querySelector(".benefits-container").offsetWidth
  }
});

