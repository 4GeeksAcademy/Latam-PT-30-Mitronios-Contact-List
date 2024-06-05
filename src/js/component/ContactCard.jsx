import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contact } from "../views/Contact.jsx";

export const ContactCard = () => {

	const { actions, store } = useContext(Context)
	useEffect(() => {
		actions.getContacts()
	}, [])

	return (
		<React.Fragment>
			<div className="container d-flex justify-content-end mx-2">
				<Link to="/addcontact">
					<button type="button" className="btn btn-success mt-4">Add a new Contact
					</button>
				</Link>
			</div>
			<div className="card container d-flex flex-row g-3 my-3">
				{store.contacts.map((item) => (
					<Contact name={item.name}
						phone={item.phone}
						email={item.email}
						address={item.address}
						key={item.id}
					/>
				))}
			</div>
		</React.Fragment>
	);
};
