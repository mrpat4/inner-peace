import { Children, useEffect, useRef, useState } from "react";
import Link from "next/link";
import s from "./style";
import { useRouter } from "next/dist/client/router";
import gsap from "gsap";
import About from "components/About";
import { aboutAnimationHide, aboutAnimationShow } from "utils/gsapAnimations/aboutAnimations";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "./redux/themeSlice";
import useDarkMode from "use-dark-mode";
function Header({ pageTitle, setClickedNavState, clickedNavState }) {
  const router = useRouter();
  const darkMode = useDarkMode();

  const navMenu = [
    { title: "Home", link: "/", onClick: false },
    { title: "Works", link: "/works", onClick: false },
    { title: "Contact", link: "/contact", onClick: false },
    { title: "About", link: "", onClick: false },
    {
      title: darkMode.value ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
        </svg>
      ),
      link: "",
      onClick: true,
    },
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
    console.log({ navLinks });
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
  }, [router.pathname]);
  const [className, setClassName] = useState("home");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  let tl = useRef();

  const navClickHandler = (navItem) => {
    setClickedNavState(navItem.title === "About" && !clickedNavState);
    navItem.onClick ? darkMode.toggle : "";
    setMenuIsOpen(false);
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

  // ------------------------------- Outside Click Handler
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuIsOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [menuIsOpen]);

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
              <s.Li
                key={navItem.title + i}
                style={{ display: `${navItem.title === pageTitle ? "none" : "flex"}` }}
                className="nav-link"
                onClick={!navItem.onClick ? () => navClickHandler(navItem) : darkMode.toggle}
              >
                <Link href={navItem.link}>
                  <a>{navItem.title}</a>
                </Link>
              </s.Li>
            ))
          )}
        </s.Ul_right>
        <s.Div_hamburger onClick={() => setMenuIsOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
          </svg>
        </s.Div_hamburger>
      </s.Nav>
      <s.Ul_right_mobile menu={menuIsOpen} ref={ref}>
        <li className="close-menu-btn" onClick={() => setMenuIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </li>
        {Children.toArray(
          navMenu.map((navItem, i) => (
            <li
              key={`${navItem}head`}
              style={{ display: `${navItem.title === pageTitle ? "none" : "flex"}` }}
              onClick={!navItem.onClick ? () => navClickHandler(navItem) : darkMode.toggle}
            >
              <Link href={navItem.link}>
                <a>{navItem.title}</a>
              </Link>
            </li>
          ))
        )}
      </s.Ul_right_mobile>
      <s.Overlay show={menuIsOpen}></s.Overlay>
      <s.About_wrapper className={`${clickedNavState ? "show-about" : ""}`}>
        <About clickedNavState={clickedNavState} setClickedNavState={setClickedNavState} />
      </s.About_wrapper>
    </>
  );
}

export default Header;
