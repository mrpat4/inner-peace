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
  const [currentWork, setCurrentWork] = useState(null);

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
    afterChange: (index) => menuSliderRef.current.slickGoTo(index),
  };
  const menuSliderSettings = {
    dots: false,
    // infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // variableWidth: true,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    // afterChange: (current) => console.log({ current }),
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
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
        <ul
          style={{
            margin: "0px",
            background: "rgb(177 175 175 / 40%)",
            borderRadius: "7px",
            display: "flex",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  const modalSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  };
  /* 
  ----------------- for prevent link to be clicked ----------------------------
      ----------- when user changing the slider photo --------------------
  */

  const linkRef = useRef(undefined);

  // ----------------------------------- modal handler
  const handleShowModal = (work, index) => {
    setSelectedImages(work.images);
    setCurrentWork(work);
    setTimeout(() => {
      sliderRef.current.slickGoTo(index);
      setModal(true);
    }, 100);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedImages(undefined);
  };

  console.log({ currentSlide });
  // ----------------------------------------- sliders refs
  const sliderRef = useRef(null);
  const mainSliderRef = useRef(null);
  const menuSliderRef = useRef(null);
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
                <div
                  className="inner-slider-wrapper"
                  // onClick={() => menuSliderRef.current.slickGoTo(i)}
                >
                  <div className="inner-slider-left-side" variants={leftSideAnimation} exit="exit">
                    <div className="bgAnimation">
                      <div className="title-wrapper">
                        <h2>{work.name}</h2>
                        <Link href={work.link}>
                          <a
                            className={`${work.disabled ? "disabled" : ""} sk-btn sk-btn`}
                            target="_blank"
                          >
                            <span className="sk-btn_wrapper">
                              <span data-text={work.name}>Visit Website</span>
                            </span>
                          </a>
                        </Link>
                      </div>
                      <p>{work.description}</p>
                      {work.main && (
                        <p style={{ marginTop: "2rem" }}>
                          <a href={work.main} target="_blank">
                            Main Website
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                  <motion.div
                    className="inner-slider-right-side"
                    ref={linkRef}
                    variants={rightSideAnimation}
                    exit="exit"
                  >
                    <div className="work-image-wrapper">
                      {/* {work.images.map((image, i) => ( */}
                      <img src={work.images[0].src} onClick={() => handleShowModal(work)} />
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
          <s.Modal_texts>
            <h3>{currentWork?.name}</h3>
          </s.Modal_texts>
          <s.Modal_header onClick={handleCloseModal}>
            <div className="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
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
          <Slider {...menuSliderSettings} ref={menuSliderRef}>
            {workData.map((work, i) => (
              <li
                className={`${i === currentSlide ? "active" : ""}`}
                onClick={() => mainSliderRef.current.slickGoTo(i)}
              >
                <span className="left-border"></span>
                {work.name}
                <span className="right-border"></span>
              </li>
            ))}
          </Slider>
        </ul>
      </s.Footer>
    </>
  );
}

export default WorkComponent;
