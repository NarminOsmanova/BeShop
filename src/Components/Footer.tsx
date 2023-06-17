import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;
const Footer = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="footer-top__social">
                  <span>{t.find}:</span>
                  <ul className="d-flex">
                    <li>
                      <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="footer-top__logo">
                  <a href="/">
                    <img
                      src="https://beshop-demo.vercel.app/assets/img/footer-logo.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="footer-top__payment">
                  <span>{t.payment}</span>
                  <ul className="d-flex">
                    <li>
                      <img
                        src="https://beshop-demo.vercel.app/assets/img/payment1.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://beshop-demo.vercel.app/assets/img/payment2.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://beshop-demo.vercel.app/assets/img/payment3.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://beshop-demo.vercel.app/assets/img/payment4.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <span className="footer-nav_title">{t.pages}</span>
                <ul>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/about">{t.about}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.categories}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/shop">{t.shop}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/blog">{t.blog}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/contact">{t.contact}</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <span className="footer-nav_title">{t.categories}</span>
                <ul>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.category1}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.category2}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.category5}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.category3}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.category4}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/categories">{t.category6}</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <span className="footer-nav_title">{t.useful}</span>
                <ul>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/about">{t.careers}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/faq">{t.privacy}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/faq">{t.terms}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/blog">{t.support}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/shop/checkout">{t.shipping}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="/about">{t.information}</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <span className="footer-nav_title">{t.contact}</span>
                <ul className="last_footer_links">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    27 Division St, New York, NY 10002, USA
                  </li>
                  <li className="footer-nav_tel-number">
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <div className="footer-nav_tel">
                      <a href="tel:+13459971345">+1 345 99 71 345</a>
                      <a href="tel:+13457464975">+1 345 74 64 975</a>
                    </div>
                  </li>
                  <li className="footer-nav_email">
                    <i className="fa-regular fa-envelope"></i>
                    <a href="mailto:info@beshop.com">info@beshop.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {t.all}</span>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
