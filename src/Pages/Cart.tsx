import React, { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Cart: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  const { items, updateItemQuantity, isEmpty, removeItem, emptyCart, cartTotal } = useCart()

  // cart totalda catdirilmaya gore hesablama 
  const [shippingMethod, setShippingMethod] = useState("free");

  function updateTotal() {
    if (shippingMethod === "local") {
      return cartTotal + 10;
    } else {
      return cartTotal;
    }
  }
  // login olmusamsa birbasa checkouta olmamisamsa logine atsin
  const navigate = useNavigate();
  const handleProceed = () => {
    const isLoggedIn = localStorage.getItem('user');
    window.scrollTo(0, 0)
    if (isLoggedIn) {
      navigate('/shop/checkout');
    } else {
      navigate('/login');
    }
  };
  // toastify
  const notify = (message: any) =>
    toast.warn('Product removed!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <section className="cart">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__jello animate__animated">{t.cart}</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">{t.cart}</li>
          </ul>
        </div>
      </div>
      {isEmpty ? (<div className="cart-container">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <div className="cart-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/372/372705.png"
                alt=""
              />
            </div>
            <p className="fw-semibold mt-4" style={{ fontSize: "14px" }}>
              {t.currently}
            </p>
            <LinkContainer to="/shop" onClick={() => { window.scrollTo(0, 0) }}>
              <Button
                variant="outline-dark"
                className="fw-semibold"
                size="sm"
              >
                {t.return}
              </Button>
            </LinkContainer>
          </div>
        </div></div>) : (<div className="cart-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 pe-5">
                <Table>
                  <thead>
                    <tr>
                      <th>{t.product}</th>
                      <th>{t.price}</th>
                      <th>{t.quantity}</th>
                      <th>{t.subtotal}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item: any) => {
                      return (
                        <tr key={item.id}>
                          <td className="d-flex align-items-center">
                            <img
                              className="me-2"
                              src={item.img}
                              alt=""
                            />
                            <span>{item.title}</span>{" "}
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            />
                            <input type="text" value={item.quantity} />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            />
                          </td>
                          <td>${item.price * item.quantity}</td>
                          <td>
                            <span
                              onClick={() => {
                                const message = removeItem(item.id)
                                notify(message);
                              }}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </span>
                            <ToastContainer
                              position="bottom-left"
                              autoClose={5000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="dark"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <div className="text-center">
                  <span
                    className="fw-semibold"
                    onClick={() => {
                      emptyCart();
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i> {t.empty}
                  </span>
                </div>
              </div>
              <div className="col-12 col-lg-4 px-5 mb-5">
                <h2 className="mb-2 mt-5 mt-lg-0">{t.carttotal}</h2>
                <table>
                  <thead>
                    <tr>
                      <th>{t.subtotal}</th>
                      <td>
                        <span className="">${cartTotal}</span>
                      </td>
                    </tr>
                    <tr>
                      <th>{t.shippingc}</th>
                      <td style={{ textAlign: "left" }}>
                        <ul className="list-unstyled ms-5">
                          <li className="pb-3">
                            <input type="radio" name="shipping" id="freeshipping" onChange={() => setShippingMethod("free")} />
                            <label className="ms-2" htmlFor="freeshipping">
                              {t.free}
                            </label>
                          </li>
                          <li>
                            <input type="radio" name="shipping" id="local" onChange={() => setShippingMethod("local")} />
                            <label htmlFor="local" className="ms-2">
                              {t.local} $10.00
                            </label>
                          </li>
                        </ul>
                        <p className="ms-5">
                          {t.options}
                        </p>
                        <span className="ms-5 mb-5">
                          <i className="fa-solid fa-truck"></i>{t.calculate}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>{t.total}</th>
                      <td id="cartTotal">
                        <strong>${updateTotal()}</strong>
                      </td>
                    </tr>
                  </thead>
                </table>
                <Button variant="danger" className="form-control" onClick={handleProceed}>
                  {t.proceed}
                </Button>
              </div>
            </div>
          </div></div>)
      }
    </section >
  )
};

export default Cart;
