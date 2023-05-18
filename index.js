const contacts = require('./contacts');
const argv = require("yargs").argv;


async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contactsList = await contacts.listContacts();
            return console.log(contactsList);

        case "get":
            const searchedContact = await contacts.getContactById(id);
            return console.log(searchedContact);

        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact);

        case "remove":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);

        default:
            return console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);