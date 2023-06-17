import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet';
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;

const Wishlist: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  const { addItem } = useCart();
  const { isWishlistEmpty, items, emptyWishlist, removeWishlistItem } = useWishlist();

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
  const notify2 = (message: any) =>
    toast.success("👌 Product has been add to your cart", {
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
    <section className='wishlist'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className='animate__backInUp animate__animated'>{t.wishlist}</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">{t.wishlist}</li>
          </ul>
        </div>
      </div>
      {isWishlistEmpty ? (
        <div className='wishlist-container'>
          <div className='container'>
            <Table>
              <thead>
                <tr>
                  <th>{t.product}</th>
                  <th>{t.price}</th>
                  <th>{t.status}</th>
                  <th>{t.add}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-secondary">
                    {t.noproduct}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div className='wishlist-container'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Table>
                  <thead>
                    <tr>
                      <th>{t.product}</th>
                      <th>{t.price}</th>
                      <th>{t.status}</th>
                      <th>{t.add}</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="d-flex align-items-center">
                            <img
                              className="me-4"
                              src={item.img}
                              alt=""
                            />
                            <span>{item.title}</span>{" "}
                          </td>
                          <td>${item.price}</td>
                          <td style={{
                            color: item.status === true ? "#12a33b" : "red",
                            fontWeight: item.status === true ? "bold" : "normal"
                          }}>{item.status === true ? t.stock : t.outstock}</td>
                          {item.status ? <td>
                            <button
                              onClick={() => {
                                removeWishlistItem(item.id);
                                const message = addItem(item);
                                notify2(message)
                              }}
                            >
                              {t.add} <i className="fa-solid fa-arrow-right ms-2"></i>
                            </button>
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
                          </td> : <td><del>{t.available}</del></td>}
                          <td>
                            <span
                              onClick={() => {
                                const message = removeWishlistItem(item.id)
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
                <div className="product-buttons d-flex">
                  <button className="btn btn-wishlist" onClick={() => {
                    emptyWishlist()
                  }}>
                    {t.clear}
                  </button>
                  <LinkContainer to={"/shop"}>
                    <button className="btn btn-dark">
                      {t.goshop}
                    </button>
                  </LinkContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )

}

export default Wishlist
