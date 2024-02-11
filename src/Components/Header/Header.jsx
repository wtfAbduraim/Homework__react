import React from "react";
import "./Header.scss";
import HeaderLogo from "../img/Header__logo.svg";

function Header() {
  const modalRef = React.useRef(null);

  const render = [
    {
      id: 0,
      title: "Features",
    },
    {
      id: 1,
      title: "Pricing & Plans",
    },
    {
      id: 2,
      title: "Support",
    },
    {
      id: 3,
      title: "About Us",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <a className="header__link" href="#">
            <img
              className="header__img"
              src={HeaderLogo}
              alt="logo"
              width={189}
              height={40}
            />
          </a>

          <nav className="header__nav">
            <ul className="header__list">
              {render.map((element) => (
                <li className="header__item" key={element.id}>
                  <a className="nav__link" href="#">
                    {element.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div ref={modalRef} className="header__modal header__info">
            <button
              className="header__delete"
              onClick={() => {
                modalRef.current.classList.remove("header__block");
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
            className="header__btn"
            onClick={() => {
              modalRef.current.classList.add("header__block");
            }}
          >
            Contact us
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
