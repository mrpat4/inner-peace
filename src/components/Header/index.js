import { Children, useEffect, useRef, useState } from "react";
import Link from "next/link";
import s from "./style";
import { useRouter } from "next/dist/client/router";
import gsap from "gsap";
import About from "components/About";
import { aboutAnimationHide, aboutAnimationShow } from "utils/gsapAnimations/aboutAnimations";

function Header({ pageTitle, setClickedNavState, clickedNavState }) {
  const router = useRouter();
  const navMenu = [
    { title: "Home", link: "/" },
    { title: "Works", link: "/works" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "" },
  ];

  useEffect(() => {
    // document.querySelector(".pageTitle").addEventListener("mouseleave", function (e) {
    //   // gsap.to(this, { height: 150, width: 150, duration: 0.3 });
    //   gsap.to(".pageTitle span", { scale: 1, x: 0, y: 0, duration: 0.3 });
    // });

    // document.querySelector(".pageTitle").addEventListener("mouseenter", function (e) {
    //   // gsap.to(this, { height: 200, width: 200, duration: 0.3 });
    //   gsap.to(".pageTitle span", { scale: 1.3, duration: 0.3 });
    // });

    // document.querySelector(".pageTitle").addEventListener("mousemove", function (e) {
    //   callParallax(e);
    // });

    // function callParallax(e) {
    //   parallaxIt(e, ".pageTitle span", 15);
    // }

    // function parallaxIt(e, target, movement) {
    //   var page = document.querySelector(".pageTitle");
    //   var relX = e.pageX - page.offsetLeft;
    //   var relY = e.pageY - page.offsetTop;

    //   gsap.to(target, {
    //     x: ((relX - page.clientWidth / 2) / page.clientWidth) * movement,
    //     y: ((relY - page.clientHeight / 2) / page.clientHeight) * movement,
    //     duration: 0.3,
    //     ease: "Power2.easeOut",
    //   });
    // }
    const navLinks = document.querySelectorAll(".nav-link");
    const navLinksA = document.querySelectorAll(".nav-link a");

    console.log({ navLinks, navLinksA });
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("mouseleave", function (e) {
        // gsap.to(this, { height: 150, width: 150, duration: 0.3 });
        gsap.to(navLinksA[i], { scale: 1, x: 0, y: 0, duration: 0.3 });
      });
      navLinks[i].addEventListener("mouseenter", function (e) {
        // gsap.to(this, { height: 200, width: 200, duration: 0.3 });
        gsap.to(navLinksA[i], { scale: 1.3, duration: 0.3 });
      });
      navLinks[i].addEventListener("mousemove", function (e) {
        callParallax(e);
      });
      function callParallax(e) {
        parallaxIt(e, navLinksA[i], 15);
      }
      function parallaxIt(e, target, movement) {
        var page = navLinksA[i];
        var relX = e.pageX - page.offsetLeft;
        var relY = e.pageY - page.offsetTop;

        gsap.to(target, {
          x: ((relX - page.clientWidth / 2) / page.clientWidth) * movement,
          y: ((relY - page.clientHeight / 2) / page.clientHeight) * movement,
          duration: 0.3,
          ease: "Power2.easeOut",
        });
      }
    }
  }, []);
  const [className, setClassName] = useState("home");
  let tl = useRef();

  const navClickHandler = (navItem) => {
    setClickedNavState(navItem.title === "About" && !clickedNavState);
    // clickedNavState ? aboutAnimationShow(...{ tl }) : aboutAnimationHide(...{ tl });
    // aboutAnimationShow({ ...{ tl } });
  };

  useEffect(() => {
    clickedNavState && aboutAnimationShow({ ...{ tl } });
  }, [clickedNavState]);

  useEffect(() => {
    if (router.pathname === "/") {
      setClassName("home");
    } else {
      setClassName("other");
    }
  }, [pageTitle]);
  return (
    <>
      <s.Nav className="nav">
        <s.Div_left className={className}>
          <p className="pageTitle" style={{ display: "flex" }}>
            <span>{pageTitle}</span>
          </p>
        </s.Div_left>
        <s.Ul_right>
          {Children.toArray(
            navMenu.map((navItem, i) => (
              <s.Li style={{ display: `${navItem.title === pageTitle ? "none" : "flex"}` }} className="nav-link" onClick={() => navClickHandler(navItem)}>
                <Link href={navItem.link}>
                  <a>{navItem.title}</a>
                </Link>
              </s.Li>
            ))
          )}
        </s.Ul_right>
      </s.Nav>
      <s.About_wrapper className={`${clickedNavState ? "show-about" : ""}`}>
        <About clickedNavState={clickedNavState} />
      </s.About_wrapper>
    </>
  );
}

export default Header;
