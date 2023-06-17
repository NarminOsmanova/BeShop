import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import SingleTable from "../../Components/admin/SingleTable";

type propType = {
    pvalue: any
}

const Dashboard: React.FC<propType> = (props) => {
    return (
        <section className="dashboard">
            <div className="section-block">
                <div className="section-content">
                    <h1>Dashboard</h1>
                    <ul className="section-content__ul">
                        <li className="section-content__item">
                            <LinkContainer to={"/"}>
                                <a href="/" className="me-5">
                                    Home
                                </a>
                            </LinkContainer>
                            <i className="fa-solid fa-arrow-right"></i>
                        </li>
                        <li className="section-content__item">Dashboard</li>
                    </ul>
                </div>
            </div>
            <Container>
                <h2 className="text-center">Admin Panel</h2>
                <LinkContainer to="add">
                    <Button>
                        Add Blog
                    </Button>
                </LinkContainer>
                <Table className="my-5" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pvalue
                            .slice()
                            .reverse()
                            .map((item: any, i: number) => {
                                return (
                                    <SingleTable
                                        count={i}
                                        key={i}
                                        id={item.id}
                                        title={item.title}
                                        desc={item.desc}
                                        photo={item.photo}
                                        date={item.date}
                                    />
                                );
                            })}
                    </tbody>
                </Table>
            </Container>
        </section>

    );
};

const mapStateToProps = (state: any) => {
    return {
        pvalue: state,
    };
};

export default connect(mapStateToProps)(Dashboard);

