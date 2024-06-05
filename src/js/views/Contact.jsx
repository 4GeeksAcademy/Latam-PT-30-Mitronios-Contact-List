import React from "react";
import cabreraImage from "../../img/cabrera.jpeg";
import "../../styles/Contact.css";

export const Contact = ({ name, phone, email, address }) => {
    return (
        <>
            <div className="container w-25">
                <img className="container 
									rounded-circle py-3"
                    src={cabreraImage} alt="Contact image"
                />
            </div>
            <div className="container mt-4 card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{address}</h6>
                <p className="card-text text-muted m-0">{phone}</p>
                <p className="card-text text-muted">{email}</p>
            </div>
        </>
    )
};

