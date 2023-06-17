import React, { useContext, useState } from "react";
import { Button, Modal, Form, InputGroup, Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import { ThemeModeContext } from "../context/ThemeMode";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../data/homelang";
import { useWishlist } from "react-use-wishlist";

type LanguageKey = keyof typeof translations;
const Header: React.FC = () => {

  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language as LanguageKey];

  const handleLanguageChange = () => {
    // Dil deyisdirme 
    const newLanguage = language === 'EN' ? 'AZ' : 'EN';
    localStorage.setItem("language", newLanguage)
    changeLanguage(newLanguage);
  };

  const [theme, setTheme] = useContext(ThemeModeContext)

  // modal ucun
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // search ucun

  const [product] = useContext(ProductContext);
  const [value, setValue] = useState<string>("");

  // scroll olanda reng deyismesi ucun
  const [color, setColor] = useState(false);
  const changeColor = () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // active ucun
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  return (
    <header>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          id={color ? "light-pink" : "header"}
          className="mb-3 fixed-top"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src="https://beshop-demo.vercel.app/assets/img/header-logo.svg"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="p-5">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <a href="/">
                    <img
                      src="https://beshop-demo.vercel.app/assets/img/header-logo.svg"
                      alt=""
                    />
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start align-items-center flex-grow-1 ms-3">
                  <LinkContainer to={"/"} onClick={() => { window.scrollTo(0, 0) }}>
                    <Nav.Link
                      className={splitLocation[1] === "" ? "active" : ""}
                    >
                      {t.home}
                    </Nav.Link>
                  </LinkContainer>

                  <NavDropdown
                    title={t.pages}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to={"/about"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>{t.about}</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/faq"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>FAQ</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/login"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>{t.login}</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/registration"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>{t.registration}</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/shop/checkout"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>{t.checkout}</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/*"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>404</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/cart"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>{t.cart}</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"/wishlist"} onClick={() => { window.scrollTo(0, 0) }}>
                      <NavDropdown.Item>{t.wishlist}</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to={"/shop"} onClick={() => { window.scrollTo(0, 0) }}>
                    <Nav.Link
                      className={splitLocation[1] === "shop" ? "active" : ""}
                    >
                      {t.shop}
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/categories"} onClick={() => { window.scrollTo(0, 0) }}>
                    <Nav.Link
                      className={
                        splitLocation[1] === "categories" ? "active" : ""
                      }
                    >
                      {t.categories}
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/blog"} onClick={() => { window.scrollTo(0, 0) }}>
                    <Nav.Link
                      className={splitLocation[1] === "blog" ? "active" : ""}
                    >
                      Blog
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/contact"} onClick={() => { window.scrollTo(0, 0) }}>
                    <Nav.Link
                      className={splitLocation[1] === "contact" ? "active" : ""}
                    >
                      {t.contact}
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
                <ul className="d-flex header-options align-items-center">
                  <li onClick={handleShow}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </li>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title className="text-center"> {t.for}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <InputGroup className="mb-3">
                          <Form.Control
                            placeholder={t.for}
                            onChange={e => { setValue(e.target.value) }}
                          />
                          <Button type="submit"
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </Button>
                        </InputGroup>
                        <ul className="list-group">
                          {value === "" ? "" : product.filter((p: any) => p.title.toLocaleLowerCase().includes(value)).map((item: any) => {
                            return <LinkContainer to={`shop/${item.id}`}>
                              <li className="list-group-item">{item.title}</li>
                            </LinkContainer>
                          }).length === 0 ? <div className="d-flex flex-column justify-content-center align-items-center">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <p className="mt-3">
                              {t.selection}
                            </p>
                          </div> : product.filter((p: any) => p.title.toLocaleLowerCase().includes(value)).map((item: any) => {
                            return <LinkContainer to={`shop/${item.id}`}>
                              <li className="list-group-item">{item.title}</li>
                            </LinkContainer>
                          })}
                        </ul>
                      </Form>
                    </Modal.Body>
                  </Modal>
                  <li className="nav-login">
                    {localStorage.getItem("user") === null ? (
                      <LinkContainer to={"/login"} onClick={() => { window.scrollTo(0, 0) }}>
                        <a href="/login"><i className="fa-regular fa-user"></i></a>
                      </LinkContainer>
                    ) : (
                      <>
                        <NavDropdown
                          title={localStorage.getItem("user")}
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <LinkContainer to={"/login"} onClick={() => {
                            localStorage.removeItem("user");
                            window.location.reload();
                            window.scrollTo(0, 0)
                          }}>
                            <NavDropdown.Item>{t.logout}</NavDropdown.Item>
                          </LinkContainer>
                        </NavDropdown>
                      </>
                    )}
                  </li>
                  <li>
                    <LinkContainer to={"/wishlist"} className="position-relative" onClick={() => { window.scrollTo(0, 0) }}>
                      <a href="/wishlist">
                        <i className="fa-regular fa-heart"></i>
                        <Badge
                          className="position-absolute top-0 start-100 translate-middle"
                        >
                          {totalWishlistItems}
                        </Badge>
                      </a>
                    </LinkContainer>

                  </li>
                  <li className="d-flex align-items-center">
                    <LinkContainer to={"/cart"} className="position-relative me-4" onClick={() => { window.scrollTo(0, 0) }}>
                      <a href="/cart">
                        <i className="fa-solid fa-cart-plus"></i>
                        <Badge
                          className="position-absolute top-0 start-100 translate-middle"
                        >
                          {totalItems}
                        </Badge>
                      </a>
                    </LinkContainer>
                  </li>
                </ul>
                <div className="buttons d-flex align-items-start">
                  <button
                    onClick={() => {
                      const newTheme = theme === "white" ? "black" : "white";
                      localStorage.setItem("theme", newTheme)
                      setTheme(newTheme)
                    }}> {theme === "white" ? "🌙" : "🌝"}</button>
                  <button onClick={handleLanguageChange}>{language === "AZ" ? "EN" : "AZ"}</button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
};

export default Header;
