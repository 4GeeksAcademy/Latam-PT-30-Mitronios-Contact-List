const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			findOutMyUser: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Mitronios")
					.then((response) => response.json())
					.then(data => {
						const userExist = data.agendas?.find(user => user.slug === "Mitronios")
						if (!userExist) {
							fetch(`https://playground.4geeks.com/contact/agendas/Mitronios`,
								{ method: 'POST' }
							)
								.then((response) => response.json())
								.then(console.log("Usuario Creado"))
								.then(() => getActions().getContacts())
						} else console.log("El usuario ya existe");
					})
			},

			addcontacts: async (name, phone, email, address) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mitronios/contacts", {
						method: "POST",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address,
						})
					})
					if (response.status !== 201) {
						console.log("Try again", data.status)
					}
					const data = await response.json()
				} catch (error) {
					console.log("Oh no!", error)

				}
			},

			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mitronios/contacts")
					if (!response.ok) {
						console.log("Try again", data.status)
					}
					const data = await response.json()
					console.log("Here are my contacts", data.contacts)
					setStore({ contacts: data.contacts })

				} catch (error) {
					console.log("No Contacts", error)
				}
			},

			editContacts: async (name, phone, email, address, id) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mitronios/contacts/" + id,
						{
							method: "PUT",
							headers: { "Content-type": "application/json" },
							body: JSON.stringify({
								"name": name,
								"phone": phone,
								"email": email,
								"address": address
							})
						})
					if (!response.ok) {
						console.log("Uh oh!", response.status)
						return
					}
					const data = await response.json()
				} catch (error) {
					console.log("Can't update contact", error)
				}
			},
			deleteContacts: async (id) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Mitronios/contacts/" + id, {
						method: "DELETE",
					})
					if (response.ok) {
						alert("Contact Deleted!", response.status)
						getActions().getContacts()
						return;
					}
				} catch (error) {
					console.log("No Success!", error)
				}
			}
		},

	};
};

export default getState;
