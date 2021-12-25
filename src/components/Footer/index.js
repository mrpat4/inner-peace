import { Children } from "react";
import s from "./style";

function Footer({ data }) {
  console.log({ data });
  return (
    <s.Footer>
      <s.Div_left_side>
        {data ? (
          <ul>
            {Children.toArray(
              data.map((param) => (
                <li>
                  <span className="leftBorder"></span>
                  {param}
                  <span className="rightBorder"></span>
                </li>
              ))
            )}
          </ul>
        ) : (
          ""
        )}
      </s.Div_left_side>
      <s.Div_right_side className="footer-right"></s.Div_right_side>
    </s.Footer>
  );
}

export default Footer;
