import gsap from "gsap";

export function aboutAnimationShow({ tl }) {
  tl.current = gsap
    .timeline()
    // section title
    .fromTo(
      ".title",
      {
        y: 10,
        ease: "power4.out",
        opacity: 0,
        // duration: 1.7,
        // delay: 0.5,
      },
      { y: 0, ease: "power4.out", opacity: 1, duration: 1.7, delay: 1 },
      "start"
    )
    // btn
    .fromTo(
      ".gsapAnimate",
      {
        y: 10,
        ease: "power4.out",
        opacity: 0,
        // duration: 1.7,
        // delay: 0.5,
      },
      { y: 0, ease: "power4.out", opacity: 1, duration: 1.7 },
      "start+=1"
    )
    //   description
    .fromTo(
      ".description",
      {
        y: 10,
        ease: "power4.out",
        opacity: 0,
        // duration: 1.7,
        // delay: 0.5,
      },
      { y: 0, ease: "power4.out", opacity: 1, duration: 1.7 },

      "start+=1.5"
    )
    //   image
    .fromTo(
      ".me",
      {
        x: 10,
        ease: "power4.out",
        opacity: 0,
        // duration: 1.7,
        // delay: 0.5,
      },
      { x: 0, ease: "power4.out", opacity: 1, duration: 1.7 },

      "start+=2"
    );
}

export function aboutAnimationHide({ tl }) {
  tl.current = gsap
    .timeline()
    // section title
    .fromTo(
      ".title",
      {
        y: 0,
        ease: "power4.out",
        opacity: 1,
        // duration: 1.7,
        // delay: 0.5,
      },
      { y: 10, ease: "power4.out", opacity: 0, duration: 0.1 },
      "start"
    )
    // btn
    .fromTo(
      ".gsapAnimate",
      {
        y: 0,
        ease: "power4.out",
        opacity: 1,
        // duration: 1.7,
        // delay: 0.1,
      },
      { y: 10, ease: "power4.out", opacity: 0, duration: 0.1 },
      "start"
    )
    //   description
    .fromTo(
      ".description",
      {
        y: 0,
        ease: "power4.out",
        opacity: 1,
        // duration: 1.7,
        // delay: 0.1,
      },
      { y: 10, ease: "power4.out", opacity: 0, duration: 0.1 },

      "start"
    )
    //   image
    .fromTo(
      ".me",
      {
        x: 0,
        ease: "power4.out",
        opacity: 1,
        // duration: 1.7,
        // delay: 0.1,
      },
      { x: 10, ease: "power4.out", opacity: 0, duration: 0.1 },

      "start"
    );
}
