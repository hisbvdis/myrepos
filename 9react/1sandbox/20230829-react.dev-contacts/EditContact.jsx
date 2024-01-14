import { useState } from "react";

export default function EditContact({inter}) {
  const { selectedContact, updateContact } = inter;
  const { id, name, email } = selectedContact;
  const [localName, setLocalName] = useState(name);
  const [localEmail, setLocalEmail] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, localName, localEmail);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setLocalName(name);
    setLocalEmail(email);
  }

  return (<>
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} />
      </label>
      <label>
        <span>Email:</span>
        <input type="text" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} />
      </label>
      <button type="submit">Save</button>
      <button type="reset">Reset</button>
    </form>
  </>)
}
