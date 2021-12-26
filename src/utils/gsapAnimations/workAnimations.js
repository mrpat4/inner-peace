import gsap from "gsap";

export function workAnimations({ tl }) {
  tl.current = gsap
    .timeline()
    // overlay that came before showing the main content
    .to(
      ".overlay-top",
      {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
        duration: 1.6,
      },
      "nav"
    )
    .to(".top", {
      zIndex: -2,
      duration: 0.1,
    })
    // current page title
    .from(
      ".pageTitle span",
      {
        y: 70,
        ease: "power4.out",
        skewY: 7,
        duration: 1.7,
      },
      "nav+=.2"
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
      "nav+=.7"
    )
    .to(
      ".nav-link",
      {
        overflow: "unset",
        duration: 1,
        delay: 1,
      },
      "nav+=1.3"
    )
    // footer
    .from(
      ".footer-ul li",
      {
        y: 10,
        ease: "power4.out",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.4,
        },
      },
      "nav+=1.5"
    )
    // works footer
    .from(
      ".ul-footer-work li",
      {
        y: 10,
        ease: "power4.out",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.5,
        },
      },
      "nav+=1.5"
    )
    // slider left side
    .from(
      ".bgAnimation",
      {
        overflow: "hidden",
        height: "250px",
        padding: 0,
        width: 0,
        ease: "expo.easeOut",
        duration: 1,
      },
      "nav+=1.8"
    )
    .from(
      ".title-wrapper h2",
      {
        opacity: 0,
        x: -20,
        ease: "expo.easeOut",
        duration: 1.6,
      },
      "nav+=2.2"
    )
    .from(
      ".title-wrapper a ",
      {
        opacity: 0,
        x: 20,
        ease: "expo.easeOut",
        duration: 1.6,
      },
      "nav+=2.2"
    )
    .from(
      ".inner-slider-left-side p",
      {
        opacity: 0,
        y: -40,
        ease: "expo.easeOut",
        duration: 1.6,
      },
      "nav+=2.8"
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
      "nav+=3"
    )
    .to(".top", {
      zIndex: -2,
      duration: 0.1,
    });
}
