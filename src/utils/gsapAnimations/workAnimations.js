import gsap from "gsap";

const addAnimationStatusToLocal = () => {
  localStorage.setItem("dontShowAnimation", true);
};

export function workAnimations({ tl, introRef, outroRef }) {
  let animationStatus = localStorage.getItem("dontShowAnimation");
  if (!animationStatus) {
    tl.current = gsap
      .timeline()
      //  navbar
      .from(
        ".nav",
        {
          width: 0,
          ease: "power4.out",
          duration: 1,
        },
        "main"
      )
      // sidebar wrapper
      .from(
        ".main-right",
        {
          height: 0,
          ease: "power4.out",
          duration: 1,
        },
        "main+=0.2"
      )
      // black part of footer
      .from(
        ".footer-right",
        {
          width: 0,
          ease: "power4.out",
          duration: 1,
        },
        "main+=.25"
      )

      // current page nav background color
      .from(
        ".left-nav",
        {
          opacity: 0,
          ease: "power4.out",
          duration: 0.5,
        },
        "nav"
      )
      // current page title
      .from(
        ".pageTitle span",
        {
          y: 70,
          ease: "power4.out",
          skewY: 7,
          duration: 1.7,
        },
        "nav+=.1"
      )
      // right nav's
      .from(
        ".nav-link a",
        {
          y: 40,
          ease: "power4.out",
          skewY: 7,
          duration: 1.7,
          delay: 0.5,
          stagger: {
            amount: 0.3,
          },
        },
        "nav+=.5"
      )
      .to(
        ".nav-link",
        {
          overflow: "unset",
          duration: 1,
          delay: 1,
        },
        "nav+=1"
      )
      // aside texts
      .from(
        ".aside",
        {
          opacity: 0,
          ease: "power4.out",
          duration: 1,
          delay: 1,
        },
        "nav+=.8"
      )
      // overlay that came before showing the main content
      .to(
        ".overlay-top",
        {
          height: 0,
          ease: "expo.inOut",
          stagger: 0.4,
          duration: 1.6,
        },
        "nav+=.3"
      )
      // slider left side
      .from(
        ".title-wrapper h2",
        {
          opacity: 0,
          x: -20,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1"
      )
      .from(
        ".title-wrapper a ",
        {
          opacity: 0,
          x: 20,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1"
      )
      .from(
        ".inner-slider-left-side p",
        {
          opacity: 0,
          y: -40,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1.4"
      )
      // slider right side
      .from(
        ".inner-slider-right-side",
        {
          opacity: 0,
          y: 100,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1.8"
      )
      .to(".top", {
        zIndex: -2,
        duration: 0.1,
        onComplete: addAnimationStatusToLocal,
      });
  } else {
    tl.current = gsap
      .timeline()
      // overlay that came before showing the main content
      .to(".nav-link", {
        overflow: "unset",
        duration: 0.3,
        ease: "expo.inOut",
      })
      .to(
        ".overlay-top",
        {
          height: 0,
          ease: "expo.inOut",
          stagger: 0.4,
          duration: 1.6,
        },
        "nav+=.3"
      )
      // slider left side
      .from(
        ".title-wrapper h2",
        {
          opacity: 0,
          x: -20,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1"
      )
      .from(
        ".title-wrapper a ",
        {
          opacity: 0,
          x: 20,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1"
      )
      .from(
        ".inner-slider-left-side p",
        {
          opacity: 0,
          y: -40,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1.4"
      )
      // slider right side
      .from(
        ".inner-slider-right-side",
        {
          opacity: 0,
          y: 100,
          ease: "expo.easeOut",
          duration: 1.6,
        },
        "nav+=1.8"
      )
      .to(".top", {
        zIndex: -2,
        duration: 0.1,
      });
  }
}
