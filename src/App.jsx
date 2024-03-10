
import Actor from './Actor'
import './App.css'
import Counter from './Counter'
import Players from './Players'
import Posts from './Posts'
import Todo from './Todo'
import Singer from './Singer'


function App() {
  const actors  = ['ashik','akash','hridoy']


  const singers = [
    {name: 'Dr.Mahfuzur' , age:60},
    {name: 'shakib' , age:30},
    {name: 'pritom' , age:28},
  ]
  return (
    <>
     <Counter></Counter>
     <Players></Players>
     <Posts></Posts>
     <Todo task='learn react' isDone={true}></Todo>
     <Todo task='explore core concepts' isDone={false}></Todo>
     <Todo task='try jsx' isDone={true}></Todo>
     <Actor name={'bappa raz'}
     ></Actor>
     {
      singers.map((singer, i )=> <Singer singer={singer} key={i}></Singer>)
     }

     {
      actors.map((actor, e) => <Actor name={actor} key={e}></Actor>)
     }
  
    </>
  )
}

export default App
