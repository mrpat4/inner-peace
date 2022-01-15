import { Children } from "react";
import s from "./style";
import { Github, Instagram, LinkedIn } from "utils/svg";
import { useRouter } from "next/dist/client/router";

function Footer() {
  const data = [
    { title: "Github", link: "https://github.com/mrpat4", icon: <Github /> },
    { title: "Instagram", link: "https://www.instagram.com/parham.pym/", icon: <Instagram /> },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/parham-payam-515a181ab/",
      icon: <LinkedIn />,
    },
  ];
  const router = useRouter();
  console.log({ router });
  return (
    <s.Footer>
      <s.Div_left_side></s.Div_left_side>
      <s.Div_right_side className="footer-right">
        <ul className={`${router.pathname === "/works" ? "hide-it" : ""} footer-ul`}>
          {Children.toArray(
            data.map((param) => (
              <li key={param.title}>
                <a href={param.link} title={param.title} target="_blank" rel="noreferrer">
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
