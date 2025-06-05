gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to("#car", {
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  },
  motionPath: {
    path: "#roadPath",
    align: "#roadPath",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  },
  ease: "none"
});
