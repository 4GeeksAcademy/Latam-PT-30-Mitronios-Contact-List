import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/AddContact.css";

export const AddContact = () => {

    const { actions } = useContext(Context)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const saveContact = async (e) => {
        e.preventDefault()
        await actions.addcontacts(name, phone, email, address)
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")
    }

    return (
        <form>
            <div className="form">
                <h2>Add a New Contact</h2>
                <div className="form-group">
                    <label for="inputFullName">Full Name</label>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" className="form-control"
                        id="inputFullName"
                        placeholder="Full Name"
                    />
                </div>
                <div className="form-group">
                    <label for="inputEmail">email</label>
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label for="inputPhone">Phone</label>
                    <input value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter phone"
                    />
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Enter address"
                    />
                </div>
                <button onClick={(e) => saveContact(e)}
                    class="btn btn-primary">Save
                </button>
            </div>
        </form>
    );
};
