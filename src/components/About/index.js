import s from "./style";
import me from "images/me.jpg";

function About({ clickedNavState }) {
  return (
    <s.Div_about className={`${clickedNavState ? "" : "hide-content"}`}>
      <s.Left_side>
        <s.Title_wrapper>
          <h1 className="title">About Me</h1>
          <a href="#" className={"sk-btn sk-btn gsapAnimate"}>
            <span className="sk-btn_wrapper">
              <span data-text="Download">My Resume</span>
            </span>
          </a>
        </s.Title_wrapper>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sequi tenetur nisi nostrum libero vel, odit in optio unde provident aliquid beatae, fugiat consequatur quos eos deleniti. Reiciendis fugit, aspernatur vitae quidem dicta accusamus provident! Sapiente vitae facilis
          voluptas quia perspiciatis nesciunt id aliquam odit nobis, enim ratione temporibus pariatur?
        </p>
      </s.Left_side>
      <s.Right_side>
        <img className="me" src={me.src} alt="this is me" />
      </s.Right_side>
    </s.Div_about>
  );
}
export default About;
