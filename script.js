function animateRole() {
    const letters = document.querySelectorAll("#role span");
    gsap.set(letters, {
      color: "transparent",
      opacity: 0
    });
    gsap.to(letters, {
      color: "#00bfff",
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
      textShadow: "0 0 10px rgb(47,47,228)",
      onComplete: () => {
        gsap.to(letters, {
          delay: 1,
          opacity: 0,
          duration: 0.5,
          onComplete: animateRole
        });
      }
    });
  }
animateRole();

gsap.to(".navbar",{
  backgroundColor: "#192a71",
  height: "100px",
  duration: 0.5,
  scrollTrigger:{
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
})

document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    const infoBox = document.getElementById('skillInfo');
    gsap.to(infoBox, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      onComplete: () => {
        infoBox.textContent = skill.dataset.info;
        gsap.to(infoBox, { opacity: 1, y: 0, duration: 0.3 });
      }
    });
  });
});

  gsap.from(".glass-card", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.5
  });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out!");
    this.reset();
  });

var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".left-content", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".right-content img", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// About Me title animation
gsap.from("#text", {
  scrollTrigger: {
    trigger: "#text",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.to("#scroller-in", {
  x: "-100%",
  duration: 10,
  repeat: -1,
  ease: "linear"
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// Education section bubbles
gsap.from(".bubble-wrapper", {
  scrollTrigger: {
    trigger: ".bubble-container",
    start: "top 80%"
  },
  opacity: 0,
  scale: 0.5,
  stagger: 0.3,
  duration: 1
});

// Skills section
gsap.from(".skills-left .skill", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%"
  },
  opacity: 0,
  x: -100,
  duration: 1,
  stagger: 0.2
});

gsap.from(".skills-right img", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%"
  },
  opacity: 0,
  x: 100,
  duration: 1
});

// Contact Section
gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%"
  },
  y: 50,

  opacity: 0,
  duration: 1
});

gsap.from(".social-toggle", {
  scrollTrigger: {
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

