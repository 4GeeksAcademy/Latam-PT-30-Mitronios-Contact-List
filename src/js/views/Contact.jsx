import React, { useState, useContext } from "react";
import cabreraImage from "../../img/cabrera.jpeg";
import "../../styles/Contact.css";
import { EditContact } from "./EditContact.jsx";
import { useNavigate, } from "react-router";
import { Context } from "../store/appContext.js";

export const Contact = ({ name, phone, email, address, id }) => {
    const { store, actions } = useContext(Context)

    const deleteContact = async () => {
        actions.deleteContacts(id)
        console.log("Funciona onCLick", deleteContact)
    }
    const navigate = useNavigate();
    const updateContact = (contactId) => {
        (navigate(`/editcontact/${contactId}`))
    };

    return (
        <div className="row">
            <div className="col col-4 text-center">
                <img className="rounded-circle py-2 img-fluid w-50"
                    src={cabreraImage} alt="Contact image"
                />
            </div>
            <div className="col col-8 mt-4 card-body">
                <div className="row justify-content-between">
                    <div className="col-sm-10">
                        <h5 className="card-title mb-3">
                            {name}
                        </h5>
                    </div>
                    <div className="col-sm-2">
                        <span>
                            <i className=" fa-solid fa-pen"
                                onClick={() => updateContact(id)}>
                            </i>
                        </span>
                        <span>
                            <i className="fa-solid fa-trash"
                                onClick={() => deleteContact()
                                }
                            ></i>
                        </span>
                    </div>
                </div>
                <h6 className="card-subtitle text-muted">
                    <span><i className="fa-solid fa-location-dot"></i></span>
                    {address}
                </h6>
                <p className="card-text text-muted m-0">
                    <span><i className="fa-solid fa-phone fa-flip-horizontal"></i></span>
                    {phone}
                </p>
                <p className="card-text text-muted">
                    <span><i className="fa-solid fa-envelope"></i></span>
                    {email}
                </p>
            </div>
        </div>
    )
};

