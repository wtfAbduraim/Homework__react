import React from "react";
import "./Hero.scss";
import HeroImg from "../img/Hero-img.png";
import HeroVideo from "../img/Hero-video.svg";

function Hero() {
  const getRef = React.useRef(null);
  const linkRef = React.useRef(null);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <hr className="chiziq__1" />
            <hr className="chiziq__2" />
            <h1 className="hero__heading">
              Best <span className="heading__span">Marketing</span> Digital
              Agency
            </h1>
            <hr className="chiziq__3" />
            <hr className="chiziq__4" />

            <p className="hero__text">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose
            </p>
            
            <div className="flex">
              <div className="btn__1">
                <div ref={getRef} className="header__modal hero__modal">
                  <button
                    className="header__delete"
                    onClick={() => {
                      getRef.current.classList.remove("header__block");
                    }}
                  >
                    X
                  </button>
                  <h1 className="header__heading">Our Market</h1>
                  <p className="header__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illo, placeat!
                  </p>
                </div>
                <button
                  className="header__btn"
                  onClick={() => {
                    getRef.current.classList.add("header__block");
                  }}
                >
                  Get Started
                </button>
              </div>

              <div className="btn__2">
                <div ref={linkRef} className="header__modal hero__modal yutub">
                  <button
                    className="hero__delete"
                    onClick={() => {
                      linkRef.current.classList.remove("header__block");
                    }}
                  >
                    X
                  </button>
                  <div className="YouTube">
                    <iframe
                      className="radius"
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/La615vqMQ8Y?si=_dMt1FR0px2I_wsP&amp;start=10"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <button
                  className="header__btn hero__btn"
                  onClick={() => {
                    linkRef.current.classList.add("header__block");
                  }}
                >
                  <img
                    className="hero__img-btn"
                    src={HeroVideo}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
          <img
            className="hero__img"
            src={HeroImg}
            alt="img"
            width={599}
            height={592}
          />
        </div>
      </section>
    </>
  );
}
export default Hero;
