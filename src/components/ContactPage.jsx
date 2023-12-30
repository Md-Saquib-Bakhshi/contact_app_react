import { useEffect, useState } from "react";
import {
  getContacts,
  saveContacts as saveContactsToLocalStorage,
} from "../services/localstorage";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
// import { fakeContacts } from "./contacts-config";

function ContactPage() {
  // const [contacts, setContacts] = useState(fakeContacts);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    console.log("Contact changed....");
    if (contacts.length) {
      console.log("Contacts...");
      saveContactsToLocalStorage(contacts);
    } else {
      // console.log("No Contacts...")
      setContacts(getContacts());
    }
  }, [contacts]);

  // useEffect(()=>{
  //   setContacts(getContacts())
  // }, [])

  const saveContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleContactClick = (contact) => {
    console.log("Clicked on", contact);
    setSelectedContact(contact);
  };

  return (
    <div className="shadow shadow-sm p-2 rounded">
      {!selectedContact ? (
        <div className="row">
          <div className="col border rounded p-3 m-1">
            <h3 className="text-center bg-warning p-1">Contact Form</h3>
            <ContactForm onSave={saveContact} />
          </div>
          <div className="col border rounded p-3 m-1">
            <ContactList
              onContactClick={handleContactClick}
              contacts={contacts}
            />
          </div>
        </div>
      ) : (
        <div className="col border rounded p-3 m-1">
          {/* {JSON.stringify(selectedContact)} */}
          <button
            onClick={() => setSelectedContact(null)}
            className="btn btn-sm btn-info"
          >
            Back
          </button><hr />
          <div className="card col-lg-3 col-md-6 mx-auto">
            <img src={selectedContact.image} className="card-img-top rounded img-thumbnail" alt="..." />
            <div className="card-body">
              <h3 className="card-title text-center m-1 rounded bg-warning">{selectedContact.firstName} {selectedContact.lastName}</h3>
              <div className="card-text p-1">
                <h6><b>Email: </b>{selectedContact.email}</h6>
                <h6><b>Phone: </b>{selectedContact.phone}</h6>
                <h6><b>Address: </b>{selectedContact.address}</h6>
              </div>
              <div className="text-center p-1"><button href="#" className="btn btn-danger">
                Delete Contact
              </button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { ContactPage };
