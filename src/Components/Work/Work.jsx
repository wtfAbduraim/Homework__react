import React from "react";
import "./Work.scss";
import WorkImg from "../img/Work.svg";

export default function Work() {

  const ExploreRef = React.useRef(null);

  return (
    <>
      <section className="work">
        <div className="container">
          <div className="work__info">
            <h4 className="work__heading">What we do</h4>
            <h3 className="work__title">
              We Are Here To Help You Build Your Business🚀
            </h3>
            <p className="work__text">
              Sed ut perspiciatis unde omnis iste natus error sit of the
              voluptatem accusantium lorem sit doloremque, totam rem aperiam,
              eaque ipsa quae ab illo invento veritatis quasi architecto beatae
              vitae dicta.
            </p>

            <div ref={ExploreRef} className="header__modal work__i">
              <button
                className="header__delete"
                onClick={() => {
                  ExploreRef.current.classList.remove("header__block");
                }}
              >
                X
              </button>
              <h1 className="header__heading">Abduraim</h1>
              <p className="header__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                placeat!
              </p>
            </div>
            <button
              type="button"
              className="header__btn work__btn"
              onClick={() => {
                ExploreRef.current.classList.add("header__block");
              }}
            >
                Explore all service
            </button>
          </div>

          <ul className="work__list">
            <li className="work__item">
              <img
                className="work__img"
                src={WorkImg}
                alt="img"
                width={71}
                height={71}
              />
              <h5 className="work__word">Digital Marketing</h5>
              <p className="work__comment">
                That is the simply dummy text the printing and typesetting
                industry.
              </p>
              <a className="work__link" href="#">
                Read more
              </a>
            </li>
            <li className="work__item">
              <img
                className="work__img"
                src={WorkImg}
                alt="img"
                width={71}
                height={71}
              />
              <h5 className="work__word">Digital Marketing</h5>
              <p className="work__comment">
                That is the simply dummy text the printing and typesetting
                industry.
              </p>
              <a className="work__link" href="#">
                Read more
              </a>
            </li>
            <li className="work__item">
              <img
                className="work__img"
                src={WorkImg}
                alt="img"
                width={71}
                height={71}
              />
              <h5 className="work__word">Digital Marketing</h5>
              <p className="work__comment">
                That is the simply dummy text the printing and typesetting
                industry.
              </p>
              <a className="work__link" href="#">
                Read more
              </a>
            </li>
            <li className="work__item">
              <img
                className="work__img"
                src={WorkImg}
                alt="img"
                width={71}
                height={71}
              />
              <h5 className="work__word">Digital Marketing</h5>
              <p className="work__comment">
                That is the simply dummy text the printing and typesetting
                industry.
              </p>
              <a className="work__link" href="#">
                Read more
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
