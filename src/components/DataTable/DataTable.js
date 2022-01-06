import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import BookProduct from '../BookProduct/Booking'
import ReturnProduct from '../ReturnProduct/Return'
import "../style.css"

export default function DataTable() {
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
                                if (localStorage.getItem('SearchKey') === "" || localStorage.getItem('SearchKey') === null || localStorage.getItem('SearchKey') === '') {
                                    return val;
                                }
                                else if (val.name.toLowerCase().includes(localStorage.getItem('SearchKey').toLowerCase())) {
                                    return val;
                                }
                            }).map((m, index) => (
                                <tr key={m.code}>
                                    <td>{index + 1}</td>
                                    <td>{m.name}</td>
                                    <td>{m.type}</td>
                                    <td>{m.availability === true ? "Yes" : "No"}</td>
                                    <td>{m.needing_repair === true ? "Yes" : "No"}</td>
                                    <td>{m.durability}</td>
                                    <td>{m.max_durability}</td>
                                    <td>{m.mileage === "" || m.mileage === null ? "N/A" : m.mileage}</td>
                                    <td>{m.price}</td>
                                    <td>{m.minimum_rent_period}</td>
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
