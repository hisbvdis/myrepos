import React from "react"

const Card = ({title, text, size}) => (
  <article style={{width: size}}>
    <h3>{title}</h3>
    <p>{text}</p>
  </article>
)

export default Card;