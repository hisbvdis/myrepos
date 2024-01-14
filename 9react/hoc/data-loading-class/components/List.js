import React from "react"

const List = ({users}) => (
  <ul>
    {users.map((user, index) => (
      <li key={index}>{user.name.first}</li>
    ))}
  </ul>
)

export default List;