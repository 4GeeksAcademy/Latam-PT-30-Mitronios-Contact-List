import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/AddContact.css";

export const AddContact = () => {

    const { actions } = useContext(Context)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate();


    const saveContact = async (event) => {
        event.preventDefault()
        await actions.addcontacts(name, phone, email, address)
        await actions.getContacts()
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")
        navigate("/")
    }

    return (
        <React.Fragment>
            <form>
                <div className="form">
                    <h2 className="text-center mt-5">Add a New Contact</h2>
                    <div className="form-group">
                        <label htmlFor="inputFullName">Full Name</label>
                        <input value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" className="form-control"
                            id="inputFullName"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPhone">Phone</label>
                        <input value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            className="form-control"
                            id="inputPhone"
                            placeholder="Enter phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Enter address"
                        />
                    </div>
                    <button
                        onClick={(e) => {
                            saveContact(e)
                        }}
                        className="btn btn-primary my-3"
                    >
                        Save
                    </button>
                </div>
            </form>
            <Link to="/">Or get back to contacts.</Link>
        </React.Fragment>
    );
};
