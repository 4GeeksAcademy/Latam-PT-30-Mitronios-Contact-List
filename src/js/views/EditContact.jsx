import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/AddContact.css";

export const EditContact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const [contacts, setContacts] = useState(
        {
            name: "",
            phone: "",
            email: "",
            address: "",
        }
    )

    const params = useParams()
    console.log(params)

    const editMyContact = async (name, phone, email, address, id) => {
        await actions.getContacts()
        const prevContact = store.contacts.find((contact) => contact.id == id)
        await actions.editContacts(
            name == "" ? prevContact.name : name,
            phone == "" ? prevContact.phone : phone,
            email == "" ? prevContact.email : email,
            address == "" ? prevContact.address : address,
            id,
        )
        navigate("/")
        actions.getContacts()
    }

    return (
        <React.Fragment>
            <form>
                <div className="form">
                    <h2 className="text-center mt-5">Edit a contact</h2>
                    <div className="form-group">
                        <label htmlFor="inputFullName">Full Name</label>
                        <input value={contacts.name}
                            onChange={(e) => setContacts((prev) => {
                                return {
                                    ...prev,
                                    name: e.target.value
                                }
                            })}
                            type="text" className="form-control"
                            id="inputFullName"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">email</label>
                        <input value={contacts.email}
                            onChange={(e) => setContacts((prev) => {
                                return {
                                    ...prev,
                                    email: e.target.value
                                }
                            })}
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPhone">Phone</label>
                        <input value={contacts.phone}
                            onChange={(e) => setContacts((prev) => {
                                return {
                                    ...prev,
                                    phone: e.target.value
                                }
                            })}
                            type="number"
                            className="form-control"
                            id="inputPhone"
                            placeholder="Enter phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input value={contacts.address}
                            onChange={(e) => setContacts((prev) => {
                                return {
                                    ...prev,
                                    address: e.target.value
                                }
                            })}
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Enter address"
                        />
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            editMyContact(
                                contacts.name,
                                contacts.email,
                                contacts.phone,
                                contacts.address,
                                params.id,
                            )
                        }}
                        className="btn btn-primary my-3"
                    >Save</button>
                </div>
            </form>
            <Link to="/">Or get back to contacts.</Link>
        </React.Fragment>
    );
};
