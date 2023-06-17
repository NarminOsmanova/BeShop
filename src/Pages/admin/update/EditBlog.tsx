import React from "react";
import { Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../Components/admin/BlogForm";
import {
    editBlogFromDatabase,
    removeBlogFromDatabase,
} from "../../../manager/action/blogAction";
import { LinkContainer } from "react-router-bootstrap";

type propType = {
    pvalue: any;
}

const EditBlog: React.FC<propType> = (props: any) => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <div className="section-block">
                <div className="section-content">
                    <h1>EDIT</h1>
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
                        <li className="section-content__item">Edit</li>
                    </ul>
                </div>
            </div>
            <div className="edit">
                <h2 className="text-center my-3">Edit Blog</h2>
                <BlogForm
                    editblog={props.pvalue}
                    blogSubmit={(fd: any) => {
                        dispatch(editBlogFromDatabase(props.pvalue.id, fd));
                        navigate("/dashboard");
                        window.location.reload();
                    }} props={null} />
                <div className=" mt-2 d-flex align-items-center justify-content-end">
                    <div className="col-9">
                        <Button className="btn-danger"
                            onClick={() => {
                                dispatch(removeBlogFromDatabase(props.pvalue.id));
                                navigate("/dashboard");
                            }}>
                            <span>
                                <i className="fa-solid fa-trash-can"></i>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    const link = window.location.pathname.slice(16, 99);
    return {
        pvalue: state.find((p: any) => p.id === link),
    };
};
export default connect(mapStateToProps)(EditBlog);
