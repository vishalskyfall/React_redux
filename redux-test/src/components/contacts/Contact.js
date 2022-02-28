import React, {useState }from "react";
import { useSelector } from "react-redux";
import ContactRender from "./ContactRender";


const Contact = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  return (
    <div>
      <table className="table table-dark table-striped table-hover shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone-Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
          <ContactRender contact={contact} key={contact.id}/>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
