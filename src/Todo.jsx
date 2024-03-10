import React from 'react'

// export default function Todo({task}) {
//   return (
//     <div>
//       <li>Task: {task}</li>
//     </div>
//   )
// }
// export default function Todo({task, isDone}) {
//   if(isDone===true){
//     return <li>Finshed: {task}</li>
//   }else{
// return <li>work on : {task}</li>
//   }
// }
// export default function Todo({task, isDone}) {
//  if(isDone){
//     return <li>Finished : {task}</li>
//  }return <li>works: {task}</li>
// // }
// export default function Todo({task, isDone}) {
//  return(
//     <li>{isDone ? 'Finished' : 'Work'} : {task}</li>
//  )
// }
// export default function Todo({task, isDone}) {
//  return(
//   <li>{task} {isDone && 'Finished'}</li>
//  )
// }
// export default function Todo({task, isDone}) {
//  return(
//         <li>{task} {isDone || 'do it'}</li>
//  )
// }
// export default function Todo({task, isDone}) {
// if(isDone){
//     return null
// }return <li>{task}</li>
// }
export default function Todo({task, isDone}) {
let listItem;
if(isDone){
    listItem = <li>Finished : {task}</li>
}else{
    listItem = <li>works on: {task}</li>
}return listItem
}
