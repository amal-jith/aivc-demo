//gsap.registerPlugin(ScrollTrigger);
//
//// Create a timeline for the animation
//const unlockTimeline = gsap.timeline({
//  scrollTrigger: {
//    trigger: ".unlock-section",
//    start: "top center", // Changed to "top center" to ensure it starts when the section is in view
//    end: "bottom center", // The animation ends when the bottom of the section hits the center of the viewport
//    toggleActions: "play none none none" // Play the animation once it enters the viewport
//  }
//});
//
//// Add the staggered animation to the timeline
//unlockTimeline.from(".unlock-title span", {
//  opacity: 0,
//  y: 30,
//  duration: 0.6,
//  ease: "power2.out",
//  stagger: 0.2
//});