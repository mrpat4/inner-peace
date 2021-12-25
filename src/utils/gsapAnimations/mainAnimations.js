import gsap from "gsap";

export function mainAnimations({ tl, introRef, h1Ref, leftLineRef, rightLineRef, outroRef }) {
  let animationStatus = localStorage.getItem("dontShowAnimation");
  // if (!animationStatus) {
  //   tl.current = gsap
  //     .timeline()
  //     //  navbar
  //     .from(
  //       ".nav",
  //       {
  //         width: 0,
  //         ease: "power4.out",
  //         duration: 1,
  //       },
  //       "main"
  //     )
  //     // sidebar wrapper
  //     .from(
  //       ".main-right",
  //       {
  //         height: 0,
  //         ease: "power4.out",
  //         duration: 1,
  //       },
  //       "main+=0.2"
  //     )
  //     // black part of footer
  //     .from(
  //       ".footer-right",
  //       {
  //         width: 0,
  //         ease: "power4.out",
  //         duration: 1,
  //       },
  //       "main+=.25"
  //     )

  //     // current page nav background color
  //     .from(
  //       ".left-nav",
  //       {
  //         opacity: 0,
  //         ease: "power4.out",
  //         duration: 0.5,
  //       },
  //       "nav"
  //     )
  //     // current page title
  //     .from(
  //       ".pageTitle span",
  //       {
  //         y: 70,
  //         ease: "power4.out",
  //         skewY: 7,
  //         duration: 1.7,
  //       },
  //       "nav+=.1"
  //     )
  //     // right nav's
  //     .from(
  //       ".nav-link a",
  //       {
  //         y: 40,
  //         ease: "power4.out",
  //         skewY: 7,
  //         duration: 1.7,
  //         delay: 0.5,
  //         stagger: {
  //           amount: 0.3,
  //         },
  //       },
  //       "nav+=.5"
  //     )
  //     .to(
  //       ".nav-link",
  //       {
  //         overflow: "unset",
  //         duration: 1,
  //         delay: 1,
  //       },
  //       "nav+=1"
  //     )
  //     // aside texts
  //     .from(
  //       ".aside",
  //       {
  //         opacity: 0,
  //         ease: "power4.out",
  //         duration: 1,
  //         delay: 1,
  //       },
  //       "nav+=.8"
  //     )
  //     // overlay that came before showing the main content
  //     .to(
  //       ".overlay-top",
  //       {
  //         height: 0,
  //         ease: "expo.inOut",
  //         stagger: 0.4,
  //         duration: 1.6,
  //       },
  //       "nav+=.3"
  //     )
  //     .to(".top", {
  //       zIndex: -2,
  //       duration: 0.1,
  //     })
  //     // main content h1
  //     .from(
  //       h1Ref.current,
  //       {
  //         y: 100,
  //         opacity: 0,
  //         duration: 1.8,
  //         ease: "power4.out",
  //         skewY: 7,
  //         //   onComplete: () => setAnimationComplete(true),
  //       }
  //       // "nav+=.4"
  //     )
  //     // main content left and right line
  //     .from(leftLineRef.current, { width: 0, duration: 0.5, ease: "power4.out" }, "label")
  //     .from(rightLineRef.current, { width: 0, duration: 0.5, ease: "power4.out" }, "label");
  // } else
  // {
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
      }
      // "nav+=.3"
    )
    .to(".top", {
      zIndex: -2,
      duration: 0.1,
    })
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
    // main content h1
    .from(
      h1Ref.current,
      {
        y: 100,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        skewY: 7,
      }
      // "nav+=.4"
    )
    // main content left and right line
    .from(leftLineRef.current, { width: 0, duration: 0.5, ease: "power4.out" }, "label")
    .from(rightLineRef.current, { width: 0, duration: 0.5, ease: "power4.out" }, "label");
}
// }
