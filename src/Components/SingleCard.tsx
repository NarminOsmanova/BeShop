import React, { useState, useEffect, useContext } from 'react'
import { Card, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWishlist } from "react-use-wishlist";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type propType = {
    id: any;
    img: string;
    title: string;
    price: any;
    category: string;
    status: boolean;
    description: string;
    alldata: any;
    rating: any
}
type iconType = {
    value: any;
}
const Icon: React.FC<iconType> = (props) => {
    return (
        <span>
            <i
                className={
                    props.value >= 1
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 0.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 2
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 1.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 3
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 2.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 4
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 3.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 5
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 4.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
        </span>
    );
}

type LanguageKey = keyof typeof translations;
const SingleCard: React.FC<propType> = ({ id, img, title, price, status, description, alldata, rating }) => {

    const { language } = useContext(LanguageContext);
    const t = translations[language as LanguageKey];

    const [counter, setCounter] = useState(1);
    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist()
    const notify = (message: any) => toast('⭐ Product has been add to your cart!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const notify2 = (message: any) => toast.success('⭐ Product has been add to your wishlist!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])
    return (
        <>
            <Col sm={12} md={4} key={id} className='g-3'>
                <Card className='border-0' >
                    <div className="position-relative" >
                        <div className="card-img">
                            <Card.Img variant="top" src={img} />
                        </div>
                        <div className="action">
                            <button className='quickview' data-bs-toggle="modal"
                                data-bs-target={`#exampleModal${id}`}>{t.quickview}</button>
                            <div className="modal" id={`exampleModal${id}`} tabIndex={-1}>
                                <div className="modal-dialog  modal-xl modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="d-flex justify-content-end pe-3 pt-3">
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <img src={img} alt="" />
                                                </div>
                                                <div className="col-12 col-md-5">
                                                    <h3>{title}</h3>
                                                    <p className="product-stock">{status === true ? "IN STOCK" : "OUT OF STOCK"}</p>
                                                    <p className="product-price">$ {price}</p>
                                                    <p>{description}</p>
                                                    <div className="contact-info__social">
                                                        <span>{t.find}:</span>
                                                        <ul>
                                                            <li>
                                                                <a href="https://az-az.facebook.com/">
                                                                    <i className="fa-brands fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://twitter.com/">
                                                                    <i className="fa-brands fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.instagram.com/">
                                                                    <i className="fa-brands fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.linkedin.com/">
                                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-quantity">
                                                        <p className="product-quantity__title">
                                                            {t.quantity}:
                                                        </p>
                                                        <input type="button" defaultValue="-" className="minus" onClick={() => {
                                                            if (counter > 0) {
                                                                setCounter(counter - 1)
                                                            }
                                                        }} />
                                                        <input type="text" value={counter} />
                                                        <input type="button" defaultValue="+" className="plus" onClick={() => {
                                                            setCounter(counter + 1)
                                                        }} />
                                                    </div>
                                                    <div className="product-buttons">
                                                        {status ? <button className="btn btn-cart" onClick={() => {
                                                            const message = addItem(alldata, counter)
                                                            notify(message)
                                                        }}>
                                                            <i className="fa-solid fa-cart-plus me-3"></i> {t.cart}
                                                        </button> : <button className="btn btn-cart">
                                                            <i className="fa-solid fa-cart-plus me-3"></i> {t.cart}
                                                        </button>}
                                                        <ToastContainer
                                                            position="bottom-right"
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
                                                        <button className="btn btn-wishlist" onClick={() => {
                                                            const message = addWishlistItem(alldata)
                                                            notify2(message)
                                                        }}>
                                                            <i className="fa-regular fa-heart me-3"></i>
                                                            {t.wish}
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                        )
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Card.Body>
                        <LinkContainer to={`/shop/${id}`} onClick={() => { window.scrollTo(0, 0) }}>
                            <Card.Title>{title}</Card.Title>
                        </LinkContainer>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <p className='rating'> <Icon value={rating} /></p>
                        <div className="buttons">
                            {status ? <>
                                <button className='btn' onClick={() => { notify(addItem(alldata)) }}>{t.add}</button>
                                <ToastContainer
                                    position="bottom-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"
                                /></> : <button className='btn'>Add To Cart</button>}
                            <button className='heart' onClick={() => { notify2(addWishlistItem(alldata)) }}><i className="fa-solid fa-heart"></i></button>
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
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default SingleCard