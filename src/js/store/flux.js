const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addcontacts: async (name, phone, email, address) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mitronios/contacts", {
						method: "POST",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address
						})
					})
					const data = await response.json()
					console.log("This is my info", data)
				} catch (error) {
					console.log("Oh no!", error)

				}
			},
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mitronios/contacts")
					const data = await response.json()
					console.log(data.contacts)
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.log("No Contacts", error)
				}
			}


		}
	};
};

export default getState;
