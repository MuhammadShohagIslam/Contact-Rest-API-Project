// creating contact class
class Contact {
     constructor() {
          this.contacts = [];
     }

     // function for getting all contact data
     getAllContact() {
          return this.contacts;
     }

     // function for getting single contact data
     getSingleContact(id) {
          const singleContact = this.contacts.find((contact) => contact.id === id);
          console.log(singleContact);
          return singleContact;
     }

     // function for creating new contact data
     createNewContact(contact) {
          contact.id = this.contacts.length + 1;
          this.contacts.push(contact);
          return this.contacts;
     }

     // function for updating contact data
     updateContact(id, updateContactData) {
          const index = this.contacts.findIndex((contact) => contact.id === id);
          this.contacts[index].name = updateContactData.name || this.contacts[index].name;
          this.contacts[index].email = updateContactData.email || this.contacts[index].email;
          this.contacts[index].phone = updateContactData.phone || this.contacts[index].phone;
          console.log(index);

          return this.contacts[index];
     }

     // function for removing contact data
     deleteContact(id) {
          const index = this.contacts.findIndex((contact) => contact.id === id);
          const deleteContact = this.contacts[index];
          this.contacts = this.contacts.filter((contact) => contact.id !== id);

          return deleteContact;
     }
}

// exporting contact class
module.exports = new Contact();
