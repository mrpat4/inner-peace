import { Children } from "react";
import s from "./style";
import { Github, Instagram, LinkedIn } from "utils/svg";

function Footer() {
  const data = [
    { title: "Github", link: "#", icon: <Github /> },
    { title: "Instagram", link: "#", icon: <Instagram /> },
    { title: "LinkedIn", link: "#", icon: <LinkedIn /> },
  ];
  return (
    <s.Footer>
      <s.Div_left_side></s.Div_left_side>
      <s.Div_right_side className="footer-right">
        <ul>
          {Children.toArray(
            data.map((param) => (
              <li>
                <a href={param.link} title={param.title}>
                  {param.icon}
                </a>
              </li>
            ))
          )}
        </ul>
      </s.Div_right_side>
    </s.Footer>
  );
}

export default Footer;
