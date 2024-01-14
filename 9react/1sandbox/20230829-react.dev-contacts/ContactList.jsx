export default function ContactList({ inter }) {
  const { contacts, selectedId, setSelectedId } = inter;
  const cn = (id) => id === selectedId ? "bold" : "";
  
  return (<>
    <ul>
      {contacts.map(({id, name}) => (
        <li key={id}>
          <button className={cn(id)} onClick={() => setSelectedId(id)}>{name}</button>
        </li>
      ))}
    </ul>
  </>)
}
