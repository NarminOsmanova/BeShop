import React, { useContext, useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Form, Row } from "react-bootstrap";
import SingleCard from "../Components/SingleCard";
import { ProductContext } from "../context/ProductContext";
import products from "../data/product";
import Pagination from "./Pagination";
import Slider2 from "react-slick";
import { LinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";

type ProductType = {
  category: string;
  id: any;
  img: string;
  title: string;
  description: string;
  price: any;
  status: boolean;
};

type LanguageKey = keyof typeof translations;

const Shop: React.FC<ProductType> = () => {

  const { language } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  // search ucun
  const [data, setData] = useState<string>('');

  // productlari filterlemek ucun
  const [product, setProduct] = useContext(ProductContext)
  const filterData = (comingItem: any) => {
    const result: any = products.filter((item: any) => {
      return item.category === comingItem
    });
    setProduct(result);
    console.log(result);
  };

  // A_dan Z_ye ve ya tersine, bahadan ucuza ve ya tersine siralama

  const [sortBy, setSortBy] = useState('');
  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };
  const Products = [...product]; //productun kopyasini goturmek ucun
  const sortProducts = (product: any) => {
    switch (sortBy) {
      case 'priceAsc':
        return product.sort((a: any, b: any) => a.price - b.price);
      case 'priceDesc':
        return product.sort((a: any, b: any) => b.price - a.price);
      case 'nameAsc':
        return product.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
      case 'nameDesc':
        return product.sort((a: any, b: any) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
      default:
        return Products;
    }
  };
  // SortProduct funksiyasini cagiraraq siralanmis mehsullari sortedProducts-a menimsedir
  const sortedProducts = sortProducts(product);

  // pagination ucun
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  // Sehifeler arasında kecid etmek ucun islenen funksiya
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  // Movcud sehife nomresine gore productlari almaq uçun hesablama
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // currentPosts product arrayinin indexOfFirstPost ile indexOfLastPost arasındaki mehsullari saxlayir.
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);

  // range slider ucun
  const [priceRange, setPriceRange] = useState<number[]>([0, 520]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const valuetext = (value: number) => {
    return `$${value}`;
  };

  // instagram slideri ucun 
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
    <section className="shop">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
      </Helmet>
      <div className="section-block">
        <div className="section-content">
          <h1 className="animate__zoomInDown animate__animated">{t.shop}</h1>
          <ul className="section-content__ul">
            <li className="section-content__item">
              <LinkContainer to={"/"}>
                <a href="/" className="me-5">
                  {t.home}
                </a>
              </LinkContainer>
              <i className="fa-solid fa-arrow-right"></i>
            </li>
            <li className="section-content__item">{t.shop}</li>
          </ul>
        </div>
      </div>
      <div className="shop-block">
        <div className="shop-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3">
                <div className="box-search">
                  <input type="text" className="form-control" placeholder={t.search}
                    onChange={e => { setData(e.target.value) }} />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="shop-aside__item">
                  <h3>{t.categories}</h3>
                  <ul>
                    <li onClick={() => { filterData("Make Up") }}>{t.category1}</li>
                    <li onClick={() => { filterData("Perfume") }}>{t.category2}</li>
                    <li onClick={() => { filterData("Skin") }}>{t.category3}</li>
                    <li onClick={() => { filterData("Hair") }}>{t.category4}</li>
                    <li onClick={() => { filterData("Nails") }}>{t.category5}</li>
                    <li onClick={() => { filterData("Make Up Tools") }}>{t.category6}</li>
                  </ul>
                </div>
                <div className="shop-aside__item">
                  <h3>{t.price}</h3>
                  <Box sx={{ width: 270 }}>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={priceRange}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      max={520}
                    />
                  </Box>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <Row className="g-5">
                  <div className="shop-filter">
                    <div className="shop-filter__select">
                      <Form.Select onChange={handleSortChange} aria-label="Default select example">
                        <option value="default">Default</option>
                        <option value="priceAsc">{t.cheap}</option>
                        <option value="priceDesc">{t.expensive}</option>
                        <option value="nameAsc">{t.a_to_z}</option>
                        <option value="nameDesc">{t.z_to_a}</option>
                      </Form.Select>
                    </div>
                  </div>
                  {data === "" ? (
                    currentPosts.map((item: any) => (
                      <SingleCard key={item.id} id={item.id} img={item.img}
                        category={item.category} title={item.title} price={item.price} alldata={item}
                        description={item.description} status={item.status} rating={item.rating} />
                    ))
                  ) : sortedProducts
                    .filter((p: any) =>
                      p.title.toLocaleLowerCase().includes(data)
                    )
                    .map((item: any) => (
                      <SingleCard
                        key={item.id}
                        id={item.id}
                        category={item.category}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        alldata={item}
                        description={item.description}
                        status={item.status}
                        rating={item.rating}
                      />
                    )).length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <i className="fa-solid fa-circle-exclamation mb-3"></i>
                      <p className="mt-3">
                        {t.selection}
                      </p>
                    </div>
                  ) : (
                    sortedProducts
                      .filter((p: any) =>
                        p.title.toLocaleLowerCase().includes(data)
                      )
                      .map((item: any) => (
                        <SingleCard key={item.id} id={item.id} img={item.img}
                          category={item.category} title={item.title}
                          price={item.price} alldata={item}
                          description={item.description} status={item.status}
                          rating={item.rating} />
                      ))
                  )}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={product.length}
        onPageChange={handlePageChange}
      />
      <div className="subscribe">
        <div className="wrapper">
          <div className="subscribe-form">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="subscribe-form__img">
                    <img
                      src="https://beshop-demo.vercel.app/assets/img/subscribe-img.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 form">
                  <form>
                    <h3>{t.stay}</h3>
                    <p>{t.nourish}</p>
                    <div className="box-field__row">
                      <div className="box-field">
                        <input
                          type="email"
                          placeholder={t.email}
                          className="form-control"
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
                        {t.subscribe}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="instagram">
        <div>
          <Slider2 {...settings}>
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
          </Slider2>
        </div>
      </div>
    </section>
  )
};

export default Shop;
