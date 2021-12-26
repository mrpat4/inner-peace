import change from "utils/changeWithDir";
import s from "./style";
import { workData } from "./seed";
import { Children, useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { motion } from "framer-motion";

function WorkComponent() {
  // ---------------------------------------------------- states
  const [selectedImages, setSelectedImages] = useState();
  const [modal, setModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // -------------------------------- slider settings

  const mainSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    arrows: false,
    // afterChange: (current) => console.log({ current }),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const imagesSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "0px",
    // adaptiveHeight: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: "fit-content",
          bottom: "50%",
          right: "-40px",
          transform: "rotate(90deg)",
        }}
      >
        <ul style={{ margin: "0px", background: "rgb(177 175 175 / 40%)", borderRadius: "7px", display: "flex" }}> {dots} </ul>
      </div>
    ),
  };
  const modalSliderSetting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  };

  // ----------------------------------- modal handler
  const handleShowModal = (images, index) => {
    if (mouseDown && mouseMove) {
      setMouseDown(false);
      setMouseMove(false);
    } else {
      setSelectedImages(images);
      setTimeout(() => {
        sliderRef.current.slickGoTo(index);
        setModal(true);
      }, 100);
    }
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedImages(undefined);
  };

  console.log({ currentSlide });
  // ----------------------------------------- sliders refs
  const sliderRef = useRef(null);
  const mainSliderRef = useRef(null);

  /* 
  ----------------- for prevent link to be clicked ----------------------------
      ----------- when user changing the slider photo --------------------
  */
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);
  const linkRef = useRef(undefined);
  // =============================== handlers==========================
  const mouseDownHandler = () => {
    setMouseDown(true);
  };
  const mouseMoveHandler = () => {
    mouseDown ? setMouseMove(true) : setMouseMove(false);
  };

  // ----------------------------------------------- exit animation
  const leftSideAnimation = {
    hidden: {},
    exit: {
      y: -100,
      transition: {
        duration: 1,
        delay: 0.7,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const rightSideAnimation = {
    hidden: {},
    exit: {
      y: -100,
      transition: {
        duration: 1,
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  //  ----------------------------------------- return
  return (
    <>
      <s.Wrapper>
        <div className="slicker">
          <Slider {...mainSliderSettings} ref={mainSliderRef}>
            {Children.toArray(
              workData.map((work, i) => (
                <div className="inner-slider-wrapper">
                  <div className="inner-slider-left-side" variants={leftSideAnimation} exit="exit">
                    <div className="bgAnimation">
                      <div className="title-wrapper">
                        <h2>{work.name}</h2>
                        <Link href={work.link}>
                          <a className={`${work.disabled ? "disabled" : ""} sk-btn sk-btn`}>
                            <span className="sk-btn_wrapper">
                              <span data-text={work.name}>Visit Website</span>
                            </span>
                          </a>
                        </Link>
                      </div>
                      <p>{work.description}</p>
                    </div>
                  </div>
                  <motion.div className="inner-slider-right-side" ref={linkRef} onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler} variants={rightSideAnimation} exit="exit">
                    <div className="work-image-wrapper">
                      {/* {work.images.map((image, i) => ( */}
                      <img src={work.images[0].src} onClick={() => handleShowModal(work.images)} />
                      {/* ))} */}
                    </div>
                  </motion.div>
                  {/* <motion.div className="inner-slider-right-side" ref={linkRef} onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler} variants={rightSideAnimation} exit="exit">
                    <Slider {...imagesSliderSettings}>
                      {work.images.map((image, i) => (
                        <img src={image.src} onClick={(e) => handleShowModal(work.images, i, e)} />
                      ))}
                    </Slider>
                  </motion.div> */}
                </div>
              ))
            )}
          </Slider>
        </div>
      </s.Wrapper>
      {/*  modal for showing big images in slider */}
      <s.Modal show={modal}>
        <s.Modal_wrapper>
          <s.Modal_header onClick={handleCloseModal}>
            <div className="close-btn">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </s.Modal_header>
          <s.Modal_content>
            {selectedImages ? (
              <Slider {...modalSliderSetting} ref={sliderRef}>
                {selectedImages?.map((image) => (
                  <img src={image.src} />
                ))}
              </Slider>
            ) : (
              ""
            )}
          </s.Modal_content>
        </s.Modal_wrapper>
      </s.Modal>
      <s.Footer>
        <ul className="ul-footer-work">
          {workData.map((work, i) => (
            <li className={`${i === currentSlide ? "active" : ""}`} onClick={() => mainSliderRef.current.slickGoTo(i)}>
              <span className="left-border"></span>
              {work.name}
              <span className="right-border"></span>
            </li>
          ))}
        </ul>
      </s.Footer>
    </>
  );
}

export default WorkComponent;
