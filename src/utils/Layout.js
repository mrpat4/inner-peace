import Meta from "reusableComponents/Meta";
import dynamic from "next/dynamic";
import Sidebar from "components/Sidebar";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HeaderContainer = dynamic(import("components/Header"));
const FooterContainer = dynamic(import("components/Footer"));

const Layout = ({ Component, pageProps, props }) => {
  const [clickedNavState, setClickedNavState] = useState(false);
  // useEffect(() => {
  //   tl.current = gsap.timeline().from(".nav-link a", {
  //     y: 100,
  //     ease: "power4.out",
  //     // delay: 1,
  //     skewY: 7,
  //     duration: 1.6,
  //     stagger: {
  //       amount: 0.3,
  //     },
  //   });
  // }, []);
  if (Component?.defaultLayout) {
    return (
      <>
        <Meta />
        <HeaderContainer
          pageTitle={Component.defaultLayout}
          setClickedNavState={setClickedNavState}
          clickedNavState={clickedNavState}
        />
        <main>
          <div className="main-left">
            <Component {...pageProps} {...props} clickedNavState={clickedNavState} />
          </div>
          {/* <div className="main-right">
            <Sidebar clickedNavState={clickedNavState} />
          </div> */}
        </main>
        <FooterContainer />
      </>
    );
  } else return <Component {...pageProps} />;
};

export default Layout;
