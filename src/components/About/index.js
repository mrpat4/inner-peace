import s from "./style";
import me from "images/me.jpg";

function About({ clickedNavState, setClickedNavState }) {
  return (
    <s.Div_about className={`${clickedNavState ? "" : "hide-content"}`}>
      <s.Back_icon
        className="back-ico"
        onClick={() => {
          setClickedNavState(false);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
        </svg>
      </s.Back_icon>
      <s.Left_side>
        <s.Title_wrapper>
          <h1 className="title">About Me</h1>
          <a
            href="/image/Portfolio.pdf"
            download={"resume"}
            className={"sk-btn sk-btn gsapAnimate"}
          >
            <span className="sk-btn_wrapper">
              <span data-text="Download">My Resume</span>
            </span>
          </a>
        </s.Title_wrapper>
        <div className="desc-wrapper description">
          <p className="">
            Hi, Im Parham Payam,a FRONT END DEVELOPER ! it's been 4 years since i started coding,
            first I started my journey with HTML, CSS and javaScript, then I studied react.js and
            next.js, I was working as a freelancer for about 2 years, and after that I felt I needed
            to be in a company to learn team work and gain some more experience,so I joined improver
            digital company and then nexprover, i learned so many things for instance:
          </p>
          <h3>Tools i use :</h3>
          <p>Redux, Saga, TypeScript, axios, react-query, hook-form, socket io, yup and ...</p>
          <h3>My Favorite Ones Are:</h3>
          <p>styled components, gsap and framer motion</p>
          {/* <h3>Learning :</h3>
          <p>Currently im learning Three.js</p> */}
        </div>
      </s.Left_side>
      <s.Right_side>
        <img className="me" src={me.src} alt="this is me" />
      </s.Right_side>
    </s.Div_about>
  );
}
export default About;
