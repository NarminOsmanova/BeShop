import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../Components/admin/BlogForm";
import { addBlogToDatabase } from "../../../manager/action/blogAction";
import { LinkContainer } from "react-router-bootstrap";

const AddBlog: React.FC = (props: any) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="section-block">
                <div className="section-content">
                    <h1>ADD</h1>
                    <ul className="section-content__ul">
                        <li className="section-content__item">
                            <LinkContainer to={"/"}>
                                <a href="/" className="me-5">
                                    Home
                                </a>
                            </LinkContainer>
                            <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="section-content__item">
                            <LinkContainer to={"/dashboard"}>
                                <a href="/" className="me-5">
                                    Dashboard
                                </a>
                            </LinkContainer>
                            <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="section-content__item">ADD</li>
                    </ul>
                </div>
            </div>
            <div className="add">
                <h2 className="text-center my-3">Add Blog</h2>
                <BlogForm
                    blogSubmit={(fd: any) => {
                        props.dispatch(addBlogToDatabase(fd));
                        navigate("/dashboard");
                        window.location.reload();
                    }} editblog={null} props={null}
                />
            </div>
        </div>
    );
};

export default connect()(AddBlog);
