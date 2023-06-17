import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import SingleCard3 from '../Components/SingleCard3';
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type LanguageKey = keyof typeof translations;


const BlogDetails = () => {

    const { language } = useContext(LanguageContext);
    const t = translations[language as LanguageKey];

    const location = useLocation();
    const { ptitle, pdesc, pphoto, pdate, id } = location.state;

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="section-block">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Post</title>
                </Helmet>
                <div className="section-content">
                    <h1 className="animate__rotateInDownLeft animate__animated">BLOG</h1>
                    <ul className="section-content__ul">
                        <li className="section-content__item">
                            <LinkContainer to={"/"}>
                                <a href="/" className="me-5">
                                    {t.home}
                                </a>
                            </LinkContainer>
                            <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="section-content__item">
                            <LinkContainer to={"/blog"}>
                                <a href="/" className="me-5">
                                    Blog
                                </a>
                            </LinkContainer>
                            <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="section-content__item">Post</li>
                    </ul>
                </div>
            </div>
            <div className="blog">
                <div className="row">
                    <div className='d-flex flex-column align-items-center'>
                        <SingleCard3 ptitle={ptitle} pdesc={pdesc} pphoto={pphoto} pdate={pdate} id={id} />
                    </div>
                </div>
            </div>
            <div className="instagram">
                <div>
                    <Slider {...settings}>
                        <div className="insta-photo">
                            <img
                                src="	https://beshop-demo.vercel.app/assets/img/insta-photo1.jpg"
                                alt=""
                            />
                            <div className="insta-photo__hover">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </div>
                        </div>
                        <div className="insta-photo">
                            <img
                                src="	https://beshop-demo.vercel.app/assets/img/insta-photo2.jpg"
                                alt=""
                            />
                            <div className="insta-photo__hover">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </div>
                        </div>
                        <div className="insta-photo">
                            <img
                                src="	https://beshop-demo.vercel.app/assets/img/insta-photo3.jpg"
                                alt=""
                            />
                            <div className="insta-photo__hover">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </div>
                        </div>
                        <div className="insta-photo">
                            <img
                                src="	https://beshop-demo.vercel.app/assets/img/insta-photo4.jpg"
                                alt=""
                            />
                            <div className="insta-photo__hover">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </div>
                        </div>
                        <div className="insta-photo">
                            <img
                                src="	https://beshop-demo.vercel.app/assets/img/insta-photo5.jpg"
                                alt=""
                            />
                            <div className="insta-photo__hover">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </div>
                        </div>
                        <div className="insta-photo">
                            <img
                                src="	https://beshop-demo.vercel.app/assets/img/insta-photo6.jpg"
                                alt=""
                            />
                            <div className="insta-photo__hover">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>

    );
}

export default BlogDetails;
