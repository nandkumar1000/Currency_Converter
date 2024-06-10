
document.addEventListener("DOMContentLoaded", function() {
  var tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

  // Animation of container
  tl.from(".container", { opacity: 0, scale: 0.8, duration: 1 })
    .from("h2", { opacity: 0, y: -50 }, "-=0.5")
    .from(".amount p", { opacity: 0, x: -50 }, "-=0.5")
    .from(".amount input", { opacity: 0, x: 50 }, "-=0.5")
    .from(".from p", { opacity: 0, x: -50 }, "-=0.5")
    .from(".select-container.from img", { opacity: 0, scale: 0.8 }, "-=0.5")
    .from(".select-container.from select", { opacity: 0, x: 50 }, "-=0.5")
    .from(".fa-arrow-right-arrow-left", { opacity: 0, scale: 0.8 }, "-=0.5")
    .from(".to p", { opacity: 0, x: -50 }, "-=0.5")
    .from(".select-container.to img", { opacity: 0, scale: 0.8 }, "-=0.5")
    .from(".select-container.to select", { opacity: 0, x: 50 }, "-=0.5")
    .from(".msg", { opacity: 0, y: 20 }, "-=0.5")
    .from("button", { opacity: 0, scale: 0.8 }, "-=0.5");
});
