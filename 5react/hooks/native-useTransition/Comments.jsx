const Comments = ({list}) => {
  return (<>
    <ul>
      {list.map(({id, name, body}) => (
        <li key={id}>
          <h4>{name}</h4>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  </>)
}

export default Comments;