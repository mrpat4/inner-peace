import gsap from "gsap";

export function mainAnimations({ tl, introRef, h1Ref, leftLineRef, rightLineRef, outroRef }) {
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
    // main content h1
    .from(
      h1Ref.current,
      {
        y: 100,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        skewY: 7,
      },
      "nav+=1.5"
    )
    // main content left and right line
    .from(leftLineRef.current, { width: 0, duration: 0.8, ease: "power4.out" }, "nav+=2.5")
    .from(rightLineRef.current, { width: 0, duration: 0.8, ease: "power4.out" }, "nav+=2.5");
}
// }
