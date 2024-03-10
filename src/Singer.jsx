import React from 'react'

export default function Singer({singer}) {
    // console.log(singer)
  return (
    <div>
      <h2>Singer: {singer.name} </h2>
      <h2>age: {singer.age}</h2>
    </div>
  )
}
