import gsap from "gsap";

export function ContactAnimations({ tl }) {
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
    // -----------------------------------------------slider left side
    .from(
      ".contact-title",
      {
        y: -40,
        ease: "power4.out",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      },
      "nav+=1.8"
    )
    .from(
      ".contact-sub",
      {
        y: 40,
        ease: "power4.out",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      },
      "nav+=2"
    )
    .from(
      ".svg-wrapper",
      {
        y: -100,
        ease: "Elastic.easeOut",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      },
      "nav+=2.5"
    )
    .from(
      ".text-wrapper .contact-item-title",
      {
        x: -40,
        ease: "power4.out",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      },
      "nav+=2.8"
    )
    .from(
      ".text-wrapper .contact-item-desc",
      {
        x: 40,
        ease: "power4.out",
        opacity: 0,
        duration: 1.7,
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      },
      "nav+=2.8"
    )
    .to(".top", {
      zIndex: -2,
      duration: 0.1,
    });
}
