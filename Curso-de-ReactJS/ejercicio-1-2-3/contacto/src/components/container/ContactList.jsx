import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/Contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Luis",
    "Badiali",
    "luis@badiali.es",
    true
  );

  return (
    <div>
      <ContactComponent contact={defaultContact} />
    </div>
  );
};

export default ContactListComponent;
