import s from "./style";
import me from "images/me.png";

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
            I am Parham Payam, a seasoned Front End Developer with a strong focus on React and
            Next.js technologies. Over an impressive career spanning over 4 years, I have honed my
            skills and expertise in the field of front-end development, becoming a reliable and
            innovative professional in the process. I have had the privilege of working for 3
            international companies, where I have been instrumental in driving their digital
            transformation efforts. My contributions have ranged from developing user-friendly
            interfaces to optimizing web performance, ensuring a seamless user experience across
            various platforms. My extensive experience, coupled with my passion for staying updated
            with the latest industry trends, makes me an invaluable asset to any team. I am not just
            a developer; I am a problem solver who is always ready to take on new challenges and
            deliver efficient solutions.
          </p>
          <h3>Tools i use :</h3>
          <p>
            Next.js, React.js,Styled components, Tailwind css,Framer motion,Redux, Saga, TypeScript,
            axios, react-query, hook-form, socket io, yup and ...
          </p>
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
