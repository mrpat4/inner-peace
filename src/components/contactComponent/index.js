import { motion } from "framer-motion";
import { Children } from "react";
import { socialData } from "./seed";
import s from "./style";
function ContactComponent() {
  const h1AndP = {
    hidden: {},
    exit: {
      y: -50,
      transition: {
        duration: 1,
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const ul = {
    hidden: {},
    exit: {
      y: -50,
      transition: {
        duration: 1,
        delay: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <s.Wrapper>
      <s.Div_header_wrapper>
        <motion.h1 variants={h1AndP} exit="exit" className="contact-title">
          Lets Talk !
        </motion.h1>
        <motion.p variants={h1AndP} exit="exit" className="contact-sub">
          Seriously let&apos;s talk,you text me about anything you like and i will replay,PROMISE
        </motion.p>
      </s.Div_header_wrapper>
      <s.Div_social_wrapper>
        <motion.ul variants={ul} exit="exit" className="contact-ul">
          {Children.toArray(
            socialData.map((item) => (
              <li key={item.title}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className="svg-wrapper">{item.icon}</div>
                  <div className="text-wrapper">
                    <p className="contact-item-title">{item.title}</p>
                    <p className="contact-item-desc">{item.desc}</p>
                  </div>
                </a>
              </li>
            ))
          )}
        </motion.ul>
      </s.Div_social_wrapper>
    </s.Wrapper>
  );
}

export default ContactComponent;
