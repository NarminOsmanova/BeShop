import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const admin = [
  {
    id: 0,
    nickname: "Narmin",
    password: "narmin1996",
  },
];

const Admin: React.FC = () => {
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [alertText, setAlertText] = useState("");
  const [icon, setIcon] = useState("fa-solid fa-eye");
  const [type, setType] = useState("password");
  const navigate = useNavigate()

  const eye = () => {
    if (icon === "fa-solid fa-eye") {
      setIcon("fa-solid fa-eye-slash");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye");
      setType("password");
    }
  };

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname || !password) {
      alert("please, fill the gap");
    } else {
      for (let x in admin) {
        if (nickname === admin[x].nickname && password === admin[x].password) {
          localStorage.setItem("admin", admin[x].nickname);
          navigate("/dashboard");
          window.location.reload();
          setAlertText("");
        } else {
          setAlertText("Nickname or password is wrong");
        }
      }
    }
  };

  return (<section className="registration">
    <div className="registration-block login">
      <div className="admin-block">
        <div className="container">
          <div className="login-form__container">
            <div className="login-form">
              <form onSubmit={loginSubmit}>
                <h3><i className="fa-solid fa-user-lock"></i></h3>
                <p className={`animate__animated text-center text-danger ${alertText ? 'animate__zoomIn' : ''}`}>{alertText}</p>
                <ul className="login-form__social">
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
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email or nickname"
                      onChange={(e: any) => {
                        setNickname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-10">
                    <div className="input-group position-relative mb-3">
                      <input
                        type={type}
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e: any) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      onClick={eye}
                    >
                      <i className={icon}></i>
                    </span>
                  </div>
                </div>
                <label>
                  <input type="checkbox" name="" id="" />
                  Remember me
                </label>
                <button type="submit" className="btn">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
};

export default Admin;
