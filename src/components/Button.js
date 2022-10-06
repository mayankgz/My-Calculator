import React from 'react'

export default function Button(props) {
  return (
    <button className={props.classes} onClick={props.function} id={props.content} value={props.content}>{props.content}</button>
  )
}
