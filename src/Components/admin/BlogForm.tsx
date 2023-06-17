import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface propType {
    blogSubmit: any;
    editblog: any;
    props: any;
}

const BlogForm: React.FC<propType> = ({ blogSubmit, editblog }, props) => {
    const [blogphoto, setPhoto] = useState(editblog ? editblog.photo : "");
    const [blogtitle, setTitle] = useState(editblog ? editblog.title : "");
    const [blogdesc, setDesc] = useState(editblog ? editblog.desc : "");
    const [blogdate, setDate] = useState(editblog ? editblog.date : "");

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!blogphoto || !blogtitle || !blogdesc || !blogdate) {
            alert("Please, fill the input");
        } else {
            blogSubmit({
                photo: blogphoto,
                title: blogtitle,
                desc: blogdesc,
                date: blogdate,
            });
        }
    };
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="col-6">
                <Form onSubmit={formSubmit}>
                    <Form.Group className="my-5">
                        <Form.Control
                            type="text"
                            value={blogphoto}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Enter photo"
                        />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Control
                            type="text"
                            value={blogtitle}
                            placeholder="Enter title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Control
                            type="text"
                            value={blogdesc}
                            placeholder="Enter description"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Control
                            type="text"
                            value={blogdate}
                            placeholder="Enter date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit">
                        {editblog ? "Save" : "Add"}
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default BlogForm;
