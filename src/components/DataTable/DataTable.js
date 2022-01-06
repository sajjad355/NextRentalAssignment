import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import BookProduct from '../BookProduct/Booking'
import ReturnProduct from '../ReturnProduct/Return'
import "../style.css"

export default function DataTable(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenReturn, setIsOpenReturn] = useState(false);

    function toggleModal() {
        setIsOpen(true);
    }
    function toggleModalReturn() {
        setIsOpenReturn(true);
    }
    return (
        <div className="App">
            <div className="">
                <div style={{ marginRight: 20, border: '1px solid white', marginBottom: 10 }} className="TableDesign">
                    <Table responsive="sm" responsive="md" responsive="xs" responsive="lg" responsive="xl" striped hover>
                        <thead className="" style={{ backgroundColor: '#2621a0' }}>
                            <tr>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}></th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Name</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Type </th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Availability</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Repair Needed</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Durability</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Maximum Durability</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Mileage</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Price</th>
                                <th style={{ fontsize: 21, color: "white", fontFamily: "Lucida Console" }}>Minimum Rent Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            {JSON.parse(localStorage.getItem("data")).filter((val) => {
                                if (props.serarchKey === "") {
                                    return val;
                                }
                                else if (val.name.toLowerCase().includes(props.serarchKey.toLowerCase())) {
                                    return val;
                                }
                            }).map((product, index) => (
                                <tr key={product.code}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.type}</td>
                                    <td>{product.availability === true ? "Yes" : "No"}</td>
                                    <td>{product.needing_repair === true ? "Yes" : "No"}</td>
                                    <td>{product.durability}</td>
                                    <td>{product.max_durability}</td>
                                    <td>{product.mileage === "" || product.mileage === null ? "N/A" : product.mileage}</td>
                                    <td>{product.price}</td>
                                    <td>{product.minimum_rent_period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="mb-5" style={{ marginRight: 21, display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={toggleModal} style={{ width: 85 }} >Book</Button>
                <Button onClick={toggleModalReturn} style={{ marginLeft: 5, width: 85 }} variant="danger">Return</Button>
            </div>
            <div>
                {isOpen ? <BookProduct status={isOpen} /> : ""}
                {isOpenReturn ? <ReturnProduct status={isOpenReturn} /> : ""}
            </div>
        </div >
    );
}
