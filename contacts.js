const fs = require("fs/promises");
const path = require('path');
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, '/db/contacts.json');
console.log(contactsPath);

const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const itemId = String(contactId);
    const res = contacts.find(contact => contact.id === itemId);
    return res || null;
}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const itemId = String(contactId);
    const index = contacts.findIndex(contact => contact.id === itemId);
    if (index === -1) {
        return null;
    }
    const [res] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return res;
}

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        ...name,
        ...email,
        ...phone,
    }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}