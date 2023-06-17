import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type propType = {
    id: any
    ptitle: any;
    pdesc: string;
    pphoto: string;
    pdate: string;
}
const SingleCard2: React.FC<propType> = ({ id, ptitle, pdesc, pphoto, pdate }) => {
    return (
        <Col sm={12} md={6}>
            <Card className="border-0">
                <div className="flex">
                    <div className="card-img">
                        <Card.Img variant="top" src={pphoto} />
                    </div>
                    <span className="card-date">
                        <span>{pdate}</span>

                    </span>
                </div>
                <Card.Body>
                    <Card.Title>{ptitle}</Card.Title>
                    <Card.Text>{pdesc.slice(0, 130)}...</Card.Text>
                    <Link to={`/blog/${id}`} state={{ ptitle, pdesc, pphoto, pdate }} onClick={() => { window.scrollTo(0, 0) }}>
                        Read more <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default SingleCard2;