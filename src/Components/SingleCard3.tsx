import React from "react";
import { Card, Col } from "react-bootstrap";

type propType = {
    id: any
    ptitle: any;
    pdesc: string;
    pphoto: string;
    pdate: string;
}
const SingleCard3: React.FC<propType> = ({ id, ptitle, pdesc, pphoto, pdate }) => {
    return (
        <Col sm={12} md={9}>
            <Card className="border-0">
                <div className="flex">
                    <Card.Title className="text-center py-5">{ptitle}</Card.Title>
                    <div className="card-img position-relative">
                        <Card.Img variant="top" src={pphoto} />
                        <span className="card-date">
                            <span>{pdate}</span>
                        </span>
                    </div>
                </div>
                <Card.Body className="d-flex justify-content-center py-5">
                    <Card.Text>{pdesc}</Card.Text>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default SingleCard3;