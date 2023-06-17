import React, { Component } from "react";
import img from "../assets/img/404.jpeg";
import { Helmet } from "react-helmet";

export class NotFoundPage extends Component {
  componentDidMount() {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    if (navbar) {
      navbar.style.display = "none";
    }
    const footer = document.querySelector(".footer") as HTMLElement;
    if (footer) {
      footer.style.display = "none";
    }
  }

  render() {
    return (
      <section className="not-found">
        <Helmet>
          <meta charSet="utf-8" />
          <title>404</title>
        </Helmet>
        <div className="section-block">
          <div className="container">
            <div className="section-content">
              <h1>404 Page</h1>
              <ul className="section-content__ul">
                <li className="section-content__item">Oops!</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="error-page__info">
                <div className="error-page__title">
                  <img src={img} alt="" />
                </div>
                <div className="error-page__subtitle">
                  Please go back to{" "}
                  <a href="/">Homepage.</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="error-page__img">
                <img
                  src="https://beshop-demo.vercel.app/assets/img/error-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NotFoundPage;
