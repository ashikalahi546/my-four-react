import { useEffect, useState } from 'react'
import SinglePost from './SinglePost'


export default function Posts() {
    const [posts ,setPost] = useState([])
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setPost(data))

    },[])


  return (
    <>
          {/* <h3>Posts : {posts.length}</h3> */}
      {/* {
        posts.map(post => <SinglePost post ={post}></SinglePost>)
      } */}


{/* {
    posts.map((item, i) =>(
<SinglePost post = {item} key={i}></SinglePost>
))} */}
   
    </>
  )
}
