import React from "react";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { removeBlogFromDatabase } from '../../manager/action/blogAction';

interface propType {
    count: number;
    title: string;
    photo: string;
    desc: string;
    id: number;
    date: string;
}
const SingleTable: React.FC<propType> = ({ count, title, photo, desc, id, date }) => {
    const dispatch: any = useDispatch();
    return (
        <tr>
            <td>{count + 1}</td>
            <td>
                <img src={photo} width={50} alt="" />
            </td>
            <td>{title}</td>
            <td>{desc}</td>
            <td>{date}</td>
            <td>
                <LinkContainer to={`edit/${id}`}>
                    <span>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </span>
                </LinkContainer>
            </td>
            <td>
                <span onClick={() => {
                    dispatch(removeBlogFromDatabase(id));
                }}>
                    <i className="fa-solid fa-trash-can"></i>
                </span>
            </td>
        </tr>
    );
};

export default SingleTable;
