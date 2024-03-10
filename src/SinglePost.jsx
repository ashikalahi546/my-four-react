import React from 'react'

export default function SinglePost({post}) {
const {title, userId, postId, body} = post
// console.log(post)
  return (
    <div style={{border:'2px solid orange', padding:'20px 40px', borderRadius:'20px', marginTop:'20px'}}>

  <h2>tittle : {title}</h2>
  <h3>userId : {userId}</h3>
  <h4>postId : {postId}</h4>
  <h4>postId : {body}</h4>
    </div>
  )
}
