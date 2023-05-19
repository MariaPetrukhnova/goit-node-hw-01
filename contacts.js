const fs = require("fs/promises");
const path = require('path');
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, '/db/contacts.json');
console.log(contactsPath);

async function listContacts() {
    try {
        const contacts = await fs.readFile(contactsPath);
        return JSON.parse(contacts);
    }
    catch (e) {
        console.error(e);
    } 
};

async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        const itemId = String(contactId);
        const res = contacts.find(contact => contact.id === itemId);
        return res || null;
    }
    catch (e) {
        console.error(e);
    } 
}

async function removeContact(contactId) {
    try {
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
    catch (e) {
        console.error(e);
    } 
}

async function addContact(name, email, phone) {
    try {
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
    catch (e) {
        console.error(e);
    } 
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}